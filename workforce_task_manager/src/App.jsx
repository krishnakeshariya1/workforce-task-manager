import { useEffect } from "react"
import { getData, setData } from "./Utils/localStorage"
import { Login } from "./Pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./Routes/ProtectedRoute"
import { AdminDashboard } from "./Pages/Admin/AdminDashboard"
import { EmployeeDashboard } from "./Pages/Employee/EmployeeDashboard"
import { EmployeesDetail } from "./Pages/Admin/EmployeesDetail"
import { CreateTask } from "./Pages/Admin/CreateTask"
import { AdminLayout } from "./Pages/Admin/AdminLayout"

const App = () => {
  const data = {
    users: [
      {
        id: "1",
        name: "Krishna keshariya",
        email: "keshariyakrishna8@gmail.com",
        password: 224755,
        role: "admin"
      },
    ],
    tasks: []
  }

  useEffect(() => {
    const appData = getData();

    if (!appData.users) setData(data)
  }, [])


  return (

    <BrowserRouter >

      <Routes >

        {/* Login Page Route  */}

        < Route
          path="/"
          element={<Login />} />

        {/* Admin routes */}

        < Route
          path="/admin/*"
          element={
            < ProtectedRoute role="admin" >
              < AdminLayout />
            </ProtectedRoute>}
        >
          < Route
            index
            element={< AdminDashboard />}
          />
          < Route
            path="employeesDetail"
            element={<EmployeesDetail />}
          />
          < Route
            path="CreateTask"
            element={< CreateTask />}
          />

        </Route>

        {/* Employee Routes */}

        < Route
          path="/employee/*"
          element={
            < ProtectedRoute role="employee">
              < EmployeeDashboard />
            </ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App