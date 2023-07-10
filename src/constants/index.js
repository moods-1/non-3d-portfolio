import {
	Tailwind,
	ramani,
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
	HtmlBrackets,
	webflix,
	dashboard,
	covid,
	Herman,
	Gideon,
	Debbie,
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
		title: 'Full-Stack Developer',
		company_name: 'Ramani Corporation',
		icon: ramani,
		iconBg: '#383E56',
		date: 'April 2021 - June 2023',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Create REST APIs with Node JS, Express, Mongoose, and various other modules and libraries.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial: "Whether it's bringing designs to life or tackling complex backend challenges, Carl consistently exceeds expectations and delivers outstanding results.\nWhat sets Carl apart is his dedication to going above and beyond. He's not only mastered front-end development but also expanded his skills to become a proficient backend engineer. This versatility is invaluable to our team as he seamlessly transitions between tasks and consistently achieves exceptional results.",
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
		name: 'Task Dashboard',
		description:
			'A drag and drop task management dashboard. Charts and graphs are available for clear performance visibility. The user can edit and add tasks and users.',
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
		],
		image: dashboard,
		url: 'https://task-dashboard.web.app',
		source_code_link: 'https://github.com/moods-1/draggable-task-flow',
	},
	{
		name: 'Covid Tracker',
		description:
			'This app tracks past and current COVID-19 global data. It has many effective visual aids to help the end-user get a clear understanding quickly.',
		tags: [
			{
				name: 'react',
				color: 'text-cyan-400',
			},
			{
				name: 'leaflet',
				color: 'text-white',
			},
			{
				name: 'chartjs',
				color: 'text-red-500',
			},
		],
		image: covid,
		url: 'https://covid-19-tracker-global.web.app',
		source_code_link: 'https://github.com/moods-1/covid-19-tracker',
	},
];

const skills = [
	{ img: HTML, skill: 'HTML', color: 'rgba(255,165,0,0.3)', level: '95%' },
	{ img: CSS, skill: 'CSS', color: 'rgba(30,144,255,0.2)', level: '90%' },
	{
		img: JavaScript,
		skill: 'JavaScript',
		color: 'rgba(255,255,0,0.2)',
		level: '90%',
	},
	{
		img: ReactPic,
		skill: 'React JS',
		color: 'rgba(0,255,255,0.1)',
		level: '90%',
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
	{ img: Node, skill: 'Node JS', color: 'rgba(50,205,50,0.2)', level: '80%' },
	{
		img: MongoDB,
		skill: 'MongoDB',
		color: 'rgba(50,205,50,0.2)',
		level: '80%',
	},
	{ img: Vue, skill: 'Vue', color: 'rgba(50,205,50,0.2)', level: '80%' },
	{
		img: Tailwind,
		skill: 'Tailwind',
		color: 'rgba(30,144,255,0.2)',
		level: '80%',
	},
	{ img: SASS, skill: 'SASS', color: 'rgba(255,192,203,0.4)', level: '80%' },
	{
		img: JQuery,
		skill: 'jQuery',
		color: 'rgba(30,144,255,0.2)',
		level: '75%',
	},
];

export { services, experiences, testimonials, projects, skills };

export const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;
