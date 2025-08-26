import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type FeaturedProject = {
  title: string;
  description: string;
  technologies: string[];
  years: number;
};

export function FeaturedProjects() {
  const projects: FeaturedProject[] = [
    {
      title: "ASN Mobile Attendance Application",
      description:
        "A full-stack application built for civil servant attendance needs in the Kupang Regency work environment. This application was built using Laravel and developed into an Android-based mobile application.",
      technologies: ["Laravel", "MySQL"],

      years: 2025,
    },
    {
      title: "Decision Support System",
      description:
        "A full-stack web application for a Decision Support System (DSS) built using Laravel and MySQL. It employs methods such as SMART, WASPAS, ELECTRE, VIKOR, Profile Matching, and various other DSS methods. This application was developed to meet the needs of final-year students.",
      technologies: ["Laravel", "MySQL"],

      years: 2025,
    },
    {
      title: "Website Gym",
      description:
        "Full-Stack gym website application built with React.ts, Express.js, and MySQL. This application was created to meet the demands of final year students.",
      technologies: ["React.ts", "Express.js", "MySQL"],

      years: 2024,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-Stack e-commerce website application built with React.ts, Express.js, and MySQL. This application was created to meet the demands of final year students.",
      technologies: ["React.ts", "Express.js", "MySQL"],

      years: 2024,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Featured Projects
      </h2>
      <ScrollArea className="h-60">
        <div className="flex flex-col gap-4 pr-4">
          {projects.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardAction>{item.years}</CardAction>
              </CardHeader>
              <CardContent className="flex gap-2 flex-wrap">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The developer did not attach any images related to the results of the
        application&apos;s creation. The developer apologizes for not properly
        documenting what has been created. It is hoped that in the future,
        complete documentation related to the project that has been created will
        be available.
      </p>
    </div>
  );
}
