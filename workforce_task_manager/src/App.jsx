import { useEffect } from "react"
import { setData } from "./Utils/localStorage"
import { Login } from "./Pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./Routes/ProtectedRoute"
import { AdminDashboard } from "./Pages/Admin/AdminDashboard"
import { EmployeeDashboard } from "./Pages/Employee/EmployeeDashboard"

const App = () => {
  const data = {
    users: [
      {
        id: "1",
        name: "Admin",
        email: "admin@gmail.com",
        password: 123,
        role: "admin"
      },
      {
        id: "2",
        name: "Employee",
        email: "emp@gmail.com",
        password: 123,
        role: "employee"
      }
    ],
    tasks: []
  }

  useEffect(() => {
    setData(data)
  }, [])


  return (

    <BrowserRouter >

      <Routes >

        < Route
          path="/"
          element={<Login />} />

        < Route
          path="/admin/*"
          element={
            < ProtectedRoute >
              < AdminDashboard />
            </ProtectedRoute>}
        />

        < Route
          path="/employee/*"
          element={
            < ProtectedRoute >
              < EmployeeDashboard />
            </ProtectedRoute>}
        />

      </Routes>
    </BrowserRouter>
  )
}
export default App