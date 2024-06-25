import SkillItem from "../utils/SkillItem"
const Skills = ({ skills }) => {
    return (
        <div>
            {
                skills.map((item) => {
                    return <SkillItem key={ item.id } image={ item.icon } skill={ item.technology } />
                }
                )
            }
        </div>)
}

export default Skills