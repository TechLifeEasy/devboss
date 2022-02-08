import React from 'react';
import List from '../components/source/SourceList'
import { API } from '../Api/Back'


export default function Source({ data }) {
    console.log(data)
    return (
        <div className=' w-10/12 mx-auto py-5'>
            <List data={data}></List>
        </div>

    );
}


export async function getServerSideProps(context) {

    let data=[]
    try{

        data = await API.get('/sources');
        
     
    }catch(e){
        console.log(e.message);
    }


    return {
        props: { data:data.data.data || null }, // will be passed to the page component as props
    }
}