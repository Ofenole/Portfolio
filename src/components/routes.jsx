import Backend from "../pages/Backend"
import Cv from "../pages/Cv"
import HomePage from "../pages/HomePage"
import Kontakt from "../pages/Kontakt"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"



const routes = [
   {path:"/" ,element:<HomePage/>,id:1},
   {path:"/kontakt" ,element:<Kontakt/>,id:2},
   {path:"/skills" ,element:<Skills/>,id:3},
   {path:"/projects" ,element:<Projects/>,id:4},
   {path:"/cv" ,element:<Cv/>,id:5},
   {path:"/backend" ,element:<Backend/>,id:6},
   
]

export default routes