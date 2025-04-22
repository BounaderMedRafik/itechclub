import {
  BookOpen,
  Calendar,
  Clock,
  Code,
  Facebook,
  Folder,
  GraduationCap,
  Handshake,
  History,
  Home,
  Image,
  Info,
  Instagram,
  Lightbulb,
  Mail,
  MessageCircle,
  ShieldHalf,
  Trophy,
  Users,
} from "lucide-react";
import {
  FeaturesProps,
  GalleryProp,
  MemberProps,
  NavItemProps,
  Quote,
  SocialProps,
  UpcomingEvent,
} from "./types";
import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";
export const iconSize = 12;

export const navItems: NavItemProps[] = [
  {
    title: "Home",
    link: "/#home",
    icon: <Home size={iconSize} />,
  },
  {
    title: "About Us",
    link: "/#about",
    icon: <Info size={iconSize} />,
    image: "/guessiba.png",
    subItems: [
      {
        title: "Who are we",
        link: "/#who-are-we",
        icon: <Users size={iconSize} />,
      },
      {
        title: "Team",
        link: "/#team",
        icon: <ShieldHalf size={iconSize} />,
      },
      {
        title: "Advisory Board",
        link: "/#advisory-board",
        icon: <GraduationCap size={iconSize} />,
      },
      {
        title: "Instagram",
        icon: <BsInstagram size={14} />,
        link: "https://www.instagram.com/itech_ucbet/",
      },
      {
        title: "Facebook",
        icon: <BsFacebook size={14} />,
        link: "https://www.facebook.com/i.tech.el.tarf.2025",
      },
      {
        title: "Discord",
        icon: <BsDiscord size={14} />,
        link: "https://discord.gg/XTCfstyx77",
      },
    ],
  },
  {
    title: "Events",
    link: "/events",
    icon: <Calendar size={iconSize} />,
    image: "/siradj.jpg",
    subItems: [
      {
        title: "Upcoming Events",
        link: "/#upcoming-event",
        icon: <Clock size={iconSize} />,
      },
      {
        title: "Past Events",
        link: "/events/",
        icon: <History size={iconSize} />,
      },
    ],
  },

  // {
  //   title: "Community",
  //   image: "lokiandhisgf.png",
  //   link: "/community",
  //   icon: <Users size={iconSize} />,
  //   subItems: [
  //     {
  //       title: "Forum",
  //       link: "/community/forum",
  //       icon: <MessageCircle size={iconSize} />,
  //     },
  //     {
  //       title: "Collaboration",
  //       link: "/community/collaboration",
  //       icon: <Handshake size={iconSize} />,
  //     },
  //   ],
  // },
];

export const quote: Quote = {
  quote: (
    <div>
      Every great dream begins with a dreamer. Always remember, you have within
      you the strength, the patience, and the passion to reach for the stars to
      change the world.
    </div>
  ),
  person: {
    name: "Lokman Touil",
    pfp: "/kids/lokman.png",
    role: "President of I-Tech UCBET",
  },
};

export const features: FeaturesProps[] = [
  {
    title: "Think",
    desc: "Cultivate innovative ideas and explore creative solutions to complex problems.",
    bgColor: "#E0F2FE", // Light blue background
    iconColor: "#1D4ED8", // Darker blue icon
    icon: <Lightbulb color="#1D4ED8" />,
  },
  {
    title: "Develop",
    desc: "Transform concepts into tangible projects through coding, design, and engineering.",
    bgColor: "#E6FCE9", // Light green background
    iconColor: "#16A34A", // Darker green icon
    icon: <Code color="#16A34A" />,
  },
  {
    title: "Achieve",
    desc: "Realize your goals and make a meaningful impact through collaborative efforts and technical excellence.",
    bgColor: "#EDE9FE", // Light purple background
    iconColor: "#6B21A8", // Darker purple icon
    icon: <Trophy color="#6B21A8" />,
  },
];

