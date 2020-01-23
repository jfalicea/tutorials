import React from 'react';
import TaskList from '../Components/TaskList';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks : [
        {id:'1', content:'Make friends'}, 
        {id:'2', content:'Eat Cake'}
      ]    
    };
  }





  render(){

    return(<>
        <h1 className='center'>sanity check</h1>
        <ul className="collection container">
          <TaskList tasks= {this.state.tasks} />
        </ul>
    </>)
  }
}
export default Main;