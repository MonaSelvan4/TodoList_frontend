import React, {useState, useEffect} from "react";
import { fetch } from "../../services/Services";
import { TodoListURI } from "../../properties/ServiceURIProps";

export const TodoListContext = React.createContext({});
const TodoList =({children})=>{
    let [todoList, setTodoList] = useState([]);
    const handleSearchSuccess =(response)=>{
        setTodoList(response.data.sort((a, b) => (a.todoPriority > b.todoPriority) ? 1 : -1));
    }
    const handleSearchFailure=(error)=>{
        console.log(error)
    }
    useEffect(()=>{
        fetch(TodoListURI, handleSearchSuccess, handleSearchFailure)
    },[]);
    return(
        <TodoListContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoListContext.Provider>
    )
};
export default TodoList;