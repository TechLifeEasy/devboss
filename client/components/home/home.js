import React from 'react';


export default function home() {
    const data=[
    {
        title:"Resources",
        text:"Here You can find all the resources that are currently liked by most of"+
        "learners. Each Title has subcourses inside it with a complete description and link attached with it",
        link:"/source"
    },
    {
        title:"Projects",
        text:"Here You can find all the projects that are currently done by "+
        "learners. Each project has a complete description and link attached with it.Also TechStack are attacked with each of them",
        link:"/project"
    },
    {
        title:"Hackathons",
        text:"Here You can find all the hackathons that are currently going on or to be held in near future"+
        "You can contact each user with it's linkedIn link given. Purposefully it is kept so that user can practice along with learning concept can be applied ",
        link:"/hackathon"

    }
]
    return (

        <main className="dark:bg-gray-800 w-10/12 m-auto bg-white relative overflow-hidden">

            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto items-center justify-center px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue justify-center items-start  uppercase  sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                           <span className='text-5xl'> In a Need of useful resources?</span>

                            <span className="text-3xl  mt-5">
                                You're on a right track
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base font-thin   text-black dark:text-white">
                            Our website provides you the best resources for learning any new tech-stack recommended by other users. You can also explore projects of other and to get hands on new technologies various
                            hackathons are also listed which can be filtered out according to your convenience.
                        </p>
                        {/* <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div> */}
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src="/img/home.svg" className="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
            <Page img='/img/path.svg' rev={true} title={data[0].title} text={data[0].text} link={data[0].link}></Page>
            <Page img='/img/project.svg' rev={true} title={data[1].title} text={data[1].text} link={data[1].link}></Page>
            <Page img='/img/pterner.svg' rev={true} title={data[2].title} text={data[2].text} link={data[2].link}></Page>
            {/* <Page img='/img/path.svg' ></Page> */}
        </main>

    );
}

function Page({img,rev,title,text,link}) {
    return (
        <main className="dark:bg-gray-800 w-11/12 bg-white relative overflow-hidden">
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div className= {`container mx-auto px-6 flex relative py-16 ${rev && 'flex-row-reverse'}`}>
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="font-bebas-neue uppercase text-2xl sm:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        {title}
                       
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white text-justify">
                       {text}
                    </p>
                    <div className="flex mt-8">
                        <a href={link} className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
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
