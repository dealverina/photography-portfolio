import WomanImg from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              amet quaerat soluta, <b>eligendi tempore facere harum,</b> at
              pariatur voluptate distinctio officiis blanditiis! Minus cum
              quibusdam voluptatibus totam maiores odit commodi?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptas dolorem perferendis asperiores debitis minus deserunt
              iste eveniet maxime, aliquam laboriosam nemo quod rem laborum
              repellat.
            </p>
            <Link to={"/portfolio"} className="btn">
              View my works
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
