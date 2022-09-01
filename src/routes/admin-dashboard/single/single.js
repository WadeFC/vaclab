import "./single.scss"
import {Chart, DashboardNavbar, DashboardSidebar} from "../../../components";
export const Single =()=>{
    return(
        <div className={"single"}>
            <DashboardSidebar/>
            <div className={"singleContainer"}>
                <DashboardNavbar/>
                <div className={"top"}>
                    <div className={"left-board"}>
                        <div className={"editButton"}>
                            Edit
                        </div>
                        <h4 className={"title"}>Information </h4>
                        <div className={"item"}>
                            <div>
                                <img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"}
                                     alt={"Profile Image"}
                                     className={"itemImg"}
                                />
                            </div>
                            <div className={"details"}>
                                <h4 className={"itemTitle"}>Lucy Jane</h4>
                                <div className={"detailItem"}>
                                    <span className={"itemKey"}>Email</span>
                                    <span className={"itemValue"}>janelucy@gmail.com</span>
                                </div>
                                <div className={"detailItem"}>
                                    <span className={"itemKey"}>Phone</span>
                                    <span className={"itemValue"}>+2348089556788</span>
                                </div>
                                <div className={"detailItem"}>
                                    <span className={"itemKey"}>Address</span>
                                    <span className={"itemValue"}>Liberty Estate phase 2</span>
                                </div>
                                <div className={"detailItem"}>
                                    <span className={"itemKey"}>Country</span>
                                    <span className={"itemValue"}>USA</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"right"}>
                        <Chart aspect={3/1} title={"User transaction interaction"}/>
                    </div>
                </div>
                <div className={"bottom"}>

                </div>
            </div>
        </div>
    )
}