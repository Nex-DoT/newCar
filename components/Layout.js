import banner from "../public/images/baner.png";
import Image from "next/image";
const Layout = ({children}) => {
    return (
        <div>
            <header >
                <div className=" w-full h-40 mb-3 bg-gradient-to-t from-black to-black z-10 border-b-4 border-opacity-100">
                     <Image src={banner} className="w-full h-40 object-cover opacity-60 -z-10"/>
                </div>
            </header>
            <div>
                 {children}
            </div>
            <footer className="w-full flex items-center justify-center"> Nex-DoT | | this is test for "next-js" carShop &copy;</footer>
        </div>
    );
};

export default Layout;