import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type React from "react";

const UILayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default UILayout;
