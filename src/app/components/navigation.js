import Link from 'next/link';
import Image from "next/image";
import logo from "../../../public/images/logo.png"
export default function Navbar() {
  return (
 
      <header className="bg-gray-900 text-white py-4 shadow-lg ">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className='flex '>
            <Image src={logo} alt="leak finder logo" width={40} height={40}/>
          <h1 className="text-3xl ml-3 font-bold">LeakFinder</h1>
          </div>
          <nav>
            <Link href="/" className="text-lg px-4 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-lg px-4 hover:underline">
              About
            </Link>
            <Link href="/login" className="text-lg px-4 hover:underline">
              Login
            </Link>
          </nav>
        </div>
      </header>
   
  );
}
