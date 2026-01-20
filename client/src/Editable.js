// Editable.js
import React, { useState, useEffect } from "react";

//implementacja własnego komponentu
const Editable = ({ text, type = "text", childRef, onSave }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  useEffect(() => {
    if (isEditing && childRef?.current) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event) => {
    if (
      (type === "textarea" && ["Escape", "Tab"].includes(event.key)) ||
      (type !== "textarea" && ["Escape", "Tab", "Enter"].includes(event.key))
    ) {
      setEditing(false);
      if (onSave) onSave(type === "number" ? Number(value) : value);
    }
  };

  const handleBlur = () => {
    setEditing(false);
    if (onSave) onSave(type === "number" ? Number(value) : value);
  };

  return isEditing ? (
    <div>
      {type === "number" ? (
        <input
          ref={childRef}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <input
          ref={childRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  ) : (
    <div onClick={() => setEditing(true)}>
      <span>{text || "Editable content"}</span>
    </div>
  );
};

export default Editable;