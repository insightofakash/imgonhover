import Styles from "./hoverlist.module.css";

// eslint-disable-next-line react/prop-types
function HoverList({ hoverChange }) {
    // const textRef = useRef(null);

    // useEffect(() => {
    //     let textRefCurrent = textRef.current;

    //     textRefCurrent.addEventListener("mouseenter", () => {
    //         hoverChange(true);
    //     });

    //     textRefCurrent.addEventListener("mouseleave", () => {
    //         hoverChange(false);
    //     });

    //     return () => {
    //         textRefCurrent.removeEventListener("mouseenter");
    //         textRefCurrent.removeEventListener("mouseleave");
    //     };
    // }, [hoverChange]);

    // useEffect(() => {
    //     let textRefCurrent = textRef.current;

    //     return () => textRefCurrent.removeEventListener("mouseleave");
    // }, []);

    return (
        <div
            onMouseEnter={() => hoverChange(true)}
            onMouseLeave={() => hoverChange(false)}
            className={Styles.container}
        >
            <p>AKASH DEY</p>
        </div>
    );
}

export default HoverList;
