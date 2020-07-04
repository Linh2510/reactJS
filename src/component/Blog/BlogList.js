import React, { Component } from 'react'
import PersonList from '../PersonList'
export default class BlogList extends Component {
    render() {
        return (
            <section>
        <div className="container">
          <div className="row">
          <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                            <span className="badge pull-right"><i className="fa fa-plus" /></span>
                            Sportswear
                          </a>
                        </h4>
                      </div>
                      <div id="sportswear" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li><a >Nike </a></li>
                            <li><a >Under Armour </a></li>
                            <li><a >Adidas </a></li>
                            <li><a >Puma</a></li>
                            <li><a >ASICS </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                            <span className="badge pull-right"><i className="fa fa-plus" /></span>
                            Mens
                          </a>
                        </h4>
                      </div>
                      <div id="mens" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li><a >Fendi</a></li>
                            <li><a >Guess</a></li>
                            <li><a >Valentino</a></li>
                            <li><a >Dior</a></li>
                            <li><a >Versace</a></li>
                            <li><a >Armani</a></li>
                            <li><a >Prada</a></li>
                            <li><a >Dolce and Gabbana</a></li>
                            <li><a >Chanel</a></li>
                            <li><a >Gucci</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                            <span className="badge pull-right"><i className="fa fa-plus" /></span>
                            Womens
                          </a>
                        </h4>
                      </div>
                      <div id="womens" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li><a >Fendi</a></li>
                            <li><a >Guess</a></li>
                            <li><a >Valentino</a></li>
                            <li><a >Dior</a></li>
                            <li><a >Versace</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Kids</a></h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Fashion</a></h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Households</a></h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Interiors</a></h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Clothing</a></h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Bags</a></h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title"><a >Shoes</a></h4>
                      </div>
                    </div>
                  </div>{/*/category-products*/}
                  <div className="brands_products">{/*brands_products*/}
                    <h2>Brands</h2>
                    <div className="brands-name">
                      <ul className="nav nav-pills nav-stacked">
                        <li><a > <span className="pull-right">(50)</span>Acne</a></li>
                        <li><a > <span className="pull-right">(56)</span>Grüne Erde</a></li>
                        <li><a > <span className="pull-right">(27)</span>Albiro</a></li>
                        <li><a > <span className="pull-right">(32)</span>Ronhill</a></li>
                        <li><a > <span className="pull-right">(5)</span>Oddmolly</a></li>
                        <li><a > <span className="pull-right">(9)</span>Boudestijn</a></li>
                        <li><a > <span className="pull-right">(4)</span>Rösch creative culture</a></li>
                      </ul>
                    </div>
                  </div>{/*/brands_products*/}
                  <div className="price-range">{/*price-range*/}
                    <h2>Price Range</h2>
                    <div className="well text-center">
                      <input type="text" className="span2" defaultValue data-slider-min={0} data-slider-max={600} data-slider-step={5} data-slider-value="[250,450]" id="sl2" /><br />
                      <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
                    </div>
                  </div>{/*/price-range*/}
                  <div className="shipping text-center">{/*shipping*/}
                    <img src="images/home/shipping.jpg" alt="" />
                  </div>{/*/shipping*/}
                </div>
              </div>
            <div className="col-sm-9">
              <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
               
                <PersonList />
                <div className="pagination-area"> 
                  <ul className="pagination">
                    <li><a href className="active">1</a></li>
                    <li><a href>2</a></li>
                    <li><a href>3</a></li>
                    <li><a href><i className="fa fa-angle-double-right" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        )
    }
}
