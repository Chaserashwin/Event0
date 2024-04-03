// import Image from "next/image";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

function TeamSection({ images: developers }) {
  return (
    <>
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center md:p-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* <br /> */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center pt-12 md:pt-20 border-t border-gray-800">
          <p
            className="bg-gradient-to-r 
         from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 font-bold text-3xl md:text-4xl text-center"
          >
            Our Super Cool Team!!
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 rounded-2xl md:mt-4 mt-2 mb-12"></div>
        </div>
        {/* <br />
        <br /> */}
        <div className="w-full flex flex-wrap justify-evenly">
          {developers?.map((developer) => (
            <div
              key={developer?.id}
              className="w-46 flex flex-col items-center md:mb-12 mb-10"
            >
              <img
                className="rounded-lg shadow-md md:h-[300px] md:w-[250px] object-cover"
                src={developer?.src}
                alt={developer?.title}
                height={200}
                width={200}
                cover
              />
              {/* for profile name and role */}
              <div className="md:mt-4 mt-2">
                <p className="text-2xl font-bold dark:text-white">
                  {developer?.title}
                </p>
                <p className="md:mt-2 mt-1 text-base font-bold text-gray-500">
                  {developer?.role}
                </p>
              </div>
              {/* for last profile links */}
              <div className="md:mt-3 mt-1 flex-grow flex items-center">
                <div className="flex space-x-3">
                  {developer?.githubUrl && (
                    <a
                      href={developer?.githubUrl}
                      className="text-gray-500 hover:text-[color:var(--darker-secondary-color)] transition-all ease-in-out"
                      target="_blank"
                    >
                      <span className="sr-only">GitHub</span>
                      <FaGithub className="h-6 w-6" />
                    </a>
                  )}
                  {developer?.linkedinUrl && (
                    <a
                      href={developer?.linkedinUrl}
                      className="text-gray-500 hover:text-[color:var(--darker-secondary-color)] transition-all ease-in-out"
                      target="_blank"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                  )}
                  {developer?.websiteUrl && (
                    <a
                      href={developer?.websiteUrl}
                      className="text-gray-500 hover:text-[color:var(--darker-secondary-color)] transition-all ease-in-out"
                      target="_blank"
                    >
                      <span className="sr-only">Personal Website</span>
                      <FaLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TeamSection;
