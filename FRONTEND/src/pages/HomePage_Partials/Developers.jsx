// import Image from "next/image";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

function TeamSection({ images: developers }) {
  return (
    <>
      <div class="w-full h-auto flex flex-wrap flex-col items-center text-center p-10">
        <div class="w-full h-auto flex flex-wrap flex-col items-center">
          <p class="text-indigo-500 font-bold text-3xl md:text-4xl text-center">
            Our Super Cool Team!!
          </p>
          <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <br />
        <br />
        <div class="w-full flex flex-wrap justify-evenly">
          {developers?.map((developer) => (
            <div
              key={developer?.id}
              class="w-46 flex flex-col items-center mb-12"
            >
              <img
                className="rounded-lg shadow-md h-[300px] w-[250px] object-cover"
                src={developer?.src}
                alt={developer?.title}
              />
              {/* for profile name and role */}
              <div className="mt-4">
                <p className="text-2xl font-bold dark:text-white">
                  {developer?.title}
                </p>
                <p className="mt-2 text-base font-bold text-gray-500">
                  {developer?.role}
                </p>
              </div>
              {/* for last profile links */}
              <div className="mt-6 flex-grow flex items-center">
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
