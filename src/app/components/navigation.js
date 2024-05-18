import Link from 'next/link';

export default function Navbar() {
  return (
 
      <header className="bg-gray-900 text-white py-4 shadow-lg ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">LeakFinder</h1>
          <nav>
            <Link href="/" className="text-lg px-4 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-lg px-4 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-lg px-4 hover:underline">
              Login
            </Link>
          </nav>
        </div>
      </header>
   
  );
}
