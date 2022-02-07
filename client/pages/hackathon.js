import { React, useState } from "react";
import HackathonFind from "../components/hackathon/HackathonFind";
import HackathonShow from "../components/hackathon/HackathonShow";

export default function Hackathon() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='flex flex-row justify-end mr-5'>
                <button onClick={() => { setShow(false) }} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Show Projects</button>
                <button onClick={() => { setShow(true) }} className='bg-sky-600 m-2 p-2 rounded-xl text-slate-100 hover:bg-sky-800'>Add Projects</button>
            </div>
            {show === true ?
                <>
                    <HackathonShow />
                </>
                :
                <>
                    <HackathonFind />
                </>
            }
        </div>

    );
}