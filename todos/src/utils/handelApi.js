import axios from "axios";

const baseUrl = "http://localhost:3011";
const getAllToDO = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data--->", data);
    setToDo(data);
  });
};
const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDO(setToDo);
  });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: toDoId, text }).then((data) => {
    console.log(data);
    setText("");
    setIsUpdating(false);
    getAllToDO(setToDo);
  });
};

const deleteToDo = (_id, setToDo) => {
  axios.post(`${baseUrl}/delete`, { _id: _id }).then((data) => {
    getAllToDO(setToDo);
  });
};

export { getAllToDO, addToDo, updateToDo, deleteToDo };
