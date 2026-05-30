export const footerItems = {
  primary: {
    heading: "Work with us",
    links: [
      { id: 0, label: "Build With Us", target: "/build-with-us", type: "internal" },
      { id: 1, label: "Work With Us", target: "/join-us", type: "internal" },
      { id: 2, label: "Community", target: "/community", type: "internal" },
      { id: 3, label: "Contact Us", target: "/contact", type: "internal" },
      { id: 4, label: "FAQ", target: "/faq", type: "internal" },
    ],
  },
  secondary: {
    heading: "Resources",
    links: [
      { id: 0, label: "Blog", target: "/blog", type: "internal" },
      { id: 1, label: "Research", target: "/research", type: "internal" },
      { id: 2, label: "Annual Reports", target: "/report/", type: "internal" },
      { id: 3, label: "Updates", target: "/updates", type: "internal" },
      {
        id: 4,
        label: "Newsletter",
        target: "https://us19.campaign-archive.com/home/?u=a9af83af1f247ecc04f50ad46&id=4afc4a2c79",
        type: "external",
      },
      { id: 5, label: "Contributors", target: "/contributors", type: "internal" },
      { id: 6, label: "Privacy Policy", target: "/privacy-policy", type: "internal" },
    ],
  },
}

export const primaryNav = {
  options: [
    {
      id: 0,
      label: "asdf",
      target: "http://blog.tattle.co.in/",
      type: "external",
    },
    {
      id: 0,
      label: "Blog",
      target: "/blog",
      type: "internal",
    },
    {
      id: 1,
      label: "2019 Report",
      target: "/report/2019-report",
      type: "internal",
    },
    {
      id: 3,
      label: "About Us",
      target: "/faq",
      type: "internal",
    },
    { id: 4, label: "Join Us", target: "/join-us", type: "internal" },
  ],
}

export const FeatureFlags = {
  showNewLandingPage: true,
}
