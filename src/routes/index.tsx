import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import projectEcommerce from "@/assets/project-ecommerce.png";
import projectTodo from "@/assets/project-todo.png";
import projectWeather from "@/assets/project-weather.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Blagojcho Kocev — Junior Frontend Developer",
      },
      {
        name: "description",
        content:
          "Portfolio of Blagojcho Kocev, a junior frontend developer building responsive, user-friendly web applications with React, JavaScript, HTML and CSS.",
      },
      {
        property: "og:title",
        content: "Blagojcho Kocev — Junior Frontend Developer",
      },
      {
        property: "og:description",
        content:
          "Junior frontend developer building responsive, user-friendly web applications with React and modern CSS.",
      },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "Responsive Design",
  "Basic API Integration",
];

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "eCommerce Product Page",
    description:
      "A responsive product details page with product image, price, description and Add to Cart button.",
    technologies: ["React", "CSS", "JavaScript"],
    image: projectEcommerce,
  },
  {
    title: "To Do App",
    description:
      "A simple task management app where users can add, complete and delete tasks.",
    technologies: ["React", "useState", "CSS"],
    image: projectTodo,
  },
  {
    title: "Weather Dashboard",
    description:
      "A small dashboard that shows weather information using sample API data.",
    technologies: ["JavaScript", "API", "Responsive Design"],
    image: projectWeather,
  },
];

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-lg tracking-tighter text-zinc-100"
        >
          <span className="text-brand">B</span>K
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-8 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-zinc-300 transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-zinc-300 transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800/50 bg-surface md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-brand/5 px-3 py-1 ring-1 ring-brand/20">
          <span className="font-mono text-xs font-medium uppercase tracking-wide text-brand">
            Available for work
          </span>
        </div>
          <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-6xl">
            Blagojcho Kocev
          </h1>
        <p className="mb-10 max-w-[40ch] text-pretty text-lg text-zinc-400">
          Junior Frontend Developer building responsive, user-friendly web
          applications with React, JavaScript, HTML and CSS.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-brand px-6 text-sm font-medium text-surface ring-brand transition-transform hover:-translate-y-px active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-zinc-300 ring-1 ring-zinc-800 transition-colors hover:bg-zinc-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-zinc-900 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            01 / About
          </span>
          <h2 className="text-2xl font-medium text-zinc-100">The Journey</h2>
        </div>
        <div className="flex max-w-[56ch] flex-col gap-6">
          <p className="text-pretty text-zinc-400">
            I am a beginner frontend developer who is constantly learning React,
            improving my JavaScript skills, and building practical projects that
            solve real problems. My journey started with a fascination for clean
            UI, which led me to dive deep into HTML, CSS and modern JavaScript.
          </p>
          <p className="text-pretty text-zinc-400">
            I enjoy turning ideas into clean, functional interfaces. My focus is
            on writing readable code and creating responsive layouts that feel
            intuitive on any device. Every project I build is a step toward
            becoming a stronger developer.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-zinc-900/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            02 / Toolkit
          </span>
          <h2 className="text-2xl font-medium text-zinc-100">
            Technical Expertise
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="group rounded-xl bg-card p-6 ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:ring-brand/30"
            >
              <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-brand">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            03 / Works
          </span>
          <h2 className="text-2xl font-medium text-zinc-100">Selected Projects</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-white/5 transition-all hover:ring-brand/20"
            >
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1024}
                  height={576}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-medium text-zinc-100">
                  {project.title}
                </h3>
                <p className="mb-6 text-pretty text-sm text-zinc-400">
                  {project.description}
                </p>
                <div className="mb-6 mt-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand/80"
                >
                  View Project
                  <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-zinc-900 bg-zinc-900/50 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-8 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">
              04 / Contact
            </span>
            <h2 className="text-2xl font-medium text-zinc-100">Get in touch</h2>
          </div>
          <p className="mb-12 max-w-[40ch] text-pretty text-zinc-400">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:kocevblagojcho@gmail.com"
              className="group flex items-center gap-4 text-zinc-300 transition-colors hover:text-brand"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-white/5">
                <svg
                  className="size-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">
                kocevblagojcho@gmail.com
              </span>
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/kocevblagojcho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-10 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 ring-1 ring-white/5 transition-all hover:text-brand hover:ring-brand/20"
              >
                <svg
                  className="size-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/blagojchokocev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-10 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 ring-1 ring-white/5 transition-all hover:text-brand hover:ring-brand/20"
              >
                <svg
                  className="size-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-xl bg-card p-8 ring-1 ring-white/5"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="h-10 w-full rounded-lg bg-zinc-950 px-4 text-sm text-zinc-200 ring-1 ring-white/10 transition-all focus:outline-none focus:ring-brand"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="h-10 w-full rounded-lg bg-zinc-950 px-4 text-sm text-zinc-200 ring-1 ring-white/10 transition-all focus:outline-none focus:ring-brand"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full resize-none rounded-lg bg-zinc-950 px-4 py-3 text-sm text-zinc-200 ring-1 ring-white/10 transition-all focus:outline-none focus:ring-brand"
            />
          </div>
          <button
            type="submit"
            className="mt-2 h-10 w-full rounded-lg bg-brand text-sm font-medium text-surface ring-brand transition-transform hover:-translate-y-px active:translate-y-0"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-center text-sm text-brand">
              Thanks for your message! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="font-mono text-xs italic text-zinc-500">
          © 2026 Blagojcho Kocev. Built with React.
        </p>
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          <span>Portfolio v1.0</span>
          <div className="size-1 rounded-full bg-zinc-800" />
          <span>Ready to build</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-surface text-zinc-300 selection:bg-brand/30 selection:text-brand">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-brand/10 blur-[120px]" />
      </div>
      <div className="relative">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
