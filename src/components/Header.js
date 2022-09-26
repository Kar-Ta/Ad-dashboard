import React from "react";
import { BsBank } from "react-icons/bs";
import Navigations from "./Navigations";

let navigations = ["Overview", "Payments", "Cards", "Account", "Admin"];

function Header() {
	return (
		<div className="items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3">
			{/* logo */}
			<div className="border-b-2 border-gray-900 w-[20%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
				<div className="flex w-[75%] h-10">
					<BsBank className="w-full h-full"/>
                    <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md ">OpenBank</h1>
				</div>
			</div>
			{/* navigations */}
			<div className="border-b pb-5 border-gray-900 w-[70%] items-center justify-center flex space-x-2">
                {navigations.map((link) => (
                    <div className="relative items-center justify-center flex">
                        <Navigations title={link} key={link} />
                    </div>
                ))}
            </div>
			{/* login cred */}
		</div>
	);
}

export default Header;
