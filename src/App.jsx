import "./App.css";
import HoverList from "./components/hoverList/HoverList";
import Cursor from "./components/cursor/Cursor";
import { useState } from "react";

function App() {
    const [hover, hoverChange] = useState(false);

    return (
        <>
            <Cursor hover={hover} />
            <HoverList hoverChange={hoverChange} />
        </>
    );
}

export default App;
