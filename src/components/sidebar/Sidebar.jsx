import React from 'react'
import './sidebar.css'

export const Sidebar = () => {
    return (
    <>
                <aside className="ecomm-sidebar">
                    <div className="sidebar">
                        <h2>Filter</h2>
                        <button>clear</button>
                    </div>
                    <div className="category-filter">
                        <h3>Categories</h3>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="sport-collection" />
                            <label for="sport-collection">Sports Shoe</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="casual-collection" />
                            <label for="casual-collection">Casual Shoe</label>
                        </div>

                        <div>
                            <input type="checkbox" className="input-checkbox" id="formal-collection" />
                            <label for="formal-collection">Formal Shoe</label>
                        </div>
                       
                    </div>

                    <div className="category-filter">
                        <h3>Price Range</h3>
                        <div>
                            <input type="checkbox" id="range-1000" />
                            <label for="range-1000">1000- 1500</label>
                        </div>
                        <div>
                            <input type="checkbox" id="range-2000" />
                            <label for="range-2000">1000 - 2000</label>
                        </div>
                        <div>
                            <input type="checkbox" id="range-4000" />
                            <label for="range-4000">2000 - 3000</label>
                        </div>
                        <div>
                            <input type="checkbox" id="range-5000" />
                            <label for="range-5000">3000 - 4000</label>
                        </div>
                        
                    </div>

                    <div className="category-filter">
                        <h3>Sort By</h3>
                        <div>
                            <input type="radio" id="price-low" />
                            <label for="price-low">Price-Low to High</label>
                        </div>
                        <div>
                            <input type="radio" id="price-high" />
                            <label for="price-high">Price-High to Low </label>
                        </div>
                    </div>

                    <div className="category-filter">
                        <h3>Ratings</h3>
                        <div>
                            <input type="radio" id="rating4" />
                            <label for="rating4">4 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating3" />
                            <label for="rating3">3 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating2" />
                            <label for="rating2">2 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating1" />
                            <label for="rating1">1 Star & above</label>
                        </div>
                    </div>
                </aside>
            </>
            )
}
