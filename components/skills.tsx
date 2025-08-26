import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <div className="flex flex-wrap gap-1">
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="secondary">Node.js</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">Laravel</Badge>
        <Badge variant="secondary">PHP</Badge>
        <Badge variant="secondary">Python</Badge>
        <Badge variant="secondary">JavaScript</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">Tailwind CSS</Badge>
      </div>
    </div>
  );
}
