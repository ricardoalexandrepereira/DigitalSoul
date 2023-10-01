"use client"
import {useTranslations} from 'next-intl';
import Link from "next/link"
import {navLinks} from "@/Data/Data"
import {usePathname} from "next/navigation"
import {HiOutlineMenuAlt4, HiX} from "react-icons/hi"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"
import Image from "next/image"



const Navbar = () => {

    const t = useTranslations('Index');

const pathname = usePathname()

const isActive = (path=>(
    pathname === path ? "text-Purple" : "text-WhiteGray"
))

const [showMenu, setShowMenu] = useState(false)
const [navScroll, setNavScroll] = useState(false)

useEffect(()=>{
function scrollActive(){
    setNavScroll(window.scrollY > 20)
}
window.addEventListener("scroll",scrollActive)
return ()=> window.removeEventListener("scroll", scrollActive)
},[])

const menuVariants = {
hidden: {
    scale:0
},
visible:{
    scale:40,
    transition:{
        type:"tween",
        duration:1
    }
}
}

const navLinkVariations = {
    hidden: {
        display:"none",
        opacity: 0
    },
    visible:{
        opacity:1,
        y:-30,
        transition:{
            delay:0.7
        }
    }
}

  return (
    <header className={`fixed w-full top-0 left-0 z-20 ${navScroll ? "bg-Glass1 backdrop-blur-sm" : ""}`}>
        <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showMenu ? "hidden" : ""}`}>
            <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex gap-2 items-center text-3xl font-light text-[#e83468]" id="letraEspecial">
                <Image src={"/logodigital.png"} width={50} height={50} alt={"logo"}/>
                Digital Soul
                </Link>

                

                <div className="hidden md:flex items-center justify-center space-x-4">
                  {navLinks.map(links => (
                    <Link key={links.path} className={`text-lg font-medium TextShadow ${isActive(links.path)}`} href={links.path}>{links.label}</Link>
                  ))}
                </div>

               {/*  hamburguer menu */}
                <div className="flex md:hidden items-center">
                    <HiOutlineMenuAlt4 className="cursor-pointer w-6 h-6 text-[#e83468]" onClick={()=> setShowMenu(!showMenu)}/>
                </div>
            </div>
        </nav>

        {/* contextual menu */}
        <motion.div variants={menuVariants} initial="hidden" animate={showMenu ? "visible" : "hidden"} 
        className="bg-black fixed top-0 left-0 ring-0 w-16 h-16 rounded-full">
        </motion.div>

        <motion.nav variants={navLinkVariations} animate={showMenu ? "visible" : "hidden"} className="min-h-screen md:hidden flex flex-col justify-center" >
            {navLinks.map(links =>(
                <Link 
                className={`block px-3 py-2 text-5xl font-medium ${isActive(links.path)}`}
                onClick={(prev)=> setShowMenu(!prev)}
                key={links.id} href={links.path}>
                    {links.label}
                </Link>
            ))}

                <div className="fixed bottom-4 left-6 flex items-center flex-col gap-4"></div>
            <HiX className="absolute text-white top-20 right-8 w-6 h-6 cursor-pointer" 
            onClick={(prev) => setShowMenu(!prev)}
            />
        </motion.nav>
    </header>
  )
}

export default Navbar