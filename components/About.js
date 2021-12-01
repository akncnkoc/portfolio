import React from 'react';
import lottie from "lottie-web";
import animationData from "./data/animationabout.json";
import {GrGithub, GrInstagram, GrLinkedin} from "react-icons/gr";
import ReactTooltip from "react-tooltip";

export default function About() {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#animation-about"),
            animationData: animationData,
            loop: true,
            autoplay: true,
        });
        return () => {
            lottie.destroy();
        }
    }, []);
    return (
        <div className="w-full bg-gradient-to-br from-green-500  via-green-600 to-blue-900 relative">
            <ReactTooltip place={"bottom"}
                          type={"light"}
                          effect={"solid"}
                          arrowColor={"white"}
                          offset={{bottom: 10}}
                          className={"bg-white text-white p-3"} />
            <div className="container mx-auto flex items-center justify-between py-5">
                <div className="font-augustina text-3xl text-black tracking-tighter">Akin Can Koc</div>
            </div>
            <div className="flex container mx-auto justify-between"
                 style={{minHeight: 600}}>
                <div className="flex-1 p-3">
                    <h1 className="text-3xl text-white font-semibold">Hi all, I'm Akın</h1>
                    <div className="py-3" />
                    <span className="text-white text-lg text-shadow-xl">
                        I was born in Istanbul and I still live in Istanbul. I love working. New ideas always excite me.
                        If I have an idea I'm working on, I can't sleep well until I've finished it.
                        <br />
                        <div className="py-1" />
                        I have been dealing with software as a hobby for about 6 years. I am a person who loves to learn
                        and teach. I have always worked freelance throughout my life, I lead an independent life
                        connected to the open source culture.
                        <br />
                        <div className="py-1" />
                        I develop JAVASCRIPT as a software language, as well as Hybrid for Front-end and Mobile
                        Applications. I love listening to music while I work, it helps me focus on a certain thing.
                        Because of my good use of the keyboard and my practical thinking, I finish my work very quickly.
                        <br />
                        <div className="py-1" />
                        From time to time, I write small-scale applications and plugins for both front-end and back-end
                        and share them on my blog and github.
                    </span>
                    <div className={"flex space-x-4 my-4 text-white"}>
                        <a href={"https://instagram.com/madewithakin"}
                           target={"_blank"}
                           data-tip={"Instagram"}
                           className={"w-8 h-8 justify-center flex items-center rounded-full bg-[#E4405F] shadow-lg cursor-pointer"}>
                            <GrInstagram size={14} />
                        </a>
                        <a href={"https://github.com/akncnkoc"}
                           target={"_blank"}
                           data-tip={"Github"}
                           className={"w-8 h-8 justify-center flex items-center rounded-full bg-[#222222] shadow-lg cursor-pointer"}>
                            <GrGithub size={14} />
                        </a>
                        <a href={"https://www.linkedin.com/in/akincankoc/"}
                           target={"_blank"}
                           data-tip={"Linkedin"}
                           className={"w-8 h-8 justify-center flex items-center rounded-full bg-[#1DA1F2] shadow-lg cursor-pointer"}>
                            <GrLinkedin size={14} />
                        </a>
                    </div>
                </div>
                <div className="flex-1 relative"
                     style={{marginLeft: 100, paddingBottom: 250}}>
                    <div id="animation-about"
                         style={{width: 500, height: 500}} />
                </div>
            </div>
            <div className="separator separator-bottom separator-skew">
                <svg xmlns="http://www.w3.org/2000/svg"
                     preserveAspectRatio="none"
                     version="1.1"
                     viewBox="0 0 2560 100"
                     x="0"
                     y="0">
                    <polygon fill="white"
                             points="2560 0 2560 100 0 100" />
                </svg>
            </div>
        </div>
    );
}