import React, { useRef, useEffect } from "react";
import { assets } from "../../assets/code/assets";
import "./about.css";

const About = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = 2; // Distance to scroll per step
    const scrollInterval = 1; // Interval in milliseconds
    const scrollAmount = 1000; // Total distance to scroll
    let scrolled = 0;
    let intervalId; // Declare intervalId outside of the timeout

    const scroll = () => {
      if (scrolled < scrollAmount) {
        scrollContainer.scrollBy(0, scrollStep);
        scrolled += scrollStep;
      } else {
        // Stop scrolling once the desired amount is reached
        clearInterval(intervalId);
      }
    };

    // Start scrolling after 5 seconds
    const delay = 7000;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(scroll, scrollInterval);
    }, delay);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="scroll-container relative w-full h-full overflow-auto hide-scrollbar"
    >
      <div className="text-center relative flex flex-col justify-center w-full h-full bg-gradient-background ">
        <div className="-mt-[250px] fade-in">
          <div className="text-[25px] text-white font-semibold">
            I long for eternity.
          </div>
          <div className="text-[25px] text-white font-semibold pt-[30px]">
            Because there I shall meet
          </div>
          <div className="text-[25px] text-white font-semibold pt-[30px]">
            my unwritten poems and
          </div>
          <div className="text-[25px] text-white font-semibold pt-[30px]">
            my unpainted pictures
          </div>
        </div>

        <div className="clouds absolute overflow-clip top-0 left-0 w-full h-full pointer-events-none">
          <img
            src={assets.cloud1}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 1 }}
          />
          <img
            src={assets.cloud2}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 2 }}
          />
          <img
            src={assets.cloud3}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 3 }}
          />
          <img
            src={assets.cloud4}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 4 }}
          />
          <img
            src={assets.cloud5}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 5 }}
          />
          <img
            src={assets.cloud1}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 6 }}
          />
          <img
            src={assets.cloud2}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 7 }}
          />
          <img
            src={assets.cloud3}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 8 }}
          />
          <img
            src={assets.cloud4}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 9 }}
          />
          <img
            src={assets.cloud5}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 10 }}
          />
        </div>
      </div>
      <div className="flex px-[20%] mb-10 overflow-hidden box-border justify-center -ml-10 items-center">
        <div className="flex flex-row  w-full ">
          <div className="w-[70%] border-r-2 pr-[40px] ">
            <div className="text-[20px] font-normal text-gray-400">INFO</div>
            <div className="text-[14px] mb-2 mt-2">
              Back when I was in 8th Grade, I decided to try my hand at creating
              a simple website and tumbled head first into the rabbit hole of
              coding and web development. Fast-forward to today, I'm able to
              build engaging websites, AI/ML softwares and IoT projects.
            </div>
            <div className="text-[14px] mb-2">
              My main focus these days is learning and building different AIs.
              In my most recent project, I learnt about Convolutional Neural
              Networks. I most enjoy building software in the sweet spot where
              design and engineering meet — things that look good but are also
              built well under the hood.
            </div>
            <div className="text-[14px]">
              When I'm not on my computer, you'd usually find me painting,
              singing or playing instruments.
            </div>
          </div>
          <div className="flex w-[30%] border-l-2 items-center">
            <div className="text-[100px] font-bold pl-[40px] text-gray-500 leading-none">
              CHINMAY <br /> PENDAM
            </div>
          </div>
        </div>
      </div>
        <div className="p-12">
          <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">
            EDUCATION
          </h3>

      <div className="flex px-[20%] mb-10 overflow-hidden box-border justify-center  items-center">
          <ul className="pl-5 ">
            
            <li className="border-l-2 border-gray-400">
              
              <div className="flex items-center">
                <div className="bg-gray-400 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="text-gray-100 w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-50 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-medium text-gray-700">
                      Jindal Vidya Mandir, Vasind
                    </a>
                    <a href="#!" className="font-medium text-gray-700">
                      2019
                    </a>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper, et elementum lorem
                    ornare. Maecenas placerat facilisis mollis. Duis sagittis
                    ligula in sodales vehicula.
                  </p>
                  <img
            src={assets.jvm}
            alt=""
            className=""
            style={{ "--i": 1 }}
          />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center border-t-2 p-4 border-gray-200">
        Chinmay Pendam
      </div>
    </div>
  );
};

export default About;
