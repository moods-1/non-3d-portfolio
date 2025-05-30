import {
	Tailwind,
	ramani,
	BeyondWeb,
	HTML,
	CSS,
	JavaScript,
	ReactPic,
	Bootstrap,
	MUI,
	Node,
	MongoDB,
	Vue,
	SASS,
	JQuery,
	TypeScript,
	NextJS,
	Docker,
	SQL,
	AWS,
	HtmlBrackets,
	webflix,
	dashboard,
	herbNation,
	pizzeria,
	Herman,
	Gideon,
	Debbie,
	moodsU,
	mbank,
	ThreeJS,
	Blender,
	Relay
} from '../assets';

export const navLinks = {
	1: {
		id: 'about',
		title: 'About',
		index: 1,
	},
	2: {
		id: 'experience',
		title: 'Experience',
		index: 2,
	},
	3: {
		id: 'projects',
		title: 'Projects',
		index: 3,
	},
	4: {
		id: 'testimonials',
		title: 'Testimonials',
		index: 4,
	},
	5: {
		id: 'contact',
		title: 'Contact',
		index: 5,
	},
};

const services = [
	{
		title: 'Web Developer',
		icon: HtmlBrackets,
	},
	{
		title: 'React Developer',
		icon: ReactPic,
	},
	{
		title: 'Backend Developer',
		icon: Node,
	},
];

const experiences = [
	{
		title: 'Front End Devloper',
		companyName: 'Relay Financial Technologies Inc.',
		companyNameColor: 'text-[#004822]',
		companyLocation: 'Toronto, ON',
		workType: 'Hybrid',
		icon: Relay,
		iconBg: '#004822',
		date: 'Mar 2025 - current',
		points: [
			'Work closely with the marketing, design and engineering teams to drive Relay’s 2025 website re-design.',
			'Leverage Next.js, Figma, Jira, Git, CI/CD, and other industry-standard tools to streamline development workflows and deliver high-quality web solutions efficiently.',
			'Perform code reviews.'
		],
	},
	{
		title: 'React Three Fiber Developer',
		companyName: 'BeyondWeb Technologies',
		companyNameColor: 'text-white',
		companyLocation: 'Brampton, ON',
		workType: 'Remote',
		icon: BeyondWeb,
		iconBg: '#000000',
		date: 'Oct 2024 - Jan 2025',
		points: [
			'Created and optimized 3D models in Blender, implementing custom shaders and materials for enhanced realism',
			'Developed interactive 3D experiences using React Three Fiber and integrated Blender models into React.',
			'Generated user interfaces within 3D environments, ensuring smooth performance and responsiveness across devices',
			'Created an interactive 3D tour of a virtual art gallery, which featured realistic lighting',
		],
	},
	{
		title: 'Full Stack Developer',
		companyName: 'Ramani Corporation',
		companyNameColor: 'text-green-600',
		companyLocation: 'Dar Es Salaam, TZ',
		workType: 'Remote',
		icon: ramani,
		iconBg: '#000000',
		date: 'Apr 2021 - Jun 2023',
		points: [
			'Managed a supply chain management SaaS program for over 100 micro-distribution centers (MDCs), enabling real-time management of procurement, inventory, and POS activities, reducing operational costs by 10%',
			'Migrated the server to AWS, leveraging scalable compute resources (EC2) and secure data storage (S3), resulting in a 25% improvement in system uptime and reliability',
			'Engineered and maintained RESTful APIs using Node.js and Express.js, integrating them seamlessly with MongoDB for efficient data storage and retrieval',
			'Utilized CircleCI for CI/CD',
			'Collaborated with the design team and frontend to ensure a seamless integration of Figma wireframes that lead to higher quality completed stories, which reduced sprint times',
			'Conducted code/pull request reviews to ensure high-quality code and adherence to best practices',
			'Refactored the application to improve performance, SEO, and best practice scores, while, leading to a 15% increase in application speed',
		],
	}
];

