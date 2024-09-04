import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";
import { CrumpledPaperIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme_toggle";
import { cn } from "@/lib/utils";
import { config } from "@/app/config";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const [first, last] = config.author.name.toUpperCase().split(" ");

  return (
    <header className="w-full">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Name */}
        <div className="text-xl font-bold">
          <Link href="/">
            <p>{first}</p>
            <p>{last}</p>
          </Link>
        </div>

        {/* Expanding Spacer */}
        <div className="flex-grow"></div>

        {/* Right Side: Navigation Menu */}
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={config.profiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <LinkedInLogoIcon />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={config.profiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <GitHubLogoIcon />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Stuff</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px] lg:grid-cols-[.05fr_.75fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/stuff"
                        >
                          <CrumpledPaperIcon />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Stuff
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {config.site.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/stuff/projects" title="Projects">
                      Past projects
                    </ListItem>
                    <ListItem href="/stuff/quotes" title="Quotes">
                      Quotes I like
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
