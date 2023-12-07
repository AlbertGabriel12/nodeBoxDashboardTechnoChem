import mainColors from "../theme/mainColors";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Title from "./Title";

const styles = {
    header: {
        maxWidth: "100%",
        height: 64,
        backgroundColor: mainColors.primaryColor,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 32
    }
}

export default function Dashboard() {
    return (
        <>
            <header style={styles.header}>
                <Title>Dashboard</Title>
            </header>
            <div className="containerCharts">
                <Chart />
                <Deposits />
                <Orders />
            </div>
        </>
    )
}