import { useEffect, useState } from "react";

// przykład inline edit z użyciem wbudowanego komponentu contentEditable
function AppContentEditable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(setItems);
  }, []);

  const handleChange = (id, key, value) => {
    setItems(items.map(i => i.id === id ? { ...i, [key]: value } : i));

    fetch(`http://localhost:5000/api/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: value })
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Inline Editable UI Demo (wbudowany contentEditable)</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={e => handleChange(item.id, "name", e.target.textContent)}
              >
                {item.name}
              </td>
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={e => handleChange(item.id, "value", parseInt(e.target.textContent))}
              >
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppContentEditable;