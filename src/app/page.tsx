"use client";
import Head from "next/head";
import HomeSection from "@/components/HomeSection";
import type { StaticImageData } from "next/image";
import { useEffect } from "react";

interface HomeSectionData {
  model: string;
  header: string;
  subHeader?: string;
  description: string[];
  btn1?: string;
  btn2?: string;
  btn3?: string;
  btn4?: string;
  imgDesktop?: StaticImageData;
  imgMobile?: StaticImageData;
  alt?: string;
  copyright?: boolean;
  key: string;
  textColor?: string;
  id: string;
}

export default function Home() {
  const data: HomeSectionData[] = [
    {
      model: "Mechanical Design",
      header: "Designing Machines",
      subHeader: "Delivering Automation Solutions",
      description: [
        "We offer <strong>end-to-end</strong> design services, including proposal development, budgetary planning, conceptualization, detailed design, and prototyping.",
        "Our team consists of design engineers with over <strong>10 years</strong> of experience, well-versed in various industries including semiconductors, automotive, pharmaceutical, and consumer products.",
        "<strong>Trusted by Global Leaders</strong>: Major global automation players who sell their machines worldwide rely on us, outsourcing their design jobs to us. They trust our expertise and reliability to deliver high-quality solutions.",
      ],
      btn1: "Learn more",
      btn2: "Contact Us",
      // imgDesktop: modelsLarge, // Desktop image (dimension: 4320 × 2700)
      // imgMobile: modelsSmall, // Mobile image, can be different (dimension: 1125 × 2436)
      alt: "Mechanical Design",
      key: "1",
      id: "mechanical-design",
    },
    {
      model: "PLC Programming",
      header: "Versatile PLC Programming for Every Need",
      description: [
        "Our expertise spans various PLC brands and programming languages, including <strong>ladder</strong> diagrams and <strong>PC-based</strong> solutions. We integrate systems with <strong>ERP</strong> and <strong>MES</strong> for streamlined operations, while supporting <strong>traceability</strong> and <strong>Industry 4.0</strong> integration.",
      ],
      btn1: "Learn more",
      btn2: "Contact Us",
      alt: "PLC Programming",
      key: "2",
      id: "plc-programming",
    },
    {
      model: "Vision Solution",
      header: "Quality Control: Precision and Accuracy",
      description: [
        "We work closely with our trusted partners to provide comprehensive vision solution as part of automated systems.",
        "From quality inspection and sorting to pick and place, our <strong>customized vision systems</strong> deliver solutions that meet the stringent requirements of modern manufacturing environments.",
      ],
      btn1: "Learn more",
      btn2: "Contact Us",
      alt: "Vision Solution",
      key: "3",
      id: "vision-solution",
    },
    {
      model: "Total Solutions: Design & Build",
      header: "We Design & We Build",
      description: [
        "Not just design, but looking for one-stop services?",
        "We offer comprehensive automation solutions, covering every stage from initial conceptualization and project negotiation to design and machine building. We provide full end-to-end support, ensuring seamless and efficient project implementation.",
      ],
      btn1: "Learn more",
      btn2: "Contact Us",
      alt: "Total Solution",
      key: "4",
      id: "total-solution",
    },
    {
      model: "Intellectual Property",
      header: "Protecting Your Ideas",
      description: [
        "We understand the importance of protecting your ideas and designs. Our team is committed to ensuring that your intellectual property is safeguarded.",
        "We sign non-disclosure agreements with all our clients, ensuring that your designs and ideas are kept confidential and secure.",
      ],
      btn1: "Learn more",
      btn2: "Contact Us",
      alt: "Intellectual Property",
      key: "5",
      id: "intellectual-property",
    },
  ];

  useEffect(() => {
    const lastViewedSectionId = sessionStorage.getItem("lastViewedSectionId");
    if (lastViewedSectionId) {
      const element = document.getElementById(lastViewedSectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          sessionStorage.setItem("lastViewedSectionId", id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll(".home-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main>
      <Head>
        <title>Electric Cars, Solar & Clean Energy | Tesla</title>
      </Head>
      <div
        className="overflow-y-scroll h-screen snap-y snap-mandatory scroll-snap-type"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {data.map((item) => (
          <div key={item.key} className="home-section" id={item.id}>
            <HomeSection
              key={item.key}
              model={item.model}
              header={item.header}
              subHeader={item.subHeader}
              description={item.description}
              btn1={item.btn1}
              btn2={item.btn2}
              btn3={item.btn3}
              btn4={item.btn4}
              imgDesktop={item.imgDesktop}
              imgMobile={item.imgMobile}
              alt={item.alt}
              copyright={item.copyright}
              textColor={item.textColor}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
