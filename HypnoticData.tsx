import {
  CalendarRange,
  ChevronsLeftRightEllipsis,
  GraduationCap,
  HomeIcon,
  Info,
  UserRoundPen,
  Binary,
  SearchCode,
  Linkedin,
  Instagram,
  Link2,
} from "lucide-react";
import { TfiWorld } from "react-icons/tfi";
import {
  AdvisoryBoardProps,
  LinkType,
  MembershipCardprops,
  QATYPE,
  SectionTwoType,
  TeamProps,
  WorkShopsProps,
} from "./HypnoticTypes";

const IconSize = 8;

export const quote = {
  description: (
    <>
      Every great dream begins with a dreamer. Always remember, you have within
      you the strength, the{" "}
      <span className=" px-2  border border-foreground mx-1 rounded-md">
        patience
      </span>
      , and the passion to reach for the stars to change the world.
    </>
  ),
  picture:
    "https://hxcqxvdpfctfywkxocdr.supabase.co/storage/v1/object/public/MyPics/264458597_448489896895215_5781428340992632480_n.jpg",
  whoSaid: "Bounader Med Rafik",
  Role: "Lame ass nigga",
};

export const Links: LinkType = [
  {
    title: "Home",
    icon: <HomeIcon size={IconSize} />,
    href: "/",
  },
  {
    title: "Advisory Board",
    icon: <GraduationCap size={IconSize} />,
    href: "#AdvisoryBoard",
  },
  {
    title: "Membership",
    icon: <UserRoundPen size={IconSize} />,
    href: "/membership",
  },
  // {
  //   title: "Events",
  //   icon: <CalendarRange size={IconSize} />,
  //   href: "/events",
  // },
  {
    title: "Team",
    icon: <TfiWorld size={IconSize} />,
    href: "#Team",
  },
  {
    title: "About us",
    icon: <Info size={IconSize} />,
    href: "/aboutus",
  },
];

export const QADATA: QATYPE = [
  {
    question: "What is I-Tech Club?",
    answer:
      "I-Tech Club is a student organization at the University of Chadli Ben Djedid focused on technology, innovation, and development.",
  },
  {
    question: "What are I-Tech Club's areas of interest?",
    answer:
      "I-Tech Club specializes in various fields, including IT, software development, artificial intelligence, game development, and more.",
  },
  {
    question: "What kind of activities does I-Tech Club organize?",
    answer:
      "I-Tech Club organizes a variety of activities such as workshops, hackathons, coding competitions, and guest lectures.",
  },
  {
    question: "How can I join I-Tech Club?",
    answer:
      "You can join I-Tech Club by contacting the club's officers or by attending one of our events.",
  },
  {
    question: "What are the benefits of joining I-Tech Club?",
    answer:
      "By joining I-Tech Club, you can gain valuable skills, network with like-minded individuals, and contribute to innovative projects.",
  },
];

export const AdvisoryBoard: AdvisoryBoardProps = [
  {
    name: "chmam dzb",
    smallDescription: "zbizbizbzibizbizbi",
    picture:
      "https://i.pinimg.com/564x/07/aa/b7/07aab7a301658969736784042fca7543.jpg",
    role: "nyak lclub",
    profile: "/",
  },
];

