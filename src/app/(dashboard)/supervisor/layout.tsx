import { PropsWithChildren } from "react";
import NavbarProvider from "@/context/navbar.context";
import DashboardMain from "@/components/shared/dashboard-main";
import Navbar from "@/components/shared/navbar/navbar";
import { Role, SupervisorLinks } from "@/lib/constants";
import LayoutContainer from "@/components/shared/layout-container";
import DashboardHeader from "@/components/shared/dashboard-header";

const navList = Object.values(SupervisorLinks);

export default function SupervisorLayout({ children }: PropsWithChildren) {
  return (
    <LayoutContainer>
      <NavbarProvider>
        <Navbar navList={navList} />
        <DashboardMain>
          <DashboardHeader role={Role.Supervisor} />
          {children}
        </DashboardMain>
      </NavbarProvider>
    </LayoutContainer>
  );
}
