import { Bell, ChevronDown, Briefcase } from 'lucide-react'
import atlassianIcon from "../assets/atlassian.png"
import NavList from './NavList'
const Navbar = () => {

    return (
        <>
            <nav className="flex items-center justify-between px-4 md:px-6 border-b py-1.5 md:py-3">
                <button className='bg-[#e7e7e7] text-[#DC4A2D] font-semibold py-2 md:py-3 px-4 md:px-5 tracking-wider text-lg'>
                    Logo
                </button>

                <div className='font-medium flex gap-3'>
                    <div className='flex items-center'>
                        <button className='bg-[#DC4A2D] text-white flex items-center pt-2 pb-2 px-2 md:pt-4 md:pb-3 md:px-3 rounded-full gap-1 shadow-[#f5907c] shadow-inner drop-shadow-lg border border-[#FCB4A5]'><Briefcase size={ 23 } />Jobs</button>
                    </div>

                    <NavList />

                </div>

                <div className='flex items-center gap-2 md:gap-3'>
                    <p className='relative'>
                        <span className='w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#dc4a2d] absolute -top-0.5 right-0.5'></span>
                        <Bell className='w-5 md:w-8' />
                    </p>
                    <img src={ atlassianIcon } className='w-8 h-8 rounded-full' alt="" />
                    <ChevronDown size={ 18 } />
                </div>
            </nav>
        </>
    )
}




export default Navbar