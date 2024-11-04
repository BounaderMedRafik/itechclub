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
}[];
