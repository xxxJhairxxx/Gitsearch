import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home/index.js"
import Usersresults from "../Pages/Usersresults/index.js"
import Repositories from "../Pages/Repositories/index.js"
import Userresult from "../Pages/Userresult/index.js"



const Router = () => {
    return (  
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/:name" element={<Usersresults />} /> 
                    <Route path="/user/:userName" element={<Userresult />}/>
                    <Route path="/repos/:userName/:repositoriesInfo" element={<Repositories />}/>
                </Routes>
    )
}

export default Router;