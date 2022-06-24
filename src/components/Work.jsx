import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';

function Work() {
    return (
        <>
            <article className="max-w-full">
                <div class="container mx-auto py-10 lg:px-32">
                    <h1 class="text-lg lg:text-start text-center text-slate-800">Featured works</h1>
                    <div className="flex flex-wrap justify-center mt-4">
                        <div className="bg-white lg:border-b-2 lg:pb-5 flex items-center lg:flex-nowrap flex-wrap w-5/6 lg:w-full lg:mr-10">
                            <img src={image1} alt="" class="object-fit h-48 w-96" />
                            <div className="p-3">
                                <h3 class="font-bold text-slate-800 text-2xl">Designing Dashboards</h3>
                                <span class="flex py-3 items-center">
                                    <button className='border border-solid border-blue-600 bg-blue-600 rounded-xl px-2 py-1 text-white font-bold'>2022</button>
                                    <p className='ml-5 text-lg text-slate-500'>Dashboard</p>
                                </span>
                                <p class="font-light text-slate-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:border-b-2 lg:pb-5 flex items-center lg:flex-nowrap flex-wrap rounded-xl w-5/6 lg:w-full lg:mt-6 mt-3 lg:mr-10">
                            <img src={image2} alt="" class="object-fit h-48 w-96" />
                            <div className="p-3">
                                <h3 class="font-bold text-slate-800 text-2xl">Designing Dashboards</h3>
                                <span class="flex py-3 items-center">
                                    <button className='border border-solid border-blue-600 bg-blue-600 rounded-xl px-2 py-1 text-white font-bold'>2022</button>
                                    <p className='ml-5 text-lg text-slate-500'>Dashboard</p>
                                </span>
                                <p class="font-light text-slate-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:border-b-2 lg:pb-5 flex items-center lg:flex-nowrap flex-wrap rounded-xl w-5/6 lg:w-full lg:mt-6 mt-3 lg:mr-10">
                            <img src={image3} alt="" class="object-fit h-48 w-96" />
                            <div className="p-3">
                                <h3 class="font-bold text-slate-800 text-2xl">Designing Dashboards</h3>
                                <span class="flex py-3 items-center">
                                    <button className='border border-solid border-blue-600 bg-blue-600 rounded-xl px-2 py-1 text-white font-bold'>2022</button>
                                    <p className='ml-5 text-lg text-slate-500'>Dashboard</p>
                                </span>
                                <p class="font-light text-slate-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
};

export default Work;