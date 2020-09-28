function cartReducer(state=[],action){

    switch(action.type){

        case 'INCREMENT':
            return[...state,action.data];

        case 'DECREMENT':
            return [...state];    

        default:
          return state;


    }

}

export default cartReducer;