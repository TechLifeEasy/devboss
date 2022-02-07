// import Head from 'next/head'
// import Image from 'next/image'
// /import Home from '../components/home/home'
import { API } from '../../Api/Back'
import SourcePop from '../../components/source/SourcePop'


export default function Name({data}) {
    console.log(data)
  return (
    <div>
     <SourcePop data={data}></SourcePop>
    </div>
  )
}




export async function getStaticProps(context) {
    const topic = context.params.name;
    let data=null
    try{

        data = await API.get('/sources');
        // console.log(data.data)
        data=data.data.data.find((item)=>item.title==topic);
        console.log(data)
        
     
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
  