const testimonials = [
	{
		testimonial:
			"Whether it's bringing designs to life or tackling complex backend challenges, Carl consistently exceeds expectations and delivers outstanding results.\nWhat sets Carl apart is his dedication to going above and beyond. He's not only mastered front-end development but also expanded his skills to become a proficient backend engineer. This versatility is invaluable to our team as he seamlessly transitions between tasks and consistently achieves exceptional results.",
		name: 'Herman Kwayu',
		designation: 'Sr.Project Manager',
		company: 'Ramani Corp.',
		image: Herman,
		linkedIn: 'https://tz.linkedin.com/in/herman-kwayu-044733135',
	},
	{
		testimonial:
			'I find working with Carl to be enjoyable due to his qualities as an owner, his keen eye for detail, and his adeptness at asking clarifying questions.',
		name: 'Gideon Bamuleseyo',
		designation: 'Lead Web Developer',
		company: 'Ramani Corp.',
		image: Gideon,
		linkedIn: 'https://www.linkedin.com/in/gideon-bamuleseyo-07b574119',
	},
	{
		testimonial: `As a Product Designer, Carl has been one of the best Front-End Engineers I've had the privilege to work with. Carl's attention to detail is remarkable. He is able to effortlessly transform design specifications into flawless code with speed & accuracy. Carl has the amazing ability to absorb feedback and implement changes seamlessly. Carl is a true team player, and any product & engineering team would be incredibly fortunate to have him on their side! `,
		name: 'Debbie Adejumo',
		designation: 'UX Design Lead',
		company: 'Ramani Corp.',
		image: Debbie,
		linkedIn: 'https://www.linkedin.com/in/debbie-adejumo',
	},
];

const projects = [
	{
		name: 'Moods U Online',
		description:
			'An online university for software engineering. Users can browse, and purchase courses with Stripe. A PDF invoice is downloaded when a purchase is made.',
		tags: [
			{
				name: 'react',
				color: 'text-cyan-400',
			},
			{
				name: 'redux',
				color: 'text-red-500',
			},
			{
				name: 'stripe',
				color: 'text-white',
			},
			{
				name: 'mongodb',
				color: 'text-green-500',
			},
			{
				name: 'node',
				color: 'text-green-500',
			},
		],
		image: moodsU,
		url: 'https://moods-u-online.web.app',
		source_code_link: 'https://github.com/moods-1/moods-u-online',
	},
	{
		name: 'MBank Financial',
		description:
			'An online banking app. Clients can move money between their accounts. They can also make payments, and view and filter transactions.',
		tags: [
			{
				name: 'nextjs',
				color: 'text-cyan-400',
			},
			{
				name: 'typescript',
				color: 'text-white',
			},
			{
				name: 'redux',
				color: 'text-red-500',
			},
			{
				name: 'mongodb',
				color: 'text-green-500',
			},
		],
		image: mbank,
		url: 'https://mbank-financial.vercel.app/login',
		source_code_link: 'https://github.com/moods-1/mbank.git',
	},
	{
		name: 'Webflix',
		description:
			'A multi-media app that is visually similar to the frontend of Netflix. The content is dynamically loaded based on various criteria such as genres, trending, and source networks.',
		tags: [
			{
				name: 'react',
				color: 'text-cyan-400',
			},
			{
				name: 'mui',
				color: 'text-white',
			},
			{
				name: 'tmdb',
				color: 'text-red-500',
			},
			{
				name: 'axios',
				color: 'text-green-500',
			},
		],
		image: webflix,
		url: 'https://webbflixx.web.app',
		source_code_link: 'https://github.com/moods-1/webflix',
	},
	{
		name: 'Dashboard',
		description:
			'A drag and drop task management dashboard. Charts and graphs are available for clear performance visibility. The user can edit and add customers, tasks and users.',
		tags: [
			{
				name: 'react',
				color: 'text-cyan-400',
			},
			{
				name: 'node restapi',
				color: 'text-white',
			},
			{
				name: 'mongodb',
				color: 'text-green-500',
			},
			{
				name: 'context',
				color: 'text-red-500',
			},
		],
		image: dashboard,
		url: 'https://task-dashboard.web.app',
		source_code_link: 'https://github.com/moods-1/draggable-task-flow',
	},
	{
		name: 'Herb Nation',
		description:
			'Source for knowledge on herbs and their traditional medicinal uses. Foraging locations in the Americas are provided. ',
		tags: [
			{
				name: 'next',
				color: 'text-cyan-400',
			},
			{
				name: 'tailwind',
				color: 'text-white',
			},
			{
				name: 'mongodb',
				color: 'text-green-500',
			},
			{
				name: 'cloundinary',
				color: 'text-white',
			},
		],
		image: herbNation,
		url: 'https://herb-nation.vercel.app',
		source_code_link: 'https://github.com/moods-1/herb-nation',
	},
	{
		name: 'Pizzeria',
		description: 'Ecommerce site for a gourmet mom and pop pizzeria.',
		tags: [
			{
				name: 'react',
				color: 'text-cyan-400',
			},
			{
				name: 'context',
				color: 'text-red-500',
			},
			{
				name: 'node restapi',
				color: 'text-white',
			},
			{
				name: 'paypal',
				color: 'text-green-500',
			},
		],
		image: pizzeria,
		url: 'https://pizzeria-moodi.web.app',
		source_code_link: 'https://github.com/moods-1/pizzeria',
	},
];

