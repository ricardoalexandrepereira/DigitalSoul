import {BsVectorPen, BsCode} from "react-icons/bs";
import {FiBarChart} from "react-icons/fi";
import { HiMagnifyingGlass} from "react-icons/hi2"

export const navLinks = [
    {id:1, path:"/", label:"Home"},
    {id:2, path:"/about", label:"About"},
    {id:3, path:"/portefolio", label:"Portefolio"},
    {id:4, path:"/contact", label:"Contact"},
]

export const services = [
    { id:1, title: "ui/ux design", icon:<BsVectorPen/>, finished: 65 },
    { id:2, title: "Web Development", icon:<BsCode/>, finished: 30 },
    { id:3, title: "General Marketing", icon:<HiMagnifyingGlass/>, finished: 20 },
    { id:4, title: "CEO", icon:<FiBarChart/>, finished: 30 },

]

export const countUpItems = [
    {id:1, number:9, text:"Years of Experience", },
    {id:2, number:145, text:"Satisfied Customers", },
    {id:3, number:742, text:"Design Items", },
    {id:4, number:9, text:"Clients Served", },
    

]

export const projects = [
    {id:1, img:"/project5.png", name:"Barber Shop"},
    {id:2, img:"/project2.png", name:"project two react"},
    {id:3, img:"/project3.png", name:"project three react"},
    {id:4, img:"/project4.png", name:"project four react"},
    {id:5, img:"/project6.png", name:"Sintra Tracking"},
]


export const skills = [
    {name:"web development", level:"92"},
    {name:"Marketing", level:"92"},
    {name:"Design", level:"90"},
    {name:"Branded content creation", level:"80"},
    {name:"Google Ads", level:"40"},
    {name:"Creative Reels", level:"50"},
]

export const contacts = [
    {id:1, title:"Address", text:"rua cidade de Evora 112, Montijo"},
    {id:2, title:"Phone", text:"+351 917 326 624"},
    {id:3, title:"Email", text:"digital_soul@outlook.pt"},
]

export const socialMedia = [
    {id:1, img:"/Facebook-logo.png"},
    {id:2, img:"/instagram-logos.webp"},
    {id:3, img:"/logo-Google.png"},
    {id:4, img:"/logo-Pinteres.png"},
    
]