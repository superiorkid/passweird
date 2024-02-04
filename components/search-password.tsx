"use client";

import { SearchIcon } from "lucide-react";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";

interface SearchPasswordProps {
  total: number;
}

const SearchPassword = ({ total }: SearchPasswordProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((searchTerm) => event.target.value);
  };

  useEffect(() => {
    const handleSearch = (value: string) => {
      router.push(pathname + "?" + createQueryString("search", value));
    };

    handleSearch(debouncedSearchTerm);
  }, [createQueryString, debouncedSearchTerm, pathname, router]);

  return (
    <div className="relative w-full min-w-0">
      <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-600" />
      <Input
        type="search"
        placeholder="Search"
        disabled={!total}
        className="pl-11"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchPassword;
