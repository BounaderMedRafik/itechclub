import {
  CalendarRange,
  ChevronsLeftRightEllipsis,
  GraduationCap,
  HomeIcon,
  Info,
  UserRoundPen,
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
  {
    title: "Events",
    icon: <CalendarRange size={IconSize} />,
    href: "/",
  },
  {
    title: "Team",
    icon: <TfiWorld size={IconSize} />,
    href: "#Team",
  },
  {
    title: "About us",
    icon: <Info size={IconSize} />,
    href: "/",
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
    picture: "",
    description: "Game Developper & Ai Developper, Managing I-Tech Projects",
    socialLinks: [
      {
        name: "",
        url: "",
        icon: undefined,
      },
    ],
  },
  {
    name: "Karamane Abderrahmane",
    position: "Vice President",
    picture: "",
    description: "Game Developper, if you have a grandma or a mommy call me",
    socialLinks: [],
  },
  {
    name: "Aymen Melouah",
    position: "General Secretery",
    picture: "",
    description: "Game developper, and Design Leader",
    socialLinks: [],
  },
  {
    name: "Haraoui Kouceila",
    position: "Project Manager",
    picture: "/team/kouceila.webp",
    description:
      "Tech Leader, The Man The Myth The Legend The One And Only, Haraoui kouceila",
    socialLinks: [],
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
    socialLinks: [],
  },
  {
    name: "Lamri Monir Siradj",
    position: "Community Manager",
    picture: "",
    description: "Brand identity Designer",
    socialLinks: [],
  },
  {
    name: "Mohamed Amir Necer",
    position: "Web Developper",
    picture: "",
    description: "",
    socialLinks: [],
  },
];

export const MembershipCards: MembershipCardprops = [
  {
    title: "Get Closer 2X Faster",
    description:
      "software tae zbi when sucks my cock bach ynik denya it gets gay but we like it no cap",
    icon: <ChevronsLeftRightEllipsis size={64} />,
  },
  {
    title: "Get Closer 2X Faster",
    description:
      "software tae zbi when sucks my cock bach ynik denya it gets gay but we like it no cap",
    icon: <ChevronsLeftRightEllipsis size={64} />,
  },
  {
    title: "Get Closer 2X Faster",
    description:
      "software tae zbi when sucks my cock bach ynik denya it gets gay but we like it no cap",
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
