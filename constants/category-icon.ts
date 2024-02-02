import {
  AtSign,
  CreditCard,
  FileText,
  Globe,
  LucideIcon,
  Mail,
  School,
  Shell,
  UserCircle2,
  Wifi,
} from "lucide-react";

interface CategoryIcon {
  [key: string]: LucideIcon;
}

export const categoryIcon: CategoryIcon = {
  "web-logins": Globe,
  "credit-cards": CreditCard,
  "identity-documents": UserCircle2,
  notes: FileText,
  "social-media-accounts": AtSign,
  "email-accounts": Mail,
  "wifi-passwords": Wifi,
  "bank-accounts": School,
  others: Shell,
};
