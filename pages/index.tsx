import type { NextPage } from "next";
import Link from "next/link";
// import { useEffect } from "react";
// import { signIn, useSession, signOut } from "next-auth/react";

const Home: NextPage = () => {
  // const { data: session } = useSession();

  // useEffect(() => {
  //   console.log(session);
  // }, [session]);

  return (
    <>
      <Link href="/login" passHref>
        로그인 바로가기
      </Link>
    </>
  );
};

export default Home;
