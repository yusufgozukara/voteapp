import { createFileName, useScreenshot } from "use-react-screenshot";
import "./App.css";
import Card from "./components/Card/Card";
import InvalidVote from "./components/InvalidVote/InvalidVote";
import Results from "./components/Results/Results";
import Schoolandbox from "./components/Schoolandbox/Schoolandbox";
import persons from "./person.json";
import { createRef, useState } from "react";

function App() {
  const [people, setPeople] = useState(
    persons.map((person) => {
      return { ...person, vote: 0 };
    })
  );
  const [invalidVote, setInvalidVote] = useState(0);

  const resetPage = () => {
    alert("Tüm veriler silinecektir. Onaylıyor musunuz?");
    window.location.reload(false);
    // setInvalidVote(0);
  };

  const ref = createRef(null);

  const [image, takeScreenshot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "voteResult", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    takeScreenshot(ref.current, {
      allowTaint: false,
      useCORS: true,
    }).then(download);
  };

  return (
    <div className="general">
      <div ref={ref}>
        <div className="cardContainer">
          {people.map((person) => (
            <Card people={people} setPeople={setPeople} person={person} />
          ))}
        </div>
        <InvalidVote
          invalidVote={invalidVote}
          setInvalidVote={setInvalidVote}
        />
        <Results people={people} invalidVote={invalidVote} />
        <Schoolandbox />
      </div>

      <button onClick={() => resetPage()} className="resetpage">
        Baştan Say
      </button>
      <button onClick={downloadScreenshot} className="resetpage">
        Ekran Görüntüsü Al
      </button>
    </div>
  );
}

export default App;
