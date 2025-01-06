interface Link {
  url: string;
  text: string;
}

export interface SiteConfig {
  author: {
    name: string;
    label: string;
  };
  site: {
    title: string;
    description: string;
    short_bio: string;
    url: string;
    keywords: string[];
    language: string;
    charset: string;
    headlines: {
      icon: string;
      body: string;
      links?: Link[];
    }[];
  };
  profiles: {
    linkedin: string;
    github: string;
  };
}

const config: SiteConfig = {
  author: {
    name: "Sean Konz",
    label: "Software Engineer",
  },
  site: {
    title: "Sean_Konz",
    description: "Work, Projects, Musings, etc",
    short_bio:
      "I'm Sean, a software engineer based in the San Francisco. I focus on machine learning, robotics, and web development. Sometimes I do hardware.",
    headlines: [
      {
        icon: "🛠️",
        body: "I'm currently exploring new projects at South Park Commons. Looking at AI, automation, and robotics.",
      },
      {
        icon: "🏁",
        body: "I help early companies build their products and technical teams. Like Vergil and Journey",
        links: [
          {
            text: "Projects",
            url: "/stuff/projects",
          },
        ],
      },
      {
        icon: "🤖",
        body: "I previously built simulation tools for developing and testing autonomous vehicles at ",
        links: [{ text: "Zoox", url: "https://zoox.com/journal/sean2024" }],
      },
      {
        icon: "👋",
        body: "If you're interested in contract work, or are otherwise inclined, shoot me a message on ",
        links: [
          {
            text: "Linkedin",
            url: "https://www.linkedin.com/in/sean-k-19a327b2/",
          },
        ],
      },
    ],
    url: "seankonz.com",
    keywords: [
      "software",
      "software engineer",
      "machine learning",
      "artificial intelligence",
      "full stack",
      "sean konz",
      "portfolio",
    ],
    language: "en",
    charset: "UTF-8",
  },
  profiles: {
    linkedin: "https://www.linkedin.com/in/sean-k-19a327b2/",
    github: "https://github.com/swkonz",
  },
};

export { config };
