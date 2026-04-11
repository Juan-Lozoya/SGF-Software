interface Props {
  title: string;
  subtitle: string;
}

export default function TitleComponent({ title, subtitle }: Props) {
  return (
    <>
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <h3 className="text-md text-gray-500">{subtitle}</h3>
      </div>
    </>
  );
}
