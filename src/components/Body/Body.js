import React from "react";
import { Route, Routes } from 'react-router-dom';
import TodoList from "../TodoList/TodoList";

export default function Body(props){
    return (
        <React.Fragment>
            <div>
                <Routes>
                    <Route exact={true} path="/relove" element={<TodoList/>}/>
                    {/* {routes.map((route,index)=>{
                        <Route exact={route.exact} path={route.path} key={index} element={route.component}/>
                    })} */}
                </Routes>
            </div>
        </React.Fragment>
    )
}