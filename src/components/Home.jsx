import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Bale from "../assets/Pic.JPG";

function Home() {
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Amir Ansari
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Devloper", "A Designer", "A Coder"],
              autoStart: true,
              cursor: "",
              loop: true,
              wrapperClassName: "typreWriterpara",
            }}
          />
          <div>
            <a href="mailto:amirbhai432@gmail.com"> Hire me </a>
            <a href="#work">
              Projects Done <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +<span>100</span>
            </p>
            <span>Clients Wordwide</span>
          </article>
          <aside>
            <article>
              <p>
                +<span>4</span>
              </p>
              <span>projects </span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>Amirbhai432@gmail</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={Bale} alt="Aradhana" />
      </section>
      <BsChevronDown />
    </div>
  );
}

export default Home;
