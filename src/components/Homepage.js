import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    console.log(isLeftSwipe ? "left" : "right", "swipe");
    if (isRightSwipe) {
      if (currentPage === "About") {
        console.log("Next: Portfolio");
      }
      if (currentPage === "Portfolio") {
        console.log("Next: Resume");
      }
      if (currentPage === "Resume") {
        console.log("Next: Contact");
      }
      if (currentPage === "Contact") {
        console.log("Next: About");
      }
    } else if (isLeftSwipe) {
      if (currentPage === "About") {
        console.log("Last: Contact");
      }
      if (currentPage === "Portfolio") {
        console.log("Last: About");
      }
      if (currentPage === "Resume") {
        console.log("Last: Portfolio");
      }
      if (currentPage === "Contact") {
        console.log("Last: Resume");
      }
    }
    // add your conditional logic here
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
