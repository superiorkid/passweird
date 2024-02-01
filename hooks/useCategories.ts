import { type Menu } from "@/types/menu";
import {
  AtSign,
  CreditCard,
  FileText,
  Globe,
  Mail,
  School,
  UserCircle2,
  Wifi,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useCategories() {
  const pathname = usePathname();

  const categories = useMemo<Menu[]>(
    () => [
      {
        label: "web logins",
        href: "/dashboard/categories/web-logins",
        icon: Globe,
        isActive: pathname === "/dashboard/categories/web-logins",
      },
      {
        label: "credit cards",
        href: "/dashboard/categories/credit-cards",
        icon: CreditCard,
        isActive: pathname === "/dashboard/categories/credit-cards",
      },
      {
        label: "identity documents",
        href: "/dashboard/categories/identity-documents",
        icon: UserCircle2,
        isActive: pathname === "/dashboard/categories/identity-documents",
      },
      {
        label: "notes",
        href: "/dashboard/categories/notes",
        icon: FileText,
        isActive: pathname === "/dashboard/categories/notes",
      },
      {
        label: "social media accounts",
        href: "/dashboard/categories/social-media-accounts",
        icon: AtSign,
        isActive: pathname === "/dashboard/categories/social-media-accounts",
      },
      {
        label: "email accounts",
        href: "/dashboard/categories/email-accounts",
        icon: Mail,
        isActive: pathname === "/dashboard/categories/email-accounts",
      },
      {
        label: "wifi passwords",
        href: "/dashboard/categories/wifi-passwords",
        icon: Wifi,
        isActive: pathname === "/dashboard/categories/wifi-passwords",
      },
      {
        label: "bank accounts",
        href: "/dashboard/categories/bank-accounts",
        icon: School,
        isActive: pathname === "/dashboard/categories/bank-accounts",
      },
    ],
    [pathname],
  );

  return categories;
}
