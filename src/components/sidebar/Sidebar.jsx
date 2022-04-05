import React from 'react'
import './sidebar.css'

export const Sidebar = ({ dispatch, state}) => {
    console.log(state.checked)
    return (
    <>
                <aside className="ecomm-sidebar">
                    <div className="sidebar">
                        <h2>Filter</h2>
                        <button>clear</button>
                    </div>
                    <div className="category-filter">
                        <h3>Categories</h3>

                        {/* -----------------------filter by category -------------- */}
                        <div>
                            <input type="checkbox" className="input-checkbox" id="sport-collection" checked={state.Sports} onChange={() => dispatch({type: "SPORTS_SHOE"})} />
                            <label htmlFor="sport-collection">Sports Shoe</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="casual-collection" checked={state.Casual} onChange={() => dispatch({type: "CASUAL_SHOE"})} />
                            <label htmlFor="casual-collection">Casual Shoe</label>
                        </div>

                        <div>
                            <input type="checkbox" className="input-checkbox" id="formal-collection" checked={state.Formal} onChange={() => dispatch({type: "FORMAL_SHOE"})} />
                            <label htmlFor="formal-collection">Formal Shoe</label>
                        </div>
                       
                    </div>

                    <div className="category-filter">
                        <h3>Price Range</h3>

                        {/* ----------------------filter by price range ------------------- */}
                        <div>
                            <input type="checkbox" id="range-1000" />
                            <label htmlFor="range-1000">1000- 1500</label>
                        </div>
                        <div>
                            <input type="checkbox" id="range-2000" />
                            <label htmlFor="range-2000">1000 - 2000</label>
                        </div>
                        <div>
                            <input type="checkbox" id="range-4000" />
                            <label htmlFor="range-4000">2000 - 3000</label>
                        </div>
                        <div>
                            <input type="checkbox" id="range-5000" />
                            <label htmlFor="range-5000">3000 - 4000</label>
                        </div>
                        
                    </div>

                    <div className="category-filter">
                        <h3>Sort By</h3>
                        {/* ---------------filter by  price low to high---------------------- */}
                        <div>
                            <input type="radio" id="price-low" checked={ state.sortBy === "LOW_TO_HIGH"} onChange={ () => dispatch({ type: "LOW_TO_HIGH"})}/>
                            <label htmlFor="price-low">Price-Low to High</label>
                        </div>
                        <div>
                            <input type="radio" id="price-high" checked={state.sortBy === "HIGH_TO_LOW"} onChange={ () => dispatch ({type: "HIGH_TO_LOW"})} />
                            <label htmlFor="price-high">Price-High to Low </label>
                        </div>
                    </div>

                    <div className="category-filter">
                        <h3>Ratings</h3>
                        {/* -------------------------filter by rating------------------------ */}
                        <div>
                            <input type="radio" id="rating4" />
                            <label htmlFor="rating4">4 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating3" />
                            <label htmlFor="rating3">3 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating2" />
                            <label htmlFor="rating2">2 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating1" />
                            <label htmlFor="rating1">1 Star & above</label>
                        </div>
                    </div>
                </aside>
            </>
            )
}
