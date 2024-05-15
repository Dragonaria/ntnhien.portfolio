// components.About

import Image from "next/image";
import aboutPhoto from "../public/about.jpg"

export default function About() {
    return (
        <section className="py-8 px-0" id="about-container">
            <h2 className="text-3xl	font-semibold mb-4">About Me</h2>
            <div className="flex justify-between items-center gap-y-0 gap-x-8">
                <div className="w-1/2" id="about-text">
                    <p className="text-base font-normal mb-4">
                        As a developer, I have always been passionate about creating elegant and effective solutions to
                        complex problems. I have a strong foundation in software development, with a focus on web
                        technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and
                        back-end of applications, and I am always looking for ways to optimize performance, improve user
                        experience, and ensure the highest level of code quality.
                    </p>
                    <p>
                        Throughout my career, I have worked on a wide range of projects, from simple static websites to
                        complex enterprise-level applications. I am experienced in working with a variety of development
                        tools and frameworks, including React, Angular, Vue.js, Node.js, and Laravel. I am always eager
                        to learn and explore new technologies, and I am constantly seeking out opportunities to improve
                        my skills and knowledge.
                    </p>
                </div>
                <div className="w-1/2" id="about-img">
                    <Image
                        src={aboutPhoto}
                        alt="About section"
                        className="w-full h-500px overflow-hidden object-cover border-2 border-solid border-slate-100 grayscale hover:scale-105"
                    />
                </div>
            </div>
        </section>
    )
}
