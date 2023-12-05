var items = ["func1", "func2", "func3"] 
var stack = []  // we will use an array to define our stack


// add and remove are the commands we are allowed to use on the stack

// adding aka push the items in order to the stack

function add() {

    for (var i = 0; i < items.length; i++) {
        console.log("func " + stack.push(items[i]), "\n")
        console.log("added 1 item to the stack \n")
    }
    console.log("this is the whole stack. func3 is the stop of the stack \n")
    console.log(stack, "\n")
    console.log('now the program will start removing each func from the stack \n')
}

// removing aka pop the stack in order

function remove() {

    for (var idx = 4; idx > stack.length; idx--) {
        console.log("removed 1 item from the stack \n")
        console.log(stack.pop(stack[-idx]), "\n")
        console.log(stack, "\n")
    }
    console.log("removed all 3 items from the stack \n")
}


// commands for the stack
add()
remove()
