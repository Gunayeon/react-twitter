import { useNavigate } from "react-router-dom"
import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {JSX} from "react";
export default function MenuList() {
    const navigate=useNavigate();
    const BsHouseIcon=BsHouse as unknown as (props:any) => JSX.Element;
    const FaUserCircleIcon=FaUserCircle as unknown as (props:any) => JSX.Element;
    const MdLogoutIcon=MdLogout as unknown as (props:any) => JSX.Element;
    return (
        <div className="footer">
            <div className="footer__grid">
                <button type="button" onClick={() => navigate("/")}>
                    <BsHouseIcon />
                    Home
                </button>
                <button type="button" onClick={() => navigate("/profile")}>
                    <FaUserCircleIcon />
                    Profile
                </button>
                <button type="button" onClick={() => navigate('/')}>
                    <MdLogoutIcon />
                    Logout
                </button>
            </div>
        </div>
    )
}