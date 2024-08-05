'use client'

import { DropdownMenuItem } from "../ui/dropdown-menu"
import { DropdownMenuShortcut } from "../ui/dropdown-menu"
import { signOut } from "next-auth/react"

export default function ButtonLogout() {
	return (
		<DropdownMenuItem onClick={() => signOut()} className="bg-destructive mb-1 text-white hover:bg-destructive/80">
			Log out
			<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
		</DropdownMenuItem>
	)
}
