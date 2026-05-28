const experiences = [
  {
    period: "Apr — May 2026",
    role: "DevOps Engineer Intern",
    company: "HNG Tech",
    description:
      "Delivered 14 production‑grade DevOps projects covering CI/CD pipelines, containerization, observability, Linux networking, Blue/Green deployments, and automated provisioning. Built SwiftDeploy, a DevOps automation tool for provisioning, deployment, and monitoring.",
    technologies: [
      "Linux",
      "Docker",
      "Nginx",
      "CI/CD",
      "GitHub Actions",
      "Bash",
      "Networking",
      "Monitoring",
    ],
    current: true,
  },
  {
    period: "Sept — Oct 2025",
    role: "DevOps Engineer Intern",
    company: "HNG Tech",
    description:
      "Implemented automated deployment pipelines, designed a Linux‑based VPC with routing and firewall rules, and built observability pipelines with log watchers and Slack alerting. Developed multi‑environment configuration management for dev/staging/prod.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Python",
      "Terraform",
      "Ansible",
      "Bash",
      "VPC",
      "Firewall",
      "Slack Alerts",
    ],
    current: false,
  },
  {
    period: "Feb 2022 — Jan 2024",
    role: "ICT Officer",
    company: "Wellzino Communication",
    description:
      "Provided technical support and system administration across 50+ endpoints. Implemented system updates that improved performance by 15%, deployed enterprise‑grade antivirus solutions, and resolved over 90% of customer issues on first contact. Trained junior staff and optimized troubleshooting workflows to improve operational efficiency.",
    technologies: [
      "Windows Server",
      "Networking",
      "System Updates",
      "Endpoint Security",
      "Troubleshooting",
      "User Support",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that Speaks Volume{" "}
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            DevOps engineer building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