export const members: MemberProps[] = [
  {
    fullname: "Lokman Touil",
    description:
      "Visionary Game Developer and dedicated leader with a passion for interactive storytelling. As President, Lokman brings creativity and direction to the team, constantly pushing the boundaries of what's possible in game development.",
    role: "Game Developper & President",
    pfp: "/kids/lokman.png",
    images: "/men/lokman.jpg",
    socials: {
      insta: "https://www.instagram.com/loki_touil/",
      linkedin: "https://www.linkedin.com/in/lokman-touil-50ab90261/",
      facebook: "https://www.facebook.com/lokman.touil.127",
    },
  },
  {
    fullname: "Haroui Koussaila",
    description:
      "Innovative AI Developer and strategic Project Manager, combining technical prowess with organizational insight. Koussaila is passionate about creating intelligent systems and driving projects from ideation to execution.",
    role: "Ai Developer & Project Manager",
    pfp: "/kids/kouciela.png",
    images: "/men/kouc.png",
    socials: {
      insta: undefined,
      linkedin: undefined,
      facebook: "https://www.facebook.com/profile.php?id=100012340623692",
      website: undefined,
      twitter: undefined,
    },
  },

  {
    fullname: "Karamane Abderrahmane",
    description:
      "Abderrahmane brings creative vision and technical prowess to the team as a Game Developer and Vice President. Passionate about interactive storytelling and immersive design, he leads with innovation and a drive to push boundaries in game development.",
    role: "Game Developper & Vice President",
    pfp: "/kids/abdo.png",
    images: "/men/abdo.jpg",
    socials: {
      insta: "https://www.instagram.com/abderahmenzizo/",
      linkedin: "https://www.linkedin.com/in/abderrahman-karamane-863b122b7/",
      facebook: "https://www.facebook.com/abderahmen.zizo.2025",
      website: undefined,
      twitter: undefined,
    },
  },
  {
    fullname: "Hussein Islem",
    description:
      "Detail-oriented Web Developer and proactive Organizer with a focus on structure and design. Hussein ensures every project runs smoothly while crafting responsive and dynamic web experiences.",
    role: "Web Developper & Organizer",
    pfp: "/kids/guessiba.jpeg",
    images: "/men/islem.png",
    socials: {
      insta: "https://www.instagram.com/isslam._.hessaine/",
      linkedin: undefined,
      facebook: "https://www.facebook.com/isslam.xr",
      website: undefined,
      twitter: undefined,
    },
  },
  {
    fullname: "Bounader Med Rafik",
    description:
      "Creative Web Developer with a knack for clean, user-friendly interfaces. Rafik is committed to delivering seamless online experiences and is always ready to collaborate on exciting web projects.",
    role: "Web Developer",
    pfp: "/kids/rafik.png",
    images: "/men/raifkouch.jpg",
    socials: {
      insta: "https://www.instagram.com/bounaderrafik/",
      facebook: "https://www.facebook.com/mohamd.rafik.945349/",
      website: "https://bmed.vercel.app/",
      twitter: "https://x.com/bwnadrrr",
    },
  },
  {
    fullname: "Bouzana Chirine",
    description:
      "Chirine refines content and communication with her strong English background, making her key to writing and documentation.",
    role: "Content Strategist & Language Specialist",
    pfp: "/kids/chirine.png",
    images: "",
    socials: {
      insta: undefined,
      linkedin: undefined,
      facebook: "https://www.facebook.com/gen.kei",
      website: undefined,
      twitter: undefined,
    },
  },
  {
    fullname: "Lamri Monir Siradj",
    description:
      "Passionate Community Manager and storyteller with a deep love for photography and AI. Monir blends communication, creativity, and tech to engage and grow vibrant communities, both online and off.",
    role: "Community Manager",
    pfp: "/kids/siradj_pfp.png",
    images: "/men/sarouj.jpg",
    socials: {
      insta: "https://www.instagram.com/sirgio03/",
      linkedin: "https://www.linkedin.com/in/siradj-lamri/",
      facebook: "https://www.facebook.com/gogo.lamri.7",
      website: undefined,
      twitter: undefined,
    },
  },
  {
    fullname: "Aymen Melouah",
    description:
      "Multidisciplinary Game Developer and Design Leader with a talent for immersive gameplay and artistic direction. Aymen excels in organizing initiatives while fostering innovation and design excellence.",
    role: "General Secretery",
    pfp: "/kids/aymen_pfp.png",
    images: "/men/aymouna.jpg",
    socials: {
      insta: "https://www.instagram.com/aymen.melouah/",
      linkedin: "https://www.linkedin.com/in/aymen-melouah-5bb6882b6/",
      facebook: "https://www.facebook.com/aymena.948.madrid",
      website: undefined,
      twitter: undefined,
    },
  },
  {
    fullname: "Bouhadjar Ramzi",
    description:
      "Versatile App Developer and talented Video Producer, Ramzi transforms ideas into interactive mobile apps and compelling visual content. A true blend of technical skills and artistic flair.",
    role: "App Developer",
    pfp: "/kids/ramzi.png",
    images: "/men/ramzouz.jpeg",
    socials: {
      insta: "https://www.instagram.com/monsieur_rbh/",
      linkedin: "https://www.linkedin.com/in/ramzibouhadjar/",
      facebook: "https://www.facebook.com/MonsieurRbh",
      website: undefined,
      twitter: undefined,
    },
  },
  {
    fullname: "Mohamed Amir Necer",
    description:
      "Driven Web Developer with a strong focus on elegant design and smooth user experience. Amir combines technical efficiency with a collaborative mindset to bring digital visions to life.",
    role: "Web Developer",
    pfp: "/kids/nasser.png",
    images: "/men/nesser.png",
    socials: {
      insta: "https://www.instagram.com/amiir_ncr/",
      linkedin: "https://www.linkedin.com/in/mohamed-amir-necer/",
      facebook: undefined,
      website: "https://mohamedamirnecer-portfolio.vercel.app/",
      twitter: undefined,
    },
  },
];

