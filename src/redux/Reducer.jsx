const initialState = {
    recipeItems: [],
}

const Reducer = (state = initialState,action) =>{
     switch(action.type){
          case "AddData" : {
              return {
                  ...state, recipeItems : [...state.recipeItems,action.payload]
              }
          }
          case "DeleteData" : {              return {
                  ...state, recipeItems : state.recipeItems.filter(
                      (i,index) => index !== action.payload
                  )
              }
          }
          case "UpdateData" : {
               return {
                  ...state, recipeItems: state.recipeItems.map((i,index)=>
                      index === action.payload.id ? action.payload : i
                  ),
               };
          }
          default : 
            return state
     }
     
}

export default Reducer;