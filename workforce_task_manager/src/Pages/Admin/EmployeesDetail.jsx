import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { useEffect, useState } from "react"
import { getData } from "../../Utils/localStorage"

export const EmployeesDetail = () =>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const appData = getData();
        setUsers(appData.users)
    },[])

    return(
        <div className="w-full h-auto  bg-[var(--body-background-Color)] flex flex-col">
            <div className=" grid grid-cols-[auto_auto] text-2xl justify-start gap-8 bg-[var(--navbar-color)] py-2 px-8">
                <div className="flex flex-col gap-1 bg-gray-200 py-4 px-8 rounded-2xl">
                    <h1 className="text-2xl text-[var(--primary-button-Color)] font-semibold mb-5">All Employee Info :</h1>
                    {users.map((user)=>{
                        return <h1 key={user.id}>
                            {user.name}
                        </h1>
                    } )}
                </div>
                <h2 className="text-start border-2 border-amber-50 ">keshariya</h2>
            </div>
           
        </div>
    )
}