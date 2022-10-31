import Head from "next/head";

interface IProps {
  title: string;
  name?: string;
  content?: string;
}

const Seo = ({ title, name, content }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
      </Head>
    </>
  );
};

export default Seo;
