'use client';

import { useState } from 'react';
import { User, ShieldCheck, BookOpenText, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Data } from '@/types/page';

export default function LoginPage() {
  const router = useRouter();

  const [data, setData] = useState<Data>({
    role: 'cliente',
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const loginRoles = [
    { key: 'cliente', label: 'Cliente', icon: User },
    { key: 'admin', label: 'Admin', icon: ShieldCheck },
  ];

  const handleSubmit = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 font-sans text-foreground">
      <div className="mb-12 flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
          <BookOpenText size={36} strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">SGF</h1>
          <p className="text-lg font-medium text-muted-foreground mt-2">
            Sistema de Gestión de Facturación
          </p>
        </div>
      </div>

      <Card className="w-full max-w-[480px] border-none bg-card shadow-2xl rounded-[2rem]">
        <CardHeader className="pt-12 pb-6 text-center">
          <CardTitle className="text-2xl font-semibold text-foreground">Iniciar Sesión</CardTitle>
          <CardDescription className="text-base font-medium mt-2">
            Selecciona tu cuenta e ingresa tus credenciales
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 px-12 pb-14 pt-2">
          <div className="grid grid-cols-2 gap-5">
            {loginRoles.map((item) => (
              <Button
                key={item.key}
                type="button"
                variant={data.role === item.key ? 'default' : 'outline'}
                onClick={() => setData({ ...data, role: item.key as 'cliente' | 'admin' })}
                className={`h-auto flex-col gap-4 rounded-2xl border-[1.5px] p-7 transition-all duration-300 cursor-pointer ${
                  data.role === item.key
                    ? 'border-primary bg-primary/10 text-primary hover:bg-primary/20'
                    : 'border-border text-muted-foreground hover:bg-muted/50'
                }`}
              >
                <div
                  className={`p-3 rounded-xl ${data.role === item.key ? 'bg-primary/20' : 'bg-muted'}`}
                >
                  <item.icon size={28} />
                </div>
                <span className="text-base font-bold tracking-tight">{item.label}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-6 pt-2">
            <div className="space-y-3">
              <label className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-wider">
                Usuario
              </label>
              <Input
                type="username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                placeholder="Ingresa tu usuario"
                className="bg-muted/30 border-border h-14 rounded-2xl text-base px-5 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-wider">
                Contraseña
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  placeholder="Ingresa tu contraseña"
                  className="bg-muted/30 border-border h-14 rounded-2xl text-base px-5 pr-12 focus-visible:ring-primary"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 text-muted-foreground hover:bg-transparent"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              </div>
            </div>

            <Button
              className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-2xl shadow-lg mt-6 cursor-pointer transition-all duration-300"
              onClick={handleSubmit}
            >
              Ingresar como {data.role === 'cliente' ? 'cliente' : 'administrador'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <p className="mt-12 text-sm font-medium text-muted-foreground">
        &copy; 2026 SGF - Todos los derechos reservados
      </p>
    </div>
  );
}
