var select1 = document.querySelector("#form-select1")
var select2 = document.querySelector("#form-select2")
const work={
    "todoList":
    [
        {
            "taskBlock": "Home", "tasks":
                [
                    { "task": "Clean room", "done": false },
                    { "task": "Get storage unit", "done": false }
                ]
        },
        {
            "taskBlock": "Work", "tasks":
                [
                    { "task": "Analysis", "done": false },
                    {
                        "task": "Sorting", "done": false, "subtasks":
                            [
                                {
                                    "task": "Save files", "done": false, "subtasks":
                                        [
                                            { "task": "Pull from computer 1", "done": false },
                                            { "task": "Walk to computer 2", "done": false },
                                            { "task": "Save on computer 2", "done": false }
                                        ]
                                },
                                { "task": "Sort files", "done": false },
                                { "task": "Plot data", "done": false }
                            ]
                    }
                ]
        }
    ],

    selecInf : function(){
        var value=this.todoList.map((val,index)=> {
            return  `
                <option value="">${val.taskBlock}</option>
            `
        })
        select1.innerHTML=value.join('');
    },
    
    main :function(){
        this.selecInf
    }
}