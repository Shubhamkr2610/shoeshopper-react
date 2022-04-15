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
                        <h3>Brand</h3>

                         {/* -----------------------filter by brand -------------- */}

                         <div>
                            <input type="checkbox" className="input-checkbox" id="nike-collection" checked={state.Nike} onChange={() => dispatch({type: "NIKE_BRAND"})} />
                            <label htmlFor="nike-collection">Nike</label>
                        </div>
                         <div>
                            <input type="checkbox" className="input-checkbox" id="bata-collection" checked={state.Bata} onChange={() => dispatch({type: "BATA_BRAND"})} />
                            <label htmlFor="bata-collection">Bata</label>
                        </div>
                         <div>
                            <input type="checkbox" className="input-checkbox" id="woodland-collection" checked={state.WoodLand} onChange={() => dispatch({type: "WOODLAND_BRAND"})} />
                            <label htmlFor="woodland-collection">Woodland</label>
                        </div>
                         <div>
                            <input type="checkbox" className="input-checkbox" id="shreeleather-collection" checked={state.ShreeLeather} onChange={() => dispatch({type: "SHREELEATHER_BRAND"})} />
                            <label htmlFor="shreeleather-collection">Shreeleather</label>
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
