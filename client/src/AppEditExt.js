import { useEffect, useState } from "react";
import EdiText from "react-editext";

//przykład inline editing z użyciem komponentu react-editext
function AppEditExt() {
 const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(setItems);
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
      <h2>Inline Editable UI Demo (react-editext)</h2>
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
              <td>
                <EdiText
                  type="text"
                  value={item.name}
                  onSave={(val) => handleSave(item.id, "name", val)}
                  onCancel={v => console.log('CANCELLED: ', v)}
                  onEditingStart={v => console.log('EDITING STARTED: ', v)}
                />
              </td>
              <td>
                <EdiText
                  type="number"
                  value={item.value}
                  onSave={(val) => handleSave(item.id, "value", Number(val))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppEditExt;
