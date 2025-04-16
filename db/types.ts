import React from "react";

export type NavItemProps = {
  title: string;
  link: string;
  icon?: React.ReactNode;
  image?: string;
  subItems?: {
    title: string;
    link: string;
    icon: React.ReactNode;
  }[];
};

export type Quote = {
  quote: React.ReactNode;
  person: {
    name: string;
    pfp: string;
    role: string;
  };
};

export type FeaturesProps = {
  title: string;
  desc: string;
  bgColor: string; // Background color
  iconColor: string; // Icon color
  icon: React.ReactNode;
};

export type MemberProps = {
  fullname: string;
  description: string;
  role: string;
  pfp: string;
  images?: string;
  socials: {
    insta?: string;
    linkedin?: string;
    facebook?: string;
    website?: string;
    twitter?: string;
  };
};

export type UpcomingEvent = {
  title: string;
  join: string;
  upcoming: boolean;
  description?: React.ReactNode;
  date: string;
  location?: string;
  image: string;
  participants?: {
    pfp: string;
    name: string;
    role: string;
  }[];
};

export type SocialProps = {
  title: string;
  icon: React.ReactNode;
  link: string;
};
