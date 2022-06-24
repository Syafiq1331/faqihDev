import image1 from './images/profile.jpg'

function Main() {
    return (
        <>
            <main main className="container mx-auto w-full lg:pt-32 lg:pb-32 pb-12 flex lg:flex-nowrap flex-wrap justify-evenly  items-center" >
                <article className="text-center lg:order-1 order-2 lg:w-1/2 lg:text-start">
                    <h1 className="lg:text-3xl text-2xl leading-8 mt-2 lg:leading-relaxed text-slate-800 font-bold">Hi, I am Faqih Zaki, <br /> pe-nguli coding handal 👌</h1>
                    <p className="pt-2 text-[16] text-slate-500 lg:pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam commodi, excepturi obcaecati necessitatibus optio, architecto id repellendus, omnis atque odio illum iste ea. Aut, placeat ipsam eos sit saepe voluptate quas? Quas libero debitis iure reiciendis inventore praesentium eligendi?
                    </p>
                    <button className="border border-solid border-sky-400 hover:border-sky-400 bg-sky-400 hover:bg-sky-500 hover:font-bold font-semibold text-white p-2 mt-3 lg:mt-5">Download Resume</button>

                </article>

                <img src={image1} className="lg:w-64 lg:order-2 order-1 w-52 h-auto rounded-full" />
            </main>
        </>
    )
};

export default Main;