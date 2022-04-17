import { SlideshowRounded } from '@material-ui/icons'
import React from 'react'
import './sidebar.css'
import { Slider } from "@mui/material";

export const Sidebar = ({ dispatch, state}) => {
    console.log(state.checked)
    return (
    <>
                <aside className="ecomm-sidebar">
                    <div className="sidebar">
                        <h2>Filter</h2>
                        <button onClick={() => dispatch({ type: "CLEAR_FILTER"})}>clear</button>
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
                        

                        {/* <div class="category-filter">
                        <h3>Price Range</h3>
                        <input type="range" />
                    </div> */}



                    <div className="category-filter">
                                {/* <p className="filter-subtitle">Rating</p> */}
                                <Slider
                                aria-label="ratings"
                                defaultValue={3}
                                valueLabelDisplay="auto"
                                marks
                                min={1}
                                step={1}
                                max={5}
                                onChange={(e) =>
                                    dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
                                }
                                />
                     </div>


                    </div>

                    
                </aside>
            </>
            )
}

