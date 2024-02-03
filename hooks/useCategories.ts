import { type Menu } from "@/types/menu";
import {
  AtSign,
  CreditCard,
  FileText,
  Globe,
  ListMinus,
  Mail,
  School,
  Shell,
  UserCircle2,
  Wifi,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface CategoryParam extends Omit<Menu, "href" | "isAvailable"> {
  value: string | undefined;
}

export default function useCategories() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const categories = useMemo<CategoryParam[]>(
    () => [
      {
        label: "all",
        value: undefined,
        icon: ListMinus,
        isActive: !category,
      },
      {
        label: "web logins",
        value: "web-logins",
        icon: Globe,
        isActive: category === "web-logins",
      },
      {
        label: "credit cards",
        value: "credit-cards",
        icon: CreditCard,
        isActive: category === "credit-cards",
      },
      {
        label: "identity documents",
        value: "identity-documents",
        icon: UserCircle2,
        isActive: category === "identity-documents",
      },
      {
        label: "notes",
        value: "notes",
        icon: FileText,
        isActive: category === "notes",
      },
      {
        label: "social media accounts",
        value: "social-media-accounts",
        icon: AtSign,
        isActive: category === "social-media-accounts",
      },
      {
        label: "email accounts",
        value: "email-accounts",
        icon: Mail,
        isActive: category === "email-accounts",
      },
      {
        label: "wifi passwords",
        value: "wifi-passwords",
        icon: Wifi,
        isActive: category === "wifi-passwords",
      },
      {
        label: "bank accounts",
        value: "bank-accounts",
        icon: School,
        isActive: category === "bank-accounts",
      },
      {
        label: "others",
        value: "others",
        icon: Shell,
        isActive: category === "others",
      },
    ],
    [category],
  );

  return categories;
}
