import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface HomeSectionProps {
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
  textColor?: string;
  id: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  model,
  header,
  subHeader,
  description,
  btn1,
  btn2,
  btn3,
  btn4,
  imgDesktop,
  imgMobile,
  alt,
  copyright,
  textColor,
  id,
}) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id={id}
      className="flex flex-col justify-around items-center snap-start h-screen w-full relative pb-mobile-safe"
      style={{
        backgroundColor: !imgDesktop && !imgMobile ? "white" : "transparent",
      }}>
      {imgDesktop && (
        <Image
          src={imgDesktop}
          alt={alt || "Desktop Image"}
          className="absolute z-[-1] hidden lg:block"
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
          fill
          priority
        />
      )}
      {imgMobile && (
        <Image
          src={imgMobile}
          alt={alt || "Mobile Image"}
          className="absolute z-[-1] lg:hidden"
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
          fill
          priority
        />
      )}

      <motion.div
        className="z-20 w-full h-full flex flex-col justify-evenly items-center text-left gap-4 mt-20 md:mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUpVariants}>
        <div className="w-2/3">
          <div className="pb-4">
            <h2 className="text-2xl md:text-4xl font-bold">{model}</h2>
            <h3 className="text-base md:text-xl font-semibold">{header}</h3>
            {subHeader && (
              <h4 className="text-base md:text-lg font-semibold">
                {subHeader}
              </h4>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {description.map((desc, index) => (
              <p
                key={index}
                className="text-xs md:text-lg"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {btn1 && (
            // <Link href={`/order/${id}`}>
            <button className="bg-[#171a20c9] text-white w-64 px-3 py-3 rounded-full uppercase font-bold cursor-pointer">
              {btn1}
            </button>
            // </Link>
          )}
          {btn2 && (
            // <Link href={`/drive/${id}`}>
            <button className="bg-gray-300 bg-opacity-60 text-[#393c41] w-64 px-3 py-3 rounded-full uppercase font-bold cursor-pointer transform hover:-translate-y-1 transition duration-400">
              {btn2}
            </button>
            // </Link>
          )}
          {btn3 && (
            <button className="bg-white bg-opacity-60 text-[#393c41] w-64 px-3 py-3 rounded-full uppercase font-bold cursor-pointer transform hover:-translate-y-1 transition duration-400">
              {btn3}
            </button>
          )}
          {btn4 && (
            <button className="bg-[#171a20c9] text-white w-64 px-3 py-3 rounded-full uppercase font-bold cursor-pointer">
              {btn4}
            </button>
          )}
        </div>
      </motion.div>
      {copyright && (
        <p className="text-center mb-2.5 text-xs">
          Tesla &nbsp; ©&nbsp; {new Date().getFullYear()}&nbsp; Privacy&nbsp;
          &&nbsp; Legal&nbsp; Contact&nbsp; Careers&nbsp; News&nbsp; Engage
          &nbsp;Locations
        </p>
      )}
    </div>
  );
};

export default HomeSection;
