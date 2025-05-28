import { useEffect, useRef } from "react";
import styles from "./Slider.module.css";

function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const slide = sliderRef.current.querySelector(
        `.${styles.slide}`
      ) as HTMLDivElement;

      const slideWidth = slide?.offsetWidth || 0;

      sliderRef.current.scrollBy({
        left: direction === "left" ? -slideWidth : slideWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    function createAutoScroll() {
      const scrollTimer = setInterval(() => makeScroll("right"), 2500);

      function makeScroll(direction: "left" | "right") {
        if (sliderRef.current) {
          const slide = sliderRef.current.querySelector(
            `.${styles.slide}`
          ) as HTMLDivElement;

          const slideWidth = slide?.offsetWidth || 0;

          const container = sliderRef.current;

          const maxScrollLeft = container.scrollWidth;
          const currentScrollLeft = container.scrollLeft;

          //   console.log("currentScrollLeft + slideWidth", currentScrollLeft);
          //   console.log("maxScrollLeft", maxScrollLeft);

          if (currentScrollLeft + slideWidth >= maxScrollLeft) {
            container.scrollTo({ left: 0, behavior: "smooth" });
            return;
          }

          sliderRef.current.scrollBy({
            left: direction === "left" ? -slideWidth : slideWidth,
            behavior: "smooth",
          });
        }
      }
    }

    createAutoScroll();
  }, []);

  return (
    <div className={styles["slider-banner"]}>
      <div ref={sliderRef} className={styles["slider-banner__container"]}>
        <div className={`${styles.slide} ${styles.slide_1}`}></div>
        <div className={`${styles.slide} ${styles.slide_2}`}></div>
        <div className={`${styles.slide} ${styles.slide_3}`}></div>
        <div className={`${styles.slide} ${styles.slide_4}`}></div>
      </div>
      <button className={styles["button-left"]} onClick={() => scroll("left")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.arrow_left}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
      </button>
      <button
        className={styles["button-right"]}
        onClick={() => scroll("right")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.arrow_right}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M268 112l144 144-144 144M392 256H100"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
