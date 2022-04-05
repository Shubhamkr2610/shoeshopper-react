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

        default: 
            return state;
    }
};