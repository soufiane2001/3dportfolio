import type { LandingPage } from "./landing-pages";

type EnglishServiceContent = Pick<LandingPage, "description" | "sections" | "faqs" | "projectSlugs" | "related">;

export const englishServiceContent: Record<string, EnglishServiceContent> = {
  "freelance-web-developer": {
    description: "Work directly with a freelance web developer on a new website, redesign or existing codebase. Review real projects and discuss your scope.",
    sections: [
      { title: "A complete build or a focused development assignment", paragraphs: ["For a new website, the first decision is what visitors need to do: understand your services, send an enquiry, order a product or use a business tool. This defines the pages, content and functions to include in the first release.", "For an existing product or agency team, the assignment can focus on React components, PHP development, API integration or a specific defect. I review the repository and deployment before estimating a takeover."], items: ["Business websites and redesigns", "React or PHP development", "Existing codebase review", "Written scope and acceptance criteria"] },
      { title: "What you receive and what stays under your control", paragraphs: ["The proposal distinguishes implementation from hosting, content preparation and future maintenance. We agree on the code, documentation, deployment access and handover included in the assignment.", "The portfolio includes a React artist portfolio, a PHP clothing store and a desktop patient-management application. Use the case studies to compare the user journeys and technologies with your own needs."], items: ["One direct technical contact", "Milestone reviews", "Source code and access handover", "Maintenance scoped separately"] },
    ],
    faqs: [
      { question: "Can you join an existing team?", answer: "Yes, for an agreed frontend, backend or integration assignment. I first review the stack, conventions, deployment and expected deliverables." },
      { question: "How do I get an estimate?", answer: "Share your goals, existing URL or product, required functions, available content and expected timeline. An existing codebase needs a technical review before a reliable takeover estimate." },
    ],
    projectSlugs: ["reby-art", "mirado-clothing", "patient-management"],
    related: [{ href: "/en/web-development-services", label: "Compare website and application services" }, { href: "/en/full-stack-developer", label: "Custom business applications" }],
  },
  "react-developer": {
    description: "Freelance React development for interfaces, API integration and existing applications. Explore components, TypeScript, testing and a real React project.",
    sections: [
      { title: "React interfaces connected to your data", paragraphs: ["React is useful when the interface contains reusable components, forms, filters and changing data. Before development, I map the screens, user actions and API responses so loading, empty and error states are part of the scope.", "The work can cover a new interface or an existing application. TypeScript, component boundaries and state management are chosen around the codebase rather than added as a separate layer without a clear need."], items: ["Reusable components", "Forms and validation", "API and state integration", "Loading and error states"] },
      { title: "Improve an existing application without losing its behaviour", paragraphs: ["A takeover starts with the routes, dependencies, shared components and deployment. We identify the user journeys to preserve before changing architecture or adding a feature.", "Reby Art is a React portfolio in my work. It shows a content-led interface; for a dashboard or internal tool, we would additionally define permissions, data flows and acceptance tests for each role."], items: ["Code review before estimation", "Responsive and keyboard interaction", "Checks for critical user journeys", "Documentation for the next developer"] },
    ],
    faqs: [
      { question: "Should my project use React or Next.js?", answer: "React provides the interface layer. Next.js also provides routing and server-rendering options. The decision depends on whether you need public content pages, an authenticated application, or both." },
      { question: "Can you work on an existing React application?", answer: "Yes, after reviewing its dependencies, routes, API contracts and deployment. The agreed scope can be a feature, integration, refactor or defect correction." },
    ],
    projectSlugs: ["reby-art"],
    related: [{ href: "/en/nextjs-developer", label: "Next.js websites and rendering" }, { href: "/en/full-stack-developer", label: "Frontend and backend development" }],
  },
  "nextjs-developer": {
    description: "Next.js website development, redesigns and codebase takeovers. Plan routes, server rendering, metadata and deployment around your content.",
    sections: [
      { title: "Rendering and routing planned around your content", paragraphs: ["A Next.js project begins with its public pages, dynamic data and visitor journeys. We decide which routes can be generated ahead of time, which need server-side data, and which interactions belong in client components.", "For a public website, the scope includes page titles, preferred URLs, a sitemap and language alternatives when translations exist. These are technical foundations; they do not guarantee a Google ranking."], items: ["App Router and route structure", "Static and server-rendered pages", "Metadata and language versions", "Client components where needed"] },
      { title: "Redesign or take over an existing Next.js website", paragraphs: ["Before changing an existing site, I inventory its routes, important content, forms and integrations. Redirects are planned when URLs need to move, and the existing deployment is reviewed before estimating the work.", "Gamlastan is a Next.js store-interface project in the portfolio. It provides an interface example; your catalogue, administration, ordering and data integrations are specified separately for your project."], items: ["Dependency and hosting review", "URL preservation and redirects", "Image and script loading", "Build and deployment checks"] },
    ],
    faqs: [
      { question: "Can you preserve URLs during a redesign?", answer: "Yes. The route inventory is part of planning. URLs that remain useful are preserved, and permanent redirects are defined for necessary changes." },
      { question: "Does Next.js automatically make a website rank?", answer: "No. It offers rendering and metadata tools, but useful content, accessible pages, links and technical quality still need to be planned and checked." },
    ],
    projectSlugs: ["gamlastan"],
    related: [{ href: "/en/react-developer", label: "React interface development" }, { href: "/en/web-development-services", label: "Website planning and delivery" }],
  },
  "php-developer": {
    description: "PHP and MySQL development for stores, administration tools and APIs. Review an existing project or plan a new backend with a clear scope.",
    sections: [
      { title: "PHP applications built around data and business rules", paragraphs: ["The starting point is the information your application stores and who can read or change it. For an online store, that may include products, variants, orders and an administration area. For an internal tool, the roles and workflow may be different.", "I define database relationships, server-side validation and access rules before multiplying screens. PHP, MySQL and a framework such as Laravel are selected according to the requirements and the existing stack."], items: ["PHP and MySQL", "Administration interfaces", "Server-side validation", "Roles and API integrations"] },
      { title: "Extend an existing store or PHP codebase", paragraphs: ["An existing project needs a review of the PHP version, configuration, schema and hosting. The estimate separates defect correction from new functionality and identifies any migration needed before implementation.", "Mirado Clothing and the cash-on-delivery store are PHP and MySQL examples in the portfolio. Review their catalogues and ordering flows when listing the screens and administration tasks needed for your project."], items: ["Existing database review", "Ordering and catalogue changes", "Compatibility checks", "Deployment and handover"] },
    ],
    faqs: [
      { question: "Do I need Laravel for every PHP project?", answer: "No. The decision depends on the application's scope and current code. A framework can help structure a larger application, but a small existing PHP site may be better served by focused changes." },
      { question: "Can you connect PHP to an existing MySQL database?", answer: "Yes, after reviewing its schema, relationships and access requirements. Changes to live data need a defined migration and backup procedure." },
    ],
    projectSlugs: ["mirado-clothing", "site-ecommerce"],
    related: [{ href: "/en/full-stack-developer", label: "Frontend and backend delivery" }, { href: "/en/freelance-web-developer", label: "Scope an existing project takeover" }],
  },
  "full-stack-developer": {
    description: "Custom web applications with React or Next.js, PHP or Laravel, and MySQL. Define workflows, roles, API contracts and the first useful release.",
    sections: [
      { title: "Start with a workflow, not a list of screens", paragraphs: ["A business application should support a specific job: managing records, following requests, processing orders or sharing information with customers. We map the users, roles, data and exceptions before choosing the interface and backend.", "The first release includes the smallest agreed workflow that can be tested from beginning to end. Optional dashboards, integrations and automation are separated so the initial scope remains reviewable."], items: ["Business workflows and roles", "Data modelling", "Customer portals and dashboards", "An agreed first release"] },
      { title: "Connect the interface, API and database", paragraphs: ["The interface and backend share explicit rules for validation, errors and access. React or Next.js can handle the user interface while PHP or Laravel provides server-side behaviour and database access where appropriate.", "The portfolio includes ordering systems and a patient-management desktop application. The cases help discuss how records, products and orders should be organised for the users of your own tool."], items: ["API contracts and validation", "Authentication and permissions", "End-to-end workflow checks", "Documentation and deployment"] },
    ],
    faqs: [
      { question: "Can an existing workflow become a web application?", answer: "Yes, after clarifying the current process, users, data and exceptions. A prototype or first release can be scoped before committing to the full system." },
      { question: "What do you need before estimating an application?", answer: "A description of the workflow, user roles, data sources, required integrations and the functions needed for the first release. Any existing code or database also needs review." },
    ],
    projectSlugs: ["patient-management", "site-ecommerce", "cash-management-app"],
    related: [{ href: "/en/php-developer", label: "PHP and database development" }, { href: "/en/react-developer", label: "React frontend development" }],
  },
  "web-development-services": {
    description: "Website, online store and application development with one direct technical contact. Compare deliverables, content needs and ongoing maintenance.",
    sections: [
      { title: "Choose between a business website, store and application", paragraphs: ["A business website explains your offer and helps visitors contact you. An online store adds product information and ordering. An application adds user actions, roles and business data. The right starting point is the visitor's main task.", "For each option, we list the pages, functions, languages and content to prepare. A redesign also needs an inventory of existing URLs, forms and integrations that must continue working."], items: ["Business websites", "Online stores and catalogues", "Web and mobile applications", "Website redesigns"] },
      { title: "Plan content, delivery and what happens after launch", paragraphs: ["The scope identifies who supplies and validates text, photography and translations. The proposal then names the delivery stages, checks, hosting responsibilities and access handover.", "Pizza Napoli Toul, HighUp Counselling and Horea Formation show different service-website needs in the portfolio. For your project, we define how menus, service pages or training information will be updated after launch."], items: ["Content and language planning", "Mobile and contact checks", "Hosting and source access", "Maintenance by agreement"] },
    ],
    faqs: [
      { question: "Do you provide the text and photographs?", answer: "Content responsibilities are defined in the scope. Existing materials can be integrated, while writing, photography and translations need to be supplied or agreed separately." },
      { question: "What is included after launch?", answer: "The proposal states any handover, documentation and support included. Corrective maintenance, updates and new functions can be scoped separately." },
    ],
    projectSlugs: ["pizza-napoli-toul", "highup-counselling", "horea-formation"],
    related: [{ href: "/en/freelance-web-developer", label: "Working with a freelance developer" }, { href: "/en/full-stack-developer", label: "Custom application development" }],
  },
};
