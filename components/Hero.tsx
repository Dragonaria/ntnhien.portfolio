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
            <div className="text-center my-4 mx-0 w-4/5" id="hero-text">
                <h1 className="text-4xl font-semibold mb-4">
                    Hi, I&#39;m Hien Nguyen
                </h1>
                <p className="text-lg font-normal mb-4">
                    I'm a full-stack developer in Ho Chi Minh City, Vietnam.
                </p>
                <div className="social-icons">
                    Socials
                </div>
            </div>
        </section>
    )
}
