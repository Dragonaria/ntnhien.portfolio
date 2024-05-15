//components.Navbar

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="nav-container flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
                <Link href="/">
                    Hien Nguyen
                </Link>
            </div>
            <a href="" className="bg-yellow-400 hover:bg-yellow-900 py-2 px-4 rounded-lg text-base font-semibold transition-all	inline-block">Resume</a>
        </nav>
    )
}