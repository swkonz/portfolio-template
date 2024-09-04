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
      "I'm Sean, a software engineer based in the San Francisco Bay Area. I focus on applied machine learning, robotics, and full stack web development.",
    headlines: [
      {
        icon: "🛠️",
        body: "I like to build things. Software, hardware, carpentry, teams, theatre.",
      },
      {
        icon: "🏁",
        body: "Sometimes I help early companies build their first products. Like Vergil and Journey",
        links: [
          {
            text: "Vergil",
            url: "https://medium.com/coding-it-forward/a-new-support-platform-for-the-formerly-incarcerated-community-503c3f508c62",
          },
          { text: "Journey", url: "https://www.journeybio.life/" },
        ],
      },
      {
        icon: "🤖",
        body: "I help build simulation tools for developing and testing autonomous vehicles",
        links: [{ text: "Zoox", url: "https://zoox.com/journal/sean2024" }],
      },
      {
        icon: "👋",
        body: "Feel free to get in touch on",
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
