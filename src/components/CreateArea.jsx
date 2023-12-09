import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setinputText] = useState({
    title: "",
    content: "",
    createdAt: ""
  });
  const currentTime = new Date();

  function inputChange(event) {
    const { name, value } = event.target;

    setinputText((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    const val = currentTime.toLocaleString();
    inputText.createdAt = val;
    props.onAdd(inputText);
    setinputText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={inputChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
          required
        />
        <textarea
          onChange={inputChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
          required
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
