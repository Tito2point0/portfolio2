import { projects } from "../../../data/index";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

const RecentProjects = () => {
  return (
    <RevealOnScroll>
    <div className="pt-20 px-4" id="projects">
      <h1 className="text-4xl font-bold text-center mb-10">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      {/* Grid Layout with Fixed Sizing and Consistent Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="w-full h-[550px] p-6 rounded-lg shadow-lg flex flex-col items-center relative transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
          >
            <PinContainer
              title={link}
              href={link.startsWith("http") ? link : `https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex items-center justify-center w-full h-72 overflow-hidden mb-4">
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#13162d]">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-15 max-h-full max-w-full object-contain p-4"
                />
              </div>

              <h1 className="font-bold text-xl mb-2 text-center line-clamp-1">
                {title}
              </h1>

              <p className="text-sm mb-4 text-center line-clamp-2">{des}</p>

              <div className="flex items-center justify-between mt-auto w-full">
                <div className="flex items-center space-x-2 overflow-hidden min-w-[200px]">
                  {/* Consistent Icon Styling */}
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                    >
                      <img
                        src={icon}
                        alt={`icon-${index}`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-purple">
                  <p className="text-sm">Checkout live site</p>
                  <FaLocationArrow className="ml-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      </div>
      </RevealOnScroll>
  );
};

export default RecentProjects;
