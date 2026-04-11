import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import HeaderApp from './components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen py-3 px-2">
        <div className="bg-background shadow-sm rounded-xl h-full">
          <HeaderApp />
          <div className="p-8">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
}
