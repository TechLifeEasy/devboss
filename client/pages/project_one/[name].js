// import Head from 'next/head'
// import Image from 'next/image'
// /import Home from '../components/home/home'
import { API } from '../../Api/Back'
import ProjectPop from '../../components/project/ProjectPop'
import { get } from '../../Api/url_data'


export default function Name({data}) {
    console.log(data)
  return (
    <div>
     <ProjectPop data={data}></ProjectPop>
    </div>
  )
}




export async function getStaticProps(context) {
    const topic = context.params.name;
    let data=null
    try{

        data = await API.get('/projects');
        // console.log(data.data)
        data=data.data.find((item)=>item.title===topic);
        // const list=data.courses;
        // for(let i=0;i<list.length;i++){
        //   const url_info=await get(data.courses[i].link)
        //   console.log(url_info)
        //   data.courses[i]={...data.courses[i],...url_info}
        // }
        // console.log(data)
        
     
    }catch(e){
        console.log(e.message);
    }
    return {
      props: { data: data||null }
    
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
  