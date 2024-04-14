import { NAVIGATION_BUTTONS } from "@/components/navigation/navConfig";
import { NavigationButton } from "@/components/navigation/navigationButton";

export const NavigationButtons = () => {
  return (
    <nav className="flex-1 flex items-center justify-center gap-4">
      {NAVIGATION_BUTTONS.map(({ path, name }) => (
        <NavigationButton path={path} name={name} key={path}/>
      ))}
    </nav>
  );
};
