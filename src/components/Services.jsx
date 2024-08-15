import React from 'react';
import Section from "./common/Section";

import uiuxDesign from '../assets/Service_UI.png';
import webDevelopment from '../assets/Service_Web.png';
import graphicDesign from '../assets/Service_Graphic.png';
import backEndDevelopment from '../assets/Service_Back.png';
import cloudDevelopment from '../assets/Service_Cloud.png';

const Services = () => {

    const SERVICES = [
        {
            id: 1,
            title: "UI/UX Design",
            image: uiuxDesign,
        },
        {
            id: 2,
            title: "Web Development",
            image: webDevelopment,
        },
        {
            id: 3,
            title: "Graphic Design",
            image: graphicDesign,
        },
        {
            id: 4,
            title: "Back-End Development",
            image: backEndDevelopment,
        },
        {
            id: 5,
            title: "Cloud Development",
            image: cloudDevelopment,
        },
    ];

    return (
        <Section
            title={"Services 🛠️"}
            subtitle={"Here are the services I provide to my clients"}
        >
            <div className={"flex flex-wrap gap-10 justify-center m-auto"}>
                {
                    SERVICES.map(SERVICES => (
                        <div key={SERVICES.id} className={"flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-400 rounded-xl duration-300 ease-in-out hover:scale-110"}>
                            <img src={SERVICES.image} alt={SERVICES.title} className={"h-44 object-contain"} />
                            <h3 className={"mt-5 text-base"}>{SERVICES.title}</h3>
                        </div>
                    ))
                }
            </div>

        </Section>
    );
};

export default Services;
