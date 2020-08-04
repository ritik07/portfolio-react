import React from 'react';
import ajit from '../assests/images/ajitminerals.PNG';
import reckon from '../assests/images/Capture.PNG';
import grtextile from '../assests/images/grtextile.PNG';
import shreeart from '../assests/images/shreearts.PNG';
import gr2 from '../assests/images/gr2.PNG';
import reckon2 from '../assests/images/reckon2.PNG'
import Fade from 'react-reveal/Fade';

const Work = () => {
    return (
        <div>
            <div classNameName="work_title">
        <div className="container mt-20 mb-20">
            <div>
                <Fade top delay={200}>
                <div>
                    <h1 className="d-flex d-xl-flex justify-content-center justify-content-xl-center work_title"><strong>Work</strong></h1>
                    <hr className="hr"></hr>
                </div>
                </Fade>
            </div>
        </div>
    </div>

    <div>
        <div className="container">
            <div className="row">
            <Fade top delay={400}>
                <div className="col-md-4 mb-20">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="rounded work_img" src={ajit} width="100%" height="250px"/></div>
                </div>
                </Fade>
                <Fade top delay={500}>
                <div className="col-md-4 mb-20">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="rounded work_img" src={reckon} width="100%" height="250px"/></div>
                </div>
                </Fade>
                <Fade top delay={600}>
                <div className="col-md-4 mb-20">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="rounded work_img" src={grtextile} width="100%" height="250px"/></div>
                </div>
                </Fade>
                <Fade top delay={700}>
                <div className="col-md-4 mb-20">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="rounded work_img" src={shreeart} width="100%" height="250px"/></div>
                </div>
                </Fade>
                <Fade top delay={800}>
                <div className="col-md-4 mb-20">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="rounded work_img" src={gr2} width="100%" height="250px"/></div>
                </div>
                </Fade>
                <Fade top delay={900}>
                <div className="col-md-4 mb-20">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="rounded work_img" src={reckon2} width="100%" height="250px"/></div>
                </div>
                </Fade>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Work;