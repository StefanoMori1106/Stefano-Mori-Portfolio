import { InlineCode, LetterFx } from "@/once-ui/components";

const person = {
    firstName: 'Stefano',
    lastName:  'Mori',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Developer',
    avatar:    '/images/mi.png',
    location:  'FL, US', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Japanese', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/StefanoMori1106',
    },
    // {
    //     name: 'LinkedIn',
    //     icon: 'linkedin',
    //     link: 'https://www.linkedin.com/in/',
    // },
    {
        name: '+1 (561) 501 1550',
        icon: 'phone',
        link: 'tel:+15615011550',
    },
    {
        name: 'Skype',
        icon: 'skype',
        link: 'skype:live:.cid.3877235d4216d91f?chat',
    },
    {
        name: 'Discord',
        icon: 'discord',
        link: 'HiddenEye',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:stefano.mori.dev@gmail.com',
    }, 
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <span style={{ fontFamily: 'var(--font-family-code)' }}>
                <LetterFx
                    speed="medium"
                    trigger="instant"
                    charset={[
                        'A', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                    ]}
                >
                    Driving Innovation and Excellence Through Expertly Crafted Digital Solutions and IT Strategies
                </LetterFx>
            </span>,
    subline: <>I’m a results-driven <InlineCode>Full Stack Developer</InlineCode> and <InlineCode>IT Solutions Architect</InlineCode> passionate about turning complex challenges into innovative opportunities. With extensive experience in delivering expertly crafted digital solutions and IT strategies, I focus on creating seamless, impactful, and future-ready systems. My mindset is anchored in continuous growth, problem-solving, and delivering excellence that empowers businesses to thrive in a rapidly evolving digital landscape. Every project I take on reflects my commitment to precision, innovation, and exceeding expectations.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/dustinmmoore'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: [<>I’m a visionary Full Stack Developer and IT Solutions Expert committed to driving innovation and delivering excellence. With years of experience in creating tailored digital solutions, I specialize in bridging technology and strategy to empower businesses. My approach is grounded in precision, creativity, and a deep understanding of diverse needs, ensuring every solution is not only efficient but impactful. Whether designing user-focused applications or optimizing IT strategies, I am dedicated to transforming complex ideas into seamless, cutting-edge results.
        </>]
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelancer',
                timeframe: '2019 - Present',
                role: 'Senior Full-Stack Developer | Strong Problem-Solver',
                achievements: [
                    <>Designed and developed fully responsive, user-friendly web applications with an emphasis on seamless UI/UX design to meet clients' unique business goals and branding guidelines.</>,
                    <>Built and maintained robust backend systems using technologies like Node.js, PHP, and Python, with efficient database management utilizing MySQL, MongoDB, and PostgreSQL.</>,
                    <>Enhanced website visibility and performance by implementing SEO best practices, ensuring optimal search engine rankings and improved user engagement.</>,
                    <>Streamlined development workflows through the adoption of CI/CD pipelines, facilitating faster and error-free deployments with tools like Jenkins, GitHub Actions, and Docker.</>,
                    <>Delivered dynamic and interactive front-end experiences using modern frameworks such as React, Vue.js, and Next.js, integrated with backend APIs for a seamless user experience.</>,
                    <>Provided customized problem-solving solutions by analyzing client requirements, troubleshooting issues, and implementing innovative approaches to ensure project success.</>,
                    <>Maintained attention to detail to ensure high-quality code, optimized performance, and flawless functionality across different devices and browsers.</>,
                    <>Offered continuous support and maintenance, including performance optimization, security updates, and new feature development, ensuring long-term client satisfaction and project sustainability.</>,
                    <>Collaborated with clients to define clear objectives, managed project timelines effectively, and delivered results that consistently exceeded expectations.</>
                ],
                images: []
            },
            {
                company: 'Pidespeed',
                timeframe: '2022 - 2024',
                role: 'Senior Full-Stack lead',
                achievements: [
                    <>Migrated the Back End from MySQL to MongoDB, significantly increasing Database Scalability and Performance to handle growing volumes of
                        user data and transactions, resulting in a 40% Improvement in Data Query Speeds and a more effi cient handling of Large Datasets.</>,
                    <>Designed and Implemented a Secure User Authentication System using JWT (JSON Web Tokens) and OAuth 2.0, ensuring strong protection of
                        sensitive user information and enhancing system security, which Reduced Unauthorized Aceess Attempts by 30%.</>,
                    <>Developed a seamless, Multi-Payment Processing System by integrating popular gateways like Stripe, PayPal, and Square, enabling smooth and
                        secure transactions, resulting in a 25% Reduction in Payment Failures, and improving overall Checkout Completion Rates</>,
                    <>Implemented Real-Time Order Tracking using WebSockets, GraphQL, and RESTful APIs, allowing users to monitor their orders dynamically,
                        which led to a 20% Increase in Customer Satisfaction and Engagement</>,
                    <>Optimizied the Platform for Responsiveness across various devices by utilizing CSS Grid, Flexbox, Bootstrap, Material UI, and TailwindCSS,
                        ensuring a consistent and mobile-friendly experience, contributing to a 15% Increase in Mobile Traffic and improved conversion rates.</>,
                    <>Delivered a Scalable and Modular Architecture using Microservices and Docker, enabling future platform growth and easy integration of new
                        features, which supported a 50% Increase in User Capacity without impacting performance.</>,
                    <>Collaborated closely with Cross-Functional Teams including Product Managers, UI/UX Designers, and QA Engineers to design, develop, and
                        deploy key features, fostering a highly collaborative environment that ensured the Timely and Successful Delivery of the Project</>
                    
                ],
                images: []
            },
            {
                company: 'CXScore',
                timeframe: '2020 - 2022', 
                role: 'Senior Full-Stack Developer',
                achievements: [
                    <>Led the development of the Front End using React.js, creating reusable, scalable, and maintainable components with Redux for centralized state
                        management, which streamlined the data flow and reduced complexity, resulting in a 30% Improvement in Development Effi ciency.</>,
                    <>Optimized Core Web Vitals (CWVs) such as Largest Contentful Paint (LCP) and First Input Delay (FID) by employing React Best Practices like code splitting, lazy loading, and memoization. This enhanced Page Load Times by 25% and boosted SEO Performance, leading to a 15% Increase in Organic Traffic.</>,
                    <>Integrated TypeScript to enhance type safety, reduce runtime errors, which enhanced code reliability and led to a 20% Decrease in Production
                        Bugs.</>,
                    <>Applied WCAG 2.1 Accessibility Standards with ARIA Attributes, semantic HTML, making the platform fully accessible to users with disabilities
                        and expanding the user base by 10%.</>,
                    <>Designed and Integrated Dynamic Data Visualization tools using D3.js, Chart.js, and React Query, allowing real-time insights into Core Web
                        Vitals and accessibility results. This provided the product team with the ability to identify and resolve performance issues 40% faster.</>,
                    <>Collaborated with Back End Teams utilizing Node.js, Express.js, GraphQL, and RESTful APIs, ensuring seamless data flow between Front End
                        and Back End Systems, contributing to a 15% Improvement in User Retension due to a cohesive platform experience.</>,
                    <>Styled the UI using TailwindCSS and CSS Modules, which reduced CSS file size by 30% and improved page load times, resulting in a 20% Faster
                        User Interface.</>,
                    <>Utilized Redux Toolkit and optimized state management with Reselect, improving rendering performance and reducing unnecessary re-renders,
                        leading to a 15% Improvement in Application Responsiveness.</>,
                    <>Implemented unit and intergation testing with Jest and React Testing Library, integrated with GitHub Actions for a CI/CD pipeline, which
                        resulted in a 40% Reduction in Regression Issues.</>,
                    <>Managed the build process with WebPack, Vite and Babel, improving module building, tree-shaking, and backward compatibility, which reduced
                        bundle size by 20% and enhanced browser compatibility.</>
                ],
                images: []
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Miyagi University of Education',
                description: <>Bachelor's Degree in Computer Engineering</>,
            },
            {
                name: 'Codesmith',
                description: <>Advanced Residency for Software Engineering</>,
            },
            {
                name: 'HackerRank',
                description: <>Advanced Residency for Software Engineering</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>HTML | CSS | JavaScript | TypeScript | C# | PHP | Python</>,
                images: [] 
            },
            {
                title: 'Front-End Frameworks',
                description: <>React | Next.js | Vue.js | Nuxt.js | Angular | Svelte</>,
                images: [] 
            },
            {
                title: 'Back-End Frameworks',
                description: <>Node.js | Express.js | Nest.js | .NET | ASP.NET | Laravel | Django | Flask | FastAPI</>,
                images: []
            },
            {
                title: 'Database Development',
                description: <>SQL (MySQL, PostgreSQL, Oracle) | MongoDB</>,
                images: []
            },
            {
                title: 'Mobile Development',
                description: <>React Native | Ionic | Flutter</>,
                images: []
            },
            {
                title: 'Automation & Workflow Optimization',
                description: <>Webpack | Vite | Gulp | NPM | Continuous integration (CI/CD) with GitHub Actions </>,
                images: []
            },
            {
                title: 'Responsive Design',
                description: <>CSS Grid | Flexbox | Media Queries | Mobile-First design</>,
                images: []
            },
            {
                title: 'UI Libraries & Frameworks',
                description: <>Bootstrap | Tailwind CSS | Material-UI | Once-UI</>,
                images: []
            },
            {
                title: 'Deployment Platforms',
                description: <>AWS | Vercel | Netlify | Heroku | XServer</>,
                images: []
            },
            {
                title: 'Version Control & Collaboration',
                description: <>Git | GitHub | GitLab</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about stuff...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/rsp-01.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/a-record-creator.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/ksmain-01.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
      
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };