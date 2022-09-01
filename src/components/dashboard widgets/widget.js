import "./widget.scss"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
    AccountBalanceWalletOutlined,
    MonetizationOnOutlined,
    PersonOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";

const Widget =({type}) =>{
    let data

    //dummy amount data
    const amount = 100
    const diff = 20
    switch (type) {
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon:( <PersonOutlined className={"icon"} style={{color:"var(--primary-light-blue)"}}/>)
            }
            break
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon:( <ShoppingCartOutlined className={"icon"} style={{color:"var(--primary-light-blue)"}}/>)
            }
            break

        case "earnings":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon:( <MonetizationOnOutlined  className={"icon"} style={{color:"var(--primary-light-blue)"}}/>)
            }
            break

        case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon:( <AccountBalanceWalletOutlined className={"icon"} style={{color:"var(--primary-light-blue)"}}/>)
            }
            break
        default: break
    }
    return(
        <>
            <div className={"widget"}>
                <div className={"left"}>
                    <span className={"title"}>{data.title}</span>
                    <span className={"counter"}>{data.isMoney && "$"} {amount}</span>
                    <span className={"link"}>{data.link}</span>
                </div>
                <div className={"right"}>
                    <div className={"percentage positive"}>
                        <ExpandLessIcon/>
                        {diff}%
                    </div>
                    {data.icon}
                </div>
            </div>
        </>
    )
}
export {Widget}