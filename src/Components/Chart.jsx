import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import Title from "./Title";
import mainColors from "../theme/mainColors";

function createData(time, ammount) {
    return { time, ammount }
}

const data = [
    createData("00:00", 0),
    createData("03:00", 300),
    createData("06:00", 600),
    createData("09:00", 800),
    createData("12:00", 1500),
    createData("15:00", 2000),
    createData("18:00", 2400),
    createData("21:00", 2400),
    createData("24:00", undefined)
]

export default function Chart() {
    return (
        <div className="containerChart" style={{ height: 180 }}>
            <Title style={{ color: mainColors.primaryColor }}>Today</Title>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="time" />
                    <YAxis dataKey="ammount">
                        <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                            Sales ($)
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="ammount" stroke={mainColors.primaryColor} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div >
    )
}