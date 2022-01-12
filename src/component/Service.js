import React, {Component} from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';

class Service extends Component{
    render(){
        let tsinatData = this.props.tsinatData;
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="What I work with" TitleP=""/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            {
                                tsinatData.service && tsinatData.service.map(item =>{
                                return(
                                        <div className="col-lg-2 col-sm-4" key={item.id}>
                                            <div className={`work_item wow fadeInUp ${item.className}`} data-wow-delay="0.1s">
                                                <img src={require(`../image/${item.iconName}`)} alt={item.serviceTitle}/>
                                                <h2 className="t_color">{item.serviceTitle}</h2>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;