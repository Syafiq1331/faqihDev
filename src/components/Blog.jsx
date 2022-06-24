function Blog() {
    return (
        <>
            <article className="max-w-full mt-10 mb-10 bg-sky-200 container">
                <div class="container mx-auto py-10 lg:px-32">
                    <div className="py-5 px-3">
                        <h1 class="text-lg lg:text-start text-center text-slate-800">Recent Posts</h1>
                        <div className="flex lg:flex-nowrap flex-wrap mt-4">
                            <div className="border border-solid bg-white border-white lg:w-1/2 p-5 lg:mr-3">
                                <h3 class="font-bold text-slate-800 text-2xl">Making a design system from scratch</h3>
                                <p class="pt-5 pb-5 text-slate-600">12 Feb 2022  |  Design, pattern</p>
                                <p class="font-light text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi deserunt iure optio eaque. Dolor doloremque ab officiis minus sunt assumenda expedita aperiam hic tempore voluptatibus natus voluptatum necessitatibus aliquid eveniet perferendis voluptatem quae inventore accusamus ad velit, architecto veritatis? Asperiores animi sit hic reprehenderit iste temporibus, quis quidem sequi?</p>
                            </div>
                            <div className="border border-solid bg-white border-white lg:w-1/2 p-5 lg:m-[0] mt-3 ">
                                <h3 class="font-bold text-slate-800 text-2xl">Creating pixel perfect icons in Figma</h3>
                                <p class="pt-5 pb-5 text-slate-600">12 Feb 2022  |  Design, pattern</p>
                                <p class="font-light text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi deserunt iure optio eaque. Dolor doloremque ab officiis minus sunt assumenda expedita aperiam hic tempore voluptatibus natus voluptatum necessitatibus aliquid eveniet perferendis voluptatem quae inventore accusamus ad velit, architecto veritatis? Asperiores animi sit hic reprehenderit iste temporibus, quis quidem sequi?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
};

export default Blog;