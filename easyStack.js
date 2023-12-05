var stack = ["func1", "func2"]

// add to a stack

console.log(stack)
stack.push("func3")
console.log(stack)

// remove from a stack

// -2 is the index of func3
// the end aka top of the stack
stack.pop(stack[-2])
console.log(stack)
