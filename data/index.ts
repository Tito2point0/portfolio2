export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication",
      description: "",
      // Make the first box span multiple rows/columns so it's larger:
      className: "lg:col-span-2 md:col-span-4 md:row-span-3 lg:min-h-[40vh]",
      // Use object-cover to fill the container; remove w-24 h-24:
      imgClassName: "object-cover w-full h-full",
      titleClassName: "justify-end px-3",
      // Path to your big laptop photo \in the public folder:
      img: "/b1.svg",
      spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1", // Placed side-by-side
        imgClassName: "",
        titleClassName: "justify-start px-3",
      img: "/nasa2.jpg",
        spareImg: "",
      },
      {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1", // Placed side-by-side
        imgClassName: "",
        titleClassName: "justify-center px-3",
        img: "/keyboard.jpg",
        spareImg: "",
      },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start px-5",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      // Double the height from h-48 to h-96
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 h-96",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center px-3",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      // Double the height from h-48 to h-96
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 h-96",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center px-11",
      img: "",
      spareImg: "",
    },
    
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Pokemon 3-commerce Website",
      des: "An effective project built around next.js for e-commerce for pokemon cards.",
      img: "/2poke-e.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/Tito2point0/poke-e-commmerce",
    },
    {
      id: 2,
      title: "Poke Search Engine",
      des: "A dedicated search engine designed to find and display all Pokémon from the Pokémon API database.",
      img: "/searchpoke.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://cardpokesearch.vercel.app/",
    },
    {
      id: 3,
      title: "Poke-blog",
      des: "PokéBlog is a fan-driven platform offering tips, guides, and vibrant community discussions to help trainers explore and connect with the world of Pokémon..",
      img: "/blogger.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://jasonspokebinder.vercel.app/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      des: "A portfolio website containing all my projects using next.js and typescript.",
      img: "/jvport.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Tito2point0/jvportfolio2",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];