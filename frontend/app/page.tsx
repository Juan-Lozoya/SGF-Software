'use client';

import { useState } from 'react';
import { User, ShieldCheck, BookOpenText, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface Data {
  role: 'cliente' | 'admin';
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  const [data, setData] = useState<Data>({
    role: 'cliente',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const loginFields = [
    {
      key: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'nombre@empresa.com',
    },
    {
      key: 'password',
      label: 'Contraseña',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Ingresa tu contraseña',
    },
  ];

  const loginRoles = [
    { key: 'cliente', label: 'Cliente', icon: User },
    { key: 'admin', label: 'Admin', icon: ShieldCheck },
  ];

  const handleSubmit = () => {
    console.log('Datos de inicio de sesión:', data);
    router.push('/dashboard');
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f8f9f8] p-6 font-sans text-zinc-900">
        <div className="mb-12 flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#244c44] text-white shadow-lg">
            <BookOpenText size={36} strokeWidth={1.5} />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">SGF</h1>
            <p className="text-lg font-medium text-zinc-500 mt-2">
              Sistema de Gestión de Facturación
            </p>
          </div>
        </div>

        <Card className="w-full max-w-[480px] border-none bg-white shadow-[0_10px_40px_rgb(0,0,0,0.06)] rounded-[2.5rem]">
          <CardHeader className="pt-12 pb-6 text-center">
            <CardTitle className="text-2xl font-semibold text-zinc-800">Iniciar Sesión</CardTitle>
            <CardDescription className="text-base font-medium text-zinc-400 mt-2">
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
                  className={cn(
                    'h-auto flex-col gap-4 rounded-[2rem] border-[1.5px] p-7 transition-all duration-300 cursor-pointer',
                    data.role === item.key
                      ? 'border-[#244c44] bg-[#f0f4f3] text-[#244c44] hover:bg-[#e2eae8]'
                      : 'border-zinc-100 text-zinc-400 hover:bg-zinc-50',
                  )}
                >
                  <div
                    className={cn(
                      'p-3 rounded-xl',
                      data.role === item.key ? 'bg-[#244c44]/10' : 'bg-zinc-100',
                    )}
                  >
                    <item.icon size={28} />
                  </div>
                  <span className="text-base font-bold tracking-tight">{item.label}</span>
                </Button>
              ))}
            </div>

            <div className="space-y-6 pt-2">
              {loginFields.map((field) => (
                <div key={field.key} className="space-y-3">
                  <div className="flex items-center ml-1">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                      {field.label}
                    </label>
                  </div>

                  <div className="relative">
                    <Input
                      type={field.type}
                      value={data[field.key as keyof Data]}
                      onChange={(e) => setData({ ...data, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="bg-zinc-50 border-zinc-100 h-14 rounded-2xl text-base px-5 focus-visible:ring-[#244c44] placeholder:text-zinc-400"
                    />

                    {field.key === 'password' && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 text-zinc-400 hover:bg-transparent"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </Button>
                    )}
                  </div>
                </div>
              ))}

              <Button
                className="w-full h-14 bg-[#244c44] hover:bg-[#1a3832] text-white text-lg font-bold rounded-2xl shadow-lg mt-6 cursor-pointer transition-all duration-300"
                onClick={handleSubmit}
              >
                Ingresar como {data.role === 'cliente' ? 'Cliente' : 'Administrador'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="mt-12 text-sm font-medium text-zinc-400">
          &copy; 2026 SGF - Todos los derechos reservados
        </p>
      </div>
    </>
  );
}
