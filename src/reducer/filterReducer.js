export const reducer = (state , action) => {
    switch (action.type) {

        // reducing filter by price low to high

        case "LOW_TO_HIGH": 
            return { ...state, sortBy: action.type };
        case "HIGH_TO_LOW": 
            return { ...state, sortBy: action.type };

        // reducing filter by category of products 
        case "SPORTS_SHOE":
            return { ...state, Sports: !state.Sports};

        case "CASUAL_SHOE":
            return { ...state, Casual: !state.Casual};  

        case "FORMAL_SHOE":
            return { ...state, Formal: !state.Formal};

       // reducing filter by brand of products
        case "NIKE_BRAND":
            return { ...state, Nike: !state.Nike};
        case "BATA_BRAND":
            return { ...state, Bata: !state.Bata};
        case "WOODLAND_BRAND":
            return { ...state, WoodLand: !state.WoodLand};
        case "SHREELEATHER_BRAND":
            return { ...state, ShreeLeather: !state.ShreeLeather};

        // reducing filter by rating of products
        case "FILTER_BY_RATING":
            return { ...state, rating: action.payload };
        
        case "CLEAR_FILTER":
                return {
                  ...state,
                  sortBy: ""  ,
                  Sports: false,
                  Casual: false,
                  Formal: false,
                  Nike: false,
                  Bata: false,
                  WoodLand: false,
                  ShreeLeather: false,
                  rating: 0,
                };
        default: 
            return state;
    }
};