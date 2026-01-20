import EdiText from "react-editext";
import "./Examples.css";

//przykłady rozbudowy komponentów w react-editext
function AppEditExtExamples() {
return (
<div style={{ padding: "20px" }}>
  <h1>Przykłady z react-editext</h1>

<h2>Pole tekstowe (walidacja 5–20 znaków)</h2>

<div className="example-row">
  <div className="example-code">
{`<EdiText
  type="text"
  value="Kliknij, aby edytować"
  onSave={val => console.log(val)}
  validation={val => val.length >= 5 && val.length <= 20}
  validationMessage="Tekst musi mieć od 5 do 20 znaków"
/>`}
  </div>

  <div className="example-preview">
    <EdiText
      type="text"
      value="Kliknij, aby edytować"
      onSave={(val) => console.log(val)}
      validation={(val) => val.length >= 5 && val.length <= 20}
      validationMessage="Tekst musi mieć od 5 do 20 znaków"
      inputProps={{
        style: { width: "200px", padding: "5px" }
      }}
    />
  </div>
</div>


  <h2>Pole numeryczne</h2>
  <div className="example-row">
    <div className="example-code">
{`<EdiText
  type="number"
  value={123}
  onSave={val => console.log(Number(val))}
/>`}
    </div>

    <div className="example-preview">
      <EdiText
        type="number"
        value={123}
        onSave={(val) => console.log(Number(val))}
        inputProps={{ style: { width: "200px", padding: "5px" } }}
      />
    </div>
  </div>


  {/* --- Textarea --- */}
  <h2>Textarea</h2>
  <div className="example-row">
    <div className="example-code">
{`<EdiText
  type="textarea"
  value="To jest dłuższy tekst"
  onSave={val => console.log(val)}
/>`}
    </div>

    <div className="example-preview">
      <EdiText
        type="textarea"
        value="To jest dłuższy tekst"
        onSave={(val) => console.log(val)}
        inputProps={{
          style: { width: "200px", height: "80px", padding: "5px" }
        }}
        viewProps={{
          style: { width: "150px",padding: "5px", display: "inline-block", whiteSpace: "pre-wrap"} 
        }}
      />
    </div>
  </div>

<h2>Data</h2>

<div className="example-row">
  <div className="example-code">
{`<EdiText
  type="date"
  value="2025-02-01"
  onSave={val => console.log(val)}
/>`}
  </div>

  <div className="example-preview">
    <EdiText
      type="date"
      value="2025-02-01"
      onSave={(val) => console.log(val)}
      inputProps={{
        style: {
          width: "200px",
          padding: "5px"
        }
      }}
    />
  </div>
</div>

<h2>obsługa klawiszy enter, escape, tab</h2>

<div className="example-row">
  <div className="example-code">
{`<input placeholder='click here then press tab' tabIndex={1} />
<EdiText
  value='Some things never change'
  tabIndex={2}
  onSave={val => console.log(val)}
  submitOnUnfocus
  startEditingOnFocus
  submitOnEnter
  cancelOnEscape
/>
<EdiText
  value='Some things do'
  tabIndex={3}
  onSave={val => console.log(val)}
  submitOnUnfocus
  startEditingOnFocus
  submitOnEnter
  cancelOnEscape
/>
<input placeholder='Final Destination' tabIndex={4} />`}
  </div>

  <div className="example-preview">
    <input placeholder="click here then press tab" tabIndex={1} style={{ width: "200px", marginBottom: "10px", padding: "5px" }} />

    <EdiText
      type="text"
      value="Some things never change"
      tabIndex={2}
      onSave={(val) => console.log("SAVE:", val)}
      submitOnUnfocus
      startEditingOnFocus
      submitOnEnter
      cancelOnEscape
      inputProps={{ style: { width: "200px", padding: "5px", marginBottom: "10px" } }}
    />

    <EdiText
      type="text"
      value="Some things do"
      tabIndex={3}
      onSave={(val) => console.log("SAVE:", val)}
      submitOnUnfocus
      startEditingOnFocus
      submitOnEnter
      cancelOnEscape
      inputProps={{ style: { width: "200px", padding: "5px", marginBottom: "10px" } }}
    />

    <input placeholder="Final Destination" tabIndex={4} style={{ width: "200px", padding: "5px" }} />
  </div>
</div>
</div>
  );

}

export default AppEditExtExamples;
