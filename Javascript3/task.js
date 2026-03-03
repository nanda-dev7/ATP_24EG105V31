import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks=[];
function addTask(title,priority,DueDate){
   if(validateTitle() && validatePriority() && validateDueDate()){
    tasks.push({title,priority,DueDate})
   }
   return "Invalid Task";
}
function getAllTasks(){
   return tasks;
}
function completeTask(){
    if(tasks!=0){
        return "No Task added";
    }
    else {
        return "Tasks are added";
    }
}

export {addTask,getAllTasks,completeTask} 
