// components.Footer

export default function Footer() {
    return (
        <footer id="footer-container">
            <hr className="w-4/5 my-0 mx-auto"/>
            <div className="flex justify-around items-center py-8 px-0">
                <p className="text-slate-400">
                    {new Date().getFullYear()} Hien Nguyen&#39;s Portfolio
                </p>
                <div className="flex justify-between items-center gap-y-0 gap-x-4" id="footer-socials">
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
        </footer>
    )
}
