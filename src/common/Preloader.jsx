import preloader from "../assets/image/preloader.gif";
import React from "react";

const Preloader = (props) => {

    return (
        <div>
            <img src={preloader} alt={"preloader"}/>
        </div>

    )
}
export default Preloader;