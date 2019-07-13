import React from 'react';
// import { url } from 'inspector';

function Section({children, className, background}){
    const defaultClassName = className || 'default'
    return (
        <section className={defaultClassName + " slide"} style={{textAlign:"right",padding:"5em",backgroundSize:"cover",background: `url(${background})` || '#000', zIndex: 4}}>

        <div className={"row " + className+"-child"} style={{zIndex: 30}}>
            <div className=" offset-md-7 col-md-5">
                {children}
            </div>
        </div>

    </section>
    )
}

export default Section;