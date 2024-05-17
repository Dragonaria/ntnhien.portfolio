//component.Hero

import Image from "next/image"
import pfp from "../public/avar.jpg"

export default function Hero() {
    return(
        <section className="h-svh flex justify-center items-center flex-col py-8 px-0" id="hero-container">
            <Image
                src={pfp}
                alt="Profile picture"
                className="w-200px h-200px rounded-full my-o mx-auto object-cover"
            />
            <div className="text-center my-4 mx-0 w-full lg:w-4/5" id="hero-text">
                <h2 className="text-4xl font-semibold mb-4">
                    Hi, I&#39;m Hien Nguyen
                </h2>
                <p className="text-lg font-normal mb-4">
                    I&#39;m a full-stack developer in Ho Chi Minh City, Vietnam.
                </p>
                <div className="flex justify-center items-center gap-y-0 gap-x-4" id="hero-socials">
                    <a
                        href="https://www.linkedin.com/in/ntnhien"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition-all duration-300 ease-in-out hover:text-slate-100"
                    >
                        <i className='bx bxl-linkedin-square bx-md' ></i>
                    </a>
                    <a
                        href="https://github.com/Dragonaria"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition-all duration-300 ease-in-out hover:text-slate-100"
                    >
                        <i className='bx bxl-github bx-md' ></i>
                    </a>
                </div>
            </div>
        </section>
    )
}
