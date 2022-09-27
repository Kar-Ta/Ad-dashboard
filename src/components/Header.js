import React, { useState } from "react";
import { BsBank } from "react-icons/bs";
import { nav_icon, notif_icon, search_icon } from "../utils/svgs";
import Navigations from "./Navigations";

let navigations = ["Overview", "Payments", "Cards", "Account", "Admin"];
let userImg =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";


function Header() {
	const [active,setActive] = useState("Overview")
	return (
		<div className="items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3">
			{/* logo */}
			<div className="border-b-2 border-gray-900 w-[20%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
				<div className="flex w-[75%] md:w-[90%] h-10">
					<BsBank className="w-full h-full"/>
                    <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md ">OpenBank</h1>
				</div>
			</div>
			{/* navigations */}
			<div className="border-b-2 pb-5 border-gray-900 w-[70%] items-center justify-center flex space-x-2">
                {navigations.map((link) => (
                    <div onClick={()=>setActive(link)} className="relative items-center justify-center flex">
                        <Navigations title={link} key={link} />
						<div className={`${link === active ? "items-center justify-center flex absolute -bottom-3" : "hidden"}`}>
							{nav_icon}
						</div>
                    </div>
                ))}
            </div>
			{/* login cred */}
			<div className="border-b-2 border-gray-900 pb-4 pt-4 hidden md:flex items-center justify-center px-3 space-x-6 w-[30%]">
				<div>{search_icon}</div>
				<div>{notif_icon}</div>
				<img src={userImg} alt="userimage" className="w-8 h-8 rounded-full object-cover object-center" />
			</div>
		</div>
	);
}

export default Header;
