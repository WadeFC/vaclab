import "./adminDashboard.scss"
import {DashboardNavbar, DashboardSidebar} from "../../../components";
export const AdminDashboard =()=>{
    return(
        <>
            <div className={"home"}>
                <DashboardSidebar/>
                <div className={"homeContainer"}>container</div>
            </div>
        </>
    )
}