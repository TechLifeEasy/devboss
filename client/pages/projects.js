import {React,useState} from 'react';
import ProjectList from '../components/project/ProjectList';
import ProjectForm from '../components/project/ProjectForm';



export default function Projects() {
    const[show,setShow]=useState(false);
    return (
        <div>
            <div className='flex flex-row justify-end mr-5'>
                <button onClick={()=>{setShow(false)}} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Show Projects</button>
                <button onClick={()=>{setShow(true)}} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Add Projects</button>
            </div>
            {show===true?
            <>
            <ProjectForm/>
            </>
            :
            <>
            <ProjectList/>
            </>
            }
        </div>

    );
}
