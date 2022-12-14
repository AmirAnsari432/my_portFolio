import { animate, motion } from "framer-motion";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Bale from "../assets/Pic.JPG";

function Home() {
  const clientCount = useRef();
  const projectsCount = useRef();
  const animationProjectsCount = () => {
    animate(0, 4, {
      duration: 2,
      onUpdate: (v) => {
        clientCount.current.textContent = v.toFixed();
      },
    });
  };
  const animationClientCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => {
        projectsCount.current.textContent = v.toFixed();
      },
    });
  };

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
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              <motion.span
                whileInView={animationProjectsCount}
                ref={projectsCount}
              >
         
              </motion.span>
            </p>
            <span>Clients Wordwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationClientCount}
                  ref={clientCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>Amirbhai432@gmail.com</span>
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
