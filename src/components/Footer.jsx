function Footer() {
    return (
        <>
            <footer className="mt-24">
                <div className="container mx-auto p-24 text-center">

                    <div className="flex justify-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" className="lg:w-9 w-[24px] mr-3" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="lg:w-9 w-[24px] mr-3" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" className="lg:w-9 w-[24px] mr-3" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="lg:w-9 w-[24px] mr-3" />
                    </div>
                    <p className="text-sm text-slate-600 pt-3">Build with <span className="text-red-500 text-lg">❤️</span> by <span className="text-cyan-500 font-bold"><a href="https://github.com/Syafiq1331">Syafiqrzf</a></span> with <span className="text-sky-500"><a href="https://tailwindcss.com/">Tailwindcss, </a> <a href="https://reactjs.org/" className="text-blue-500 font-bold">React Js</a></span> &
                        <a href="https://www.figma.com/file/bK0MMChu3rLApXrEpDV4KP/Portfolio-UI---Web-%26-Mobile-(Community)?node-id=6%3A52" className="text-slate-800 font-bold"> design</a>  </p>


                </div>
            </footer>
        </>
    )
};

export default Footer;