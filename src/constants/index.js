const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Oracle Database",
    modelPath: "/models/oracle.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "C# Development",
    modelPath: "/models/C-sharp.glb",
    scale: 0.09,
    rotation: [0, 0, 0],
  },
  {
    name: "Azure Cloud Computing",
    modelPath: "/models/azure.glb",
    scale: 2.5,
    rotation: [0, -Math.PI, 0],
  },
  {
    name: "Reporting Tools",
    modelPath: "/models/Excel.glb",
    scale: 1.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: ".NET is a powerful, open-source development platform created by Microsoft. It enables developers to build high-performance web, desktop, mobile, and cloud applications using languages like C#. With a rich ecosystem, cross-platform support, and robust security features, .NET is widely used for scalable enterprise solutions.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "Since January 2020",
    responsibilities: [
      "Developed and maintained web applications using ASP.NET Core and C#.",
      "Integrated RESTful APIs and third-party services for enhanced functionality.",
      "Ensured application security, scalability, and performance across platforms.",
    ],
  },
  {
    review: "Oracle is a global leader in database technology and enterprise software solutions. Its robust database management systems and cloud infrastructure services empower organizations to efficiently manage, store, and analyze large volumes of data. Oracle's products are known for their reliability, scalability, and advanced security features.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer",
    date: "Since June 2009",
    responsibilities: [
      "Designed and maintained Oracle database architectures for high-availability applications.",
      "Implemented data security and backup strategies using Oracle tools.",
      "Leveraged Oracle Cloud Infrastructure for scalable and secure enterprise deployments.",
    ],
  },
  {
    review: "Microsoft Azure provides a comprehensive suite of cloud services that enable rapid development, deployment, and management of applications. Its scalability, security features, and integration with DevOps tools make it a reliable choice for businesses of all sizes.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Cloud Computing",
    date: "Since March 2021",
    responsibilities: [
      "Developed and deployed scalable cloud solutions using Microsoft Azure services.",
      "Implemented Azure Functions and Logic Apps to automate workflows and backend processes.",
      "Utilized Azure DevOps for CI/CD pipelines, ensuring efficient and reliable deployments.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about AadiSoft. They were able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with AadiSoft was a fantastic experience. They transformed our outdated website into a modern, user-friendly platform. Their attention to detail and commitment to quality are unmatched. Highly recommend them for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with AadiSoft was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Their enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, AadiSoft is the ideal choice.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "AadiSoft's Team was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "AadiSoft's expertise in web development is truly impressive. They delivered a robust and scalable solution for our transportation app, and our work have significantly improved since the launch. They are a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "AadiSoft was a pleasure to work with. They understood our requirements perfectly and delivered a solution that exceeded our expectations. Their skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/aadi__poddar",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/aadipoddarmail",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://x.com/PoddarAadi",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aadi-poddar-b90220222",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
