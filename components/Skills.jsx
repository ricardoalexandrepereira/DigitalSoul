import React, { useEffect, useRef, useState } from "react";

const Skills = ({ skills }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(skills.map(() => 0));
  const [animatedProgress, setAnimatedProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible && !visible) {
          setVisible(true);
          setProgress(skills.map((skill) => skill.level));
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [skills, visible]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedProgress((prevProgress) =>
        prevProgress.map((value, index) => {
          const diff = progress[index] - value;
          const step = Math.ceil(diff / 10);
          return value + step;
        })
      );
    }, 100);
    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <div>
      <div className="text-Black font-semibold uppercase text-sm text-center mb-8">
        Skills
      </div>
      <div className="font-semibold text-3xl ml-4 text-center text-Purple mb-20">
        what i Expert
      </div>
      <div ref={ref} className="grid md:grid-cols-2 gap-4 p-10">
        {skills.map((skill, index) => (
          <div className="mb-4" key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-Black">{skill.name}</span>
              <span className="font-bold text-gray-500">{animatedProgress[index]}%</span>
            </div>
            <div className="relative w-full h-2 bg-WhiteGray rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-Purple rounded-full"
                style={{
                  width: `${visible ? animatedProgress[index] : 0}%`,
                  transition: "width 1s",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
