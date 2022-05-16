import React, { Component } from 'react'
import TaskItem from './TaskItem';
export default class TodoList extends Component {
    constructor(props){
     super(props);
     this.state={
         task:''
     }
    }
   handleChange=(event)=>{
       this.setState({task:event.target.value})
   };

   handleSubmit=(event)=>{
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({task:''});
   }
  render() {
    return (
    
          <div >
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter task"
                    class="
                    form-control
                    block
                    px-4
                    py-2
                    text-xl
                    font-normal
                    bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
            value={this.state.task} onChange={this.handleChange} autoFocus />
          </form>
          <table class="mt-4 text-xs text-left text-gray-500 dark:text-gray-400 rounded-lg w-[275px] shadow-md">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th class="px-6 py-3">Task</th>
                      <th class="px-6 py-3">Actions</th>
                  </tr>
              </thead>
              <tbody  class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {this.props.tasks.map((task,index)=>(
                      <TaskItem key={index} taskItem={task} id={index} deleteTask={this.props.deleteTask} editTask={this.props.editTask}  toggleTask={this.props.toggleTask}/>
                  ))}
              </tbody>
          </table>

          </div>
    
    )
  }
}
