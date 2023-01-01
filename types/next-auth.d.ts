import "next-auth";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** Oauth access token */
      token?: accessToken;
      refreshToken?: refreshToken;
    } & DefaultSession["user"];
  }
}
