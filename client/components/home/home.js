import React from 'react';


export default function home() {
    return (

        <main className="dark:bg-gray-800 w-10/12 m-auto bg-white relative overflow-hidden">

            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto items-center justify-center px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Be on
                            <span className="text-5xl sm:text-7xl">
                                Time
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                        </p>
                        <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src="/img/home.svg" className="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
            <Page img='/img/path.svg' rev={true}></Page>
            <Page img='/img/project.svg' rev={true} ></Page>
            <Page img='/img/pterner.svg' rev={true}></Page>
            {/* <Page img='/img/path.svg' ></Page> */}
        </main>

    );
}

function Page({img,rev}) {
    return (
        <main className="dark:bg-gray-800 w-11/12 bg-white relative overflow-hidden">
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div className= {`container mx-auto px-6 flex relative py-16 ${rev && 'flex-row-reverse'}`}>
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="font-bebas-neue uppercase text-2xl sm:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        Be on Time
                       
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white text-justify">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div className="flex mt-8">
                        <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Get started
                        </a>
                
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src={img} className="max-w-xs md:max-w-sm m-auto" />
                </div>
            </div>
        </div>
        </main>

    );
}
