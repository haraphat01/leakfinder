// pages/TermsOfService.js
import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms of Service</h1>
        <p className="mb-4 text-gray-700">
          Welcome to LeakFinder. By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Use of Our Platform</h2>
        <p className="mb-4 text-gray-700">
          You must be at least 18 years old to use our platform. You agree to use our platform only for lawful purposes and in accordance with these Terms of Service. You are responsible for your use of our platform and for any content you provide.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Account Registration</h2>
        <p className="mb-4 text-gray-700">
          You may need to create an account to access certain features of our platform. You agree to provide accurate and complete information when creating your account and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Purchases and Payments</h2>
        <p className="mb-4 text-gray-700">
          If you purchase credits or other services through our platform, you agree to pay the applicable fees. All payments are processed securely through our payment provider, and we do not store your payment information.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prohibited Conduct</h2>
        <p className="mb-4 text-gray-700">
          You agree not to use our platform to engage in any prohibited conduct, including but not limited to: violating any laws, infringing on any intellectual property rights, distributing harmful or offensive content, or interfering with the operation of our platform.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Termination</h2>
        <p className="mb-4 text-gray-700">
          We may terminate or suspend your access to our platform at any time, with or without notice, for any reason, including if we believe you have violated these Terms of Service.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Disclaimer of Warranties</h2>
        <p className="mb-4 text-gray-700">
          Our platform is provided "as is" and "as available" without warranties of any kind. We do not guarantee that our platform will be uninterrupted or error-free.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our platform.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to These Terms</h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our platform. You are advised to review these Terms of Service periodically for any changes.
        </p>
        <p className="mb-4 text-gray-700">
          If you have any questions about these Terms of Service, please contact us at support@leakfinder.com.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
