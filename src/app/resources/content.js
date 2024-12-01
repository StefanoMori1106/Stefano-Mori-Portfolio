import { InlineCode, LetterFx } from "@/once-ui/components";

const person = {
    firstName: 'Hayashi',
    lastName:  'Benjiro',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Developer',
    avatar:    '/images/mi.png',
    location: 'Pensacola, US', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
        name: 'TrustworthyDev',
        icon: 'github',
        link: 'https://github.com/TrustworthyDev',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/',
    },
    {
        name: '+1 (561) 501 1550',
        icon: 'phone',
        link: 'tel:+15615011550',
    },
    {
        name: 'live:.cid.3877235d4216d91f',
        icon: 'skype',
        link: 'skype:live:.cid.3877235d4216d91f?chat',
    },
    {
        name: 'Discord',
        icon: 'discord',
        link: '123465789',
    },
    {
        name: 'Stefano.Mori.Dev@gmail.com',
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
                timeframe: '2024 - Present',
                role: 'Full-Stack Developer',
                achievements: [
                    <>I develop full-stack applications and websites for small businesses. Using Next.js and React, I focus on dynamic routing and server-side rendering for better performance and SEO. For static sites, I use HTML, CSS, and JavaScript to create clean, user-friendly platforms that showcase services effectively.</>,
                    <>Utilizing Git and GitHub for organized version control and efficient collaboration. I streamline deployment with Vercel, ensuring fast, reliable updates that keep projects running smoothly.</>,
                    <>Leveraging AI tools to enhance productivity, meet deadlines, and deliver high-quality results. These innovations help improve development speed and elevate the overall user experience, supporting clients in reaching their business goals.</>
                ],
                images: []
            },
            {
                company: 'Kinetic Solutions LLC',
                timeframe: '2021 - Present', 
                role: 'Instructor / Full-Stack Developer',
                achievements: [
                    <>As the founder of Kinetic Solutions LLC, I lead our mission to provide practical, hands-on training for civilians, law enforcement, and military personnel. Our training focuses on building safety and confidence in high-stress situations. In addition to overseeing operations, I manage our online presence. By creating a user-friendly website, I make it easy for clients to connect with us, highlight our services, and expand our reach, helping our business grow.</>
                ],
                images: []
            },
            {
                company: 'Sawmill Tactical Training Complex',
                timeframe: '2021 - 2022',
                role: 'Director of Operations',
                achievements: [
                    <>As Director of Operations at the Sawmill Tactical Training Center, I managed daily activities, logistics, and a variety of training programs for military units, law enforcement, and civilians. I introduced strategies that improved efficiency and ensured high safety standards in all training sessions. I also supported the center’s digital strategy by maintaining the website and improving client engagement online, which helped increase our visibility and outreach.</>
                ],
                images: []
            },
            {
                company: 'United States Army',
                timeframe: '2004 - 2015',
                role: 'Sniper Team Leader / Recon Team Leader / Infantry Squad Leader',
                achievements: [
                    <>During my 11 years in the US Army, I held leadership roles such as Battalion Sniper Section Leader, Recon Team Leader, and Infantry Squad Leader. I developed and led training programs, managed assets worth over $5 million, and led teams in complex multinational missions. I also created protocols for classified operations and consistently achieved top scores in tactical training, showing my dedication to excellence and team effectiveness.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Tri-County Technical College',
                description: <>Computer Science, Emphasis in Cyber Security</>,
            },
            {
                name: 'Colorado Technical University',
                description: <>Computer Science, Emphasis in Cyber Security</>,
            },
            {
                name: 'Pikes Peak State College',
                description: <>Business & Business Administration</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Front-End Frameworks',
                description: <>React | Node.js | Next.js | Vue.js</>,
                images: [] 
            },
            {
                title: 'Automation & Workflow Optimization',
                description: <>Webpack | Gulp | npm | Continuous integration (CI/CD) with GitHub Actions</>,
                images: []
            },
            {
                title: 'Web Development Languages',
                description: <>HTML | CSS | JavaScript | TypeScript</>,
                images: []
            },
            {
                title: 'Responsive Design',
                description: <>CSS Grid | Flexbox | Media Queries | Mobile-First design</>,
                images: []
            },
            {
                title: 'UI Libraries & Frameworks',
                description: <>Bootstrap | Material-UI | Tailwind CSS</>,
                images: []
            },
            {
                title: 'Deployment Platforms',
                description: <>Vercel | Netlify | AWS</>,
                images: []
            },
            {
                title: 'Version Control & Collaboration',
                description: <>Git | GitHub</>,
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