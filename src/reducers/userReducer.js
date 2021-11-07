
import {GET_USERS , GET_USER} from './../action/typys';
const initialState = {
    users: [],
    user: {},
    requestFailed: false,
   
    requestMessage: '',
    resType: 'ready',
  };
  
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    
    switch (action.type) {
        case GET_USERS:
            if (
              Object.keys(action.payload).length > 0 &&
              (action.payload.errorMessage === '' ||
                action.payload.errorMessage === undefined)
            ) {
              if (action.payload.error === undefined) {
                console.log("restype" , action.payload)
                return {
                  //...state,
                  user: action.payload,
                  requestFailed: false,
                  requestFailedMessage: { error: 'no' },
                  //add state
                  users: [],
                
                  resType: action.payload.resType
                };
              } else {
                return {
                  //...state,
                  user: {},
                  requestFailed: true,
                  requestFailedMessage: action.payload,
                  //add state
                  users: [],
                  
                  resType: action.payload.resType
                };
              }
            } else {
              return {
                //...state,
                user: {},
                requestFailed: true,
                requestFailedMessage: action.payload,
                //add state
                users: [],
               
                resType: action.payload.resType
              };
              
            }
            
//.........................................................



            case GET_USER:
              if (
                Object.keys(action.payload).length > 0 &&
                (action.payload.errorMessage === '' ||
                  action.payload.errorMessage === undefined)
              ) {
                if (action.payload.error === undefined) {
                  console.log("restype" , action.payload)
                  return {
                    //...state,
                    user: action.payload,
                    requestFailed: false,
                    requestFailedMessage: { error: 'no' },
                    //add state
                    //users: [],
                  
                    resType: action.payload.resType
                  };
                } else {
                  return {
                    //...state,
                    user: {},
                    requestFailed: true,
                    requestFailedMessage: action.payload,
                    //add state
                    //users: [],
                    
                    resType: action.payload.resType
                  };
                }
              } else {
                return {
                  //...state,
                  user: {},
                  requestFailed: true,
                  requestFailedMessage: action.payload,
                  //add state
                  //users: [],
                
                  resType: action.payload.resType
                };
                
              }
              




            default:
                return state;

        }
        
    }