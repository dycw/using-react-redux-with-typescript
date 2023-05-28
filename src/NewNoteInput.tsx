import { ChangeEvent, useState } from "react";

type Props = {
  addNote: (note: string) => void;
};

export default function NewNoteInput(props: Props) {
  const [note, setNote] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const handleClick = () => {
    console.log("clicked");
    props.addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={handleClick}>Add note</button>
    </div>
  );
}
