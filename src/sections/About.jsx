import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Automation",
    description:
      "Building reliable CI/CD pipelines, deployment workflows, and infrastructure automation.",
  },
  {
    icon: Rocket,
    title: "Scalability",
    description:
      "Designing systems that scale—containers, orchestration, load balancing, and VPC networking.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with engineering teams to streamline delivery, improve reliability, and ship faster.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring modern DevOps tooling, cloud platforms, and observability practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building reliable systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one deployment at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a DevOps Engineer passionate about automation, cloud
                infrastructure, and building scalable systems. My journey began
                with a curiosity for how servers, networks, and deployments work
                behind the scenes-and it has grown into hands-on experience
                designing real-world DevOps solutions.
              </p>

              <p>
                During my internships at HNG Tech, I built and deployed
                <strong> 14 production‑grade DevOps projects</strong> covering
                CI/CD pipelines, containerization, observability, Linux
                networking, Blue/Green deployments, and infrastructure
                automation. I enjoy solving real engineering problems and
                turning complex workflows into simple, repeatable processes.
              </p>

              <p>
                When I'm not automating deployments, you'll find me exploring
                new DevOps tools, improving my Linux skills, or experimenting
                with cloud-native technologies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build systems that are fast, secure, and
                reliable, automating everything that can be automated, and
                delivering infrastructure that teams can trust."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
