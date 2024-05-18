import Link from 'next/link';
import Testimonials from '../components/swiper';


export default function Homepage() {
    return (
        <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-center items-center">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center mt-12">
                    <h2 className="text-4xl font-bold mb-4">Your Data. Your Security. Your Peace of Mind.</h2>
                    <p className="text-xl mb-6">Don't wait until it's too late. Find out if your information is compromised.</p>

                    <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 mt-5 rounded-lg text-lg hover:bg-blue-700 transition">

                        Check Your Information Now

                    </Link>
                </section>

                <section className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Why Thousands Trust LeakFinder</h3>
                    <p className="text-lg mb-6">
                    Don't be the last to know if your information is at risk.
                    </p>
                    <p className="text-lg mb-6">LeakFinder helps you stay one step ahead by constantly monitoring the dark web for your data.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
                        <li className="mb-2">
                            <span className="font-semibold">Comprehensive Scans:</span> Detects if your email addresses, phone numbers, or other sensitive data have been compromised.
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Real-Time Alerts:</span> Immediate notifications if your data is found in a breach.
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Privacy and Security:</span> State-of-the-art encryption to protect your information.
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">User-Friendly Interface:</span> Easy to use, with a clean and intuitive design.
                        </li>

                    </ul>
                </section>
                {/* <Testimonials /> */}
                <section className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Join Our Community of Informed Users</h3>
                    <p className="text-lg mb-6">
                        LeakFinder has already helped thousands of people secure their data.</p>
                    <p className="text-lg mb-6"></p>

                </section>
            </main>
        </div>
    );
}