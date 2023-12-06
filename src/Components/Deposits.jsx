import mainColors from "../theme/mainColors";
import Link from "./Link";
import Title from "./Title";

export default function Deposits() {
    return (
        <div className="containerChart">
            <Title style={{ color: mainColors.primaryColor }}>Recent Deposits</Title>
            <h1>
                $ 3,024.00
            </h1>
            <h4 style={{ marginTop: 0, color: "rgba(0, 0, 0, 0.54)" }}>
                on 15 March, 2019
            </h4>
            <Link>View balance</Link>
        </div>
    )
}