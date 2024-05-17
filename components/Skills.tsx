// components.Skills

interface Skill {
    name: string;
    iconClass: string;
}

interface SkillList {
    skills: Array<Skill>;
}

export default function Skills(props: SkillList) {
    const listSkills = props.skills.map( item => (
        <div
            className="flex justify-center items-center rounded gap-y-0 gap-x-4 p-4 hover:bg-amber-400 hover:text-black bg-slate-700 text-slate-100 transition-all duration-500 ease-in-out"
            key={item.name}
        >
            <i className={`bx bxl-${item.iconClass} text-2xl`}/>
            <p>{item.name}</p>
        </div>
    ))
    return (
        <section className="py-8 px-0" id="skills-container">
            <h2 className="text-3xl	font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" id="skills-grid">
                {listSkills}
            </div>
        </section>
    )
}
