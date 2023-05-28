import { notesReducer } from "./notesReducer";
import { createStore } from "redux";

export const store = createStore(notesReducer);
