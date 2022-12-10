export default function Question(props) {
    return (
        <div className='padding-all-1 padding-lr-2'>
            <div className='padding-tb-1'>
                <h2>{props.title}</h2>
                <button className='margin-top-1'>{props.difficulty}</button>
            </div>
            <p className="border-bottom padding-tb-1">{props.description}</p>
        </div>
    )
}