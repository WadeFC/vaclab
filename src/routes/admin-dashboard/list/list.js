import "./list.scss"
import {DashboardNavbar, DashboardSidebar} from "../../../components";
import {DashboardDatatable} from "../../../components/dashboard data table/dashaboardDatatable";


export const List =()=>{
    return(
        <>
            <div className={"list"}>
                <DashboardSidebar/>
                <div className={"listContainer"}>
                    <DashboardNavbar/>
                    <DashboardDatatable/>
                </div>
            </div>
        </>
    )
}