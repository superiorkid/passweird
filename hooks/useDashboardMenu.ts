import { type Menu } from "@/types/menu";
import { LucideLockKeyhole, ScanLineIcon, SparkleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useDashboardMenu() {
  const pathname = usePathname();

  const dashboaardMenu = useMemo<Menu[]>(
    () => [
      {
        label: "passwords",
        href: "/dashboard",
        icon: LucideLockKeyhole,
        isActive: pathname === "/dashboard",
      },
      {
        label: "password generator",
        href: "/dashboard/feature/password-generator",
        icon: SparkleIcon,
        isActive: pathname === "/dashboard/feature/password-generator",
      },
      {
        label: "password analyzer",
        href: "/dashboard/feature/password-analyzer",
        icon: ScanLineIcon,
        isActive: pathname === "/dashboard/feature/password-analyzer",
      },
    ],
    [pathname],
  );

  return dashboaardMenu;
}
