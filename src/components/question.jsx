export default function Question(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.difficulty}</p>
        </div>
    )
}