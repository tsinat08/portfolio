import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Fade} from 'react-reveal/';



class About extends Component {
    render(){
        let tsinatData = this.props.tsinatData;
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{tsinatData.aboutme}</h2>
                                    <h6>{tsinatData.role}</h6>
                                    <p>{tsinatData.aboutdetails}</p>
                                    <a href='https://www.linkedin.com/in/tsinat-w/' className="theme_btn active" target='_blank' rel="noopener noreferrer">Hire Me</a>
                                    <a href='/resume.pdf' className="theme_btn" download>Download CV</a>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div id="myCanvasContainer">
                                <canvas width="600" height="600" id="myCanvas">
                                    <p>Anything in here will be replaced on browsers that support the canvas element</p>
                                </canvas>
                            </div>
                            <div id="tags">
                                <ul>
                                    {
                                        tsinatData.service && tsinatData.service.map(item =>{
                                                return(
                                                    <li key={item.id}>
                                                        <div className={`work_item wow fadeInUp ${item.className}`} data-wow-delay="0.1s">
                                                            <img src={require(`../image/${item.iconName}`)} alt={item.serviceTitle}/>
                                                            <h2 className="t_color">{item.serviceTitle}</h2>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
