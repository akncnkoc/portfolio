import * as React from 'react';
import Head from 'next/head'
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ReachOut from "../components/ReachOut";

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
            <Experience />
            <Projects />
            <ReachOut />
        </div>
    )
}