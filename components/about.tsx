export function About() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        About
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        <a
          href="https://www.siamiruyelindo.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Bachelor of Information Technology, STIKOM Uyelindo Kupang
        </a>
        . I am passionate about continuous learning and adapting quickly to
        change, and I am determined to apply my knowledge in a real work
        environment. I am ready to challenge myself, develop my skills, and
        contribute enthusiastically to the company team to achieve goals and
        create a positive impact in the professional world.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        Passionate developer with 3+ years of experience creating digital
        solutions. I specialize in React, Next.js, and modern web technologies,
        with a keen eye for clean design and user experience.
      </p>
    </div>
  );
}
