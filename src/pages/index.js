import Head from 'next/head';
import Navbar from '../components/Navbar';

export async function getServerSideProps(context) {
  return {
    props: {} // will be passed to the page component as props
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>iAffirm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="text-4xl underline">Hello world</h2>
    </>
  );
}
