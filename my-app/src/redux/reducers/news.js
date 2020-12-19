import { ALL_NEWS, GET_NEWS, DELETE_NEWS, UPDATE_NEWS, NEWS_FAIL, } from "../types";



const initialState = {
    news: null,
    getNews: null,
    error: '',
   
    loaded: false,
    
}



export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
       

            case ALL_NEWS:
                return {
                    ...state,
                    loaded: true,
                    news: payload,
                    // loadNews: true,
                    error: ''
                }

            case GET_NEWS:
                return {
                    ...state,
                    getNews: payload,
                    // loadNews: true,

                    error: ''
                }
          
            
            case UPDATE_NEWS:
                return {
                    ...state,
                    loaded: true,
                    getNews: payload,
                    error: ''
                }

            case DELETE_NEWS: 
                return {
                    ...state,
                    msg: payload
                }

                case NEWS_FAIL:
                    return {
                        ...state,
                        error: payload,
                       
                    }
            
            default: 
                return state;
    }

} 