export const superVisors: MemberProps[] = [
  {
    fullname: "Abdelmadjid Benmachiche ",
    description:
      "The deputy head of department responsible for schooling and graduation teachers",
    role: "The deputy head of department",
    pfp: "/supervisors/madjidcute.jpeg",
    images: "/supervisors/madjid.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/abdelmadjid-benmachiche-80100062/",
      facebook: "https://www.facebook.com/magid.ben.10",
      website: "https://www.researchgate.net/profile/Abdelmadjid-Benmachiche",
    },
  },
  {
    fullname: "Newfel Messaoudi",
    description:
      "Oversees club operations, coordinates events, supervises staff or volunteers, and ensures a safe, engaging environment for members",
    role: "Club supervisor",
    pfp: "/supervisors/naoufelcute.jpeg",
    images: "/supervisors/naoufel.jpg",
    socials: {
      facebook: "https://www.facebook.com/newfel.messaoudi",
      website: "https://www.researchgate.net/profile/Newfel-Messaoudi",
    },
  },
];

export const events: UpcomingEvent[] = [
  {
    title: "Welcome Day!",
    join: "",
    location: "Chadli Bendjedid University",
    upcoming: false,
    description: (
      <div>
        <p>
          📢 ITECH Club&apos;s Open Days have ended... but the excitement is
          just beginning! 🚀
        </p>
        <p>
          ✨ The days were full of energy and enthusiasm — we introduced you to
          our projects and goals, and shared our passion for technology and
          science. 🌐💡
        </p>
        <p>
          Thank you to everyone who visited, joined the activities, asked
          questions, or even just stopped by to say hi. 🙌
        </p>
        <p>
          The journey doesn&apos;t end here... stay tuned for more upcoming
          events and workshops that&apos;ll be even bigger and better! 🔥
        </p>
      </div>
    ),
    date: "15 October 2024",
    image: "/eventsPics/welcomeday2024/1.jpg",
    showcaseImages: [
      "/eventsPics/welcomeday2024/2.jpg",
      "/eventsPics/welcomeday2024/3.jpg",
      "/eventsPics/welcomeday2024/4.jpg",
    ],
  },

  {
    title: "I-Tech workshops 2025!",
    date: "15-16 April 2025",
    location: "Chadli Bendjedid University | Ai House",
    description: (
      <div>
        <p>
          🔧✨ Warsha is a hands-on training workshop exclusively for i-Tech
          Club members, designed to boost your skills in one of three exciting
          fields: 🎮 Game Development | 💻 Web Development | 🤖 Robotics | 📱App
          Development
        </p>
        <p>It&apos;s all about learning, building, and creating together.</p>
        <p>📍 Members only — stay tuned for what&apos;s coming next!</p>
      </div>
    ),
    image: "/warsha.jpg",
    participants: [
      {
        pfp: "/kids/ramzi.png",
        name: "Bouhadjar Ramzi",
        role: "App Developer",
      },
      {
        pfp: "/kids/kouciela.png",
        name: "Haroui Koussaila",
        role: "Ai Developer & Project Manager",
      },
      {
        pfp: "/kids/rafik.png",
        name: "Bounader Med Rafik",
        role: "Web Developer",
      },
      {
        pfp: "/kids/lokman.png",
        name: "Lokman Touil",
        role: "Game Developper",
      },
      {
        pfp: "/kids/nasser.png",
        name: "Mohamed Amir Necer",
        role: "Web Developer",
      },
    ],
    join: "https://docs.google.com/forms/d/e/1FAIpQLSen1Td9iWQevvRwAsmPMoCrdKgnkKD3KHKYKZKuKACt1rBICg/viewform",
    upcoming: false,
    showcaseImages: [
      "/eventsPics/15-16-april-warsha/1.jpeg",
      "/eventsPics/15-16-april-warsha/2.jpeg",
      "/eventsPics/15-16-april-warsha/3.jpeg",
      "/eventsPics/15-16-april-warsha/4.jpeg",
      "/eventsPics/15-16-april-warsha/5.jpeg",
      "/eventsPics/15-16-april-warsha/6.jpeg",
      "/eventsPics/15-16-april-warsha/7.jpeg",
      "/eventsPics/15-16-april-warsha/8.jpeg",
      "/eventsPics/15-16-april-warsha/9.jpeg",
      "/eventsPics/15-16-april-warsha/10.jpeg",
    ],
  },

  {
    title: "AI & Cultural Heritage Forum – House of Culture",
    join: "",
    location: "Home of culture - El Taref",
    upcoming: true,
    date: "22 - 24 april 2025",
    image: "/eventsPics/darthaqafa23-04-2025/9.jpeg",
    participants: [
      {
        pfp: "/kids/lokman.png",
        name: "Lokman Touil",
        role: "Game Developper",
      },
      {
        pfp: "/kids/aymen_pfp.png",
        name: "Aymen Melouah",
        role: "Game Developper",
      },
      {
        pfp: "/kids/abdo.png",
        name: "Karamane Abderrahmane",
        role: "Game Developper",
      },
      {
        pfp: "/kids/ramzi.png",
        name: "Bouhadjar Ramzi",
        role: "App Developper",
      },
      {
        pfp: "/kids/siradj_pfp.png",
        name: "Lamri Monir Siradj",
        role: "Designer",
      },
      {
        pfp: "/kids/kouciela.png",
        name: "Haroui Koussaila",
        role: "Ai Developer",
      },
    ],
    showcaseImages: [
      "/eventsPics/darthaqafa23-04-2025/1.jpeg",
      "/eventsPics/darthaqafa23-04-2025/2.jpeg",
      "/eventsPics/darthaqafa23-04-2025/3.jpeg",
      "/eventsPics/darthaqafa23-04-2025/4.jpeg",
      "/eventsPics/darthaqafa23-04-2025/5.jpeg",
      "/eventsPics/darthaqafa23-04-2025/6.jpeg",
      "/eventsPics/darthaqafa23-04-2025/7.jpeg",
      "/eventsPics/darthaqafa23-04-2025/8.jpeg",
    ],
    description: (
      <div>
        <p>
          🎙️ Join a gathering of passionate minds exploring how Artificial
          Intelligence can help preserve and protect cultural heritage.
        </p>
        <p>
          🏛️ The event takes place at the House of Culture, where tradition and
          technology come together.
        </p>
        <p>
          🤖💡 Discover exciting talks, interactive demos, and cutting-edge
          innovations at the crossroads of AI and heritage.
        </p>
        <p>
          🌍📚 Whether you&apos;re a student, researcher, or just curious,
          you&apos;re welcome to be part of this inspiring forum.
        </p>
      </div>
    ),
  },
];

export const socials: SocialProps[] = [
  {
    title: "Instagram",
    icon: <BsInstagram size={14} />,
    link: "https://www.instagram.com/itech_ucbet/",
  },
  {
    title: "Facebook",
    icon: <BsFacebook size={14} />,
    link: "https://www.facebook.com/i.tech.el.tarf.2025",
  },
  {
    title: "Discord",
    icon: <BsDiscord size={14} />,
    link: "https://discord.gg/XTCfstyx77",
  },
];

export const BannerContent = "";

export const Gallery: GalleryProp[] = [
  {
    location: "",
    date: "",
    images: [],
  },
];
