// components.Contact

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center px-0 pt-8 pb-16 w-full lg:w-4/5 my-0 mx-auto" id="contact-container">
            <h2 className="text-3xl	font-semibold mb-4">Get In Touch</h2>
            <p className="text-base font-normal text-center mb-4">If you would like to work together or have any questions, please feel free to inbox me. Cheers!</p>
            <a
                href="mailto:ntnhien13@gmail.com"
                className="bg-amber-400 text-black hover:bg-slate-700 hover:text-slate-100 py-2 px-4 rounded-lg text-base font-semibold transition-all inline-block"
            >
                Contact me!
            </a>
        </div>
    )
}
