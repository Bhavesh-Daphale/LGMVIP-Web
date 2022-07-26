
    const input = document.querySelector("#new-task");
    const add_btn = document.querySelector("#add-btn");
    const tasks = document.querySelector(".tasks");
    const task_count = document.querySelector("#task-count");
    const clear_btn = document.querySelector("#clear-btn");
    var count = 0;


    add_btn.addEventListener('click', (e) => {
        e.preventDefault();

        const task = input.value;

        if (task === "") {
            alert("Input Field Blank");
        }
        else {
            const task_item = document.createElement("div");
            task_item.classList.add("task");

            const task_item_content = document.createElement("span");
            task_item_content.classList.add("content");
            //task_item_content.classList.add("strike");
            task_item_content.innerText = task;

            const task_buttons = document.createElement("div");
            task_buttons.classList.add("buttons");

            const check_btn = document.createElement("button");
            check_btn.classList.add("check-btn");
            check_btn.innerHTML = '<i class="fa-solid fa-text-slash"></i>';

            const del_btn = document.createElement("button");
            del_btn.classList.add("del-btn");
            del_btn.innerHTML = '<i class="fa-solid fa-trash"></i>';

            tasks.appendChild(task_item);
            task_item.appendChild(task_item_content);
            task_item.appendChild(task_buttons);
            task_buttons.appendChild(check_btn);            
            task_buttons.appendChild(del_btn);
        
            input.value="";

            count++;
            console.log(count);
            task_count.innerText = count;

            del_btn.addEventListener('click', () => {
                tasks.removeChild(task_item);
                count--;
                console.log(count);
                task_count.innerText = count;
            })

            check_btn.addEventListener('click', () => {

                if (task_item_content.classList.contains("strike")){
                    task_item_content.classList.remove("strike");
                }
                else{
                    task_item_content.classList.add("strike");
                }
            })

            clear_btn.addEventListener('click', () => {
                tasks.innerHTML = "";
                count = 0;
                task_count.innerText = count;
            })
        }

        
    })

  




