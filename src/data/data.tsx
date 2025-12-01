import{
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
}from'@heroicons/react/24/outline';

import GithubIcon from'../components/Icon/GithubIcon';
import InstagramIcon from'../components/Icon/InstagramIcon';
import LinkedInIcon from'../components/Icon/LinkedInIcon';
import StackOverflowIcon from'../components/Icon/StackOverflowIcon';
import TwitterIcon from'../components/Icon/TwitterIcon';
import heroImage from'../images/header-background.webp';
import porfolioImage1 from'../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from'../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from'../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from'../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from'../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from'../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from'../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from'../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from'../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from'../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from'../images/portfolio/portfolio-11.jpg';
import profilepic from'../images/profilepic.jpg';
import testimonialImage from'../images/testimonial.webp';
import{
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
}from'./dataDef';

export const homePageMeta:HomepageMeta={
  title:'Waley Lin Resume',
  description:'Portfolio and resume of Waley Lin, Full-Stack Developer and tech enthusiast',
};

export const SectionId={
  Hero:'hero',
  About:'about',
  Contact:'contact',
  Portfolio:'portfolio',
  Resume:'resume',
  Skills:'skills',
  Stats:'stats',
  Testimonials:'testimonials',
}as const;

export type SectionId=(typeof SectionId)[keyof typeof SectionId];

export const heroData:Hero={
  imageSrc:heroImage,
  name:`I'm Waley Lin.`,
  description:(
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Mesa, Arizona-based <strong className="text-stone-100">Full-Stack & Junior Developer</strong> passionate about building
        innovative software solutions, optimizing user experiences, and continuously exploring emerging technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy <strong className="text-stone-100">gaming, coding side projects, learning new technologies, and exploring AI and web3 innovations</strong> to stay ahead in the tech industry.
      </p>
    </>
  ),
  actions:[
    {href:'/assets/resume.pdf',text:'Resume',primary:true,Icon:ArrowDownTrayIcon},
    {href:`#${SectionId.Contact}`,text:'Contact',primary:false},
  ],
};

export const aboutData:About={
  profileImageSrc:profilepic,
  description:'I am a motivated Full-Stack Developer with experience in mobile app and web development. I enjoy building scalable and efficient applications while constantly expanding my knowledge in emerging technologies.',
  aboutItems:[
    {label:'Location',text:'Mesa, Arizona',Icon:MapIcon},
    {label:'Age',text:'22',Icon:CalendarIcon},
    {label:'Nationality',text:'American',Icon:FlagIcon},
    {label:'Interests',text:'Gaming, Learning New Technologies, AI, Web3, Open-Source Contribution',Icon:SparklesIcon},
    {label:'Study',text:'Arizona State University (B.S. Computer Science, Honors)',Icon:AcademicCapIcon},
    {label:'Employment',text:"Scottsdale Fairmont Princess, Raising Cane's, In-N-Out",Icon:BuildingOffice2Icon},
  ],
};

export const skills:SkillGroup[]=[
  {
    name:'Programming Languages',
    skills:[
      {name:'Python',level:9},
      {name:'JavaScript',level:8},
      {name:'TypeScript',level:7},
      {name:'Java',level:7},
      {name:'C++',level:6},
      {name:'SQL',level:7},
      {name:'HTML',level:8},
      {name:'CSS',level:7},
      {name:'MATLAB',level:5},
      {name:'Scheme',level:4},
      {name:'Prolog',level:4},
    ],
  },
  {
    name:'Technologies & Frameworks',
    skills:[
      {name:'React.js',level:9},
      {name:'React Native',level:9},
      {name:'Node.js',level:8},
      {name:'Express.js',level:7},
      {name:'FastAPI',level:6},
      {name:'Flask',level:5},
      {name:'Firebase',level:8},
      {name:'Expo',level:8},
      {name:'Docker',level:6},
      {name:'Git & GitHub',level:9},
      {name:'Render / Vercel',level:7},
      {name:'SQLite / MongoDB (basic)',level:6},
      {name:'VS Code / Jupyter Notebook',level:9},
      {name:'Data Analysis (Pandas, NumPy, Matplotlib, Seaborn)',level:7},
    ],
  },
];

