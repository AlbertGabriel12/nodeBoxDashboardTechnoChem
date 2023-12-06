import mainColors from "../theme/mainColors";

export default function Link(props) {
    return (
        <a style={{ marginTop: 24, color: mainColors.primaryColor }} href="javascript:;">
            {props.children}
        </a>
    )
}