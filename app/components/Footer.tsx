import Image from 'next/image';

const Footer = () => {
    return (
        <div className="fixed bg-gray-300 w-full bottom-0">
            <div className="flex flex-col lg:flex-row text-gray-900 text-sm justify-evenly items-center gap-5 my-5 ">
                <div className="flex flex-row gap-5">
                    Built with
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                        width={20}
                        height={20}
                        alt="next"
                    />
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg"
                        width={30}
                        height={30}
                        alt="prisma"
                    />
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                        width={20}
                        height={20}
                        alt="mongodb"
                    />
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                        width={20}
                        height={20}
                        alt="tailwind"
                    />
                </div>
                <div className="text-green-900 cursor-auto no-underline hover:text-pink-500 transition">
                    <a
                        href="https://github.com/ppalladio/fullstack-booking-website"
                        target="_blank"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