export const Team: TeamProps = [
  {
    name: "Lokman Touil",
    position: "President",
    picture:
      "https://media.licdn.com/dms/image/v2/D4E03AQFGrA0uDNh2UA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713216618621?e=1736380800&v=beta&t=-dIIIQE15yAN8ZvD87NiW4x0SGnRzkehnE8TZn_WaW0",
    description:
      "Intelligent Systems Master Student | Indie Game Developer | Software Engineer | Teacher",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lokman-touil-50ab90261/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Abderrahman Karamane",
    position: "Vice President",
    picture:
      "https://media.licdn.com/dms/image/v2/D5603AQH0MDxf_UV45w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709288552114?e=1736380800&v=beta&t=P3s1P2nAg4d4zkSmsVuE9KHLmURMcdwofZQqQWS6fhk",
    description: "Game Developper using unity and c-sharp",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abderrahman-karamane-863b122b7/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Aymen Melouah",
    position: "General Secretery",
    picture:
      "https://media.licdn.com/dms/image/v2/D4E03AQHvl9UNFRC14g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721414632064?e=1736380800&v=beta&t=mTbkL_Svs8Sw93qAbyO98iRPEbTNu3AYu7o9X-LxNQo",
    description: "Game developper, and Design Leader",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aymen-melouah-5bb6882b6/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Haraoui Kouceila",
    position: "Project Manager",
    picture: "/team/kouceila.webp",
    description:
      "Tech Leader, The Man The Myth The Legend The One And Only, Haraoui kouceila",
    socialLinks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/ax_el.dz/profilecard/?igsh=M3RzOTRiZjh3Mmxp",
        icon: <Instagram size={15} />,
      },
    ],
  },
  {
    name: "Saifi Zineddine",
    position: "BlockChain Leader ",
    picture: "/team/zino.jpg",
    description: "BlockChain expert & a contributer in video editing",
    socialLinks: [],
  },
  {
    name: "Bounader Med Rafik",
    position: "Web Dev Leader",
    picture:
      "https://hxcqxvdpfctfywkxocdr.supabase.co/storage/v1/object/public/MyPics/264458597_448489896895215_5781428340992632480_n.jpg",
    description: "Web Dev & Designer contributer",
    socialLinks: [
      {
        name: "Portfolio",
        url: "https://bmed.vercel.app/",
        icon: <Link2 size={15} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bounader-med-rafik/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Lamri Monir Siradj",
    position: "Community Manager",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQE7MbYHnTiG5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729699859757?e=1736380800&v=beta&t=9YdBC6yImcUK2yIeC0mV8vScyIWHAELXjZqwlkqFSoI",
    description:
      "IT Manager | Photographer | Passionate about AI, Recommendations systems, and Visual Storytelling",
    socialLinks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/siradj-lamri/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Mohamed Amir Necer",
    position: "Web Developper",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQH3cRi3hQRI5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729361861263?e=1736380800&v=beta&t=BCBOu3KA-rP2eb5H5a61uyrvm3krC0JPjGF4WZ9J-Ms",
    description:
      "Web Developer Enthusiest and happily engaged to work with you",
    socialLinks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/mohamed-amir-necer/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Bouhadjar Ramzi",
    position: "App Dev Leader",
    picture:
      "https://media.licdn.com/dms/image/v2/D4E03AQFwqV5YpvfVAQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673634373698?e=1736380800&v=beta&t=4I1jCyuG9aWxuwZJaJjHQQF-InJFOWezTIV8s94hiCI",
    description: "Video Producer & Mobile App developer",
    socialLinks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ramzibouhadjar/",
        icon: <Linkedin size={15} />,
      },
    ],
  },
];

export const MembershipCards: MembershipCardprops = [
  {
    title: "Transform Ideas into Code",
    description:
      "Discover the world of coding and development with hands-on projects and expert guidance. From apps to websites, turn your ideas into reality and sharpen your tech skills!",
    icon: <Binary size={64} />,
  },
  {
    title: "Fuel Your Curiosity, Elevate Your Skills",
    description:
      "Explore hands-on experiments and join interactive projects to refine your skills and expand your scientific knowledge. Fuel your curiosity with every step!",
    icon: <SearchCode size={64} />,
  },
  {
    title: "Empower Your Scientific Journey",
    description:
      "Gain valuable experience and knowledge through collaborative projects and expert mentorship. Take your scientific skills to the next level with us!",
    icon: <ChevronsLeftRightEllipsis size={64} />,
  },
];

