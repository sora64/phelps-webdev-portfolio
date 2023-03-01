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
  const minSwipeDistance = 100;

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
    // console.log(isLeftSwipe ? "left" : "right", "swipe");
    if (isLeftSwipe) {
      if (currentPage === "About") {
        // console.log("Last: Portfolio");
        handlePageChange("Portfolio");
      }
      if (currentPage === "Portfolio") {
        // console.log("Last: Resume");
        handlePageChange("Resume");
      }
      if (currentPage === "Resume") {
        // console.log("Last: Contact");
        handlePageChange("Contact");
      }
      if (currentPage === "Contact") {
        // console.log("Last: About");
        handlePageChange("About");
      }
    } else if (isRightSwipe) {
      if (currentPage === "About") {
        // console.log("Next: Contact");
        handlePageChange("Contact");
      }
      if (currentPage === "Portfolio") {
        // console.log("Next: About");
        handlePageChange("About");
      }
      if (currentPage === "Resume") {
        // console.log("Next: Portfolio");
        handlePageChange("Portfolio");
      }
      if (currentPage === "Contact") {
        // console.log("Next: Resume");
        handlePageChange("Resume");
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
