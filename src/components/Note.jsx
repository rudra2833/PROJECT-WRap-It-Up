import { DeleteOutlined } from "@mui/icons-material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteOutlined />
      </button>
    </div>
  );
}

export default Note;
