import React, {Component} from 'react';
import Particles from './Particles';
import Reveal from 'react-reveal/Reveal/';
import Typer from './Typer';

class ParticlesBanner extends Component {
    render(){
        let tsinatData = this.props.tsinatData;
        return(
            <section id="home">
                <div className="banner_area_two">
                    <div className="one_img" data-parallax='{"x": 0, "y": 100, "rotateZ":0}'><img className="faa-spin animated" src={require('../../image/circle-2.png')} alt=""/></div>
                    <Particles/>
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp">
                                <h2 className="wow fadeInLeft animated">I'm {tsinatData.name2}</h2>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h3>{tsinatData.ptext}</h3>
                            </Reveal>
                            <Typer heading={'Specialized in'} dataText={["Developer.","Photographer.","Designing UI/UX.", "Freelancer."]} />
                            <ul className="list_style social_icon">
                            {
                                tsinatData.socialLinks && tsinatData.socialLinks.map(item =>{
                                return(
                                        <li key={item.name}>
                                            <a  href={item.url}><i className={item.className}></i></a> 
                                        </li>
                                        )
                                    }
                                )
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ParticlesBanner;