export default function Question(props) {
    return (
        <div className='submission'>
            <p>{props.answer}</p>
            <p className='username'>{props.username}</p>
        </div>
    )
}