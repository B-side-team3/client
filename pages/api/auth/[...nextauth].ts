// eslint-disable-next-line import/order
import axios from "axios";
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
  debug: true,
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "kakao") {
        const { data } = await axios.post<AuthResponseType>(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/token`,
          {},
          { headers: { Authorization: `Bearer ${account.access_token}` } },
        );
        if (data) {
          token.accessToken = data.accessToken;
          token.refreshToken = data.refreshToken;
        }
      }

      return Promise.resolve(token);
    },
    async session({ session, user, token }) {
      session.user.token = token.accessToken;
      session.user.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/home",
  },
});
