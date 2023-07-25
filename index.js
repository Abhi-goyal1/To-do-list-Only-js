let todo = [];
let req = prompt("Please enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting App")
        break;
    }

    if(req=="add"){
        let task = prompt("Enter your task you want to add");
        todo.push(task);
        console.log("Task added");

    }
    else if (req=="list"){
        
       for(let i= 0;i<todo.length;i++){
        console.log(i,todo[i]);
       }
    }
    else if(req=="delete"){
       let idx = prompt("enter the index , you want to delete");
       todo.pop(idx);
       console.log("task deleted")
    }
    req = prompt("Please enter your request");
}

