import React, {useState, useEffect, useContext} from "react";
// import Typography from "@material-ui/core";
import {
    Typography,
    Paper,
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    IconButton,
    Button
} from "@material-ui/core";
import { AddIcon, Delete } from "@material-ui/icons";
import axios from "axios";
import { TodoListURI, DeleteTodoListURI} from "../../properties/ServiceURIProps";
import { fetch } from "../../services/Services";
import { TodoListContext } from "../Context/TodoList";
import CreateTodo from "./CreateTodo";

export default function TodoList(props){
    let todoList=useContext(TodoListContext)
    const [rows,setRows]= useState(0);
    const [todos,setTodos]= useState(todoList.todoList);
    const [addOpen, setAddOpen] = useState(false);
    const handleSearchSuccess =(response)=>{
        setTodos(response.data.sort((a, b) => (a.todoPriority > b.todoPriority) ? 1 : -1));
    }
    const handleSearchFailure=(error)=>{
        console.log(error)
    }
    const handleAddOpen=()=>{
        setAddOpen(true)
    }
    useEffect (()=>{
        fetch(TodoListURI, handleSearchSuccess, handleSearchFailure)
    },[rows])
    const handleDelete =(id)=>{
        axios.delete(DeleteTodoListURI+id);
        setRows(rows-1);
    }
    return (
    <React.Fragment>
        <div>
            {todos===undefined || todos.length=== 0 || todos.length ===undefined
            ?("Loading")
            :(
                <div>
                    <Typography>
                        Todo Details
                    </Typography>
                    <br/>
                    <Button
                        color="primary"
                        onClick={handleAddOpen}
                        variant="contained"
                    >
                        Create Todo
                    </Button>
                    <br/><br/>
                    <Paper>
                        <TableContainer>
                            <Table size="small" id="todoList">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{width:"20"}}>
                                            S No
                                        </TableCell>
                                        <TableCell style={{width:"50"}}>
                                            Name
                                        </TableCell>
                                        <TableCell style={{width:"50"}}>
                                            Description
                                        </TableCell>
                                        <TableCell style={{width:"30"}}>
                                            Priority
                                        </TableCell>
                                        <TableCell style={{width:"30"}}>
                                            Actions
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {todos.map((todo,index)=>(
                                        <TableRow id={index}>
                                            <TableCell align="left">{index+1}</TableCell>
                                            <TableCell align="left">{todo.todoName}</TableCell>
                                            <TableCell align="left">{todo.todoDescription}</TableCell>
                                            <TableCell align="left">{todo.todoPriority}</TableCell>
                                            <TableCell align="left">
                                                <IconButton onClick={()=>handleDelete(todo.todoId)}>
                                                    <Delete/>
                                                </IconButton>
                                            </TableCell>
                                            
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <CreateTodo open={addOpen} handleOpen={handleAddOpen} rows={rows} setRows={setRows}/>
                </div>
            )
            }
        </div>
    </React.Fragment>
    )
}