import "./dashboardDatatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, usersRow } from "../../dummyDataTableData";


export const DashboardDatatable =()=>{

    const actionColumn =[
        {
            field:"action",
            headerName:"Action",
            width:200,
            renderCell:()=>{
                return(
                    <div className={"cellAction"}>
                        <div className={"viewButton"}>
                            View
                        </div>
                        <div className={"deleteButton"}>
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]
    return(
        <>
            <div className={"datatable"}>
                <DataGrid
                    rows={usersRow}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />

            </div>

        </>
    )
}