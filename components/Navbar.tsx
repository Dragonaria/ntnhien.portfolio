//components.Navbar

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-container">
            <div>
                <Link href="/">
                    My Porfolio
                </Link>
            </div>
            <a href="" className="cta-btn">Resume</a>
        </div>
    )
}