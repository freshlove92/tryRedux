
let initialState = {
    count:0,
    id:"",
    pw:""
}

// reducer는 행동지침을 주는것 
// if return으로 써도 되고 switch로 써도 되고~

function reducer (state=initialState, action){
    // console.log("액션은 뭘까?", action) //type으로 만들었던 PLUS
    // if (action.type === "PLUS") {
    //     return {...state, count: state.count+1}
    // }

    switch(action.type){
        case "PLUS" : 
            return {...state, count: state.count+action.payload.num}
        

        case "LOGIN" :
            return {...state,
                    id:action.payload.id,
                    pw:action.payload.pw }

        case "MINUS" :
            return {...state, count: state.count-action.payload.num}

        default :
            return{...state}
     
    }

    // return {...state};
}

export default reducer;