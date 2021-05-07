import "./style.slider.scss";
import PropTypes from "prop-types";

import { useState, useRef, useCallback, useEffect } from "react";

const Slider = ({ min, max }) => {
  // Set each prop as type number
  Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };

  // Creating the state variables
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(20);

  // Creating the refs
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  // Create a range ref
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to change from the left side
  useEffect(() => {
    console.log("useEffect left");
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to change from the right side
  useEffect(() => {
    console.log("useEffect right");

    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal} €</div>
        <div className="slider__right-value">{maxVal} €</div>
      </div>
    </>
  );
};

export default Slider;