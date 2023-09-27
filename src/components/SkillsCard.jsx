const SkillsCard = ({ icon, title, text }) => {
    return (
        <article className='flex flex-col items-center sm:items-start'>
            <span>{icon}</span>
            <h4 className='mt-6 font-bold'>{title}</h4>
            <p className='mt-2 text-slate-500 self-start'>{text}</p>
        </article>
    );
};
export default SkillsCard;
