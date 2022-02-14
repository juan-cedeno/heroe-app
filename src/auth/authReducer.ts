

export interface authSate {
    name: string,
    logAuth : boolean
}

type actionType = {type: 'login' , payload: string}
                | {type: 'logout'}

export const authReducer = (state: authSate , action: actionType): authSate => {
  
    switch (action.type) {
        case 'login':
            return{
               ...state,
               name: action.payload,
               logAuth : true
                
            }
        case 'logout':
            return {
                logAuth: false,
                name: ''
            }    
           
    
        default:
            return state
    }

}
