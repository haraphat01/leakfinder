import Link from 'next/link';

export default function Footer() {
  return (


      <footer className="bg-gray-900 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LeakFinder. All rights reserved.</p>
          <nav className="mt-2">
            <Link href="/privacy" className="px-2 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="px-2 hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    
  );
}
