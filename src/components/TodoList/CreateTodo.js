import React, {useState} from "react";
import {
Dialog,
DialogContent,
DialogTitle,
TextField,
Select,
FormControl,
MenuItem,
InputLabel,
Button,
} from "@material-ui/core";
import { AddTodoListURI} from "../../properties/ServiceURIProps";
import { add } from "../../services/Services";

export default function CreateTodo(props) {
    const {
        open,
        rows,
        setRows, 
        handleOpen
    }=props;
    const [values,setValues] = useState({
        todoId:"",
        todoName:"",
        todoDescription:"",
        todoPriority:""
    });

    const [openSucess, setOpenSuccess]= useState(false);
    const handleSubmitSuccess =(response)=>{
        if(response.status === 200){
            setOpenSuccess(true)
            setRows(rows+1)
        }
    }
    const handleSubmitFailure =(error) => {
        console.log(error)
        handleOpen();
    }
    const handleSubmit =()=>{
        add(AddTodoListURI, values, handleSubmitSuccess, handleSubmitFailure);
    }
    const handleClose =()=>{
        setOpenSuccess(false)
        handleOpen();
    }

    return(
        <React.Fragment>
            <Dialog
                disableEscapeKeyDown
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={handleOpen}>
                    <DialogTitle>Create New Todo</DialogTitle>
                    <DialogContent>
                        <React.Fragment>
                            {/* <Formik
                                onSubmit={handleSubmit}               
                            >
                            </Formik> */}
                          
                                    <form>
                                    {console.log(values, "values")}
                                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                                        <TextField
                                            label="Todo Id"
                                            id="todoId"
                                            variant="outlined"
                                            onChange={(event)=>setValues({...values, ["todoId"]: event.target.value})}
                                            // onBlur={handleBlur}
                                            required
                                            value={values.todoId}
                                            style={{margin:"8px", minWidth:"250px"}}
                                        />
                                         <TextField
                                            label="Todo Name"
                                            id="todoName"
                                            variant="outlined"
                                            onChange={(event)=>setValues({...values, ["todoName"]: event.target.value})}
                                            // onBlur={handleBlur}
                                            required
                                            value={values.todoName}
                                            style={{margin:"8px", minWidth:"250px"}}
                                        />
                                         <TextField
                                            label="Todo Description"
                                            id="todoDescription"
                                            variant="outlined"
                                            onChange={(event)=>setValues({...values, ["todoDescription"]: event.target.value})}
                                            // onBlur={handleBlur}
                                            required
                                            value={values.todoDescription}
                                            style={{margin:"8px", minWidth:"250px"}}
                                        />
                                        <FormControl
                                            variant="outlined"
                                            name="todoPriority"
                                            id="todoPriority"
                                            label="Todo priority"
                                            style={{margin:"8px", minWidth:"250px"}}
                                            // onChange={(event)=>setValues({...values, ["todoPriority"]: event.target.value})}
                                            required
                                        >
                                            <InputLabel>Priority</InputLabel>
                                            <Select
                                                name="todoPriority"
                                                id="todoPriority"
                                                label="Todo priority"
                                                value={values.todoPriority}
                                                onChange={(event)=>setValues({...values, ["todoPriority"]: event.target.value})}
                                                // onBlur={handleBlur}
                                                required
                                            >
                                                <MenuItem value="High">High</MenuItem>
                                                <MenuItem value="Medium">Medium</MenuItem>
                                                <MenuItem value="Low">Low</MenuItem>
                                            </Select>
                                        </FormControl>
                                        </div>
                                        <div align="right">
                                            <Button 
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </form>
                        </React.Fragment>
                    </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}