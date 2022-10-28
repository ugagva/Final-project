
export type AppStateType ={
    isLoading:boolean;
    isLogged:boolean
}

export type SetIsLoggedAT ={
    type:'SET-IS-LOGGED',
    value:boolean
}

const initState:AppStateType ={
    isLoading:false,
    isLogged:false
};

type ActionType=SetIsLoggedAT

export const loginReducer = (state:AppStateType=initState,action:ActionType):AppStateType=>{
    switch (action.type) {
        case 'SET-IS-LOGGED':
            const copyState = {...state};
            copyState.isLoading = action.value
            return copyState
        default:
            return state
    }
}

export const LogindAC = (value: boolean) => {
    return {type: 'SET-IS-LOGGED', value}
}
