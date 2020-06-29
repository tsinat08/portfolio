import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Footer extends Component{
    render(){
        let tsinatData = this.props.tsinatData;
        return(
            <section className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s" style={{width: '60px'}}>
                            <img src={require('../image/tw.png')} alt=""/>
                        </Link>
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    tsinatData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;