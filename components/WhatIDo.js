import React from "react";
import lottie from "lottie-web";
import animationData1 from "./data/animationwhatido.json";
import animationData2 from "./data/animationproficiency.json";
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
import {SiFlutter, SiTypescript, SiVuedotjs} from "react-icons/si";
import ReactTooltip from "react-tooltip";

export default function WhatIDo() {
    const whatidoData = [{
        name: "HTML5", component: <DiHtml5 size={26}/>,
    }, {
        name: "CSS3", component: <DiCss3 size={26}/>,
    }, {
        name: "SASS", component: <DiSass size={26}/>,
    }, {
        name: "JS", component: <DiJavascript size={26}/>,
    }, {
        name: "TS", component: <SiTypescript size={26}/>,
    }, {
        name: "React", component: <DiReact size={26}/>,
    }, {
        name: "Vue", component: <SiVuedotjs size={26}/>,
    }, {
        name: "Node.JS", component: <DiNodejs size={26}/>,
    }, {
        name: "Flutter", component: <SiFlutter size={26}/>,
    }, {
        name: "NPM", component: <DiNpm size={26}/>,
    }, {
        name: "SQL Database", component: <DiMysql size={26}/>,
    }, {
        name: "Mongo", component: <DiMongodb size={26}/>,
    }, {
        name: "Firebase", component: <DiFirebase size={26}/>,
    }, {
        name: "Git", component: <DiGit size={26}/>,
    },];
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#animation-whatido"),
            animationData: animationData1,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.querySelector("#animation-proficiency"),
            animationData: animationData2,
            loop: true,
            autoplay: true,
        });
        return () => {
            lottie.destroy();
        };
    }, []);
    return (<div className={"w-full"}>
        <ReactTooltip
            place={"bottom"}
            type={"dark"}
            effect={"solid"}
            arrowColor={"black"}
            offset={{bottom: 10}}
            className={"p-2"}
        />
        <div
            className={"container flex items-center justify-center flex-col space-y-4 mt-6"}
        >
            <h2 className={"text-4xl font-black"}>What I Do</h2>
            <span className={"text-2xl font-light"}>
          Full Stack Web & Mobile Developer
        </span>
        </div>
        <div className={"container flex"}>
            <div
                className="flex-1 relative"
                style={{marginRight: 100, paddingBottom: 0}}
            >
                <div id="animation-whatido" style={{width: 500, height: 500}}/>
            </div>
            <div className="flex flex-col">
                <div
                    className={"flex gap-3 h-[200px] w-full flex-wrap items-center justify-center"}
                >
                    {whatidoData.map((item) => (<div
                        key={item.name}
                        data-tip={item.name}
                        className={"w-[64px] h-[64px] bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"}
                    >
                        {item.component}
                    </div>))}
                </div>
                <div className="mt-12">
                    <ul className="flex items-center flex-col text-center text-md font-light space-y-4 color-[#525f7f]">
                        <li>
                            ⚡
                            Develop highly interactive Front end / User Interfaces for your
                            web and mobile applications
                        </li>
                        <li>
                            ⚡
                            Progressive Web Applications ( PWA ) in normal and SPA Stacks
                        </li>
                        <li>
                            ⚡
                            Integration of third party services such as Firebase/ AWS / Digital Ocean
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={"container flex"}>
            <div
                className="flex-1 relative"
                style={{marginRight: 100, paddingBottom: 0}}
            >
                <div id="animation-proficiency" style={{width: 500, height: 500}}/>
            </div>
            <div className="flex flex-col flex-1">
                <div
                    className={"flex gap-3 h-[200px] w-full flex-wrap items-center justify-center"}
                >
                    <h2 className={"text-4xl"}>Proficiency</h2>
                </div>
                <div className="mt-12">
                    <div className="relative pt-1 w-full">
                        <div className={"w-full flex items-center justify-between"}>
                            <span>Frontend & Design</span>
                            <span>90%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div
                                style={{width: '90%'}}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                            />
                        </div>
                    </div>
                    <div className="relative pt-4 w-full">
                        <div className={"w-full flex items-center justify-between"}>
                            <span>Backend & Integrations</span>
                            <span>80%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div
                                style={{width: '80%'}}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                            />
                        </div>
                    </div>
                    <div className="relative pt-4 w-full">
                        <div className={"w-full flex items-center justify-between"}>
                            <span>Programming & Logic</span>
                            <span>80%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div
                                style={{width: '80%'}}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                            />
                        </div>
                    </div>
                    <div className="relative pt-4 w-full">
                        <div className={"w-full flex items-center justify-between"}>
                            <span>Love Coding <b className={"text-purple-500"}>❤</b></span>
                            <span>100%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div
                                style={{width: '100%'}}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
