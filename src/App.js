import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashborad/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashborad/DashboardHome/DashboardHome';
import Payment from './Pages/Dashborad/Payment/Payment';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashborad/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashborad/AddDoctor/AddDoctor';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/appointment" element={<PrivateRoute>
            <Appointment />
          </PrivateRoute>}>
          </Route>

          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>

            </Route>
            <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>

            </Route>
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>}>
            </Route>
            <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
              <AddDoctor></AddDoctor>
            </AdminRoute>}>
            </Route>
          </Route>
          <Route path="/users" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
