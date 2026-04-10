import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export default function HeaderApp() {
  return (
    <>
      <div className="h-15 rounded-t-xl space-x-3 flex items-center px-3">
        <SidebarTrigger className="w-10 h-10 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="shrink-0 bg-border h-full w-px mx-2 data-[orientation=vertical]:h-4"
        />
        <h2 className="ml-3 text-black/80 font-medium">Sistema de Gestión de Facturación</h2>
      </div>
      <Separator />
    </>
  );
}
