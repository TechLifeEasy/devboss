// import Head from 'next/head'
// import Image from 'next/image'
// /import Home from '../components/home/home'
import { API } from '../../Api/Back'
import User from '../../components/User/User'


export default function Name({data}) {
    //console.log(data)
  return (
    <div>
     <User data={data}></User>
    </div>
  )
}




export async function getStaticProps(context) {
    const name = context.params.name;
    let data=null
    try{

        data = await API.get('/users/p/'+name);
        // // //console.log(data.data)
        // data=data.data.data.find((item)=>item.title==topic);
        //console.log(data)
        
     
    }catch(e){
        //console.log(e.message);
    }


  
    return {
      props: { data: data.data.data||null }
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
  