export const portfolioItems:PortfolioItem[]=[
  {title:'The Virtual Sommelier',description:'AI Chatbot for interactive beverage learning built as an honors thesis project at ASU.',url:'BLANK',image:porfolioImage1},
  {title:'Pet Image Classifier',description:'CNN-based PyTorch project to classify pet images with 87% accuracy.',url:'BLANK',image:porfolioImage2},
  {title:'Project title 3',description:'BLANK',url:'BLANK',image:porfolioImage3},
  {title:'Project title 4',description:'BLANK',url:'BLANK',image:porfolioImage4},
  {title:'Project title 5',description:'BLANK',url:'BLANK',image:porfolioImage5},
  {title:'Project title 6',description:'BLANK',url:'BLANK',image:porfolioImage6},
  {title:'Project title 7',description:'BLANK',url:'BLANK',image:porfolioImage7},
  {title:'Project title 8',description:'BLANK',url:'BLANK',image:porfolioImage8},
  {title:'Project title 9',description:'BLANK',url:'BLANK',image:porfolioImage9},
  {title:'Project title 10',description:'BLANK',url:'BLANK',image:porfolioImage10},
  {title:'Project title 11',description:'BLANK',url:'BLANK',image:porfolioImage11},
];

export const education:TimelineItem[]=[
  {date:'August 2021 - May 2025',location:'Arizona State University, Tempe, AZ',title:'B.S. Computer Science, Honors (Barrett, The Honors College)',content:<p>GPA: 3.72. Completed honors thesis on AI chatbot for beverage learning integrating OpenAI GPT and Firebase.</p>},
];

export const experience:TimelineItem[]=[
  {date:'Aug 2024 - May 2025',location:'Scottsdale Fairmont Princess, Scottsdale, AZ',title:'Full-Stack Developer Lead',content:<p>Led full-stack development of a mobile learning app focused on beverage and food pairing education. Built frontend using React Native and Expo, backend with Firebase. Directed wireframing, UI prototyping, database design, and feature implementation. Managed deployment, debugging, and cross-platform optimization. Released on the App Store for real users.</p>},
  {date:'2021 - Present',location:"Raising Cane's Chicken Fingers",title:'Certified Trainer',content:<p>Coordinated workflows across prep stations, executed quality checks, trained new team members, assisted with operational troubleshooting, and tracked process efficiency.</p>},
  {date:'June 2025 - Present',location:'In-N-Out',title:'Team Member',content:<p>Providing high-quality customer service, maintaining operational efficiency, and assisting in staff training and onboarding.</p>},
];

export const testimonial:TestimonialSection={
  imageSrc:testimonialImage,
  testimonials:[
    {name:'',text:'',image:''},
    {name:'',text:'',image:''},
    {name:'',text:'',image:''},
  ],
};

export const contact:ContactSection={
  headerText:'Get in touch.',
  description:'Feel free to reach out via email, phone, or social media links below.',
  items:[
    {type:ContactType.Email,text:'waaleylin@gmail.com',href:'mailto:waaleylin@gmail.com'},
    {type:ContactType.Location,text:'Mesa, AZ',href:'https://www.google.com/maps/place/Mesa,+AZ/'},
    {type:ContactType.Github,text:'WaleyLin',href:'https://github.com/WaleyLin'},
    {type:ContactType.LinkedIn,text:'Waley Lin',href:'https://www.linkedin.com/in/waleylin2003'},
    {type:ContactType.Instagram,text:'waaleylin',href:'https://www.instagram.com/waaleylin/'},
  ],
};

export const socialLinks:Social[]=[
  {label:'Github',Icon:GithubIcon,href:'https://github.com/WaleyLin'},
  {label:'Stack Overflow',Icon:StackOverflowIcon,href:'BLANK'},
  {label:'LinkedIn',Icon:LinkedInIcon,href:'https://www.linkedin.com/in/waleylin2003'},
  {label:'Instagram',Icon:InstagramIcon,href:'https://www.instagram.com/waaleylin/'},
  {label:'Twitter',Icon:TwitterIcon,href:'BLANK'},
];
