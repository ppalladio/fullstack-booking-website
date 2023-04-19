'use client';
import Avatar from '../Avatar';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';

import { useCallback, useState } from 'react';
const UserMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen((value) => !value);
    }, []);
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                    onClick={() => {}}
                >
                    Airbnb your home
                </div>
                <div
                    className="p-4 md:py-1 md:px-2 border-neutral-200 border-[1px] flex flex-row items-center gap-3 rounded-ful cursor-pointer hover:shadow-md transition"
                    onClick={toggleOpen}
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {open && (
                <div className="absolute rounded-xl shadow-md overflow-hidden right-0 top-12 text-sm md:w-3/4 bg-white w-[40vw]">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={() => {}} label="Login" />
                            <MenuItem onClick={() => {}} label="Sign Up" />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
