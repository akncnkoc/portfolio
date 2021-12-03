import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import Image from 'next/image'
import {FcBriefcase} from "react-icons/fc";
export default function Experience() {

    const myExperiences = [
        {
            id: 1,
            name: 'Freelancer',
            from: 'Dec 2017',
            to: 'July 2018',
            location: 'Istanbul/Turkey',
            type: 'Freelancer',
            image: 'https://yt3.ggpht.com/X7Sckkio9SoR-RoHnCYM-R1Jf6pyzL7IE9WPR97tdXMZ60Ch3aC7coa4bO4HGRusvtcs6tC64g=s108-c-k-c0x00ffffff-no-rj',
            doing: `Worked from freelancer sites and some mockups`
        },
        {
            id: 2,
            name: 'CHOOSECLICK',
            from: 'July 2018',
            to: 'March 2019',
            location: 'Istanbul/Turkey',
            type: 'Intern',
            image: 'https://media-exp1.licdn.com/dms/image/C560BAQH2--RHd6bQxQ/company-logo_200_200/0/1519871315834?e=1646265600&v=beta&t=keKJMkZi-QASxxxlcoHps4gwzKg5yDY2PS5nnDPcfpU',
            doing: `Worked as a internship, learning C# and backend services such as MYSQL, SQL SERVER`
        },
        {
            id: 3,
            name: 'MARRIN MAKINA',
            from: 'July 2020',
            to: 'Nov 2020',
            location: 'Istanbul/Turkey',
            type: 'Social Media Manager / FrontEnd Developer',
            image: 'https://www.marrinmakina.com/assets/images/logo.png',
            doing: `Working as a social media manager, learning and organizing MARRIN Makina social media posts, videos, and website organization designing and serving`
        },
        {
            id: 4,
            name: 'EVRINO',
            from: 'Nov 2020',
            to: 'May 2021',
            location: 'Istanbul/Turkey',
            type: 'Full Stack Php Developer',
            image: 'https://evrino.com.tr/wp-content/uploads/2020/11/evrino-logo.png.webp',
            doing: `Worked as a Full Stack Developer, I develop and designing Intelligence E-Commerce Website, i develop with Laravel and Vanilla.JS, backend is MariaDB`
        },
        {
            id: 5,
            name: 'CODEPARK (Contracted Work Remote)',
            from: 'July 2021',
            to: 'Nov 2021',
            location: 'United Kingdom/London',
            type: 'Full Stack Php Developer',
            image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE0wn6AT7T3uQ/company-logo_200_200/0/1597425120977?e=1646265600&v=beta&t=Y6KsH7z2NjU0dGM74NgbHgMk6tTGVYAxYbhuNfqB1lU',
            doing: `Worked as a Full Stack Developer, I develop and designing Influencer Campaign Service, i work with Laravel and Vanilla.JS, backend is MariaDB`
        }
    ];

    return (
        <div className="container py-12">
            <div className="text-3xl font-semibold pl-8 flex space-x-2">
                <FcBriefcase />
                <span>MY EXPERIENCE</span>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    myExperiences.reverse().map((item) => (
                        <SwiperSlide key={item.id} className="w-1/4 p-4">
                            <div className="w-full min-h-[400px]  shadow-lg rounded m-3 text-sm">
                                <div className="w-full h-[40px] flex items-center justify-center bg-gradient-to-br from-green-400  to-blue-600 text-white font-semibold uppercase rounded-tr rounded-tl shadow-lg">{item.name}</div>
                                <div className="flex items-center space-y-4 flex-col p-4">
                                    <div className="rounded-full w-[100px] h-[100px] shadow-lg overflow-hidden">
                                        <Image width="100" height="100" className="rounded-full" src={item.image} objectFit="contain" />
                                    </div>
                                    <div className="font-semibold">{item.type}</div>
                                    <div>{item.from} - {item.to}</div>
                                    <div className="flex items-center justify-center text-center">{item.doing}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}