import React from 'react';
import List from '../components/source/SourceList'



export default function Source() {
    return (
        <div className=' w-10/12 mx-auto py-5'>
            <List></List>
        </div>

    );
}


export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
}