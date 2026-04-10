import { SidebarItem } from '@/types/components/ui/app-sidebar';
import {
  LayoutDashboard,
  FileText,
  Upload,
  FolderOpen,
  ChartColumnDecreasing,
  RefreshCcw,
  ClipboardList,
} from 'lucide-react';

export const SidebarItemsAduana: SidebarItem[] = [
  { label: 'Dashboard', href: '/aduana/dashboard', icon: LayoutDashboard },
  { label: 'Solicitar Factura', href: '/aduana/solicitud', icon: FileText },
  { label: 'Comprobantes', href: '/aduana/comprobantes', icon: Upload },
];

export const SidebarItemsAdmin: SidebarItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Solicitudes', href: '/admin/solicitudes', icon: ClipboardList },
  { label: 'Estatus', href: '/admin/estatus', icon: RefreshCcw },
  { label: 'Documentos', href: '/admin/documentos', icon: FolderOpen },
  { label: 'Reportes', href: '/admin/reportes', icon: ChartColumnDecreasing },
];
