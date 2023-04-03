import {Outlet} from "react-router-dom"
import Header from "./Header"
import Nav from "./Navbar.jsx"
import Footer from "./Footer.jsx"

export default function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Nav/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
