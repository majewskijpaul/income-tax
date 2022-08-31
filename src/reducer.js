export const initialState = {
    card: [],
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_CARD":
            return {
                ...state, 
                card: [...state.card, action.item]
            };
        case "REMOVE_CARD":
            return {
                ...state, 
                card: state.card.filter(item => item.id !== action.id)
            }
            
        default: 
            return state;
    }
};

export default reducer;