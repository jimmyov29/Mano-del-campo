import { Children } from "react";

import { Footer } from "../layout/Footer/Footer";
import { Header } from "../layout/Header/Header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-dvh flex flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
