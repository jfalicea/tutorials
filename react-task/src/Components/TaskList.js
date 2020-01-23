import React from 'react';


function TaskList({tasks}){
    console.log('000', tasks )
    const _ = 

  return(<>
    <li className="collection-item active" key={tasks.id}> {tasks.content}</li>  
    </>)
}
export default TaskList;