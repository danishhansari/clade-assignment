import { useState } from "react"

const menuItem = ["Job preview", "Applicants", 'Match', "Messages"]
const Menubar = () => {
    const [active, setActive] = useState(0)
    return (
        <div className="border-b pl-4 md:pl-20 flex items-center gap-12 md:gap-16 overflow-auto pr-2">
            {
                menuItem.map((item, index) => {
                    return <button key={ index } className={ `text-sm md:text-lg transition-all py-2 md:py-4 px-2 ${index === active ? "active" : "text-gray-500"}` } onClick={ () => setActive(index) }>{ item }</button>
                })
            }
        </div>
    )
}

export default Menubar