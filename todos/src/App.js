import { useEffect, useState } from "react";
import ToDo from "./component/ToDo";
import { addToDo, deleteToDo, getAllToDO, updateToDo } from "./utils/handelApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [toDoId, setToDoId] = useState();
  const [isupdating, setIsUpdating] = useState(false);
  useEffect(() => {
    getAllToDO(setToDo);
  }, []);
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <>
      <p className="text-3xl text-center mt-24">Todos List</p>

      <div className="ml-[36vw]">
        <input
          type="text"
          placeholder="Enter your task here.."
          className="border-2 border-black ml-24 mt-4 px-2 py-1 bg-white"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border-2 border-black ml-32 bg-black text-white px-4 py-1 mt-4"
          onClick={
            isupdating
              ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isupdating ? "Update" : " Add task"}
        </button>
      </div>
      <div className="mt-8">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteMode={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
