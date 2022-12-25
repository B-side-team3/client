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
    async jwt({ token, account }) {
      if (account?.provider === "kakao") {
        console.log("kakao", account, token);
      }

      return token;
    },
    // 세션에 로그인한 유저 데이터 입력
    async session({ session }) {
      console.log(session);

      return session;
    },
  },
});
