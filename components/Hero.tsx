//component.Hero

import Image from "next/image"
import pfp from "../public/avar.jpg"

export default function Hero() {
    return(
        <section id="hero-container">
            <Image
                src={pfp}
                alt="Profile picture"
            />
            <div className="hero-text">
                <h1>Hi, I'm Hien Nguyen</h1>
                <p>
                I'm a full-stack developer in Ho Chi Minh City, Vietnam.
                </p>
                <div className="social-icons">
                    Socials
                </div>
            </div>
        </section>
    )
}
