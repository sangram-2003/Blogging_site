import { AiFillYoutube } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const socialMedia = [
  {
    id: 1,
    label: "Github",
    type: "social",
    icon: FaGithub, // 👈 store component, not JSX
    url: "https://github.com/yourusername",
  },
  {
    id: 2,
    label: "Facebook",
    type: "social",
    icon: FaFacebookF,
    url: "https://facebook.com/yourprofile",
  },
  {
    id: 3,
    label: "Twitter",
    type: "social",
    icon: FaXTwitter,
    url: "https://twitter.com/yourhandle",
  },
  {
    id: 4,
    label: "YouTube",
    type: "social",
    icon: AiFillYoutube,
    url: "https://youtube.com/@yourchannel",
  },
];


export const category = [
  {
    id: 1,
    label: "Travel",
    type: "card",
    image: './n1.jpg', // 👈 store component, not JSX
    url: '/posts/Travel',
  },
  {
    id: 2,
    label: "caltural",
    type: "card",
    image: './c2.jpg', // 👈 store component, not JSX
    url: '/posts/Caltural',
  },
  {
        id: 3,
    label: "Advanture",
    type: "card",
    image: './ad2.jpg', // 👈 store component, not JSX
    url: '/posts/Advanture',
  }
]

