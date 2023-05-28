import { Action } from "./actions";

export type State = { notes: string[] };

const initialState: State = { notes: [] };

export const notesReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }

    default:
      return state;
  }
};