const skills = [
	{
		img: JavaScript,
		skill: 'JavaScript',
		color: 'rgba(255,255,0,0.2)',
		level: '90%',
	},
	{
		img: JQuery,
		skill: 'jQuery',
		color: 'rgba(30,144,255,0.2)',
		level: '75%',
	},
	{
		img: TypeScript,
		skill: 'TypeScript',
		color: 'rgba(30,144,255,0.2)',
		level: '90%',
	},
	{ img: Node, skill: 'Node JS', color: 'rgba(50,205,50,0.2)', level: '80%' },
	{
		img: SQL,
		skill: 'SQL',
		color: 'rgba(30,144,255,0.2)',
		level: '90%',
	},
	{
		img: ReactPic,
		skill: 'React JS',
		color: 'rgba(0,255,255,0.1)',
		level: '90%',
	},
	{
		img: NextJS,
		skill: 'Next.js',
		color: 'rgba(255,255,255,0.3)',
		level: '90%',
	},
	{ img: Vue, skill: 'Vue', color: 'rgba(50,205,50,0.2)', level: '80%' },
	{ img: HTML, skill: 'HTML', color: 'rgba(255,165,0,0.3)', level: '95%' },
	{ img: CSS, skill: 'CSS', color: 'rgba(30,144,255,0.2)', level: '90%' },
	{
		img: Tailwind,
		skill: 'Tailwind',
		color: 'rgba(30,144,255,0.2)',
		level: '80%',
	},
	{
		img: Bootstrap,
		skill: 'Bootstrap',
		color: 'rgba(85, 60, 123,0.5)',
		level: '90%',
	},
	{
		img: MUI,
		skill: 'Material-UI',
		color: 'rgba(30,144,255,0.2)',
		level: '85%',
	},

	{ img: SASS, skill: 'SASS', color: 'rgba(255,192,203,0.4)', level: '80%' },
	{
		img: ThreeJS,
		skill: 'Three JS',
		color: 'rgba(255,255,255,0.4)',
		level: '70%',
	},
	{
		img: Blender,
		skill: 'Blender',
		color: 'rgba(30,144,255,0.2)',
		level: '70%',
	},
	{
		img: MongoDB,
		skill: 'MongoDB',
		color: 'rgba(50,205,50,0.2)',
		level: '80%',
	},
	{
		img: AWS,
		skill: 'AWS',
		color: 'rgba(255,165,0,0.3)',
		level: '60%',
	},
	{ img: Docker, skill: 'Docker', color: 'rgba(30,144,255,0.2)', level: '80%' },
];

export { services, experiences, testimonials, projects, skills };

export const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;
