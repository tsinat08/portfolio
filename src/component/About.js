import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';



class About extends Component {
    render(){
        let tsinatData = this.props.tsinatData;
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{tsinatData.aboutme}</h2>
                                    <h6>{tsinatData.role}</h6>
                                    <p>{tsinatData.aboutdetails}</p>
                                    <a href='https://www.linkedin.com/in/tsinat-w/' className="theme_btn active">Hire Me</a>
                                    <a href='https://drive.google.com/file/d/1CgH4700WkZSVsI4kH7XWrfU7Cypeaq9v/view' className="theme_btn">Download CV</a>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/tsinat.jpg')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
