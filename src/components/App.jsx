import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem("notes");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setNotes(loadedTodos);
    }
  }, []);
  useEffect(() => {
    if (notes.length > 0) {
      const json = JSON.stringify(notes);
      localStorage.setItem("notes", json);
    }
  }, [notes]);

  function addClick(inputText) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputText];
    });
  }
  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notesItem, index) => {
        return index !== id;
      });
    });
  }
  function handleSave(id, editedContent) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, index) => {
        if (index === id) {
          return { ...note, content: editedContent };
        }
        return note;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addClick} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            createdAt={noteItem.createdAt}
            onDelete={deleteItem}
            onSave={handleSave}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
