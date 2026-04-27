import { useEffect } from "react"
import { setData } from "./Utils/localStorage"
import { Login } from "./Pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./Routes/ProtectedRoute"
import { AdminDashboard } from "./Pages/Admin/AdminDashboard"
import { EmployeeDashboard } from "./Pages/Employee/EmployeeDashboard"
import { EmployeesDetail } from "./Pages/Admin/EmployeesDetail"
import { AllTasks } from "./Pages/Admin/AllTasks"
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

        {/* Login Page Route  */}
        
        < Route
          path="/"
          element={<Login />} />

            {/* Admin routes */}

          < Route
            path="/admin/*"
            element={
              < ProtectedRoute >
                < AdminLayout />
              </ProtectedRoute>}
          >
            < Route 
              index 
              element={ < AdminDashboard />}
            />
            < Route 
              path="employeesDetail" 
              element={ <EmployeesDetail />}
            />
            < Route 
              path="AllTasks" 
              element={ < AllTasks />}
            />

          </Route>

        {/* Employee Routes */}

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