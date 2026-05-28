import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: [
      "Linux",
      "Networking",
      "VPC",
      "DevOps",
      "iptables",
      "Network Namespaces",
      "System Design",
      "Infrastructure",
    ],
    link: "https://hng13devopsstage4.blogspot.com/2026/04/beginners-guide-building-ddos-detection.html",
    github: "https://github.com/Godwin-Techie/DDOS-Detection-Tool",
    target: "_blank",
  },
  {
    title:
      "Building a Full-Stack DevOps System with CI/CD, Docker, Redis, and GitHub Actions",
    description:
      " A comprehensive guide to building a full-stack DevOps system using CI/CD pipelines, Docker containerization, Redis for caching, and GitHub Actions for automation.",
    image: "/projects/project2.png",
    tags: [
      "DevOps",
      "CI/CD",
      "Docker",
      "FastAPI",
      "Redis",
      "Microservices",
      "GitHub Actions",
      "Automation",
    ],
    link: "https://medium.com/@godwinerharuyi/building-a-full-stack-devops-system-with-ci-cd-docker-redis-and-github-actions-ecfb05d582d5",
    github: "https://github.com/Godwin-Techie/GitActions-CI-CD",
    target: "_blank",
  },
  {
    title: "Linux VPC CLI",
    description:
      "Virtual Private Cloud Simulation using Linux Namespaces, Bridges, and veth pairs",
    image: "/projects/project3.png",
    tags: [
      "Linux",
      "VPC",
      "Networking",
      "Namespaces",
      "iptables",
      "NAT",
      "CLI Tool",
      "DevOps",
      "Infrastructure",
    ],
    link: "https://hng13devopsstage4.blogspot.com/2025/11/overview-in-this-guide-well-build-mini.html",
    github: "https://github.com/Godwin-Techie/Linux-VPC",
    target: "_blank",
  },
  {
    title: "SwiftDeploy -A Policy-Gated Canary Deployment Tool",
    description:
      "SwiftDeploy -A Policy-Gated Canary Deployment Tool for Metrics, Safety, and Chaos Engineering",
    image: "/projects/project4.png",
    tags: [
      "Docker",
      "Nginx",
      "Python",
      "Flask",
      "OPA",
      "CI/CD",
      "Canary Deployments",
      "Observability",
    ],
    link: "https://medium.com/@godwinerharuyi/building-swiftdeploy-for-metrics-policies-canary-safety-chaos-engineering-aa85c2d1c710",
    github: "https://github.com/Godwin-Techie/SwiftDeploy",
    target: "_blank",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that make an impact
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools can that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target={project.target}
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target={project.target}
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Godwin-Techie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
