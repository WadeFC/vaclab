import "./dashboardNavbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import {Avatar} from "../../components";

export const DashboardNavbar =()=>{
    return(
        <>
            <div className={"navbar"}>
                <div className={"wrapper"}>
                    <div className={"search"}>
                        <input type={"text"} className={"search"} placeholder={"search..."}/>
                        <SearchIcon/>
                    </div>

                    <div className={"items"}>
                        <div className={"item"}>
                            <LanguageIcon className={"icon"}/>
                        </div>

                        <div className={"item"}>
                            <DarkModeIcon className={"icon"}/>
                        </div>

                        <div className={"item"}>
                            <FullscreenExitIcon className={"icon"}/>
                        </div>

                        <div className={"item"}>
                            <NotificationsIcon className={"icon"}/>
                            <div className={"counter"}>1</div>
                        </div>

                        <div className={"item"}>
                            <MessageIcon className={"icon"}/>
                            <div className={"counter"}>2</div>
                        </div>

                        <div className={"item"}>
                            <LineWeightIcon className={"icon"}/>
                        </div>

                        <div className={"item"}>
                            <Avatar/>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}