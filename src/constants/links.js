import * as React from 'react';
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from 'react-icons/fa';

export const menuItems = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/advisors',
    text: 'advisors',
  },
  // {
  //   path: '/blog', // TODO uncomment once blog is finished
  //   text: 'blog',
  // },
  {
    path: '/contact',
    text: 'contact',
  },
];

export const socialItems = [
  // {
  //   path: 'www.facebook.com',
  //   icon: <Facebook />,
  // },
  // {
  //   path: 'www.twitter.com',
  //   icon: <Twitter />,
  // },
  // {
  //   path: 'www.instagram.com',
  //   icon: <Instagram />,
  // },
  {
    path: 'https://www.linkedin.com/company/rice-new-energy-fund/',
    icon: <Linkedin />,
  },
];
