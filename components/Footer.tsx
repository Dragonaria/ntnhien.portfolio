// components.Footer

export default function Footer() {
    return (
        <footer id="footer-container">
            <hr className="w-4/5 my-0 mx-auto"/>
            <div className="flex justify-around items-center py-8 px-0">
                <p className="text-slate-400">
                    {new Date().getFullYear()} Hien Nguyen&#39;s Portfolio
                </p>
                <div className="social_icons">
                    Socials
                </div>
            </div>
        </footer>
    )
}
