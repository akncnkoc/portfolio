import React from 'react';
import lottie from "lottie-web";
import animationData from "./data/animationwhatido.json";
import {
    DiCss3,
    DiFirebase,
    DiGit,
    DiHtml5,
    DiJavascript,
    DiMongodb,
    DiMysql,
    DiNodejs,
    DiNpm,
    DiReact,
    DiSass,
} from "react-icons/di";
import {SiFlutter, SiTypescript} from 'react-icons/si';
import ReactTooltip from "react-tooltip";

export default function WhatIDo() {
    const whatidoData = [
        {
            name: 'HTML5',
            component: <DiHtml5 size={26} />
        },
        {
            name: 'CSS3',
            component: <DiCss3 size={26} />
        },
        {
            name: 'SASS',
            component: <DiSass size={26} />
        },
        {
            name: 'JS',
            component: <DiJavascript size={26} />
        },
        {
            name: 'TS',
            component: <SiTypescript size={26} />
        },
        {
            name: 'React',
            component: <DiReact size={26} />
        },
        {
            name: 'Node.JS',
            component: <DiNodejs size={26} />
        },
        {
            name: 'Flutter',
            component: <SiFlutter size={26} />
        },
        {
            name: 'NPM',
            component: <DiNpm size={26} />
        },
        {
            name: 'SQL Database',
            component: <DiMysql size={26} />
        },
        {
            name: 'Mongo',
            component: <DiMongodb size={26} />
        },
        {
            name: 'Firebase',
            component: <DiFirebase size={26} />
        },
        {
            name: 'Git',
            component: <DiGit size={26} />
        }
    ];
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#animation-whatido"),
            animationData: animationData,
            loop: true,
            autoplay: true,
        });
        return () => {
            lottie.destroy();
        }
    }, []);
    return (
        <div className={"w-full"}>
            <ReactTooltip  place={"bottom"}
                           type={"dark"}
                           effect={"solid"}
                           arrowColor={"black"}
                           offset={{bottom: 10}}
                           className={"p-2"} />
            <div className={"container flex items-center justify-center flex-col space-y-4 mt-12"}>
                <h2 className={"text-4xl font-black"}>What I Do</h2>
                <span className={"text-2xl font-light"}>Full Stack Web & Mobile Developer</span>
            </div>
            <div className={"container flex"}>
                <div className="flex-1 relative"
                     style={{marginRight: 100, paddingBottom: 250}}>
                    <div id="animation-whatido"
                         style={{width: 500, height: 500}} />
                </div>
                <div className={"flex gap-3 h-[200px] w-[500px] flex-wrap items-center justify-center"}>
                    {whatidoData.map((item) => (
                        <div key={item.name}
                             data-tip={item.name}
                             className={"w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"}>
                            {item.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}