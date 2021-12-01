import * as React from 'react';
import Head from 'next/head'
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";

export default function Home() {

    return (
        <div className="w-full h-full">
            <Head>
                <title>Akın Can Koç</title>
                <link rel="icon"
                      href="/favicon.ico" />
            </Head>
            <About />
            <WhatIDo />
        </div>
    )
}