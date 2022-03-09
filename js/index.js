const boxes = document.querySelectorAll("main .details .box");

 boxes.forEach((box)=>{
     box.onclick = function(){

        box.classList.toggle("active");
        boxes.forEach((box)=>{
            let s = box.querySelector("span");
            if (s)
            s.remove();
            if (box.classList.contains("active")){
                let span = document.createElement("span");
                span.innerHTML = box.dataset.details;
                box.appendChild(span);
            }
            
            
            })
        };
    }
 )