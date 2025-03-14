import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      <RevealOnScroll>
      <div className="text-center z-10 mb-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                  Hi, I&apos;m <span>
                      Jason Vasquez
                    {/* <ColourfulText text="Jason Vasquez" /> */}
                  </span>.
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Passionate about building seamless digital experiences with modern technologies like React, Next.js, Node.js, and TypeScript.
        </p>
      </div>

      <div className="text-center z-10 max-w-3xl">
        <p className="text-gray-300 text-lg mb-4">
          I thrive in fast-paced, team-driven environments, bringing a blend of technical expertise and real-world problem-solving skills honed from both software development and my hands-on experience in construction management.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          I&apos;m driven by creativity, innovation, and a relentless desire to learn and improve.
        </p>
        <p className="text-gray-300 text-lg">
          My goal is to contribute to projects that make a difference, continuously push my boundaries, and grow as a leader and collaborator in the tech space.
              </p>
              <div className="flex justify-center space-x-4">
                  <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 
                  hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                      View Projects
                  </a>
                  <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:translate-y-0.5 
                  hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                      Contact Me
                </a>
              </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;