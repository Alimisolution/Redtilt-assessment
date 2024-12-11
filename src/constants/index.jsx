import { Cpu } from 'lucide-react';
import { Globe } from 'lucide-react';
import { CloudUpload } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';


  export const navItems = [
    { label: "Service", href: "#service" },
    { label: "Reviews", href: "#review" },
    { label: "Blogs", href: "#blog" },
    { label: "Jobs", href: "#job" },
  ];


  export const cardDataArray = [
    {
      cardNo: "01",
      cardHeadingImg: Cpu,
      cardTitle: "Development",
      listItems: ["UIUX", "DevOps", "Web design", "Frontend dev", "Backend dev"],
    },
    {
      cardNo: "02",
      cardHeadingImg: Globe,
      cardTitle: "MSP",
      listItems: ["Infrastructure Manager", "Managed Monitoring", "Business Continuity", "Managed Cyber"],
    },
    {
      cardNo: "03",
      cardHeadingImg: CloudUpload,
      cardTitle: "Cloud",
      listItems: ["AWS", "Azure", "Multi-Cloud", "SRE Strategy", "Server less", "Hybrid Strategy", "Containerisation"],
    },
    {
      cardNo: "04",
      cardHeadingImg: ShieldCheck,
      cardTitle: "Cyber",
      listItems: ["Cyber Audit", "Cyber Governance", "Security as a Service", "Penetration Testing"],
    },
  ];
