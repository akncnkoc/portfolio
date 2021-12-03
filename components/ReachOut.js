import React from 'react';
import {GrGithub, GrInstagram, GrLinkedin} from "react-icons/gr";
import Image from 'next/image';
import ReactTooltip from "react-tooltip";

export default function ReachOut() {
    return (
        <div className="w-full bg-gradient-to-br from-green-500  via-green-600 to-blue-900 relative py-16">
            <div className="container flex">
                <div className="flex-1 flex flex-col p-4 space-y-4 mt-4">
                    <h3 className="text-3xl text-white">React Out to me</h3>
                    <span className="text-xl font-light text-white">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</span>
                    <span className="text-white text-sm font-light">I'm a Full Stack Web Developer | Android App Developer | Open Source Contributor</span>
                    <div className={"flex space-x-4 my-4 text-white"}>
                        <a href={"https://instagram.com/madewithakin"}
                           target={"_blank"}
                           data-tip={"Instagram"}
                           className={"w-8 h-8 justify-center flex items-center rounded-full bg-[#E4405F] shadow-lg cursor-pointer"}>
                            <GrInstagram size={14}/>
                        </a>
                        <a href={"https://github.com/akncnkoc"}
                           target={"_blank"}
                           data-tip={"Github"}
                           className={"w-8 h-8 justify-center flex items-center rounded-full bg-[#222222] shadow-lg cursor-pointer"}>
                            <GrGithub size={14}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/akincankoc/"}
                           target={"_blank"}
                           data-tip={"Linkedin"}
                           className={"w-8 h-8 justify-center flex items-center rounded-full bg-[#1DA1F2] shadow-lg cursor-pointer"}>
                            <GrLinkedin size={14}/>
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <Image className="w-24 h-24 rounded-full shadow-lg" src={require('../public/logo.png')}
                           objectFit="cover"/>
                </div>
            </div>
        </div>
    );
}