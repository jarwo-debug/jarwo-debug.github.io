import React from "react";
import Squares from "../components/Squares/Squares";
import Lanyard from "../components/lanyard/Lanyard";
import RotatingText from "../components/RotatingText/RotatingText";
import SplitText from "../components/SplitText/SplitText";
import BlurText from "../components/BlurText/BlurText";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import GradientText from "../components/GradientText/GradientText";
import StarBorder from "../components/StarBorder/StarBorder";
import ScrollVelocity from "../components/ScrollVelocity/ScrollVelocity";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const section = () => {
  return (
    <div>
      <section className="relative text-white overflow-hidden">
        {/* Background Layers */}
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-screen">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#F1FFB2"
            hoverFillColor="#C6F10E"
          />
        </div>

        {/* Content */}
        <div className="container  mx-auto h-screen">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="flex items-center h-full ">
                <div className="flex flex-col gap-4">
                  <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    // ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                  >
                    <div className="flex  items-center gap-2">
                      <h1 className="text-2xl  text-white font-bold ">
                        Hi, I'm Ready For Jobs
                      </h1>
                      <RotatingText
                        texts={[
                          "IT Support Engineer",
                          "Web Development",
                          "Graphics Design",
                          "Web Design",
                        ]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg text-2xl font-bold inline-flex transition-all duration-1000"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={2000}
                      />
                    </div>
                  </AnimatedContent>
                  <div className="flex flex-col items-start">
                    <SplitText
                      text="Hello, I'm Jarwo "
                      className="text-2xl font-semibold text-center text-white"
                      delay={50}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                    <SplitText
                      text="Full Stack Developer"
                      className="text-2xl font-semibold text-center text-[#C6F10E]"
                      delay={75}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                  </div>
                  <div>
                    <BlurText
                      text="I am a dedicated and detail-oriented Web Developer currently working at a company where I design, develop, and maintain responsive and user-friendly websites and web applications. With strong skills in front-end and back-end technologies, I collaborate closely with cross-functional teams to deliver innovative digital solutions that meet user and business needs. I am passionate about clean code, performance optimization, and staying up-to-date with the latest trends in web development."
                      delay={75}
                      animateBy="words"
                      direction="top"
                      className="text-sm mb-8 text-white"
                    />
                  </div>
                  <div>
                    {/* <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-4 py-2 border-amber-50 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Contact me
                  </GradientText> */}
                    <AnimatedContent
                      distance={150}
                      direction="horizontal"
                      reverse={false}
                      duration={1.2}
                      // ease="bounce.out"
                      initialOpacity={0.2}
                      animateOpacity
                      scale={1.1}
                      threshold={0.2}
                      delay={0.3}
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                      >
                        <span>Contact Me</span>
                      </HoverBorderGradient>
                    </AnimatedContent>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="black"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default section;
