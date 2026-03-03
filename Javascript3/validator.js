function validateTitle(title) {
    if(!title){
        return "Title required";
    }
    if(title.length<=3){
        return "Min 3 char is required"
    }
    return "Title is Ready";
}
function validatePriority(priority) {
    const priorities =['low','medium','high']
    let result = priorities.includes(priority)
    if(result===false){
        return "Invalid Priority"
    }
    return true
} 

function validateDueDate(date){
   let Duedate=new Date('2024-10-20')
   let today=new Date()
   if(Duedate<today){
    return "Invalid Duedate"
   }
   return true;
}

    export {validateTitle,validatePriority,validateDueDate};
                        