import { useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Database,
  BarChart,
  PieChart,
  ClipboardList,
  Tag,
} from "lucide-react";

// Components
import Slideshow from "./Slideshow";

// Images
import hero from "./img/hero.jpg";
import callCenterDashBoard from "./img/call-center-dashboard.jpg";
import insurancePolicy from "./img/insurance-policy.jpg";
import healthTracker from "./img/health-tracker.jpg";
import serviceDesk from "./img/service-desk.jpg";
import bia from "./img/BIA.jpg";
import bia1 from "./img/BIA1.jpg";
import bia2 from "./img/BIA2.jpg";
import bia3 from "./img/BIA3.jpg";

const softBeige = "#f9efe7";
const brightYellow = "#ffe872";

const App = () => {
  return (
    <div className={`bg-[${softBeige}] min-h-screen text-gray-900`}>
      <Header />
      <Hero />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolling(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-transform duration-300 ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/">
            <div className="text-xs sm:text-sm font-bold uppercase">
              <div className="px-1">Olusola</div>
              <div className="px-1">Ibraheem</div>
              <div className="px-1">Tijani</div>
            </div>
          </a>
        </div>
        <nav className="flex space-x-4 sm:space-x-6">
          {["Work", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-black font-medium hover:bg-[${brightYellow}] px-2 py-1 transition-colors duration-300 rounded ${
                activeSection === item.toLowerCase()
                  ? `bg-[${brightYellow}]`
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 max-w-6xl mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center"
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
          <span className="text-blue-500">Data &</span>
          <br />
          <span className="text-blue-500">Business Intelligence Analyst</span>
        </h1>
        <p className="mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
          Tijani Olusola is a Chemical Engineering Graduate, Data & Business
          Intelligence Analyst and Researcher. I thrive at the intersection of
          numbers and narratives. With a keen eye for insight, I uncover hidden
          patterns and trends that drive informed decision-making. My technical
          skills include knowledge of data analysis tools like Microsoft Excel
          and Business Intelligence tool like Tableau. I also love working with
          SQL Server query language and Python Programming language. Reach out
          to me and let's explore how data can drive your story forward!
        </p>
        <a
          href="#work"
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          see my work <ArrowRight className="ml-2" />
        </a>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={hero}
          alt="Hero Visual"
          className="rounded-lg shadow-xl border-4 border-black"
        />
        {/* <p className={`mt-4 text-sm text-center bg-[${brightYellow}] px-2`}>
      @ DevFest Ilorin Kwara State 2024
    </p> */}
      </div>
    </section>
  );
};

const WorkSection = () => {
  const projects = [
    {
      title: "Business Insight Analytics",
      technologies: ["Microsoft Excel", "Tableau"],
      description:
        "This is an interactive and highly detailed dashboard, down to the granular level. It provides a comprehensive analysis of key business metrics across four areas: Overall Performance, Customers, Products, and Marketing. *Overview: Presents a high-level summary of business performance, highlighting critical KPIs for strategic decision-making.* *Products: Analyzes top-performing products, sales distribution, and revenue contribution.* *Marketing: Evaluates campaign effectiveness, conversion rates, and customer acquisition channels.* *Customers: Identifies trends in customer demographics, preferences, and purchasing behavior.* This interactive dashboard enhances data-driven decision-making, helping businesses optimize operations and improve profitability.",

      images: [bia, bia1, bia2, bia3],
      image: bia3,
      link: "https://public.tableau.com/app/profile/olusola.tijani/viz/BusinessInsightAnalytics/Overview",
      ongoing: false,
    },
    {
      title: "Call Center Dashboard Analysis",
      technologies: ["Microsoft Excel", "Tableau"],
      description:
        "This project showcases an interactive dashboard designed to monitor and analyze call center performance metrics. It provides insights into key performance indicators such as incoming call volume, customer satisfaction (CSAT) scores, first call resolution (FCR) rates, and average talk time. The dashboard also highlights call trends by issue type, top-performing agents, and activity heatmaps for a better understanding of call patterns across different days and times. This visual tool is optimized for real-time performance tracking and decision-making, ensuring efficient call center operations.",
      image: callCenterDashBoard,
      link: "https://public.tableau.com/app/profile/olusola.tijani/viz/CallCentreDashboard_17310063414030/Dashboard ",
      ongoing: false,
    },
    {
      title: "Insurance Policy Dashboard",
      technologies: ["SQL", "Tableau"],
      description:
        "This project demonstrates a comprehensive dashboard built to analyze key metrics in the insurance industry. The dashboard provides insights into vehicle insurance distribution by type (commercial and private), claim amounts across coverage zones (urban, rural, suburban), and demographic data such as marital status and education level. This visual analysis tool is designed to help stakeholders better understand customer trends and optimize policy offerings.",
      image: insurancePolicy,
      link: "https://public.tableau.com/app/profile/olusola.tijani/viz/Ongoingproject_17250412582900/Dashboard",
      ongoing: false,
    },
    {
      title: "Health Tracker Dashboard",
      technologies: ["Microsoft Excel", "Tableau"],
      description:
        "This project highlights a dynamic dashboard designed for personal health tracking. It features key metrics such as blood pressure, heart rate, BMI, daily calorie intake, calories burned, sleep duration, water intake, mood score, and step count. Each metric is visually represented with current values, historical comparisons, and trends. The dashboard provides a comprehensive view of individual health insights, enabling users to monitor their wellness and make informed decisions about their lifestyle.",
      image: healthTracker,
      link: " https://public.tableau.com/app/profile/olusola.tijani/viz/HealthTracker_17316848682280/HealthTracker",
      ongoing: false,
    },
    {
      title: "Service Desk Dashboard",
      technologies: ["Microsoft Excel", "Tableau"],
      description:
        "This project showcases a detailed dashboard designed to monitor and analyze service desk operations. Key metrics include the total number of cases categorized by priority (low, medium, high), case distribution by type (IT support, hardware requests, new access requests, software requests), and case allocation among agents. The dashboard also highlights agent performance, detailing the number of cases handled, priority levels, and closure rates. Additionally, it tracks user-reported cases, providing a clear overview of service desk efficiency and workload distribution.",
      image: serviceDesk,
      link: "https://public.tableau.com/app/profile/olusola.tijani/viz/ServiceDeskBookshop/ServiceDeskDashboard",
      ongoing: false,
    },
  ];

  return (
    <section
      id="work"
      className={`py-16 max-w-6xl mx-auto px-4 bg-[${softBeige}]`}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className=" px-2">Featured Projects</span>
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex flex-col md:flex-row items-center mb-16 bg-white rounded-lg shadow-md overflow-hidden border-4 border-black"
        >
          {project.ongoing && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              Ongoing Project
            </div>
          )}
          <div className="w-full md:w-1/2 p-8">
            {project.images && project.images.length > 0 ? (
              <div className="w-full">
                <Slideshow images={project.images} />
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-xl border-2 border-black"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-blue-500  py-1 rounded">
                {project.title}
              </span>
            </h3>
            <div className="flex flex-wrap space-x-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-black text-white rounded-full text-sm mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mb-6 space-y-2">
              {project.description
                .split("*")
                .filter((part) => part.trim() !== "")
                .map((part, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {part.trim()}
                  </p>
                ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                View Project <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="text-black" size={36} />,
      title: "Data Cleaning, Formatting & Preparation",
      description:
        "Transforming raw data into organized, accurate, and analysis-ready formats by removing errors, standardizing structures, and ensuring consistency.",
    },
    {
      icon: <BarChart className="text-black" size={36} />,
      title: "Data & Business Intelligence Analysis",
      description:
        "Providing actionable insights through data analysis and visualization to support informed decision-making and drive business growth.",
    },
    {
      icon: <PieChart className="text-black" size={36} />,
      title: "Tableau Dashboards & Data Analysis Reports",
      description:
        "Designing interactive Tableau dashboards and creating detailed data analysis reports to present insights clearly and effectively.",
    },
    {
      icon: <ClipboardList className="text-black" size={36} />,
      title: "Data Analysis Consultancy",
      description:
        "Offering expert guidance to help businesses interpret data, identify trends, and make data-driven decisions for improved outcomes.",
    },
    {
      icon: <Tag className="text-black" size={36} />,
      title: "Data Annotation",
      description:
        "Accurately labeling and categorizing data, including text, images, and videos, to train and improve machine learning models for various applications such as AI development, natural language processing, and computer vision.",
    },
  ];

  return (
    <section id="services" className={`py-16 bg-[${softBeige}]`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">
            <span className="">Services I Provide</span>
          </h2>
          <p className="leading-relaxed">
            Providing expert analysis and insights to drive strategic business
            decisions and optimize performance.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg flex items-center space-x-6 border-4 border-black"
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  <span className=" text-blue-500  py-1 rounded">
                    {service.title}
                  </span>
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className={`py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row bg-[${softBeige}]`}
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">
          <span className="">Want to Work Together?</span>
        </h2>
        <p className="mb-8">
          I'm always open to discussing business analysis projects or
          collaboration opportunities.
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:olusolaibraheemtijani@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-6">
          <span className="">How I Handle Projects</span>
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Data-Driven Insights",
              description:
                "Leveraging data analytics to provide actionable insights that drive business growth and efficiency. Focused on improving decision-making and strategic planning.",
            },
            {
              title: "Strategic Collaboration",
              description:
                "Partnering with stakeholders to align business objectives with analytical insights. Regular consultations and transparent communication to ensure impactful outcomes.",
            },
            {
              title: "Continuous Improvement",
              description:
                "Commitment to adopting the latest analytical tools and methodologies. Ensuring your business stays ahead with innovative solutions and industry best practices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border-4 border-black"
            >
              <h4 className="font-medium mb-2">
                <span className=" text-blue-500  py-1 rounded">
                  {item.title}
                </span>
              </h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: ": https://github.com/Data-Tijani?tab=repositories",
    },
    {
      name: "LinkedIn",
      url: " https://www.linkedin.com/in/tijani-olusola/",
    },
    {
      name: "X",
      url: "https://x.com/TijaniShola1?t=QEsewh6EyXX--ZUoIfj9Ag&s=09",
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+2348038817425",
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold">
            <span className=" text-white  py-1 rounded">
              Olusola Ibraheem Tijani
            </span>
          </h3>
          <p className="mt-2">Business & Business Intelligence Analyst</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          {socialLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-500 hover:text-white px-2 py-1 transition-colors duration-300 rounded"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex  items-center justify-center pt-7 ">
        <div className="inline-block">
          <p className="inline">Designed & Developed by &nbsp;</p>
          <a
            className="border-b border-blue-500"
            href="www.linkedin.com/in/abdullahi-auwal-haruna-3b298422b"
          >
            Abdullahi.Busybrain
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;
