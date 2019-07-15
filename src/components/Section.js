import React from "react";
// import { url } from 'inspector';

function Section({ children, className, background, full, bgSize,  bgPosition  }) {
    const defaultClassName = className || "default";
    if (full) {
        return (
            <section
                className={defaultClassName + " slide"}
                style={{
                    textAlign: "right",
                    padding: "5em",
                    backgroundImage:  `url(${background})`,
                    backgroundSize:"cover",
                    // backgroundPosition: bgPosition? bgPosition : "center",
                    // backgroundRepeat: "no-repeat",
                    zIndex: 4
                }}
            >
                <div
                    className={"row " + className + "-child"}
                    style={{ zIndex: 30 }}
                >
                    <div className=" offset-md-6 col-md-6">{children}</div>
                </div>
            </section>
        );
    }
    return (
        <section
            className={defaultClassName + " slide"}
            style={{
                textAlign: "right",
                padding: "5em",
                backgroundImage: bgPosition? `url(${background})` : "#000",
                backgroundSize: bgSize ? bgSize : "cover",
                backgroundPosition: bgPosition ? bgPosition : "center",
                backgroundRepeat: "no-repeat",
                zIndex: 4
            }}
        >
            <div
                className={"row " + className + "-child"}
                style={{ zIndex: 30 }}
            >
                <div className=" offset-md-7 col-md-5">{children}</div>
            </div>
        </section>
    );
}

export default Section;
