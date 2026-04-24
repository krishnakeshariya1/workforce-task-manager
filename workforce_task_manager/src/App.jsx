import { useEffect } from "react"
import { setData } from "./Utils/localStorage"
import { Login } from "./Pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./Routes/ProtectedRoute"

const App = () => {
  const data = {
    users: [
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
    tasks: []
  }

  useEffect(() => {
    setData(data)
  }, [])

  function Admin() {
    return <h1>Admin Dashboard</h1>;
  }

  function Employee() {
    return <h1>Employee Dashboard</h1>;
  }

  return (

    <BrowserRouter >

      <Routes >

        < Route
          path="/"
          element={<Login />} />

        < Route
          path="/admin"
          element={
            < ProtectedRoute >
              <Admin />
            </ProtectedRoute>}
        />

        < Route
          path="/employee"
          element={
            < ProtectedRoute >
              < Employee />
            </ProtectedRoute>}
        />

      </Routes>
    </BrowserRouter>
  )
}
export default App