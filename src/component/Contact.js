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
                                                                            <a href="/#">
                                                                                <i className={info.icon}></i>
                                                                            </a>
                                                                            <div className="media-body">
                                                                                <a href="/#">{info.text}</a> 
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