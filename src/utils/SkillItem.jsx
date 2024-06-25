const SkillItem = ({ image, skill }) => {
    return (
        <div className="border shadow-inner md:shadow-none rounded-lg px-2 py-1 gap-2">
            <img src={ image } className="w-4 inline-block mr-2" alt="" />
            <p className="inline-block w-50% text-gray-500">{ skill }</p>
        </div>
    )
}

export default SkillItem