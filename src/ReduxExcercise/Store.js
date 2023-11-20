//import {configerStore} from 'redux';// since it wored with creatStore it will be as such
//const Store= configerStore(counterReducer);

//reducer 
import {createStore} from 'redux';

function counterReducer(state =0, action){
    switch(action.type){
        case'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
            
    }

}
export const Store = createStore(counterReducer);
