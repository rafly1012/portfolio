import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">
        Kupang, East Nusa Tenggara, Indonesia
      </p>

      <div className="flex gap-4 items-center flex-row">
        <a
          href="https://wa.me/6281237076715"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            Contact Me <Phone />
          </Button>
        </a>
      </div>
    </div>
  );
}
