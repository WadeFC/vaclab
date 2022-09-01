import "./adminDashboard.scss"
import {
    Chart,
    DashboardNavbar,
    DashboardSidebar,
    FeaturedCharts,
    List,
    Widget
} from "../../../components";
export const AdminDashboard =()=>{
    return(
        <>
            <div className={"home"}>
                <DashboardSidebar/>
                <div className={"homeContainer"}>
                    <DashboardNavbar/>

                    <div className={"widgets"}>
                        <Widget type={"user"}/>
                        <Widget type={"order"}/>
                        <Widget type={"earnings"}/>
                        <Widget type={"balance"}/>
                    </div>

                    <div className={"charts"}>
                        <FeaturedCharts/>
                        <Chart title={"Last 6 Months (Revenue)"} aspect={2/1}/>
                    </div>
                    <div className={"listContainer"}>
                        <div className={"listTitle"}>Latest Transactions</div>
                        <List/>
                    </div>
                </div>
            </div>
        </>
    )
}