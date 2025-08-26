import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

export function Certification() {
  const certifications: Certification[] = [
    {
      title: "Legacy Data Visualization",
      issuer: "freeCodeCamp",
      date: "August 17, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/legacy-data-visualization",
    },
    {
      title: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "August 17, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/javascript-algorithms-and-data-structures",
    },
    {
      title: "Legacy Front End",
      issuer: "freeCodeCamp",
      date: "August 17, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/legacy-front-end",
    },
    {
      title: "Back End Development and APIs",
      issuer: "freeCodeCamp",
      date: "August 17, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/back-end-development-and-apis",
    },
    {
      title: "Data Visualization",
      issuer: "freeCodeCamp",
      date: "August 16, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/data-visualization",
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "August 15, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/front-end-development-libraries",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "August 15, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/javascript-algorithms-and-data-structures-v8",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 15, 2025",
      link: "https://www.freecodecamp.org/certification/fccb786d74b-b481-48db-b5a8-751f4e0ca6ed/responsive-web-design",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Certifications
      </h2>
      <ScrollArea className="h-60">
        <div className="flex flex-col gap-4 pr-4">
          {certifications.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>
                  {item.title} - {item.issuer}
                </CardTitle>
                <CardDescription>{item.date}</CardDescription>
                <CardAction>
                  <Button variant="link" asChild>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </Button>
                </CardAction>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
