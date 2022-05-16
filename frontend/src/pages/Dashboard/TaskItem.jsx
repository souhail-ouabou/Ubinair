import React, { Component } from 'react'
import { BiEditAlt} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import {FiSave} from 'react-icons/fi'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

export default class TaskItem extends Component {
    constructor(props){
        super(props);
        this.state={
            task:this.props.taskItem.task,
            isEditing:false,
        }
    }
    setEditingState=(isEditing)=>{
        this.setState({isEditing:isEditing});
    }
    toggleTask=()=>{
        this.props.toggleTask(this.props.id)
    }
    deleteTask=()=>{
        this.props.deleteTask(this.props.id)
    }
    handleChange=(event)=>{
        this.setState({task:event.target.value})
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.editTask(this.props.id,this.state.task)
        this.setState({isEditing:false});
    }

  render() {
    return (
      <tr>
          {this.state.isEditing?
          <>
          <td className='uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <input value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                  class="
                  form-control
                  w-[160px]
                  block
                  px-4
                  py-2
                  mt-2
                  mb-2
                  ml-4
                  text-sm
                  font-normal
                  bg-clip-padding
                  border border-solid border-gray-300
                  focus:outline-none
                  rounded
                  transition
                  ease-in-out
                  
                " />
          </td>
          <td className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  px-6">
              <button type="submit" onClick={this.handleSubmit} className="text-xl "><i><FiSave /></i></button>
              <button onClick={()=>this.setEditingState(false)} type="button" className="text-xl ml-2"><i><FaArrowAltCircleLeft /></i></button>

          </td>
          </>
          :
          <>
           <td onClick={this.toggleTask }
            className="text-sm cursor-pointer form-check-inline text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 ">
               <input type="checkbox" readOnly checked={this.props.taskItem.isChecked} className="w-4 h-4 cursor-pointer form-checkbox  text-gray-700 rounded"/>
                <span className="ml-2 inline-block">{this.props.taskItem.task}</span>
          </td>
          <td  className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3">
          <button onClick={()=>this.setEditingState(true)} className="text-xl"> <i><BiEditAlt/></i></button>
          <button onClick={this.deleteTask} className="text-xl ml-2"> <i><AiFillDelete/></i></button>
          </td>
          </>
          }
        

       </tr>
    )
  }
}
