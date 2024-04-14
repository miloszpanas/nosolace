import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserIcon } from "@/components/navigation/userIcon";
import NoSolaceLogo from "@/assets/images/no_solace_log.png";
import { NavigationButtons } from "@/components/navigation/navigationButtons";

export const NavigationBar = () => {
  return (
    <header className="flex items-center h-14 p-4 font-medium min-h-20">
      <Link className="flex items-center gap-1" href="/">
        <span className="font-semibold">No Solace</span>
      </Link>
      <NavigationButtons />
      <div className="flex items-center gap-4 md:gap-6">
        <Button asChild variant="outline">
          <Link href="#">Login/Register</Link>
        </Button>
        <Button size="icon" variant="outline">
          <UserIcon className="w-4 h-4" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
};
