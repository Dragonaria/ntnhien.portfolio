// components.Footer

export default function Footer() {
    return (
        <footer>
            <hr/>
            <div className="footer-container">
                <p>
                    {new Date().getFullYear()} Hien Nguyen's Portfolio
                </p>
                <div className="social_icons">
                    Socials
                </div>
            </div>
        </footer>
    )
}