export const WorkShops: WorkShopsProps = [
  {
    image:
      "https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg",
    description: (
      <>
        <p>
          <strong>Learn to build websites from scratch!</strong>
        </p>
        <p>
          <strong>In this workshop, you&#39;ll:</strong>
        </p>
        <ul>
          <li>Master HTML, CSS, and JavaScript</li>
          <li>Create dynamic and interactive web pages</li>
          <li>Build real-world projects</li>
          <li>Get expert guidance and support</li>
        </ul>
        <p>
          <strong>Join us to start your web development journey!</strong>
        </p>
      </>
    ),
    title: "Web Development Workshop",
  },
  {
    image:
      "https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg",
    description: (
      <>
        <p>
          <strong>Learn to build websites from scratch!</strong>
        </p>
        <p>
          <strong>In this workshop, you&#39;ll:</strong>
        </p>
        <ul>
          <li>Master HTML, CSS, and JavaScript</li>
          <li>Create dynamic and interactive web pages</li>
          <li>Build real-world projects</li>
          <li>Get expert guidance and support</li>
        </ul>
        <p>
          <strong>Join us to start your web development journey!</strong>
        </p>
      </>
    ),
    title: "Web Development Workshop",
  },
  {
    image:
      "https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg",
    description: (
      <>
        <p>
          <strong>Learn to build websites from scratch!</strong>
        </p>
        <p>
          <strong>In this workshop, you&#39;ll:</strong>
        </p>
        <ul>
          <li>Master HTML, CSS, and JavaScript</li>
          <li>Create dynamic and interactive web pages</li>
          <li>Build real-world projects</li>
          <li>Get expert guidance and support</li>
        </ul>
        <p>
          <strong>Join us to start your web development journey!</strong>
        </p>
      </>
    ),
    title: "Web Development Workshop",
  },
];

export const AboutUsInfos = () => {
  return (
    <>
      <p>
        <strong>I-Tech Club: Your Tech Hub at UCBET</strong>
      </p>
      <p>
        <strong>Who We Are</strong>
      </p>
      <p>
        I-Tech Club is more than just a club; it&#39;s a community of passionate
        tech enthusiasts at the University of Chadli Ben Djedid. We&#39;re a
        diverse group of students, from budding programmers to seasoned
        developers, united by our love for technology.
      </p>
      <p>
        <strong>What We Do</strong>
      </p>
      <p>
        We&#39;re committed to fostering a vibrant tech culture on campus.
        Through a variety of exciting activities, we strive to:
      </p>
      <ul>
        <li>
          <strong>Empower Students:</strong> Equip students with the skills and
          knowledge they need to succeed in the tech industry.
        </li>
        <li>
          <strong>Inspire Innovation:</strong> Encourage creativity and
          innovation by providing opportunities for students to work on
          cutting-edge projects.
        </li>
        <li>
          <strong>Build a Strong Community:</strong> Foster a supportive and
          inclusive environment where members can connect, collaborate, and
          learn from each other.
        </li>
      </ul>
      <p>
        <strong>Our Activities</strong>
      </p>
      <ul>
        <li>
          <strong>Workshops and Seminars:</strong> Learn from industry experts
          through our regular workshops and seminars on topics such as web
          development, artificial intelligence, cybersecurity, and more.
        </li>
        <li>
          <strong>Hackathons:</strong> Put your skills to the test in our
          exciting hackathons, where you&#39;ll collaborate with fellow students
          to build innovative solutions to real-world problems.
        </li>
        <li>
          <strong>Game Jams:</strong> Unleash your creativity and develop games
          in a short period of time.
        </li>
        <li>
          <strong>Tech Talks:</strong> Hear from inspiring speakers about the
          latest trends and advancements in technology.
        </li>
        <li>
          <strong>Networking Events:</strong> Connect with industry
          professionals and fellow students at our networking events.
        </li>
      </ul>
      <p>
        <strong>Join Us</strong>
      </p>
      <p>
        Whether you&#39;re a beginner or an experienced techie, there&#39;s
        always a place for you at I-Tech Club. Join us to:
      </p>
      <ul>
        <li>
          <strong>Learn New Skills:</strong> Expand your knowledge and skill
          set.
        </li>
        <li>
          <strong>Network with Like-Minded Individuals:</strong> Connect with
          other passionate tech enthusiasts.
        </li>
        <li>
          <strong>Work on Exciting Projects:</strong> Contribute to innovative
          projects and gain practical experience.
        </li>
        <li>
          <strong>Have Fun:</strong> Participate in fun and engaging activities.
        </li>
      </ul>
      <p>
        Ready to take your tech journey to the next level? Join I-Tech Club
        today!
      </p>
      <p>
        <strong>
          [Insert a captivating image of your club members working on a project
          or attending an event]
        </strong>
      </p>
      <p>
        <strong>
          [Insert a call to action, such as &quot;Join Us&quot; or &quot;Contact
          Us&quot;]
        </strong>
      </p>
      <p>
        <strong>[Include links to your social media pages or website]</strong>
      </p>
    </>
  );
};
