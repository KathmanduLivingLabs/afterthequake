import React from "react";
// import { url } from 'inspector';

function Section({ children, className, background, full }) {
    const defaultClassName = className || "default";
    if (full) {
        return (
            <section
                className={defaultClassName + " slide"}
                style={{
                    textAlign: "right",
                    padding: "5em",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    background: `url(${background})` || "#000",
                    zIndex: 4
                }}
            >
                <div
                    className={"row " + className + "-child"}
                    style={{ zIndex: 30 }}
                >
                    <div className=" offset-md-2 col-md-10">{children}</div>
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
                backgroundSize: "cover",
                backgroundPosition: "center",
                background: `url(${background})` || "#000",
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
