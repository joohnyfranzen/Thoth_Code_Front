import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "../components/Logout";
import Navbar from "../components/Navbar_2";
import Dashboard from "../Screens/Dashboard";
import Home from "../Screens/Home";
import NewPost from "../Screens/Posts/NewPost";


export default function Logged() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/newpost" element={<NewPost/>}/>
            </Routes>
        </Router>
    )
}