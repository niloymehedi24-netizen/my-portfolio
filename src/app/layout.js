import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Mehedi Hasan Niloy | MERN Stack Developer",
  description: "Professional Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
        <Toaster 
        position="top-right" 
        toastOptions={{duration: 3000, style: {
        background: "#0f172a",
        color: "#fff",
        border: "1px solid #334155",
      },

        success: {
          iconTheme: {
          primary: "#3b82f6",
          secondary: "#fff",
        },
      },

        error: {
         iconTheme: {
         primary: "#ef4444",
         secondary: "#fff",
        },
      },
    }}/>
      </body>
    </html>
  );
}