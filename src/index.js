const consolelog = s => document.write("<p>" + s + "</p>");
const divinfo = s =>  document.getElementById("idWynik").innerHTML = s;
import { createStore } from "redux";

const shtml1 = `
<div style="font-size:18pt; color:#584729; padding: 6px 6px 0px 4px;">
    <b>Manager Redux with html</b>
</div>

<h3>The idea of Redux manager</h3>
<p>
  Often, a user's action should reach multiple nested application components and trigger automatic responses in them. It is difficult to perform such tasks in simple ways.
  Redux is a centralized state manager that mediates the transfer of actions and their results to target application components.
</p>

<h3>Redux action:</h3>

<ul>
<li>The user's action is issuing an (action);</li>
<li>The (store) object provides a method (dispatch). Using (dispatch) the user initiates his (action) in the (store);</li>
<li>Store takes the main property (state) from its memory, adds (action) from the dispatcher and passes them as arguments to the internal (reducer)</li>
<li>Reducer is a method (store) that transforms the previous application state into a new one, based on the type of action;</li>
<li>(Reducer), changing the state (state), launches a connected method (subscribe), which listens and which distributes changes (state) to (view) the user;</li>
</ul>
`
const shtml2 = `
<div>
  This way, automatic propagation of user actions to all attached modules is ensured.    
</div>

<h3>Application in action:</h3>
<p>
  Below is an example of Redux working with a basic HTML application only (without React).
  Buttons trigger 4 different actions that launch the Redux manager, as described above, and change the counter that is automatically displayed.
</p>
`
;

document.getElementById("t1").innerHTML = shtml1;
document.getElementById("t2").innerHTML = shtml2;

const initialState = 0;

//The reducer is responsible for transforming the previous state of the application into a new one, based on the action
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_1") return(state + 1);
  else if (action.type === "ADD_5") return(state + 5);
  else if (action.type === "SUB_1") return(state - 1);
  else if (action.type === "RESET") return(0);
  return(state);
};

const store = createStore(reducer);

//By passing the function to the subscribe method, we start "listening" for state changes.
const unsubscribe = 
store.subscribe(() => {
                                                                                                                                 
  divinfo("Counter: " + store.getState());
});

const jbutt = document.getElementById("Butt1");
jbutt.onclick = () => {
  store.dispatch({ type: "SUB_1" }); // "-1" Emission action "SUB_1"
}

document.getElementById("Butt0").onclick = () => {
  store.dispatch({ type: "RESET" }); // "0"
}

document.getElementById("Butt2").onclick = () => {
  store.dispatch({ type: "ADD_1" }); // "+1"
}

document.getElementById("Butt3").onclick = () => {
  store.dispatch({ type: "ADD_5" }); // "+5"
}

//Using the dispatch method, we "emit" the action

