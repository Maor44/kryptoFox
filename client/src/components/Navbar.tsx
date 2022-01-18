import React, {useState} from 'react';
import {AiOutlineClose, BiMenuAltRight, GiFoxHead} from "react-icons/all";

interface NavbarItemProps {
    title: string,
    classes?: string
}
const NavbarItem = ({title, classes}:NavbarItemProps) => {
    return (
        <li className={classes}>{title}</li>
    )
}

const Navbar = () => {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <div className="flex items-center w-full p-8">
            <div className="flex items-center logo">
                <GiFoxHead color="white" fontSize={48} />
                <h1 className="text-white text-3xl font-bold">KryptoFox</h1>
            </div>
            <div className="ml-auto">
                <button className="sm:flex lg:hidden" onClick={() => setMenuStatus(true)}>
                    <BiMenuAltRight color="white" fontSize={42} />
                </button>

                <nav className={`${menuStatus ? "w-[48vw] gradient-bg-menu right-0" : "-right-full"} justify-center fixed top-0 bottom-0 transition-all ease-in-out duration-1000 lg:static flex h-auto right-0 w-full pt-0`}>
                    <button className="absolute top-2 right-2 sm:block lg:hidden" onClick={() => setMenuStatus(false)}>
                        <AiOutlineClose color="white" fontSize={32} />
                    </button>
                    <ul className="flex items-center text-white flex-col lg:flex-row">
                        {["market", "exchange", "tutorials", "wallets"].map((item, idx) => (
                            <NavbarItem title={item} key={`${item}_${idx}`} classes={"capitalize text-lg font-semibold cursor-pointer my-6 text-lg font-light lg:my-0 mx-3"} />
                        ))}
                        <li className="my-6 lg:my-0 mx-3">
                            <button className="capitalize py-2 px-7 bg-amber-500 rounded-full cursor-pointer hover:bg-amber-600">login</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;