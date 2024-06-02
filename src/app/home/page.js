import Link from 'next/link';
import Testimonials from '../components/swiper';
import Head from 'next/head';

export default function Homepage() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <Head>
        <title>LeakFinder - Protect Your Data and Identity</title>
        <meta name="description" content="LeakFinder is a cutting-edge solution that helps you stay one step ahead of data breaches and identity theft. Get started today!" />
        <meta name="keywords" content="data breach, identity theft, dark web monitoring, cybersecurity" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mt-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Your Data. Your Security. Your Peace of Mind.</h1>
          <p className="text-xl mb-6 text-gray-600">Don't wait until it's too late. Find out if your information is compromised.</p>

          <Link href="/dashboard"  className="bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white px-6 py-3 mt-5 rounded-lg text-lg shadow-md">
            Check Your Information Now
          </Link>
         
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Thousands Trust LeakFinder</h2>
          <p className="text-lg mb-6 text-gray-600">
            Don't be the last to know if your information is at risk.
          </p>
          <p className="text-lg mb-6 text-gray-600">LeakFinder helps you stay one step ahead by constantly monitoring the dark web for your data.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Scans:</h3>
              <p>Detects if your email addresses, phone numbers, or other sensitive data have been compromised.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Real-Time Alerts:</h3>
              <p>Immediate notifications if your data is found in a breach.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Privacy and Security:</h3>
              <p>State-of-the-art encryption to protect your information.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">User-Friendly Interface:</h3>
              <p>Easy to use, with a clean and intuitive design.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Join Our Community of Informed Users</h2>
          <p className="text-lg mb-6 text-gray-600">
            LeakFinder has already helped thousands of people secure their data.
          </p>
          <p className="text-lg mb-6 text-gray-600"></p>
          {/* <Testimonials /> */}
        </section>
      </main>
    </div>
  );
}