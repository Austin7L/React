import React from "react";
import { useReducer } from "react";

type CounterState = {
  totalCount: number;
};

//初始化reducer
const CounterInitialState: CounterState = {
  totalCount: 0
};

type CounterAction = { type: "VOTE"; payload: number };

const CounterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        totalCount: state.totalCount + action.payload
      };
    default:
      return state;
  }
}

interface CounterContextProps {
  CounterState: {
    totalCount: number
  };
  CounterDispatch?: any;
}

//建立Context
const CounterContext = React.createContext<CounterContextProps>({
  CounterState: CounterInitialState
});

const CounterProvider = (props: any) => {
  const [CounterState, CounterDispatch] = useReducer(
    CounterReducer,
    CounterInitialState
  );

  return (
    <CounterContext.Provider value={{ CounterState, CounterDispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };