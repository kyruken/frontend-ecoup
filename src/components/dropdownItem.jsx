import { Link } from "react-router-dom"
export default function dropDownItem(props) {
    return (
        <div>
            <Link to={props.link}>
                <img src={props.image}></img>
                <span>{props.text}</span>
            </Link>
        </div>
    )
}