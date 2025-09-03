export function About() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        About
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        I am a{' '}
        <a
          href="https://www.siamiruyelindo.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          title="STIKOM Uyelindo Kupang website"
        >
          Bachelor of Information Technology, STIKOM Uyelindo Kupang
        </a>
        , passionate about continuous learning and adaptability. I thrive in dynamic environments and am eager to apply my skills to real-world projects, challenge myself, and contribute meaningfully to a team. My goal is to create a positive impact through collaboration and innovation.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        As a <strong>Full-Stack Developer</strong> with over 3 years of experience, I enjoy crafting clean, user-friendly interfaces and building digital solutions that balance functionality with design. I am committed to continuous growth, tackling new challenges, and delivering work that makes a real difference.
      </p>
    </div>
  );
}

