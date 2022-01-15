import TodoList from "../components/TodoList/TodoList";
const routes=[
    {
        path:"/relove/",
        exact: true,
        component: TodoList,
    },
    {
        path:"/relove/todo",
        exact: true,
        component: TodoList,
    }
]
export default routes;