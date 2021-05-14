import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo} from '../actions/todoAction';
import {deleteTodo} from '../actions/todoAction';
import Todos from './Todos';

 class TodoForm extends Component{
    state={
        todo:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.todo)
    }
    deleteTodo=(id)=>{
        this.props.deleteTodo(id);
    }
    render(){
        return(
             <div className="container">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="todo" placeholder="what to do today?..." onChange={this.handleChange}/>
                <button className="btn green" onClick={this.handleSubmit}>Add todo!</button>
            </form>
            <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
            </div>
        )   
       
    }

}

const mapStateToProps=(state)=>{
    console.log('state',state);
    return{
        todos:state
    }
}
export default connect(mapStateToProps,{addTodo,deleteTodo})(TodoForm);