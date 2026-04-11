'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import SidebarItems from './app-sidebarItems';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const pathname = usePathname();
  const isAdmin = pathname.includes('admin');

  return (
    <Sidebar className="p-2" variant="inset">
      <SidebarHeader className="py-5 flex items-center justify-center">
        SGF - {isAdmin ? 'Admin' : 'Agente'}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarItems isAdmin={isAdmin} pathname={pathname} />
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
