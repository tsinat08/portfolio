import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';

class Contact extends Component {
    render(){
        let tsinatData = this.props.tsinatData;
        return(
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row row-reverse" style={{justifyContent: 'center'}}>
                        {
                            tsinatData.contact && tsinatData.contact.map(item =>{
                            return(
                                    <React.Fragment key={item.id}>
                                        <div className="col-md-5">
                                            <Reveal effect="fadeInLeft" duration={500}>
                                                <div className="contact_info">
                                                    <h4>{item.title}</h4>
                                                    <ul className="nav">
                                                        {
                                                            item.menuItems.map(info =>{
                                                                return(
                                                                    <li className="item" key={info.id}>
                                                                        <div className="media">
                                                                            {info.name === 'email' ?
                                                                                <a href={`mailto:${info.text}`}>
                                                                                    <i className={info.icon}></i>
                                                                                </a> : <i className={info.icon}></i>
                                                                            }
                                                                            <div className="media-body">
                                                                                {info.name==='email' ?
                                                                                    <a href={`mailto:${info.text}`}>
                                                                                        {info.text}
                                                                                    </a> : info.text
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </Reveal>
                                        </div>
                                    </React.Fragment>
                                    )
                                }
                            )
                        }

                    </div>
                </div>
            </section>
        )
    }
}
export default Contact;