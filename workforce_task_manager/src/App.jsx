import { useEffect } from "react"
import { setData } from "./Utils/localStorage"
import { Login } from "./Pages/Login"

const App = () =>{
  const data = { users: [
    {
      id: "1",
      name: "Admin",
      email: "admin@gmail.com",
      password: "123",
      role: "admin"
    },
    {
      id: "2",
      name: "Employee",
      email: "emp@gmail.com",
      password: "123",
      role: "employee"
    }
  ],
  tasks: []}

  useEffect(()=>{
    setData(data)
  },[])
  return(
    <div className="bg-[var(--body-background-Color)] w-full h-screen flex items-center justify-center">
     < Login />
    </div>
  )
}
export default App