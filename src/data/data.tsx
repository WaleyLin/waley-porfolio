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
import LinkedInIcon from'../components/Icon/LinkedInIcon';
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
import{
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
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
}as const;

export type SectionId=(typeof SectionId)[keyof typeof SectionId];

export const heroData:Hero={
  imageSrc:heroImage,
  name:`I'm Waley Lin.`,
  description:(
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Mesa, Arizona-based <strong className="text-stone-100">Full-Stack & Junior Developer</strong> passionate about building
        innovative software solutions, optimizing user experiences, and continuously exploring emerging technologies. I'm a first-generation college student, driven to make the most of every opportunity in tech.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy <strong className="text-stone-100">gaming and creating coding projects</strong> that enhance the gaming experience. I also love exploring AI, web3 innovations, and side projects that challenge me to learn and grow as a developer.
      </p>
    </>
  ),
  actions:[
    {href:'/assets/resume.pdf',text:'Resume',primary:true,Icon:ArrowDownTrayIcon},
    {href:`#${SectionId.Contact}`,text:'Contact',primary:false}
  ],
};

export const aboutData:About={
  profileImageSrc:profilepic,
  description:'I am a motivated Full-Stack Developer with experience in mobile app and web development. I enjoy building scalable and efficient applications while constantly expanding my knowledge in emerging technologies.',
  aboutItems:[
    {label:'Location',text:'Mesa, Arizona',Icon:MapIcon},
    {label:'Age',text:'22',Icon:CalendarIcon},
    {label:'Nationality',text:'Asian American (Chinese)',Icon:FlagIcon},
    {label:'Interests',text:'Gaming, Learning New Technologies, AI, Web3, Open-Source Contribution',Icon:SparklesIcon},
    {label:'Study',text:'Arizona State University (B.S. Computer Science, Honors)',Icon:AcademicCapIcon},
    {label:'Employment',text:"Scottsdale Fairmont Princess, Raising Cane's, In-N-Out",Icon:BuildingOffice2Icon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name:'Languages & Core',
    skills:[
      {name:'Python',level:10},
      {name:'JavaScript',level:10},
      {name:'TypeScript',level:10},
      {name:'Java',level:10},
      {name:'C++',level:10},
      {name:'SQL',level:10},
    ],
  },
  {
    name:'Web Development',
    skills:[
      {name:'React.js',level:10},
      {name:'React Native',level:10},
      {name:'HTML',level:10},
      {name:'CSS',level:10},
      {name:'Responsive Design',level:10},
      {name:'Tailwind CSS',level:10},
      {name:'Axios',level:10},
      {name:'Node.js',level:10},
      {name:'Express.js',level:10},
      {name:'FastAPI',level:10},
      {name:'Flask',level:10},
      {name:'REST APIs',level:10},
      {name:'JSON/API Integration',level:10},
      {name:'Authentication Basics JWT/Firebase Auth',level:10},
    ],
  },
  {
    name:'Tools & Databases',
    skills:[
      {name:'Firebase',level:10},
      {name:'SQLite',level:10},
      {name:'MongoDB',level:10},
      {name:'Git',level:10},
      {name:'GitHub',level:10},
      {name:'Docker',level:10},
      {name:'Postman',level:10},
      {name:'Vercel',level:10},
      {name:'Render',level:10},
      {name:'VS Code',level:10},
      {name:'Jupyter Notebook',level:10},
      {name:'CI/CD',level:10},
      {name:'Pandas',level:10},
      {name:'NumPy',level:10},
      {name:'Matplotlib',level:10},
      {name:'Seaborn',level:10},
      {name:'Expo',level:10},
      {name:'AWS',level:10},
      {name:'Microsoft Azure',level:10},
      {name:'Linux/Bash',level:10},
      {name:'Excel',level:10},
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {title:'SipNSavor',description:'iOS app available on the App Store. Helps users explore beverages and flavors interactively, perfect for learning and enjoyment.',url:'https://apps.apple.com/us/app/sipnsavor/id6745084274',image:porfolioImage1},
  {title:'AI-Sommelier',description:'AI-powered chatbot project for beverage recommendations and learning. Built with machine learning algorithms and accessible on GitHub.',url:'https://github.com/WaleyLin/AI-Sommelier',image:porfolioImage2},
  {title:'Regular Expression to DFA Converter',description:'C++ command-line tool converting simplified regular expressions into deterministic finite automata (DFAs). Supports *, U, and grouping operators for educational automata learning.',url:'https://github.com/WaleyLin/regex-to-dfa-converter',image:porfolioImage3},
  {title:'Pet Image Classifier (CNN)',description:'PyTorch Convolutional Neural Network classifying cat and dog images. Includes preprocessing, training, and evaluation with accuracy, recall, and precision metrics.',url:'https://github.com/WaleyLin/Convolutional-Networks',image:porfolioImage4},
  {title:'Bitcoin Price Prediction (LSTM)',description:'Deep learning project predicting Bitcoin closing prices using historical high, low, and open prices. Implemented with PyTorch and LSTM networks.',url:'https://github.com/WaleyLin/Recurrent-Network',image:porfolioImage5},
  {title:'Car Lock Reminder – iOS',description:'SwiftUI app that automatically detects driving and sends notifications to remind users to lock their car. Lightweight and privacy-conscious.',url:'https://github.com/WaleyLin/CarLockReminder-iOS',image:porfolioImage6},
  {title:'TFT Comp Master',description:'Web app for Teamfight Tactics that recommends optimal team compositions for your matches.',url:'https://tft-comp-master.base44.app',image:porfolioImage7},
  {title:'Fast Food Deals',description:'Responsive web app showcasing latest deals from top fast food restaurants. Users can filter and search dynamically with a clean, compact UI.',url:'https://github.com/WaleyLin/fastfooddeals',image:porfolioImage8},
  {title:'Mini Game Pack',description:'Collection of fun, interactive mini-games built with HTML, CSS, and vanilla JavaScript. Play directly in the browser with no setup needed.',url:'https://github.com/WaleyLin/minigamepack',image:porfolioImage9},
  {title:'Zombie Apocalypse Simulation',description:'C++ terminal-based simulation modeling a zombie outbreak with configurable infection, mutation, and strength parameters for educational fun.',url:'https://github.com/WaleyLin/zombie-apocalypse-simulation',image:porfolioImage10},
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

export const contact:ContactSection={
  headerText:'Get in touch.',
  description:'Feel free to reach out via email, phone, or social media links below.',
  items:[
    {type:ContactType.Email,text:'waaleylin@gmail.com',href:'mailto:waaleylin@gmail.com'},
    {type:ContactType.Location,text:'Mesa, AZ',href:'https://www.google.com/maps/place/Mesa,+AZ/'},
    {type:ContactType.Github,text:'WaleyLin',href:'https://github.com/WaleyLin'},
    {type:ContactType.LinkedIn,text:'Waley Lin',href:'https://www.linkedin.com/in/waleylin2003'},
  ],
};

export const socialLinks:Social[]=[
  {label:'Github',Icon:GithubIcon,href:'https://github.com/WaleyLin'},
  {label:'LinkedIn',Icon:LinkedInIcon,href:'https://www.linkedin.com/in/waleylin2003'},
];
