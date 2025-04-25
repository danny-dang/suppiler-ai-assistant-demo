export const suppliers = [
  {
    name: "Acme Corp",
    riskScore: 9,
    categories: ["Financial Compliance", "Cybersecurity"],
    location: "New York, USA",
    industry: "Healthcare",
    description:
      "Acme Corp is a leading healthcare solutions provider based in New York, USA. The company specializes in digital health platforms, medical software, and secure patient data systems for hospitals and clinics.",
  },
  {
    name: "Beta Industries",
    riskScore: 7,
    categories: ["Operational", "Regulatory"],
    location: "London, UK",
    industry: "Manufacturing",
    description:
      "Beta Industries is a UK-based manufacturer delivering industrial components and equipment to automotive and aerospace sectors. They are known for high-precision engineering and scalable production capabilities.",
  },
  {
    name: "Gamma Solutions",
    riskScore: 8,
    categories: ["Cybersecurity", "Data Privacy"],
    location: "San Francisco, USA",
    industry: "Technology",
    description:
      "Headquartered in San Francisco, Gamma Solutions develops enterprise-grade cybersecurity and data protection software. They serve a global tech clientele with cloud security, identity management, and encryption tools.",
  },
  {
    name: "Delta Partners",
    riskScore: 6,
    categories: ["Regulatory", "Environmental"],
    location: "Tokyo, Japan",
    industry: "Energy",
    description:
      "Delta Partners is a Tokyo-based energy company focused on renewable energy projects, including solar and wind power solutions. They provide clean energy infrastructure and consulting for government and private sectors.",
  },
  {
    name: "Epsilon Group",
    riskScore: 5,
    categories: ["Operational", "Supply Chain"],
    location: "Tokyo, Japan",
    industry: "Automotive",
    description:
      "Epsilon Group is a key automotive parts supplier based in Tokyo. They manufacture high-performance components for electric and hybrid vehicles, working with top-tier car makers across Asia and Europe.",
  },
  {
    name: "Zeta Enterprises",
    riskScore: 4,
    categories: ["Financial Compliance", "Taxation"],
    location: "Toronto, Canada",
    industry: "Finance",
    description:
      "Zeta Enterprises is a financial services firm headquartered in Toronto, Canada. They offer tax advisory, compliance services, and financial consulting to multinational corporations and investment firms.",
  },
  {
    name: "Theta Corporation",
    riskScore: 7,
    categories: ["Cybersecurity", "Operational"],
    location: "Toronto, Canada",
    industry: "Retail",
    description:
      "Theta Corporation operates a chain of retail stores and an e-commerce platform in Canada. Their services include digital retail technology integration, logistics management, and customer engagement tools.",
  },
  {
    name: "Iota Systems",
    riskScore: 8,
    categories: ["Data Privacy", "Regulatory"],
    location: "Singapore",
    industry: "Telecommunications",
    description:
      "Iota Systems is a telecommunications provider in Singapore, offering high-speed internet, mobile, and enterprise communication solutions. They are known for advanced network security and data handling practices.",
  },
  {
    name: "Kappa Technologies",
    riskScore: 6,
    categories: ["Environmental", "Operational"],
    location: "Singapore",
    industry: "Technology",
    description:
      "Kappa Technologies develops green IT solutions and smart infrastructure software. Based in Singapore, their services include environmental monitoring systems, IoT integration, and sustainable data center tech.",
  },
  {
    name: "Lambda Holdings",
    riskScore: 10,
    categories: ["Financial Compliance", "Cybersecurity"],
    location: "Dubai, UAE",
    industry: "Banking",
    description:
      "Lambda Holdings is a multinational banking and financial services firm based in Dubai. They specialize in cross-border payments, digital banking platforms, and financial risk management for enterprise clients.",
  },
];

export function searchSuppliers({
  topRiskScoreLimit,
  industry,
  category,
  location,
  riskScoreLimit,
}: {
  topRiskScoreLimit?: number;
  industry?: string;
  category?: string;
  location?: string;
  riskScoreLimit?: number;
}) {
  let result = [...suppliers];

  if (industry) {
    result = result.filter((s) =>
      s.industry.toLowerCase().includes(industry.toLowerCase())
    );
  }

  if (category) {
    result = result.filter((s) =>
      s.categories.some((c) => c.toLowerCase().includes(category.toLowerCase()))
    );
  }

  if (location) {
    result = result.filter((s) =>
      s.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (riskScoreLimit !== undefined) {
    result = result.filter((s) => s.riskScore >= riskScoreLimit);
  }

  if (topRiskScoreLimit) {
    result = result
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, topRiskScoreLimit);
  }

  return result;
}
