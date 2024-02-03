import { getCurrentUser } from "@/actions/user-action";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";

const DashboardLayout = async ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const currentUser = await getCurrentUser();

  return (
    <Container className="max-w-screen-3xl">
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel defaultSize={19}>
          <Sidebar currentUser={currentUser} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={81}>
          <div className="max-h-screen overflow-y-auto">
            <Container className=" max-w-screen-lg px-5 py-3">
              {children}
            </Container>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Container>
  );
};

export default DashboardLayout;
