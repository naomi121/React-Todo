import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo.css"

const items=[
  {
    task: 'Clean Room',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Wash The dishes',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  
  constructor(){
    super()
    this.state={
       itemsList: items ,
     }
  }

  toggleCompleted=id=>{
    console.log("ID", id)
    
    const newState={
      ...this.state, 
      itemsList : this.state.itemsList.map(item=>{
        if(item.id===id){
        return {
          ...item, 
          completed: !item.completed
        }
      }
      return item
      })
    };
    this.setState(newState)
  }
  

  addNewItem=newToDo=>{
    const newState={
      ...this.state, 
      itemsList:[
        ...this.state.itemsList, 
        {task:newToDo, 
          completed: false,
           id: Date.now()}]
        };
        this.setState(newState)
  }
  

  clearTodo=()=>{
    const newState={
      ...this.state,
      itemsList: this.state.itemsList.filter(item=>{
        return !item.completed;
      })
    }
    this.setState(newState)
  }
  

  

  
  render() {
    
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List </h1>
          
        </div>
        <TodoForm addNewItem={this.addNewItem}
          clearTodo={this.clearTodo}
          
        />
        <TodoList 
        items={this.state.itemsList} 
        toggleCompleted={this.toggleCompleted}
     
          
        /> 
        {/* Hooking up The TodoList component with a props (items) which is a list of items that is a part of this state   */}

      </div>
    );
  }
}



export default App;
