import { React, useState } from "react";
import HackathonFind from "../components/hackathon/HackathonFind";
import HackathonShow from "../components/hackathon/HackathonShow";
import { API } from '../Api/Back'
import { get } from "../Api/url_data";



export default function Hackathon({data}) {
    const [show, setShow] = useState(false);
    console.log(data)
    return (
        <div>
            <div className='flex flex-row justify-end mr-5'>
                <button onClick={() => { setShow(false) }} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Show Hackathons</button>
                <button onClick={() => { setShow(true) }} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Add Hackathon</button>
            </div>
            {show === true ?
                <>
                    <HackathonShow />
                </>
                :
                <>
                    <HackathonFind data={data} />
                </>
            }
        </div>

    );
}


export async function getServerSideProps(context) {

    let data=[]
    try{

        data = await API.get('/finds');
        
        
        for(let i=0;i<data.data.length;i++){
            let info=await get(data.data[i].link)
            data.data[i]={...data.data[i],web:info}
        }
        console.log(data.data)
     
    }catch(e){
        console.log(e.message);
    }


    return {
        props: { data: data.data||null }, // will be passed to the page component as props
    }
}
