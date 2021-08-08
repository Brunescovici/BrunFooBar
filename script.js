fetch("https://brunfoobar.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => workData(data));

    let i = 0; // number to count the bartenders and give them an id

function workData(x) {
    console.log(x);
    document.getElementById("barName").textContent = x.bar.name;
    x.bartenders.forEach(el => {
        let tempBody = document.getElementById("objContainer");
        let template = document.getElementById("objTemplate");
        let clone = template.content.cloneNode(true);
        clone.querySelector(".objHeader").textContent = el.name;
        clone.querySelector(".objText").textContent = el.status;
        clone.querySelector("#worker").id = "worker" + i;
        i++;
        if(el.servingCustomer != null)
            clone.querySelector(".objCustomer").textContent = "Serving Customer: " + el.servingCustomer;
        tempBody.appendChild(clone);
    });
}

// Mouse over function

let mouse = false, n = false;

function mouseStatus(idHover) {
    console.log("its working");
    if(!n)
        n = true;
    else
        n = false;
    expandWaiter(idHover);
}

function expandWaiter(hoverId) {
    el = document.getElementById(hoverId);
    if(n) {
        el.style.height = "500px";
        document.querySelector("#" + hoverId + " #downArrow").classList.add("clickedEl");
    }
    else {
        el.style.height = "100px"
        document.querySelector("#" + hoverId + " #downArrow").classList.remove("clickedEl");
    }
}