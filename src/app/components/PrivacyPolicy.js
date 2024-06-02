// pages/PrivacyPolicy.js
import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          At LeakFinder, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our platform.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information Collection</h2>
        <p className="mb-4 text-gray-700">
          We collect information that you provide to us directly, such as when you create an account, purchase credits, or contact us for support. This may include your name, email address, phone number, and payment information.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information Use</h2>
        <p className="mb-4 text-gray-700">
          We use your information to provide and improve our services, process transactions, and communicate with you. We may also use your information to send you promotional materials and updates about our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information Sharing</h2>
        <p className="mb-4 text-gray-700">
          We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We may share your information with service providers who assist us in operating our platform and processing transactions.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Security</h2>
        <p className="mb-4 text-gray-700">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the security of your information.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to This Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our platform. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        <p className="mb-4 text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at support@leakfinder.com.
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
