import type { NextComponentType, NextPageContext } from "next";
import Head from "next/head";

interface Props {}

const Home: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Ilm Quiz</title>
        <meta name="description" content="Learn the authentic Sunnah" />
        <link
          rel="icon"
          href="https://img.icons8.com/fluency/48/000000/pen-1.png"
        />
      </Head>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deleniti
        ipsa quas dolore delectus natus, culpa odio similique alias itaque eos,
        autem sapiente dicta laborum obcaecati temporibus et molestiae deserunt.
      </p>
    </div>
  );
};

export default Home;
