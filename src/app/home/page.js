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
          <p className="text-xl mb-4 text-gray-600">Don't wait until it's too late. Find out if your information is compromised.</p>
          <h2 className="text-3xl font-bold mb-4 text-center">Over 7 Million Leaks Found and Counting</h2>
          <p className="text-lg mt-4 text-center">Join thousands of others who trust Leakfinder to keep their information safe. Stay informed about any leaks involving your personal information.</p>
      
          <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white px-6 py-3 mt-5 rounded-lg text-lg shadow-md">
            Check Your Information Now
          </Link>

        </section>
        <section id="features" className="py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Use Leakfinder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Stay Safe</h3>
              <p>Your personal information can be misused if it falls into the wrong hands. Protect yourself from identity theft and fraud.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Immediate Alerts</h3>
              <p>Subscribe to receive immediate notifications if we find your details online, ensuring you can take action quickly.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Coverage</h3>
              <p>We continuously scan the web, including the dark web, to provide you with up-to-date information about any leaks.</p>
            </div>
          </div>
        </section>

        <section id="subscription" className="py-10 bg-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Subscription Plan</h2>
          <p className="text-lg mb-6 text-center">Subscribe for just $12 per year to receive instant alerts if your information is found online.</p>
          <div className="text-center">
            <form action="https://your-stripe-checkout-link" method="POST">
              <button type="submit" className="bg-black text-white py-2 px-4 rounded-md">Subscribe Now</button>
            </form>
          </div>
        </section>
       
        

        <section id="search" className="py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Check Your Information</h2>
          <p className="text-lg mb-6 text-center">Don't want to subscribe? Buy credits to search for your information anytime.</p>
          <div className="text-center">
            <Link href="/search" className="bg-black text-white py-2 px-4 rounded-md">Buy Credits</Link>
          </div>
        </section>
        {/* <section className="mt-12 text-center">
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
        </section> */}


      </main>

    </div>
  );
}