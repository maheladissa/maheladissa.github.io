import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "./common/Section";
import portfolio_fosterpet from "../assets/Portofolio_FosterPet.png";

const Blog = () => {

    const POSTS = [
        {
            id: 1,
            title: "Foster Pet",
            image: portfolio_fosterpet,
            content: "   ",
            link: "   ",
        },
    ];

    return (
        <Section title={"Blog ✒️"} subtitle={"My top Medium blog articles"}>
            <div className={"flex flex-row gap-10 m-auto overflow-x-scroll overflow-y-hidden w-5/6 no-scrollbar p-10"}>
                {POSTS.map((post) => (
                    <div key={post.id} className={"flex flex-col items-center justify-center px-5 py-1 shadow-lg dark:shadow-gray-400 rounded-xl duration-300 ease-in-out shrink-0 w-60"}>
                        <div className={"flex flex-col align-middle h-16 overflow-y-hidden"}>
                            <h2 className={"text-lg font-bold text-center"}>{post.title}</h2>
                        </div>
                        <div className={"flex flex-col justify-center items-center text-center"}>
                            <img src={post.image} alt="First Image" className={"h-44 min-h-44 object-cover justify-center justify-self-center p-1"}/>
                        </div>
                        <div>
                            <p className={"text-sm text-center"}>{post.content}...</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className={"text-sm text-teal-600"}>
                            Read more
                        </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Blog;
