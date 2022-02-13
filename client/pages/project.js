import {React,useState} from 'react';
import ProjectList from '../components/project/ProjectList';
import ProjectForm from '../components/project/ProjectForm';
import { API } from '../Api/Back'


export default function Projects({data}) {
    const[show,setShow]=useState(false);
    //console.log(data)
    return (
        <div>
            <div className='flex flex-row justify-center mr-5 my-5'>
                <button onClick={()=>{setShow(false)}} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Show Projects</button>
                <button onClick={()=>{setShow(true)}} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Add Projects</button>
            </div>
            {show===true?
            <>
            <ProjectForm/>
            </>
            :
            <>
            <ProjectList data={data}/>
            </>
            }
        </div>

    );
}



export async function getServerSideProps(context) {

    let data=[]
    try{

        data = await API.get('/projects');
        
     
    }catch(e){
        //console.log(e.message);
    }


    return {
        props: { data: data.data||null }, // will be passed to the page component as props
    }
}
