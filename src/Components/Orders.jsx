import Title from "./Title";
import mainColors from "../theme/mainColors";
import Link from "./Link";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(
        0,
        "16 Mar, 2019",
        "Elvis Presley",
        "Tupelo, MS",
        "VISA ⠀•••• 3719",
        312.44
    ),
    createData(
        1,
        "16 Mar, 2019",
        "Paul McCartney",
        "London, UK",
        "VISA ⠀•••• 2574",
        866.99
    ),
    createData(
        2,
        "16 Mar, 2019",
        "Tom Scholz",
        "Boston, MA",
        "MC ⠀•••• 1253",
        100.81
    ),
    createData(
        3,
        "16 Mar, 2019",
        "Michael Jackson",
        "Gary, IN",
        "AMEX ⠀•••• 2000",
        654.39
    ),
    createData(
        4,
        "15 Mar, 2019",
        "Bruce Springsteen",
        "Long Branch, NJ",
        "VISA ⠀•••• 5919",
        212.79
    )
]

export default function Orders() {
    return (
        <div className="containerChart">
            <Title style={{ color: mainColors.primaryColor }}>Recent Orders</Title>
            <table>
                <thead>
                    <tr>
                        <td className="rowHead">Date</td>
                        <td className="rowHead">Name</td>
                        <td className="rowHead">Ship To</td>
                        <td className="rowHead">Payment Method</td>
                        <td className="rowHead" style={{ textAlign: "right" }}>Sale Amount</td>
                    </tr>
                </thead>

                <tbody>
                    {rows.map(row => {
                        return (
                            <tr id={row.id}>
                                <td>{row.date}</td>
                                <td>{row.name}</td>
                                <td>{row.shipTo}</td>
                                <td>{row.paymentMethod}</td>
                                <td style={{ textAlign: "right" }}>{row.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link>See more orders</Link>
        </div>
    )
}