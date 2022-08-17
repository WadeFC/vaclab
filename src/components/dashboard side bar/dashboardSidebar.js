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
                        <li>
                            <DashboardIcon/>
                            <span>Dashboard</span>
                        </li>
                        <li>
                            <PersonIcon/>
                            <span>Users</span>
                        </li>
                        <li>
                            <ShoppingCartIcon/>
                            <span>Products</span>
                        </li>
                        <li>
                            <CreditCardTwoToneIcon/>
                            <span>Orders</span>
                        </li>
                        <li>
                            <LocalShippingTwoToneIcon/>
                            <span>Delivery</span>
                        </li>
                        <li>
                            <QueryStatsTwoToneIcon/>
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneTwoToneIcon/>
                            <span>Notifications</span>
                        </li>
                        <li>
                            <EngineeringTwoToneIcon/>
                            <span>Doctors</span>
                        </li>
                        <li>
                            <SettingsTwoToneIcon/>
                            <span>Settings</span>
                        </li>
                        <li>
                            <AccountCircleTwoToneIcon/>
                            <span>Profile</span>
                        </li>
                        <li>
                            <LogoutTwoToneIcon/>
                            <span>Logout</span>
                        </li>

                    </ul>
                </div>
                <div className={"bottom"}>Color options</div>
            </div>
        </>
    )
}