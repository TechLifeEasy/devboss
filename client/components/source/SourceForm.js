import React, { useReducer, useState } from 'react';
import Load from "../helpers/Load";
import Pop from "../helpers/Pop";
import {AddSource} from '../../Api/Api'
// title: String,
// description: String,
// courses: [{
//     link:String,
//     about:String,
// }],
// upVote: [String],
// comment: [CommentSchema],
// creator: String,
// tech:[String]

const initialState = {

  title: '',
  description: '',
  tech: '',
  courses: [
    { link: '', about: '' }
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.data };
    case 'description':
      return { ...state, description: action.data };
    case 'tech':
      return { ...state, tech: action.data };
    case 'courses':
      return { ...state, courses: action.data };
    default:
      throw new Error();
  }
}


export default function SourceForm() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoadding] = useState(false);
  const [isPop, setIsPop] = useState('');
  //   const router = useRouter();

  function addSource() {
    console.log(state)
    // console.log(data)

    setIsLoadding(true);


    AddSource(state)
      .then((data) => {
        window.location.reload()
      }).catch((e) => {
        console.log(e);
        setIsPop('Some Thing Went Wrong !!')
      })
      .finally(() => {
        setIsLoadding(false);
      });
  }

  return (

    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg ">
      <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
        Source Information
      </div>
      {
        isLoading && <Load></Load>
      }
      {
        isPop.length != 0 && <Pop text={isPop} remove={setIsPop}></Pop>
      }
      <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
        <div className="col-span-2 lg:col-span-1">
          <div className=" relative ">
            <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" placeholder="Title"
              value={state.title}
              onChange={(e) => {
                dispatch({ type: 'title', data: e.target.value })
              }}
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className=" relative ">
            <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" placeholder="Tech"

              value={state.tech}
              onChange={(e) => {
                dispatch({ type: 'tech', data: e.target.value })
              }}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="text-gray-700" for="name">
            <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" id="comment" placeholder="description" name="comment" rows="5" cols="40"
              value={state.description}
              onChange={(e) => {
                dispatch({ type: 'description', data: e.target.value })
              }}

            >
            </textarea>
          </label>
        </div>


      </div>
      <div className="mb-6 mt-3 text-3xl font-light text-center text-gray-800 dark:text-white">
        Cources to Follow
      </div>

      <Courses data={state.courses} setData={(data) => {
        dispatch({ type: 'courses', data })
      }}></Courses>



      <div className="col-span-2 text-right mt-3">
        <button
          className="mt-5 m-auto w-full py-3 text-white rounded-lg bg-sky-800 hover:bg-sky-600 px-2"

          onClick={addSource}
        >Add</button>
      </div>
    </div>

  );
}


function Courses({ data, setData }) {



  function removeCourse(index) {
    let newData = data;
    newData.splice(index, 1);
    setData([...newData])
  }

  function updateCourseLink(index, event) {

    let newData = data;
    newData[index].link = event.target.value;
    setData([...newData]);
  }
  function updateCourseAbout(index, event) {

    let newData = data;
    newData[index].about = event.target.value;
    setData([...newData]);
  }

  return (
    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
      {
        data.map((data, index) => {
          console.log(data);
          return (<>




            <div className="col-span-2 lg:col-span-2">
              <div className='w-full flex justify-between my-3'>

                <h4>{`Course #${index + 1}`}</h4>
                <button
                  className=" text-white rounded-lg bg-sky-800 hover:bg-sky-600 px-2"

                  onClick={() => removeCourse(index)}
                > x</button>
              </div>
              <div className=" relative ">
                <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " placeholder="Course Link"
                  value={data.link}
                  onChange={(e) => updateCourseLink(index, e)}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" for="name">
                <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" id="comment" placeholder="About Course" name="comment" rows="5" cols="40"
                  value={data.about}
                  onChange={(e) => updateCourseAbout(index, e)}
                >
                </textarea>
              </label>

            </div>
          </>
          )
        })
      }

      <button
        className=" w-full py-3 text-white rounded-lg bg-sky-800 hover:bg-sky-600 px-2"

        onClick={() => setData([...data, { link: '', about: '' }])}
      >Course +</button>


    </div>
  )

}

