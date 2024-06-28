import { useState } from "react";
import "./App.css";
import WheelComponent from "./SpinnerWheel";

export default function App() {
  const [names, setNames] = useState(["Ibrahim", "Jasim", "Jisan", "Teebro", "Rifat"]);

  const [newName, setNewName] = useState<string>("");
  const handleAddName = () => {
    if (newName.trim() !== "") {
      setNames([...names, newName]);
      setNewName("");
    }
  };

  const [modal, setModal] = useState("");

  const onFinished = (winner: string) => {
    setModal(`"${winner}" is winner!`);
  };

  return (
    <div className="App">
      <h1>Spinning Wheel</h1>
      <div>
        <WheelComponent
          segments={names}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />

        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Enter a name"
            style={{
              padding: "5px",
              width: "200px",
              border: "1px solid gray",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          <button onClick={handleAddName} style={{ padding: "3.5px 10px" }}>
            Add Name
          </button>
        </div>

        {modal && (
          <div
            style={{
              marginTop: "30px",
              fontSize: "1.5rem",
              backgroundColor: "black",
              color: "white",
              padding: "20px 50px",
              display: "inline-block",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            {modal}
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                border: "1px solid gray",
                borderRadius: "50%",
                position: "absolute",
                top: "5px",
                right: "5px",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
              onClick={() => setModal("")}
            >
              x
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
