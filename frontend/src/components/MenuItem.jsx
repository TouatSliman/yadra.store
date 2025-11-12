import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// This is our new, intelligent menu item component
const MenuItem = ({ name, price }) => {
  // `ref` is what we'll assign to our element to watch it
  // `inView` is a boolean that's true when the element is on screen
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.5, // Trigger when 50% of the item is visible
  });

  return (
    <li className="menu-item" ref={ref}>
      <span className="item-name">{name}</span>

      {/* This div will automatically fill the available space */}
      <div className="dot-leader" aria-hidden="false"></div>

      <span className="item-price">
        {/* The CountUp component will animate from 0 to the price */}
        {inView ? <CountUp start={0} end={price} duration={1.5} /> : "0"} دج
      </span>
    </li>
  );
};

export default MenuItem;