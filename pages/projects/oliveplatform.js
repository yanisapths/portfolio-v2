import React from 'react'
import Olive from "../../components/proj/Olive"
import Layout from '../../components/ui/Layout.js'
import Banner from '../../components/ui/Banner'
import Head from "next/head"
import DropdownItem from "../../components/ui/DropdownItem";

function oliveplatform() {
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Layout>
          <Head>
              <title>Olive Platform | Yanisa Poongthaisong</title>
          </Head>
        <Banner />
        <DropdownItem />
        <Olive handleScroll={handleScroll} />
    </Layout>
  )
}

export default oliveplatform