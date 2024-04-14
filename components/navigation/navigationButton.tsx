"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "@/components/navigation/navConfig";

export const NavigationButton = ({ path, name }: NavigationItem) => {
  const pathName = usePathname();
  const isNavItemActive = pathName === path;

  return (
    <Button asChild variant="outline" className={isNavItemActive ? "bg-custom-accent" : ""}>
      <Link href={path}>{name}</Link>
    </Button>
  );
};
