import { Merriweather } from "next/font/google";
import { config } from "./config";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <section className="items-center justify-center">
      <div className="flex flex-col p-8 md:p-16">
        {/* Headline / Title page */}
        <div className="flex flex-row items-center mb-12">
          <div className="flex flex-row items-center justify-center">
            {/* Headshot Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full flex-shrink-0">
              <img
                src="images/headshot.jpg"
                alt={config.author.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Headline Text */}
            <div
              className="text-center md:text-left ml-6"
              style={{ maxWidth: "70%" }}
            >
              <h1
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ textTransform: "uppercase" }}
              >
                {config.author.name}
              </h1>
              <p
                className={
                  merriweather.className + " mt-2 text-xs md:text-md sm:text-sm"
                }
              >
                {config.site.short_bio}
              </p>
            </div>
          </div>
        </div>
        {/* headlines / Experience */}
        <div>
          <div className="p-8 md:p-10">
            <ul>
              {config.site.headlines.map((headline, index) => {
                return (
                  <li
                    key={index}
                    className={
                      merriweather.className +
                      " text-xs md:text-md sm:text-sm pb-8"
                    }
                  >
                    <span role="img" className="text-2xl pr-6">
                      {headline.icon}
                    </span>
                    <span>{headline.body}</span>
                    {headline.links?.map((link, index) => {
                      return (
                        <a
                          href={link.url}
                          target="_blank"
                          key={index}
                          rel="noopener noreferrer"
                          className="underline text-blue-400 hover:text-blue-800 pl-2"
                        >
                          {link.text}
                        </a>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
