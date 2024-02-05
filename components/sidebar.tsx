import { User } from "@prisma/client";
import { Account } from "./account";
import CategoriesMenu from "./categories-menu";
import DashboardsMenu from "./dashboards-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  currentUser: User | null;
}

const Sidebar = ({ currentUser }: SidebarProps) => {
  return (
    <ScrollArea>
      <aside className="flex max-h-screen px-4 py-3">
        <div className="w-full space-y-5">
          <Account currentUser={currentUser} />
          <div className="space-y-2.5">
            <h1 className="font-bold">Passwords</h1>
            <DashboardsMenu variant="DESKTOP" />
          </div>

          <div className="space-y-2.5">
            <h1 className="font-bold">Categories</h1>
            <CategoriesMenu variant="DESKTOP" />
          </div>
        </div>
      </aside>
    </ScrollArea>
  );
};

export default Sidebar;
