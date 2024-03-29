import React from 'react';
import {MdNightsStay, MdWbSunny} from 'react-icons/md';

const Header = ({darkMode,setDarkMode}) => {
    return (
        <header className={"bg-white dark:bg-gray-900 text-gray-900 dark:text-white sticky top-0 z-10"}>
            <nav className={"flex justify-between items-center p-5"}>
                <h1 className={"text-lg font-bold"}>Mahela Dissanayake</h1>
                <div className={"flex space-x-2"} onClick={() => setDarkMode(!darkMode)}>

                    {darkMode ?(
                        <MdWbSunny className={"text-2xl cursor-pointer"}/>
                    ) : (
                        <MdNightsStay className={"text-2xl cursor-pointer"}/>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;