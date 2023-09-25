import {BsVectorPen, BsCode} from "react-icons/bs";
import {FiBarChart} from "react-icons/fi";
import { HiMagnifyingGlass} from "react-icons/hi2"
import {FaDesktop} from "react-icons/fa"
import {AiOutlineShareAlt} from "react-icons/ai"
import {BiCubeAlt} from "react-icons/bi"
import {MdBrandingWatermark} from "react-icons/md"
import {TbMessageChatbot} from "react-icons/tb"
import {BsFillPeopleFill} from "react-icons/bs"


export const navLinks = [
    {id:1, path:"/", label:"Home"},
    {id:2, path:"/about", label:"Serviços"},
    {id:3, path:"/portefolio", label:"Portefólio"},
    {id:4, path:"/contact", label:"Contacto"},
]

export const services = [
    { id:1, title: "ui/ux design", icon:<BsVectorPen/>, finished: 65 },
    { id:2, title: "Web Development", icon:<BsCode/>, finished: 30 },
    { id:3, title: "General Marketing", icon:<HiMagnifyingGlass/>, finished: 20 },
    { id:4, title: "CEO", icon:<FiBarChart/>, finished: 30 },

]

export const countUpItems = [
    {id:1, number:9, text:"Anos de Experiência", },
    {id:2, number:145, text:"Clientes Satisfeitos", },
    {id:3, number:354, text:"Design concluído", },
    {id:4, number:40000, text:"Horas Dedicadas", },
    

]

export const projects = [
    {id:1, img:"/project5.png", name:"Barber Shop", link:"https://caesers-club.vercel.app/"},
    {id:2, img:"/project7.png", name:"website Pessoal Logistica", link:"https://portefolio-mariana.vercel.app/"},
    {id:3, img:"/project3.png", name:"rho restaurante", link:"https://enterprise-rho.vercel.app/"},
    {id:4, img:"/project4.png", name:"project four react", link:"https://starlit-phoenix-482e6b.netlify.app/#"},
    {id:5, img:"/project9.png", name:"Stand auto", link:"https://voluble-dodol-e89e06.netlify.app/"},
    {id:6, img:"/project8.png", name:"Fisioterapia website", link:"https://fisioterapiamendoza.vercel.app/index.html"},
]


export const skills = [
    {name:"Hospedagem", icon:<FaDesktop size={"4em"} color={"#e83468"}/>, info:"Site hospedagem e a funcionar. Vamos manter o teu site no ar 24hs."},
    {name:"Alterações", icon:<AiOutlineShareAlt size={"4em"} color={"#e83468"}/>, info:"Manutenção Vamos atualizar, fotos, textos e imagens."},
    {name:"Criação de Páginas", icon:<BiCubeAlt size={"4em"} color={"#e83468"}/>, info:"Programação, Criação ou otimização de páginas novas do teu site."},
    {name:"Branding", icon:<MdBrandingWatermark size={"4em"} color={"#e83468"}/>, info:"Criamos a tua marca do zero de acordo com as tuas ideias."},
    {name:"Chatbot", icon:<TbMessageChatbot size={"4em"} color={"#e83468"}/>, info:"Desenvolve-mos chatbot automatizados e com inteligência artificial."},
    {name:"Acompanhamento", icon:<BsFillPeopleFill size={"4em"} color={"#e83468"}/>, info:"Acompanhamos-te em todo o processo de criação da tua marca."},
    
]


export const contacts = [
    {id:1, title:"Endereço", text:"rua cidade de Evora 112, Montijo"},
    {id:2, title:"Telefone", text:"+351 917 326 624"},
    {id:3, title:"Email", text:"digital_soul@outlook.pt"},
]

export const socialMedia = [
    {id:1, img:"/Facebook-logo.png"},
    {id:2, img:"/instagram-logos.webp"},
    {id:3, img:"/logo-Google.png"},
    {id:4, img:"/logo-Pinteres.png"},
    
]
export const brandingMarquee = [
    {id:1, img:"/aa.png"},
    {id:2, img:"/bb.png"},
    {id:4, img:"/2.png"},
    {id:5, img:"/3.png"},
    {id:6, img:"/4.png"},
    {id:7, img:"/5.png"},
    {id:8, img:"/6.png"},
    {id:9, img:"/7.png"},
    {id:10, img:"/blueCow.png"},
    
    
]