import React,{ useEffect, useState, useRef } from "react";
import Editable from "./Editable";

//przykład własnego komponentu realizującego inline editing
function AppEditable() {
  const [items, setItems] = useState([]);
  
  const nameRefs = useRef([]);
  const valueRefs = useRef([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        nameRefs.current = data.map(() => React.createRef());
        valueRefs.current = data.map(() => React.createRef());
      });
  }, []);

  const handleSave = (id, key, value) => {
    setItems(items.map(i => i.id === id ? { ...i, [key]: value } : i));
    fetch(`http://localhost:5000/api/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: value })
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Inline Editable UI Demo (własny komponent Editable)</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Value</th></tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Editable
                  text={item.name}
                  type="text"
                  childRef={nameRefs.current[index]}
                  onSave={(val) => handleSave(item.id, "name", val)}
                />
              </td>
              <td>
                <Editable
                  text={item.value}
                  type="number"
                  childRef={valueRefs.current[index]}
                  onSave={(val) => handleSave(item.id, "value", val)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppEditable;