import { React, useEffect, useState } from "react";
import { GetProject } from "../../Api/Api";
import ProjectList from "../project/ProjectList";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDown } from "react-icons/md";
import { AiFillLike, AiOutlineUser } from "react-icons/ai";

const Tab = (data) => {
  const [project, setProject] = useState([]);
  useEffect(async () => {
    const name = data.data.name;
    // console.log(data.data.name);
    GetProject({ name })
      .then((dt) => {
        // dt=JSON.stringify(dt.data[0])

        const p = [];
        // p.push(dt.data[0]);
        dt.data.forEach((element) => {
          p.push(element);
        });
        // console.log(p);
        setProject(p);
        // project.map((e)=>{console.log(e.title);})
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <ul class="bg-pink-100 rounded-xl p-1.5 flex mx-7 my-5">
        <li class="flex-1">
          <a
            class="block p-2 text-sm text-pink-700 bg-white rounded-lg shadow-sm"
            href=""
          >
            <span class="flex items-center justify-center ml-3 text-2xl font-bold text-gray-900">
              {" "}
              Projects{" "}
            </span>
          </a>
        </li>

        {/* <li class="flex-1">
        <a
          class="block p-2 text-sm font-medium text-pink-700 rounded-lg"
          href="">
          <span class="flex items-center justify-center ml-3 text-2xl font-bold text-gray-900">
            {" "}
            Hackathons{" "}
          </span>
        </a>
      </li> */}
      </ul>
      <div className="flex flex-col gap-3 mt-3 justify-center items-center flex-wrap  lg:flex-row">
        {project !== null
          ? project.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  className="flex p-1  mt-3 shadow-lg shadow-blue-5 cursor-pointer rounded-lg  flex-col w-3/4 lg:w-1/4 hover:shadow-2xl pl-3"
                  onClick={() => {
                    window.location.href = "/project_one/" + ele.title;
                  }}
                >
                  <div className=" flex ">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-sky-900 text-white">
                      <AiOutlineUser></AiOutlineUser>
                    </div>
                    <a href={`/user/${ele.creator || "zeel  prajapati"}`}>
                      <div className=" pt-2 pl-2 ">{ele.creator}</div>
                    </a>
                  </div>

                  {/* <div className='flex flex-row w-full  '>
                <h1 className='font-bold w-full  '>{ele.creator}</h1>
              </div> */}
                  <p className="font-bold   w-full mr-auto ">{ele.title}</p>
                  <div className="flex flex-col  ">
                    <p className="shadow-sky-900 rounded-sm mt-2 ">
                      {ele.description.substring(0, 100) +
                        `${ele.description.length > 100 && "..."}`}
                    </p>
                    {/* {(show===true) && (ind==index) ?<>
            <IoIosArrowDropup onClick={()=>{setShow(!show);setIndex(-1)}} size={25} color='white' className='block mt-2 '/>
          {/* </>:
          <>
              <IoIosArrowDropdown onClick={()=>{setShow(!show); setIndex(ind)}} size={25} color='white' className='block mt-2 '/>
          </>}
             */}
                    {ele.demoLink && (
                      <a href={ele.demoLink} className="my-3" target="_blank">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-row flex-wrap items-center text-center  gap-1 ">
                    {ele.tech.split(",").map((tc) => {
                      return <p className="bg-sky-200 p-2 mt-2 ">{tc}</p>;
                    })}
                  </div>
                  {/* <h1 className='text-white  text-right'>{ele.tech}</h1> */}
                  <div
                    className="flex flex-row items-center mt-4 text-xl"
                    onClick={() => {
                      UpdateProject({ title: ele.title, type: "vote" })
                        .then(() => {
                          window.location.reload();
                        })
                        .catch((e) => {
                          {
                            console.log(e);
                          }
                        });
                    }}
                  >
                    <button className=" p-1 ">
                      <MdOutlineThumbUpOffAlt />
                    </button>
                    <p className="p-1 mt-0  ">{ele.upVote.length}</p>
                  </div>

                  <br />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Tab;
