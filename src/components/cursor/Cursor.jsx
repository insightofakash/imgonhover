import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Styles from "./cursor.module.css";
import gsap from "gsap";

// eslint-disable-next-line react/prop-types
function Cursor({ hover }) {
    const cursorRef = useRef(null);
    const [mousePosition, mousePositionChange] = useState({ clientX: 0, clientY: 0 });

    const cursorSize = "30";

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            mousePositionChange({ clientX: e.clientX, clientY: e.clientY });
        });

        return () => window.removeEventListener("mousemove");
    }, []);

    useLayoutEffect(() => {
        let ctx1 = gsap.context(() => {
            gsap.to(cursorRef.current, {
                x: mousePosition.clientX - cursorSize / 2,
                y: mousePosition.clientY - cursorSize / 2,
                ease: "back.out(1.8)",
            });

            // console.log("Position Update");

            return () => ctx1.revert();
        });
    }, [mousePosition]);

    useLayoutEffect(() => {
        let ctx2 = gsap.context(() => {
            hover
                ? gsap.to(cursorRef.current, {
                      height: cursorSize * 2,
                      width: cursorSize * 2,
                      duration: 0.05,
                  })
                : gsap.to(cursorRef.current, {
                      height: cursorSize,
                      width: cursorSize,
                      duration: 0.05,
                  });

            console.log("Size Update");

            return () => ctx2.revert();
        });
    }, [hover]);

    return (
        <div
            className={Styles.cursor}
            ref={cursorRef}
        ></div>
    );
}

export default Cursor;
