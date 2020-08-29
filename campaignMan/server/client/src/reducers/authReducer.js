//Create a function that exports immediately with two arguments
//1) State object in charge of this reducer and the action object
export default function (state={}, action) {
 //Switch over the actions type 
 switch (action.type) {
   //If no action type is necessary just return state
   default:
     return state
 }
}