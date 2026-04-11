'use client';

import { SidebarItemsAduana, SidebarItemsAdmin } from '@/consts/SidebarItems';
import { SidebarMenuItem, SidebarMenuButton } from './sidebar';
import { SidebarItemsProps } from '@/types/components/ui/app.sidebarItems';
import Link from 'next/link';

export default function SidebarItems({ isAdmin, pathname }: SidebarItemsProps) {
  const items = isAdmin ? SidebarItemsAdmin : SidebarItemsAduana;

  return (
    <>
      {items.map((item) => {
        const isActive = item.href == pathname;

        return (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild isActive={isActive} className="cursor-pointer">
              <Link href={item.href} className="flex items-center gap-5">
                {item.icon && <item.icon className="w-5 h-5" />}

                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </>
  );
}
