import React from 'react';
import Section from "./common/Section";

import uiuxDesign from '../assets/Service_UI.png';
import webDevelopment from '../assets/Service_Web.png';
import graphicDesign from '../assets/Service_Graphic.png';

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
    ];

    return (
        <Section
            title={"Services 🛠️"}
            subtitle={"Here are the services I provide to my clients"}
        >
            <div className={"grid gap-10 grid-cols-12 justify-center m-auto"}>
                {
                    SERVICES.map(SERVICES => (
                        <div key={SERVICES.id} className={"flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-400 rounded-xl duration-300 ease-in-out hover:scale-110 col-span-12 md:col-span-6 lg:col-span-4"}>
                            <img src={SERVICES.image} alt={SERVICES.title} className={"h-36 md:h-44 object-contain"} />
                            <h3 className={"mt-5 text-base"}>{SERVICES.title}</h3>
                        </div>
                    ))
                }
            </div>

        </Section>
    );
};

export default Services;