import NewNoteInput from "./NewNoteInput";
import { addNote } from "./actions";
import { State } from "./notesReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function App() {
  const notes = useSelector<State, State["notes"]>((state) => state.notes);
  const dispatch = useDispatch();
  const handleAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={handleAddNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
}
