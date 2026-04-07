'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'

/** Illustrative reader row for docs sidebar — no menu, links, or actions */
export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div
          role="note"
          data-slot="sidebar-menu-button"
          data-sidebar="menu-button"
          data-size="lg"
          className="flex h-12 w-full min-w-0 items-center gap-2 overflow-hidden rounded-md px-0 py-2 text-left text-sm text-sidebar-foreground"
        >
          <Avatar className="h-8 w-8 shrink-0 rounded-lg">
            <AvatarImage src={user.avatar} alt="" />
            <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
            <span className="break-words font-medium whitespace-normal">
              {user.name}
            </span>
            <span className="break-words text-xs whitespace-normal text-sidebar-foreground/70">
              {user.email}
            </span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
