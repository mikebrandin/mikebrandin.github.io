import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold pt-16 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="bg-[#e3e3e3] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on a {" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#e3e3e3] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Certificates
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                    <a
                      href={"https://aws.amazon.com/certification/certified-cloud-practitioner/"}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&#x2022;</div>
                      <div className="text-lg text-gray-500 relative overflow-hidden dark:text-gray-300">
                          AWS Certified Cloud Practitioner April 2023
                      </div>
                    </a>
                </div>
                </div>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Resume
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                
                If you'd like to consider me for any opportunities, please feel free to review my {" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume
                </a>{" "}
                 
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
            </div>
            <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="my-4 bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Languages
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ocaml/ocaml.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>

            <h1 className="my-5 bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-4">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-0"
              />
             <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain-wordmark.svg"
                className="h-20 w-20 mx-4 my-0"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-20 w-20 mx-4 my-0"
              />
             <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                className="h-20 w-20 mx-4 my-0"
              />
             <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                className="h-20 w-20 mx-4 my-0"
              />
             <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg"
                className="h-20 w-20 mx-4 my-4"
              />
             <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
             <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
             <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
             <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
