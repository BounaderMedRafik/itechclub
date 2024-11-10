import { ReactNode } from "react";

export type LinkType = {
  title: string;
  icon: ReactNode;
  href: string;
}[];

export type SectionTwoType = {
  title: string;
  description: string;
  picture: string;
}[];

export type QATYPE = {
  question: string;
  answer: string | ReactNode;
}[];

export type AdvisoryBoardProps = {
  name: string;
  smallDescription: string;
  picture: string;
  role: string;
  profile: string;
  email: string;
}[];

export type TeamProps = {
  name: string;
  position: string;
  picture: string;
  description: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string | ReactNode;
  }[];
}[];

export type MembershipCardprops = {
  title: string;
  description: string;
  icon: ReactNode;
}[];

export type WorkShopsProps = {
  title: string;
  image: string;
  description: string | ReactNode;
}[];
