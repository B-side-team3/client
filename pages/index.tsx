import { useEffect } from "react";
import type { NextPage } from "next";
import { getToken } from "next-auth/jwt";
import { signIn, useSession, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);

    console.log();
  }, [session]);

  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("kakao")}>Sign in</button>
    </>
  );
};

export default Home;
