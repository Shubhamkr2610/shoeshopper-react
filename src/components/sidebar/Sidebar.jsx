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
                            <input type="checkbox" className="input-checkbox" id="mens-collection" />
                            <label for="mens-collection">mens collection</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="mens-collection" />
                            <label for="mens-collection">mens sneakers</label>
                        </div>

                        <div>
                            <input type="checkbox" className="input-checkbox" id="mens-collection" />
                            <label for="mens-collection">mens casual shoe</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="womens-collection" />
                            <label for="womens-collection">womens collection</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="womens-collection" />
                            <label for="womens-collection">women running shoe</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="kid-collection" />
                            <label for="kid-collection">kids collection</label>
                        </div>
                        <div>
                            <input type="checkbox" className="input-checkbox" id="kid-collection" />
                            <label for="kid-collection">kids sneakers</label>
                        </div>
                    </div>

                    <div className="category-filter">
                        <h3>Price Range</h3>
                        <input type="range" />
                    </div>

                    <div className="category-filter">
                        <h3>Discount</h3>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">10% or more</label>
                        </div>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">20% or more</label>
                        </div>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">30% or more</label>
                        </div>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">40% or more</label>
                        </div>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">50% or more</label>
                        </div>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">60% or more</label>
                        </div>
                        <div>
                            <input type="checkbox" id="discount" />
                            <label for="discount">70% or more</label>
                        </div>
                    </div>

                    <div className="category-filter">
                        <h3>Sort By</h3>
                        <div>
                            <input type="radio" id="price" />
                            <label for="price">Price-Low to High</label>
                        </div>
                        <div>
                            <input type="radio" id="price" />
                            <label for="price">Price-High to Low </label>
                        </div>
                    </div>

                    <div className="category-filter">
                        <h3>Ratings</h3>
                        <div>
                            <input type="radio" id="rating" />
                            <label for="rating">4 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating" />
                            <label for="rating">3 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating" />
                            <label for="rating">2 Star & above</label>
                        </div>
                        <div>
                            <input type="radio" id="rating" />
                            <label for="rating">1 Star & above</label>
                        </div>
                    </div>
                </aside>
            </>
            )
}
