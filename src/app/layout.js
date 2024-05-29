import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation";
import Footer from "./components/footer";
import { AuthProvider } from '../app/context/AuthContext';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Leaks Before They Find You",
  description: "LeakFinder, you can take proactive steps to protect your identity and ensure your peace of mind.",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">

        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>

      </html>
    </AuthProvider>
  );
}
