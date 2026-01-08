export const TEMPLATES = [
  {
    slug: "founder-launch",
    name: "Founder Launch",
    description: "A high-conversion landing page for SaaS founders launching a new product.",
    icon: "rocket",
    image: "/founder-launch/founder-hero.png",
    whoFor: [
      { label: "Founders", desc: "Launch your product with a high-converting landing page", icon: "🚀" },
      { label: "Indie Makers", desc: "Build and ship your ideas quickly", icon: "⚡" },
      { label: "Startup Teams", desc: "Professional presence for your new venture", icon: "👥" },
      { label: "Product Builders", desc: "Showcase your product effectively", icon: "🛠️" }
    ],
    whatsIncluded: [
      { label: "Responsive Layout", desc: "Works perfectly on all devices" },
      { label: "Clean Design System", desc: "Consistent styling throughout" },
      { label: "Optional Sections", desc: "Pick what you need" },
      { label: "Easy Customization", desc: "Simple to make it yours" }
    ],
    // techStack, setup, and makeItYours removed (see page for image)
    faqs: [
      { q: "Is there a backend?", a: "No backend included. Add your own if needed." },
      { q: "How do I customize?", a: "Edit lib/data.ts and tailwind.config.js." },
      { q: "Where do I deploy?", a: "Vercel, Netlify, or any static host." },
      { q: "Is it free?", a: "Yes, MIT licensed and open source." }
    ],
    setupImage: "/founder-launch/founder-1.png"
  },
  {
    slug: "coach-launch",
    name: "Coach Launch",
    description: "Clean, authoritative layout for coaches selling courses or mentorship.",
    icon: "users",
    image: "/coach-launch/coach-hero.png",
    whoFor: [
      { label: "Coaches", desc: "Promote your coaching services", icon: "🎯" },
      { label: "Educators", desc: "Share your teaching expertise", icon: "📚" },
      { label: "Creators", desc: "Build your personal brand", icon: "✨" },
      { label: "Consultants", desc: "Showcase your authority", icon: "💼" }
    ],
    whatsIncluded: [
      { label: "Fully Responsive", desc: "Mobile-first design" },
      { label: "Clean Design", desc: "Professional appearance" },
      { label: "Optional Sections", desc: "Flexible layout" },
      { label: "Easy Customization", desc: "Quick setup" }
    ],
    // techStack, setup, and makeItYours removed (see page for image)
    faqs: [
      { q: "I don't have time", a: "Our system automates the busywork so you can focus on teaching." },
      { q: "I'm not tech-savvy", a: "No coding required. Simple, guided setup." }
    ],
    setupImage: "/coach-launch/coach-1.png"
  },
  {
    slug: "developer-portfolio",
    name: "Developer Portfolio",
    description: "Minimalist portfolio to showcase GitHub projects and technical skills.",
    icon: "code",
    image: "/developer-portfolio/dev-hero.png",
    whoFor: [
      { label: "Developers", desc: "Show off your coding skills", icon: "👨‍💻" },
      { label: "Engineers", desc: "Display technical projects", icon: "⚙️" },
      { label: "Students", desc: "Build your portfolio", icon: "🎓" },
      { label: "Job Seekers", desc: "Impress recruiters", icon: "📄" }
    ],
    whatsIncluded: [
      { label: "Project Showcase", desc: "Display your work" },
      { label: "Skills Section", desc: "Tech stack display" },
      { label: "GitHub Integration", desc: "Link your repos" },
      { label: "Contact Form", desc: "Get in touch easily" }
    ],
    // techStack, setup, and makeItYours removed (see page for image)
    faqs: [],
    setupImage: "/developer-portfolio/dev-1.png"
  },
  {
    slug: "event-mini-course",
    name: "Event / Mini-Course",
    description: "Single-page event registration or mini-course landing page.",
    icon: "calendar",
    image: "/event-course/event-hero.png",
    whoFor: [
      { label: "Event Hosts", desc: "Promote your events", icon: "🎪" },
      { label: "Course Creators", desc: "Launch mini-courses", icon: "📖" },
      { label: "Workshop Leaders", desc: "Drive registrations", icon: "🎯" },
      { label: "Community Builders", desc: "Grow your audience", icon: "👥" }
    ],
    whatsIncluded: [
      { label: "Registration Flow", desc: "Easy sign-up process" },
      { label: "Schedule Display", desc: "Show event timeline" },
      { label: "Speaker Profiles", desc: "Highlight presenters" },
      { label: "CTA Sections", desc: "Drive conversions" }
    ],
    // techStack, setup, and makeItYours removed (see page for image)
    faqs: [],
    setupImage: "/event-course/event-1.png"
  }
];

export const WHAT_YOU_GET = [
  "Clean, modern layouts",
  "Fully responsive",
  "Optional sections",
  "Simple design systems",
  "No backend assumptions"
];

export const WHO_FOR = [
  "Founders & indie builders",
  "Developers & freelancers",
  "Creators & educators"
];

export const NOT_FOR = [
  "Drag-and-drop tools",
  "CMS-first workflows",
  "Heavy animation lovers"
];

export const FAQS = [
  {
    q: "Is this really free?",
    a: "Yes. Free for personal and commercial use."
  },
  {
    q: "Can I use this for client work?",
    a: "Yes."
  },
  {
    q: "Do these include a backend or CMS?",
    a: "No. You plug in what you want."
  },
  {
    q: "Will you add more templates?",
    a: "Advanced and niche specific templates may be released separately."
  }
];