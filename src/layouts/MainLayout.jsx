import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { Snowflake } from "lucide-react";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-[3%] py-[1%] md:px-[5%] md:py-[2%] mt-20 md:mt-12 relative">
        <div
          className="fixed top-20 left-10 opacity-5 pointer-events-none animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <Snowflake className="w-16 h-16 md:w-32 md:h-32 text-blue-400" />
        </div>
        <div
          className="fixed bottom-20 right-10 opacity-5 pointer-events-none animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        >
          <Snowflake className="w-20 h-20 md:w-40 md:h-40 text-cyan-400" />
        </div>
        <Outlet />
      </main>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default MainLayout;
