import {auth} from 'firebase'

function authReducer(state=null,action){

    switch(action.type){

        case 'SET USER':
            return action.data;

        case 'REMOVE USER':
            return null;
         
        default:
            return state;    
    }

}
export default authReducer;