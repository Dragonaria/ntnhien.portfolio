//components.Navbar

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4" id="nav-container">
            <div className="text-2xl font-bold">
                <Link href="/">
                    Hien Nguyen
                </Link>
            </div>
            <a href="" className="bg-amber-400 text-black hover:bg-slate-700 hover:text-slate-100 py-2 px-4 rounded-lg text-base font-semibold transition-all inline-block">Resume</a>
        </nav>
    )
}
