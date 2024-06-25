const SkillItem = ({ image, skill }) => {
    return (
        <button disabled className="border shadow-inner px-2 py-1 rounded-lg my-2 mx-1 block">
            <img src={ image } className="w-4 inline-block mr-1" alt="" />
            { skill }
        </button>
    )
}

export default SkillItem