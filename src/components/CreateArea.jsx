import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpended, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleOnClick() {
    console.log("It is clicked");
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpended && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleOnClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpended ? "3" : "1"}
        />

        <Zoom in={isExpended}>
          <Fab onClick={submitNote}>
          <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
