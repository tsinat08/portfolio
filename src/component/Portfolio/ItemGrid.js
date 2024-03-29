import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');

        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        });

    }
    onFilterChange = (newFilter) => {

        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }

    // this.iso.arrange({ filter: newFilter });

      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <div>
            {/*<ul className="list_style portfolio_menu text-center">*/}
            {/*    <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>ALL</li>*/}
            {/*    <li className={`${this.onActive('web')}`} data-wow-delay="0.3s" data-filter="web" onClick={() => {this.onFilterChange("web")}}>Web Design</li>*/}
            {/*    <li className={`${this.onActive(`develop`)}`} data-wow-delay="0.6s" data-filter="develop" onClick={()=> {this.onFilterChange("develop")}}>Development</li>*/}
            {/*    <li className={`${this.onActive(`market`)}`} data-wow-delay="0.8s" data-filter="market" onClick={()=> {this.onFilterChange("market")}}>Marketing</li>*/}
            {/*</ul>	*/}
                <div className="grid row">
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item tech develop">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/jamming.png')} alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">NextJs/Serverless/AWS Lambda@Edge</h6>
                                    <div className="icons">
                                        <a href="http://jamming.tsinatcodes.com" target='_blank' rel="noopener noreferrer">
                                            <i className="icon-magnifying-glass"/>
                                        </a>
                                        <a href="https://github.com/tsinat08/jammming" target='_blank' rel="noopener noreferrer">
                                            <i className="fa fa-github"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/restaurant.png')} alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">NextJs/Serverless/AWS Lambda@Edge</h6>
                                    <div className="icons">
                                        <a href="http://restaurant.tsinatcodes.com" target='_blank' rel="noopener noreferrer">
                                            <i className="icon-magnifying-glass"/>
                                        </a>
                                        <a href="https://github.com/tsinat08/Restaurant" target='_blank' rel="noopener noreferrer">
                                            <i className="fa fa-github"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item web" style={{marginBottom: 20}}>
                        <div className="portfolio hover-style">
                            <img src={require('../../image/nftys-4.png')} alt="nftys"/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">React/GraphQL/Web3/NodeJs/MongoDB</h6>
                                    <div className="icons">
                                        <a href="https://www.nftys.io/" target='_blank' rel="noopener noreferrer">
                                            <i className="icon-magnifying-glass"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item market develop">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/PaintedRed_2.png')} alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <img src={require('../../image/paintedred_logo.png')} alt="" style={{width: '20%'}} />
                                    <h6 className="sm-titl">NextJs/Woocommerce/Node <br/> AWS/GraphQl/Stripe</h6>
                                    <div className="icons">
                                        <a href="https://www.getpaintedred.com/" target='_blank' rel="noopener noreferrer">
                                            <i className="icon-magnifying-glass"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">*/}
                    {/*    <div className="portfolio hover-style">*/}
                    {/*        <img src={require('../../image/calculator.png')} alt=""/>*/}
                    {/*        <div className="item-img-overlay">*/}
                    {/*            <div className="overlay-info text-center">*/}
                    {/*                <h6 className="sm-titl">React/Express/Node/AWS</h6>*/}
                    {/*                <div className="icons">*/}
                    {/*                    <a href="http://calculator.tsinatcodes.com" target='_blank' rel="noopener noreferrer">*/}
                    {/*                        <i className="icon-magnifying-glass"/></a>*/}
                    {/*                    <a href="https://github.com/tsinat08/calculator" target='_blank' rel="noopener noreferrer">*/}
                    {/*                        <i className="fa fa-github"/></a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/eristars.png')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <img src={require('../../image/eristars_logo.png')} alt="" style={{width: '20%'}} />
                                        <h6 className="sm-titl">WordPress/PHP/Js</h6>
                                        <div className="icons">
                                            <a href="https://www.eristarsportsclub.com/" target='_blank' rel="noopener noreferrer">
                                              <i className="icon-magnifying-glass"/>
                                            </a>
                                        </div>
                                    </div>
                              </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web develop">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/movies.png')} alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">React/Express/Node/AWS</h6>
                                    <div className="icons">
                                        <a href="http://movie.tsinatcodes.com" target='_blank' rel="noopener noreferrer">
                                            <i className="icon-magnifying-glass"/>
                                        </a>
                                        <a href="https://github.com/tsinat08/Movie" target='_blank' rel="noopener noreferrer">
                                            <i className="fa fa-github"/>
                                        </a>
                                    </div>
                                </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }

  export default ItemGrid;
