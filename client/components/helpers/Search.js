import React from 'react';

export default function Search() {
    return (

        <div>
            <div className="container flex justify-center items-center">

            
            <input type="text" className="w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />

            <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button>
            </div>
        </div >
    )
        ;
}
