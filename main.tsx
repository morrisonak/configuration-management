/** @jsx h */

import blog, { h } from "blog";
import { Section } from './components/Section.jsx';
import "https://deno.land/x/dotenv@v3.2.0/load.ts";


blog({
  author: "Admin",
  title: "Configuration management",
  description: "Deep Dive into Configuration Management",
  //avatar:`${Deno.env.get("URL")}assets/logos/profile.jpg`,
  avatarClass: "rounded-full",
  coverTextColor:"white",
  
  links: [
    { title: "Email", url: "#" },
    { title: "GitHub", url: "#" },
    { title: "Twitter", url: "#" },
    { title: "Linkedin", url: "#" },
  ],
  lang: "en",
  favicon: `${Deno.env.get("URL")}favicon.ico`,
  section: <Section/>,
  theme:"auto",
  cover:`${Deno.env.get("URL")}assets/logos/background-banner.png`,
  ogImage: {
    url: `${Deno.env.get("URL")}assets/logos/Frame.png`,
    twitterCard:"summary_large_image" 
  },
  style:".markdown-body ul, .markdown-body ol { list-style: disc !important;}"
});
