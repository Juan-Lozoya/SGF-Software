import TitleComponent from '../components/TitleComponent';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FieldGroup, FieldSet, Field, FieldLabel } from '@/components/ui/field';

import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { FileText, Upload } from 'lucide-react';

export default function SolicitudPage() {
  return (
    <>
      <TitleComponent
        title="Solicitud de Facturación"
        subtitle="Envía los datos para generar tu factura"
      />

      <Card className="my-5 md:max-w-1/2 max-w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <FileText className="w-5 h-5" />
            Datos de Facturación
          </CardTitle>
          <CardDescription>Completa todos los campos requeridos</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <Field>
                <FieldLabel htmlFor="razon-social">Razon Social*</FieldLabel>
                <Input id="razon-social" placeholder="Empresa S.A. de C.V." required />
              </Field>
              <Field>
                <FieldLabel htmlFor="rfc">RFC*</FieldLabel>
                <Input id="rfc" placeholder="XAXX0101101000" required />
              </Field>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <Field>
                <FieldLabel htmlFor="codigo-postal">Código Postal</FieldLabel>
                <Input id="codigo-postal" placeholder="220301" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="cfdi">Uso de CFDI</FieldLabel>
                <Input id="cfdi" placeholder="G-03 - Gastos en general" />
              </Field>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <Field>
                <FieldLabel htmlFor="tipo-pago">Tipo de Pago</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona Tipo de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tipos de pagos</SelectLabel>
                      <SelectItem value="parcialidades">Parcialidades</SelectItem>
                      <SelectItem value="parcialidades">Una sola exhibicion</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="monto">Monto*</FieldLabel>
                <Input id="monto" placeholder="0.00" required />
              </Field>
            </div>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="concepto">Concepto*</FieldLabel>
                  <Textarea id="concepto" placeholder="Descripción del servicio o producto..." />
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="documentos-adjuntos">Documentos Adjuntos</FieldLabel>
                  <input id="documentos-adjuntos" type="file" className="hidden" />
                  <label
                    htmlFor="documentos-adjuntos"
                    className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <Upload className="w-6 h-6 text-muted-foreground" />

                    <span className="text-sm text-muted-foreground">
                      Haz clic para subir archivos PDF
                    </span>

                    <span className="text-xs text-muted-foreground">o arrastra y suelta aquí</span>
                  </label>
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Send />
            Enviar Solicitud
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
