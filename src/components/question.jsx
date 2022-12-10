export default function Question(props) {
    return (
        <div className='question-container padding-all-1 padding-lr-2'>
            <div className='flex flex-space-between padding-tb-1'>
                <h2>{props.title}</h2>
                <button>{props.difficulty}</button>
            </div>
            <p className="border-bottom padding-tb-1">{props.description}</p>
        </div>
    )
}