import {combineReducers, createStore} from 'redux' 


let number = 0

const rootReducer = combineReducers({
    // các state cần lưu trữ trên store
    tangGiamSoReducer(state = number, action){
        switch (action.type) {
            case "GIAM_SO":
                state += action.numberGiam
                return state;
            
            case "TANG_SO":
                state += action.numberTang
                return state;

            default:
                return state;
        }
    }
});

export const store = createStore(rootReducer);
