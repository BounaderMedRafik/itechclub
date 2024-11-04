import {
  CalendarRange,
  GraduationCap,
  HomeIcon,
  Info,
  UserRoundPen,
} from "lucide-react";
import {
  AdvisoryBoardProps,
  LinkType,
  QATYPE,
  SectionTwoType,
} from "./HypnoticTypes";
import { TfiWorld } from "react-icons/tfi";

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
    href: "/",
  },
  {
    title: "Membership",
    icon: <UserRoundPen size={IconSize} />,
    href: "/",
  },
  {
    title: "Events",
    icon: <CalendarRange size={IconSize} />,
    href: "/",
  },
  {
    title: "Team",
    icon: <TfiWorld size={IconSize} />,
    href: "/",
  },
  {
    title: "About us",
    icon: <Info size={IconSize} />,
    href: "/",
  },
];

export const SectionTwoData: SectionTwoType = [
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
];

export const QADATA: QATYPE = [
  {
    question: "Nigga How?",
    answer: "lame ass niggas on the gruind",
  },
  {
    question: "nigga ",
    answer: "nothing to say",
  },
];

export const AdvisoryBoard: AdvisoryBoardProps = [
  {
    name: "",
    smallDescription: "",
    picture: "",
    role: "",
    profile: "",
  },
];
