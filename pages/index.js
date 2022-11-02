import { createClient } from "contentful";
import Head from "next/head";
import { useContext } from "react";
import Banner from "../components/Banner";
import Booksec from "../components/Booksec";
import HomeCategory from "../components/HomeCategory";
import Navbar from "../components/Navbar";


export const getStaticProps = async context => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACEID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  }) 

  const res = await client.getEntries({content_type:'book'})


  return {
    props: {
      books: res.items
    },
  };
};

export default function Home({books}) {
  console.log(books)
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Alhidaya</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <HomeCategory/>
      <Booksec title='Popular' bookData={books} />
    </div>
  );
}
