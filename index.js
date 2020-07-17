import { createStore } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";

// convention of setting initialState
const initialState = {
  buttonClicked: "no",
  divVisible: "no",
};

///STORE CREATED
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BUTTON_CLICKED":
      // return Object.assign({}, state, {buttonClicked: 'yes'})
      return { ...state, buttonClicked: "yes" };
    case "DIV_VISIBLE":
      return Object.assign({}, state, { divVisible: "yes" });
  }
}
const store = createStore(rootReducer);

const button = document.getElementById("my-button");
button.addEventListener("click", function () {
  /// REDUX - RELEVENT CODE
  const buttonClickedAction = {
    type: "BUTTON_CLICKED",
  };
  const divVisibleAction = {
    type: "DIV_VISIBLE",
  };
  store.dispatch(buttonClickedAction);
  store.dispatch(divVisibleAction);
});

//watches over state change
store.subscribe(function () {
  if (store.getState().divVisible === "yes") {
    const div = document.getElementById("my-div");
    div.style.display = "block";
  }
});

//three most important matter in redux

// store.dispatch()
// store.subscribe()
// store.getState()
