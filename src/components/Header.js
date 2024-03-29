import React, { useLayoutEffect, useRef, useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { gsap } from "gsap";
import "./Header.css";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

import Vid1 from "../assets/vid2.mp4";

const Header = () => {
  // Sound
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  // menu
  const [toggleMenu, setToggleMenu] = React.useState(false);
  // Animation
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ repeat: -1 });

      // Animation for headerTitle-1
      t1.from("#headerTitle-1", {
        x: -50,
        opacity: 0,
        duration: 10,
        ease: "power1.out",
      })
        .to("#headerTitle-1", {
          y: -80,
          duration: 1.5,
          ease: "power1.out",
        })
        .to("#headerTitle-1", {
          opacity: 0,
          duration: 2,
        });

      // Animation for titles 1-5

      ["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"].forEach(
        (title, index) => {
          t1.addLabel(`title-${index + 1}`, `-=0.5`)
            .from(title, {
              opacity: 0,
              y: 80,
              duration: 4,
              ease: "power1.out",
            })
            .to(title, {
              opacity: 0,
              y: -80,
              rotateX: 90,
              duration: 1,
              ease: "power1.out",
            });
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);


  return (
    <header>
      <div className="h-container relative overflow-hidden" id="header">
        {/* Video and sound  */}
        <div className="screen-background">
          <video src={Vid1} autoPlay loop className="video" muted={isMuted} />
          <div className="sound-icon" onClick={toggleMute}>
            {isMuted ? (
              <VscMute color="white" size={24} />
            ) : (
              <VscUnmute color="white" size={24} />
            )}
          </div>
        </div>

        {/* component  */}

        <div className="h-component absolute top-5 left-5 flex justify-between items-center w-full">
          {/* Logo  */}
          <div className="logo"> Sera Summer Group </div>

          {/* Menu  */}

          <div className="menu">
            <div
              className="Menu-bar flex text-5xl"
              onClick={() => setToggleMenu(true)}
            >
              <div className="text-white">Menu</div>
              <div>
                <MdOutlineMenu />
              </div>
            </div>
            {toggleMenu && (
              <div className="MenuItem flex flex-col sm:flex-row xl:flex-row-reverse sm:justify-start xl:justify-end h-screen">
                <div
                  className="closeMenu flex gap-x-3 text-white text-1x1 sm:text-1x1 xl:text-3xl
                  "
                  onClick={() => setToggleMenu(false)}
                >
                  <div className="text-2xl ">Close</div>
                  <div>
                    <IoCloseSharp />
                  </div>
                </div>

                <div
                  className="logo text-1xl left-0 sm:text-1x1 xl:text-4xl cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                >
                  Sera Summer Group
                </div>
                <div className="MI-Titles flex text-center gap-y-8 py-2 overflow-y-auto">
                  {/* Group  */}

                  <div className="MIT-box flex flex-col text-center gap-y-8">
                    <div className="MT-mainTitle text-3xl sm:text-4xl xl:text-5xl">
                      The Group
                    </div>
                    <div className="SubTitle text-base sm:text-lg xl:text-xl">
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                    </div>
                  </div>
                  <div className="MIT-box flex flex-col text-center gap-y-8">
                    <div className="MT-mainTitle text-3xl sm:text-4xl xl:text-5xl">
                      Organization
                    </div>
                    <div className="SubTitle text-base sm:text-lg xl:text-xl">
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                    </div>
                  </div>
                  <div className="MIT-box flex flex-col text-center gap-y-8">
                    <div className="MT-mainTitle text-3xl sm:text-4xl xl:text-5xl">
                      World in Progress
                    </div>
                    <div className="SubTitle text-base sm:text-lg xl:text-xl">
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                      <li>SubTitle</li>
                    </div>
                  </div>
                </div>

                {/* Footer Menu Item  */}

                <div className="menu-footer gap-10">
                  {/* footer icons  */}
                  <div className="MIF-left flex">
                    <div>icons </div>
                    <div>icons </div>
                    <div>icons </div>
                    <div>icons </div>
                  </div>
                  <div className="MIF-right flex">
                  <div>Lang </div>
                    <div>Terms and condition </div>
                    <div>Policy </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Animation Text Container  */}
        <div className="text-white/500 flex  h-text">
          <div className="ht-container flex flex-col py-[2rem] sm:py-[2rem] xl:py-[17rem] w-[450px] h-[105px] absolute">
            <div className="ht-box px-[270px] absolute h-[200px] flex justify-center overflow-hidden">

            <div
              id="Center-texts"
              className="h-text-animation absolute justify-center text-5xl xl:text-5xl lg:text-3xl sm:text-2xl h-[105px]"
              ref={comp}
              >
              <h1 id="headerTitle-1">Sera Summer group</h1>
              <h1 id="title-1">Welcome</h1>
              <h1 id="title-2">to</h1>
              <h1 id="title-3">an </h1>
              <h1 id="title-4">Awesome</h1>
              <h1 id="title-5">Animation with</h1>
            </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
