import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Coffee01Icon,
  Github01Icon,
  SearchIcon,
  JavaScriptIcon,
  TypescriptIcon,
  ReactIcon,
  PythonIcon,
  GitlabIcon,
} from "@hugeicons/core-free-icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Icon Wrapper Component
const Icon = ({
  icon,
  size = 16,
  className = "",
}: {
  icon: any;
  size?: number;
  className?: string;
}) => (
  <HugeiconsIcon
    icon={icon}
    size={size}
    color="currentColor"
    // className={className}
  />
);

const techStack = [
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Tailwind", icon: ReactIcon },
  { name: "Motion", icon: null },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "NextJs", icon: null },
  { name: "Python", icon: PythonIcon },
  { name: "Vercel", icon: null },
  { name: "Git", icon: GitlabIcon },
  { name: "Github", icon: Github01Icon },
  { name: "NodeJs", icon: Github01Icon },
  { name: "Express", icon: Github01Icon },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Navigation */}
      <nav>
        <div className="mx-auto max-w-3xl pt-4">
          <div className="flex items-center justify-end gap-6">
            <Link
              href="#portfolio"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#components"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors"
            >
              Components
            </Link>
            <Link
              href="#blog"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors"
            >
              Blog
            </Link>

            <button className="flex items-center gap-2 rounded-md border border-zinc-700 px-2 py-1.5 text-sm font-mono text-zinc-400 hover:border-zinc-600 transition-colors">
              <Icon icon={SearchIcon} size={14} />
              <span>Ctrl</span>
              <span>K</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl pt-28 py-20">
        <div className="mb-8 flex items-center gap-6">
          <div className="h-20 w-20 shrink-0 rounded-full bg-white/90 p-1"></div>

          <div>
            <h1
              className={`
                ${playfair.className}
                text-[2.6rem]
                leading-tight
                tracking-tight
                text-white
              `}
            >
              Mohammed Farzam
            </h1>

            <div className="flex items-center gap-1.5 mt-1">
              <p className="text-sm font-serif text-zinc-400">@mdxfarzam</p>
              <img
                src="/icons8-instagram-verified.svg"
                alt="Verified"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg font-sans text-zinc-300/75">
          I like to <span className="text-white"> build things</span> for
          designers and developers, think deeply about the user interface, how
          it looks, feels, behaves. I work with TypeScript,{" "}
          <span className="text-white"> React.js</span> and sometimes with{" "}
          <span className="text-white"> Node.js, and Express.js.</span> In my
          free time I read tech blogs, or touch some{" "}
          <span className="text-white">Dumbbells</span>.
        </p>

        <p className="mb-8 text-lg font-sans text-zinc-300/80">
          If it involves <span className="text-white">computers</span>,
          animation, or learning something I didn’t know yesterday,
          <span className="text-white"> I’m in.</span> I'm always down to meet
          new people who are{" "}
          <span className="text-white">building cool stuff.</span>
        </p>

        {/* Social Links */}
        <div className="mb-14 flex flex-wrap items-center gap-5 text-sm">
          <Link
            href="#"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Icon icon={Github01Icon} />
            GitHub
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="font-mono text-xs font-bold">X</span>
            Twitter
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Icon icon={Mail01Icon} size={14} />
            Gmail
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Icon icon={Coffee01Icon} />
            Buy me a coffee
          </Link>
        </div>

        {/* Skills & Tools */}
        <div className="mb-20">
          <h2
            className={`
              ${playfair.className}
              text-[1rem]
              leading-tight
              tracking-tight
              text-white mb-6 text-sm font-bold text-zinc-400 uppercase
            `}
          >
            Stack
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="
  flex h-9 items-center gap-1.5
  rounded-lg
  border border-dashed border-zinc-600/60
  bg-zinc-800/40
  px-4
  text-[13px] font-mono font-medium
  text-zinc-200
  hover:border-zinc-500
  hover:bg-zinc-700/50
  hover:text-white
  transition-all duration-200
"
              >
                {tech.icon && <Icon icon={tech.icon} size={14} />}
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <section id="portfolio" className="mb-20">
          <div
            className={`
              ${playfair.className} 
              mb-8 text-sm font-mono 
              text-[1rem]
              leading-tight
              tracking-tight
              text-white text-sm font-bold text-zinc-400 uppercase
            `}
          >
            Projects
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Converso AI",
                desc: "An advanced multi-model AI workspace enabling neural search and intelligent, context-aware document interactions.",
              },
              {
                title: "Backend Atlas",
                desc: "A structured repository of production-grade backend patterns designed for Prisma, Stripe, and scalable API systems.",
              },
              {
                title: "SignaSecure",
                desc: "A next-generation digital signing platform, recognized at the Tambo AI Hackathon for its biometric-driven innovation.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="
                  group
                  rounded-md
                  cursor-pointer
                  px-3 py-4
                  transition-all duration-300
                  hover:bg-zinc-800/40
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-mono text-zinc-200 transition-all duration-200 group-hover:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-600 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100">
                    Details →
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500 transition-all duration-200 group-hover:text-zinc-300">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section id="components" className="mb-20">
          <div
            className={`${playfair.className} mb-8 text-sm font-mono text-[1rem] leading-tight tracking-tight font-bold text-zinc-400 uppercase`}
          >
            Components
          </div>

          <div className="space-y-1">
            {[
              { title: "ToolTip Hover", date: "DEC 20, 25" },
              { title: "Animated Drawer", date: "DEC 19, 25" },
              { title: "Smooth Navbar", date: "DEC 18, 25" },
            ].map((item) => (
              <Link
                key={item.title}
                href="#"
                className="group flex items-center justify-between rounded-md px-3 py-4 transition-all duration-200 hover:bg-zinc-800/40"
              >
                <span className="text-sm font-mono text-zinc-300 transition-all duration-200 group-hover:text-white">
                  {item.title}
                </span>
                <span className="text-xs font-sans text-zinc-600 transition-colors group-hover:text-zinc-400">
                  {item.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mb-20">
          <div
            className={`${playfair.className} mb-8 text-sm font-mono text-[1rem] leading-tight tracking-tight font-bold text-zinc-400 uppercase`}
          >
            Blog
          </div>

          <div className="space-y-1">
            {[
              {
                title: "Lets understand why i started coding",
                date: "NOV 30, 25",
              },
            ].map((post, i) => (
              <Link
                key={i}
                href="#"
                className="group flex items-center justify-between rounded-md px-3 py-4 transition-all duration-100 hover:bg-zinc-800/40"
              >
                <span className="text-sm font-mono text-zinc-300 transition-all duration-200 group-hover:text-white">
                  {post.title}
                </span>
                <span className="text-xs font-sans text-zinc-600 transition-colors group-hover:text-zinc-400">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-mono text-zinc-500">~ that's all...</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Icon icon={Mail01Icon} size={20} />
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Icon icon={Github01Icon} size={20} />
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
