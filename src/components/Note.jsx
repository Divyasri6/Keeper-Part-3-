import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited content here
    props.onSave(props.id, editedContent);
    setIsEditing(false);
  };
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p>{props.content}</p>
      )}
      {isEditing ? (
        <button onClick={handleSave}>
          <FontAwesomeIcon icon={faSave} />
        </button>
      ) : (
        <button onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <p className="notetime" style={{ fontSize: "10px" }}>
        {props.createdAt}
      </p>
    </div>
  );
}

export default Note;
