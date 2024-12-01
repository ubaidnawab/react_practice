import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: 'todo item 1'
        },
        {
            id: 2,
            name: 'todo item 2'
        },
        {
            id: 3,
            name: 'todo item 3'
        },
        {
            id: 4,
            name: 'todo item 4'
        },
    ]);
    const deleteItem = (id: number)=>{
        setTodos(todos.filter((todoEle)=>{
            return id != todoEle.id;
        }))
        console.log(`this is item id: ${id}`);
    }
    return(
    <>
    <h1 className="text-3xl text-blue-700 font-bold">Todo List</h1>
    <ul>
    {todos.map((item) => {
           return <li className="cursor-pointer" key={item.id} onClick={()=> {deleteItem(item.id)}}>{item.name}</li>
        })}
    </ul>
    </>
);
}
export default Todos;