// eslint-disable-next-line import/order
import axios from "axios";
import Cookies from "js-cookie";
import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      checks: "state",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "kakao") {
        console.log(token, account, profile);
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/token`,
          {},
          { headers: { Authorization: `Bearer ${account.access_token}` } },
        );
        if (data) {
          Cookies.set("Authorization", `Bearer ${data.access_token}`);

          return data;
        }
      }
    },
    // 세션에 로그인한 유저 데이터 입력
    async session({ session, user, token }) {
      // console.log(session, user, token);

      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `Authorization`,
      options: {
        httpOnly: process.env.NODE_ENV === "production", // 배포환경에 따라 true or false 로 바꿔줘야함
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
});
