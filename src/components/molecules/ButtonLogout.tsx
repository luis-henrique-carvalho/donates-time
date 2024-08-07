"use client";

import { DropdownMenuItem } from "../ui/dropdown-menu";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function ButtonLogout() {
  return (
    <DropdownMenuItem
      onClick={() => signOut()}
      className='mb-1 bg-destructive text-white hover:bg-destructive/80'
    >
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}
