import { MessageSquare, HandCoins, Users } from "lucide-react"

const NavList = () => {
    return (
        <ul className='items-center gap-12 py-4 shadow-inner rounded-full border px-8 hidden md:flex'>
            <li className='flex items-center gap-2 text-gray-400'>
                <p className='relative'>
                    <span className='w-1.5 h-1.5 rounded-full bg-[#dc4a2d] absolute -top-0.5 right-0'></span>
                    <MessageSquare size={ 20 } />
                </p>
                Messages</li>
            <li className='flex items-center gap-2 text-gray-400'><HandCoins size={ 20 } />Payments</li>
            <li className='flex items-center gap-2 text-gray-400'><Users size={ 20 } />Application </li>
        </ul>
    )
}

export default NavList