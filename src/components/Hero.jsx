import React from 'react';
import {FaTwitter,FaLinkedin, FaFacebook, FaArrowDown, FaGithub} from 'react-icons/fa';
import avatar from '../assets/avatar.png';

const Hero = () => {

    const SOCIAL = [
        {
            id: 1,
            name: 'Twitter',
            url: 'https://twitter.com/maheladissa',
            icon: <FaTwitter/>
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mahela-dissanayake/',
            icon: <FaLinkedin/>
        },
        {
            id: 3,
            name: 'Facebook',
            url: 'https://www.facebook.com/mahela.dissanayake.101',
            icon: <FaFacebook/>
        },
        {
            id: 4,
            name: 'Github',
            url: 'https://github.com/maheladissa',
            icon: <FaGithub/>
        },
    ]

    window.addEventListener("scroll", function () {

        const downArrow = document.querySelector(".down-arrow");

        if (window.scrollY > 90) {
            downArrow.classList.add("hide-down-arrow");
        } else {
            downArrow.classList.remove("hide-down-arrow");

        }
        });

    return (
        <section className={"min-h-screen flex flex-col lg:flex-row justify-start items-center p-5 text-center"}>
            <div className={"flex flex-col lg:flex-row"}>
                <div className={"flex flex-col justify-start items-center w-full lg:w-2/3 p-5 order-last lg:order-first"}>
                    <h2 className={"text-5xl font-bold uppercase text-cyan-600"}>Mahela Dissanayake</h2>
                    <h3 className={"py-2 text-2xl"}>Software Engineer</h3>
                    <p className={"max-w-6xl font-light text-gray-500"}>
                        Hi <span className={"animate-pulse text-lg"}>👋</span>
                        <br />
                        I'm Mahela Dissanayake, a final year Software Engineering student at the University of Kelaniya, with a focus on UI/UX development. During my internship at N-able Private Limited, I got a sneak peek into the industry and discovered my love for creating user-friendly designs. Apart from my studies, I'm actively involved in projects as a Rotaract and IEEE volunteer, where teamwork is key. I'm excited about turning user needs into eye-catching experiences and passionate about the blend of technology and design. Let's connect to explore opportunities, exchange ideas, or team up on cool projects!

                    </p>

                    {/*Social Icons*/}
                    <div className={"flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3"}>
                        {
                            SOCIAL.map(SOCIAL => (
                                <a href={SOCIAL.url}
                                   key={SOCIAL.id}
                                   target={"_blank"}
                                   rel={"noopener noreferrer"}
                                   className={"cursor-pointer duration-300 hover:text-teal-600"}>
                                    {SOCIAL.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/*Profile Picture*/}
                <div className={"flex flex-col justify-start items-center w-full lg:w-1/3 p-5 order-first lg:order-last"}>
                    <img src={avatar} alt={"Avatar"} className={"w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-t from-cyan-600 rounded-xl pt-5"}/>
                    <a href={"/Mahela-CV.pdf"}
                       download={true}
                       className={"flex items-center justify-center mt-10 bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-2 rounded-lg w-60 md:w-72"}>
                        Download Résumé
                    </a>
                </div>
            </div>


            {/*Arrow down*/}

            <div className={"mt-20 down-arrow sticky bottom-0 lg:hidden"}>
                <FaArrowDown className={"animate-bounce text-2xl text-teal-600 mt-10"}/>
            </div>

        </section>
    );
};

export default Hero;