import { useState, useEffect } from 'react'
import arrowIcon from '../assets/left-arrow.png'
import homeIcon from '../assets/logo.png'
import travelIcon from '../assets/Chart.png'
import drillIcon from '../assets/Folder.png'
import Table from '../components/Table'
import axios from 'axios'

const Dashboard = () => {

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/');
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData()
    }, [])





    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: drillIcon },
        { title: "Inbox", src: travelIcon },
        { title: "Accounts", src: drillIcon },
        { title: "Search", src: travelIcon },
    ]

    return (
        <div>
            <div className='flex'>
                <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-indigo-950 relative`}>
                    <img src={arrowIcon} onClick={() => { setOpen(!open) }} className={`absolute cursor-pointer ${!open && 'rotate-180'} -right-3 top-9 w-7 border-2 rounded-full bg-white`} />
                    <div
                        className='flex gap-x-4 items-center'>
                        <img
                            src={homeIcon}
                            onClick={() => { setOpen(!open) }}
                            className={`cursor-pointer duration-500 ${open && "rotate-180"}`} />
                        <h1
                            className={`${!open && 'scale-0'} text-white origin-left font-medium text-xl duration-300`}>
                            Designer
                        </h1>
                    </div>
                    <ul className='pt-6'>
                        {Menus.map((menu, index) => (
                            <li
                                key={index}
                                className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-indigo-900 rounded-md'
                            >
                                <img src={menu.src} alt="" />
                                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                    <h1>Home Page</h1>
                </div>
                <div className='flex-1'>
                </div>
            </div >
            <div>
                <Table />
            </div>

        </div>

    )
}

export default Dashboard