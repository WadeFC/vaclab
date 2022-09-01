import "./dashboardSidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
export const DashboardSidebar =()=>{
    return(
        <>
            <div className={"sidebar"}>
                <div className={"top"}>
                    <span className={"logo"}>Logo</span>
                </div>
                <hr/>
                <div className={"center"}>
                    <ul>
                        <p className={"title"}>MAIN</p>
                        <li>
                            <DashboardIcon className={"icon"}/>
                            <span>Dashboard</span>
                        </li>
                        <p className={"title"}>LIST</p>
                        <li>
                            <PersonIcon className={"icon"}/>
                            <span>Users</span>
                        </li>
                        <li>
                            <ShoppingCartIcon className={"icon"}/>
                            <span>Products</span>
                        </li>
                        <li>
                            <CreditCardTwoToneIcon className={"icon"}/>
                            <span>Orders</span>
                        </li>
                        <li>
                            <LocalShippingTwoToneIcon className={"icon"}/>
                            <span>Delivery</span>
                        </li>
                        <p className={"title"}>ANALYTICS</p>
                        <li>
                            <QueryStatsTwoToneIcon className={"icon"}/>
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneTwoToneIcon className={"icon"}/>
                            <span>Notifications</span>
                        </li>
                        <p className={"title"}>SERVICES</p>
                        <li>
                            <EngineeringTwoToneIcon className={"icon"}/>
                            <span>System health</span>
                        </li>
                        <li>
                            <SettingsTwoToneIcon className={"icon"}/>
                            <span>Settings</span>
                        </li>
                        <p className={"title"}>USER</p>
                        <li>
                            <AccountCircleTwoToneIcon className={"icon"}/>
                            <span>Profile</span>
                        </li>
                        <li>
                            <LogoutTwoToneIcon className={"icon"}/>
                            <span>Logout</span>
                        </li>

                    </ul>
                </div>
                <div className={"bottom"}>
                    <div className={"colorOption"}></div>
                    <div className={"colorOption"}></div>
                </div>
            </div>
        </>
    )
}