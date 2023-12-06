import mainColors from "../theme/mainColors"

const styles = {
    color: mainColors.fontColor,
    margin: 0
}

export default function Title(props) {
    return (
        <h2 style={{ ...styles, ...props.style }}>
            {props.children}
        </h2>
    )
}