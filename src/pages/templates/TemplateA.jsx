/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Sound from "react-sound";
import {
  journeys,
  groom,
  bride,
  reseption,
  marriageContract,
  images,
} from "../../data/coupleData";

export default function TemplateA({ theme }) {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [idJourney, setIdJourney] = useState(1);
  const [journeyItems, setJourneyItems] = useState(journeys);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeNav, setActiveNav] = useState("home");
  const [playStatus, setPlayStatus] = useState(Sound.status.PAUSED);

  const sectionRefs = {
    home: useRef(null),
    couple: useRef(null),
    date: useRef(null),
    journey: useRef(null),
    album: useRef(null),
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold based on when you want to consider a section visible
    );
  
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const toggleSound = () => {
    setPlayStatus((prevStatus) =>
      prevStatus === Sound.status.PLAYING
        ? Sound.status.PAUSED
        : Sound.status.PLAYING
    );
  };
  const scrollLeft = () => {
    setIdJourney((id) => (id > 1 ? id - 1 : 1));
  };

  const scrollRight = () => {
    setIdJourney((id) => (id == journeys.length ? id : id + 1));
  };

  const updateJourneyItems = () => {
    const isDesktop = windowWidth >= 1024;

    if (isDesktop) {
      setJourneyItems(journeys);
    } else {
      const filteredItems = journeys.filter(
        (journey) => journey.id === idJourney
      );
      setJourneyItems(filteredItems);
    }
  };

  const checkArrowButton = () => {
    const isDesktop = windowWidth >= 1024;
    const isStart = idJourney === 1;
    const isEnd = idJourney === journeys.length;

    if (isDesktop) {
      setShowLeftButton(false);
      setShowRightButton(false);
    } else {
      setShowLeftButton(!isStart);
      setShowRightButton(!isEnd);
    }
  };

  useEffect(() => {
    AOS.init();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array as we only want to set up the listener once

  // Effect for journey updates
  useEffect(() => {
    updateJourneyItems();
    checkArrowButton();
  }, [idJourney, windowWidth]);

  const getIconClass = (section) =>
    `${
      section === activeNav ? "text-white" : `text-${theme.col.seven}`
    }`;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    setActiveNav(id);
    if (element) {
      const yOffset = 0; // Adjust the offset as needed
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={`overflow-hidden text-${theme.col.one}`}>
      {/* navigation */}
      <div className="fixed flex bottom-0 z-50 w-full">
        <nav className="w-full mx-10 sm:mx-20 my-7 lg:mx-40 ">
          <ul className={`flex sm:justify-around  justify-between items-center text-2xl sm:text-3xl bg-${theme.col.three}  px-10 py-4 rounded-full shadow-[#a49c98] shadow-xl`}>
            <li>
              <button onClick={() => scrollToSection("home")}>
                <i
                  className={`${getIconClass("home")} bx bxs-envelope-open`}
                ></i>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("couple")}>
                <i
                  className={`${getIconClass("couple")} bx bx-male-female`}
                ></i>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("date")}>
                <i
                  className={`${getIconClass("date")} bx bxs-calendar-heart`}
                ></i>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("journey")}>
                <i className={`${getIconClass("journey")} bx bxs-pen `}></i>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("album")}>
                <i
                  className={`${getIconClass("album")} bx bxs-photo-album`}
                ></i>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("message")}>
                <i className={`${getIconClass("message")} bx bxs-chat `}></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Music */}
      <div>
        <Sound
          url="/src/assets/audio/lagu-pernikahan-kita.mp3"
          playStatus={playStatus}
          loop={true}
        ></Sound>
        <button
          onClick={toggleSound}
          className={`fixed right-10 bottom-28 lg:bottom-8 bg-${theme.col.three} text-white z-50 px-3 py-2 lg:px-5 lg:py-4 rounded-full hover:bg-${theme.col.five}`}
        >
          <i
            className={`bx lg:text-2xl ${
              playStatus === Sound.status.PLAYING ? "bx-play" : "bx-pause"
            }`}
          ></i>
        </button>
      </div>
      {/* home */}
      <div
        id="home"
        ref={sectionRefs.home}
        className={`min-h-screen bg-right-top bg-cover ${theme.img.bg} `}
      >
        <img
          className=" w-56 lg:w-1/3 absolute right-0 top-0"
          src={theme.img.top}
        ></img>
        <img
          className="  w-56 lg:w-1/3 absolute bottom-0 left-0"
          src={theme.img.bottom}
        ></img>
        <div className="flex flex-col h-screen justify-center items-center gap-y-5">
          <h3 className=" font-Parisienne text-3xl mb-7">Save The Date</h3>
          <div className=" flex sm:flex-row sm:gap-x-10 flex-col sm:text-8xl text-6xl text-center gap-y-2">
            <h1 className="font-Parisienne">Park</h1>
            <h1 className={`font-AbhayaLibre text-${theme.col.two}`}>&</h1>
            <h1 className="font-Parisienne mt-3">Choi</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-1 text-center">
            <h3 className=" font-Parisienne text-3xl">July</h3>
            <div className="flex gap-x-3 font-AbhayaLibre items-center -ml-3 ">
              <h4 className={`border-t-2 border-b-2 border-${theme.col.six}`}>
                SATURDAY
              </h4>
              <h3 className="text-3xl font-bold">31</h3>
              <h4 className={`border-t-2 border-b-2 border-${theme.col.six}`}>
                AT 10 AM
              </h4>
            </div>
            <h5 className=" font-AbhayaLibre">2022</h5>
          </div>
          <button
            onClick={() => scrollToSection("couple")}
            className={`font-AbhayaLibre outline  px-4 py-2 outline-${theme.col.six} rounded-full mt-4 z-10`}
          >
            OPEN INVITATION
          </button>
        </div>
      </div>

      {/* Couples */}
      <div
        id="couple"
        ref={sectionRefs.couple}
        className={`flex flex-col relative py-10 min-h-screen z-30  gap-y-10 justify-center items-center bg-right bg-cover ${theme.img.bg}`}
      >
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          className="  w-56 lg:w-1/3 absolute  left-0 top-0 sm:top-1/3"
          src={theme.img.leftSide}
        ></img>
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          className="  w-56 lg:w-1/3 absolute   right-0 bottom-40 sm:top-1/3"
          src={theme.img.rightSide}
        ></img>
        <div className="mx-8 text-center">
          <h3
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="font-AbhayaLibre text-3xl"
          >
            WE ARE GETTING
          </h3>
          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="font-Parisienne text-7xl -mt-5 "
          >
            Married
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center ">
          <div className="flex flex-col items-center gap-y-2 text-center mx-10">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="  w-40 lg:w-56 rounded-full"
              src="/src/assets/bridegroom/bride.png"
            ></img>
            <h2 className="font-Parisienne text-3xl font-bold">{bride.name}</h2>
            <h4 className="font-AbhayaLibre text-xl ">
              Putri dari Pasangan Bapak {bride.father} <br></br>dan Ibu{" "}
              {bride.mother}
            </h4>
            <div className="flex gap-x-2 text-2xl">
              <Link to={bride.facebook} target="_blank">
                <i className="bx bxl-facebook-circle"></i>
              </Link>
              <Link to={bride.instagram} target="_blank">
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link to={bride.twitter} target="_blank">
                <i className="bx bxl-twitter"></i>
              </Link>
            </div>
          </div>
          <h1
            data-aos="zoom-in"
            className="text-5xl font-Parisienne font-bold sm:-mt-36  my-5 text-center"
          >
            &
          </h1>
          <div className="flex flex-col items-center gap-y-2 text-center mx-10">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="w-40 lg:w-56 rounded-full"
              src="/src/assets/bridegroom/groom.png"
            ></img>
            <h2 className="font-Parisienne text-3xl font-bold">{groom.name}</h2>
            <h4 className="font-AbhayaLibre text-xl">
              Putra dari Pasangan Bapak {groom.father} <br></br> dan Ibu{" "}
              {groom.mother}
            </h4>
            <div className="flex gap-x-2 text-2xl">
              <Link to={groom.facebook} target="_blank">
                <i className="bx bxl-facebook-circle"></i>
              </Link>
              <Link to={groom.instagram} target="_blank">
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link to={groom.twitter} target="_blank">
                <i className="bx bxl-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Jadwal acara */}
      <div
        id="date"
        ref={sectionRefs.date}
        className={`flex z-20 flex-col py-10 gap-y-10 relative justify-center min-h-screen items-center bg-right bg-cover ${theme.img.bg}`}
      >
        <img
          data-aos="fade-down-left"
          data-aos-duration="1000"
          className="w-56 lg:w-1/3 absolute right-0 top-0 z-10"
          src={theme.img.top}
        ></img>
        <img
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="w-56 lg:w-1/3 absolute bottom-0 left-0"
          src={theme.img.bottom}
        ></img>

        <div className="mx-8 text-center">
          <h3
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className=" font-AbhayaLibre text-3xl"
          >
            JADWAL
          </h3>
          <h3
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" font-Parisienne text-7xl -mt-5"
          >
            Acara
          </h3>
        </div>
        <div className="flex flex-col gap-y-5 sm:flex-row">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`flex flex-col outline outline-${theme.col.six} z-10 mx-10 items-center font-AbhayaLibre text-xl text-center bg-${theme.col.four} rounded-3xl p-5`}
          >
            <h2 className=" text-2xl font-bold mb-5">AKAD NIKAH</h2>
            <div className="flex font-bold mb-5 items-center justify-end gap-x-5">
              <h1 className={`border-r-2 text-3xl border-${theme.col.six} pr-2`}>
                {marriageContract.day}
              </h1>
              <h3>
                {marriageContract.month} <br></br> {marriageContract.year}
              </h3>
              <h2 className=" text-2xl">{marriageContract.place}</h2>
            </div>
            <h3>Pukul {marriageContract.time} - Selesai</h3>
            <h3>{marriageContract.address}</h3>
            <Link
              to={marriageContract.location}
              target="_blank"
              className={`mt-6 outline rounded-full  outline-${theme.col.six} hover:outline-${theme.col.one} px-8 py-1 font-bold `}
            >
              Lihat Lokasi
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`flex flex-col outline outline-${theme.col.six} z-10 mx-10 items-center font-AbhayaLibre text-xl text-center bg-${theme.col.four} rounded-3xl p-5`}
          >
            <h2 className=" text-2xl font-bold mb-5">RESEPSI NIKAH</h2>
            <div className="flex font-bold mb-5 items-center justify-end gap-x-5">
              <h1 className=" border-r-2 text-3xl border-${theme.col.four} pr-2">
                {reseption.day}
              </h1>
              <h3 className="">
                {reseption.month} <br></br> {reseption.year}
              </h3>
              <h2 className=" text-2xl">{reseption.place}</h2>
            </div>
            <h3>Pukul {reseption.time} - Selesai</h3>
            <h3>{reseption.address}</h3>
            <Link
              to={reseption.location}
              target="_blank"
              className={`mt-6 outline rounded-full outline-${theme.col.six} hover:outline-${theme.col.one}  px-8 py-1 font-bold`}
            >
              Lihat Lokasi
            </Link>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div
        id="journey"
        ref={sectionRefs.journey}
        className={`flex top-0 p-10 w-full flex-col gap-y-10 relative min-h-screen justify-center items-center sm:h-full  bg-right bg-cover ${theme.img.bg}`}
      >
        <img
          data-aos="fade-down-left"
          data-aos-duration="1000"
          className="w-56 lg:w-1/3 absolute right-0 top-0 z-0"
          src={theme.img.top}
        ></img>
        <img
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="  w-56 lg:w-1/3 absolute bottom-0 left-0"
          src={theme.img.bottom}
        ></img>
        <div className="mx-8 text-center">
          <h3
            data-aos="fade-left"
            data-aos-offset="100"
            className="font-AbhayaLibre text-3xl text-right"
          >
            KISAH
          </h3>
          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            className="font-Parisienne text-7xl -mt-5"
          >
            Kami
          </h3>
        </div>
        <div className="flex relative gap-x-3 sm:gap-x-10 p-1 max-w-full h-fit whitespace-nowrap">
          {showLeftButton && (
            <button
              data-aos="zoom-in"
              onClick={scrollLeft}
              className={`absolute -left-4 top-1/2 text-white text-xl bg-${theme.col.six} p-2 w-10 h-10 leading-4 rounded-full z-20 `}
            >
              &#10094;
            </button>
          )}
          {showRightButton && (
            <button
              data-aos="zoom-in"
              onClick={scrollRight}
              className={`absolute -right-4 top-1/2 text-white text-xl bg-${theme.col.six} p-2 w-10 h-10 leading-4 rounded-full z-20`}
            >
              &#10095;
            </button>
          )}
          {journeyItems.map((journey) => (
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              key={journey.id}
              className={`flex flex-col sm:max-w-96  sm:min-w-min h-fit outline outline-${theme.col.six} z-10  items-center font-AbhayaLibre text-xl text-center bg-${theme.col.four} rounded-3xl`}
            >
              <img
                className=" rounded-tl-3xl rounded-tr-3xl h-72 w-full object-cover object-top"
                src={journey.img}
              ></img>
              <h2 className=" text-2xl font-bold my-5">{journey.title}</h2>
              <h3 className="px-5 text-wrap">{journey.story}</h3>
              <h4 className={`mt-6 mb-5 outline rounded-full outline-${theme.col.six} px-8 py-1 font-bold Z-10`}>
                {journey.date}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div
        id="album"
        ref={sectionRefs.album}
        className={`flex p-10 w-full flex-col gap-y-10 relative justify-center items-center  bg-left bg-cover ${theme.img.bg}`}
      >
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          className="  w-56 lg:w-1/3 absolute right-0 "
          src={theme.img.rightSide}
        ></img>
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          className="  w-56 lg:w-1/3 absolute  left-0 "
          src={theme.img.leftSide}
        ></img>
        <div className="mx-8 text-center">
          <h3
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className=" Left font-AbhayaLibre text-3xl text-right"
          >
            GALLERY
          </h3>
          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" Right font-Parisienne text-7xl -mt-5"
          >
            Kami
          </h3>
        </div>
        <div className="flex sm:flex-row flex-col sm:flex-wrap justify-center gap-10 ">
          {images.map((image) => (
            <img
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-offset="100"
              className=" Up sm:w-1/4 sm:object-contain"
              key={image.id}
              src={image.img}
            ></img>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <div >
          
        </div>
      </div>
    </div>
  );
}
