import React from "react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const DashboardNavbar = () => {
  return (
    <nav className="px-4 fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          variant="primary"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button
          size="sm"
          className="rounded-sm block md:hidden h-auto py-1.5 px-2"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectPersonalUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
