fetch("https://brunfoobar.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => workData(data));

window.addEventListener('load', function () {
    let fetchInterval = 1000;

    setInterval(fetchFct, fetchInterval);
  });

function fetchFct() {
    fetch("https://brunfoobar.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => updateData(data));
}

let i = 0; // number to count the bartenders and give them an id

function updateData(x) {    // x is the data got from the database
    i=0;
    x.bartenders.forEach(el => {
        document.querySelector("#worker" + i + " .objText").textContent = el.status;
        document.querySelector("#worker" + i + " .objStatus").textContent = el.statusDetail;
        if(el.usingTap != null) {
            document.querySelector("#worker" + i + " .objTapUsed").textContent = "Using Tap: " + el.usingTap;
        }
        if(el.servingCustomer != null)
            document.querySelector("#worker" + i + " .objCustomer").textContent = "Serving Customer: " + el.servingCustomer;
        else {
            document.querySelector("#worker" + i + " .objCustomer").textContent = "";
        }
        i++;
    })
}

function workData(x) {  // x is the data got from the database
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
    if(document.querySelector("#" + idHover + " #downArrow").classList.contains("clickedEl"))
        collapseWaiter(idHover);
    else {
        collapseWaiters();
        expandWaiter(idHover);
    }
}

function expandWaiter(hoverId) {
    el = document.getElementById(hoverId);
    el.style.height = "auto";
    document.querySelector("#" + hoverId + " #downArrow").classList.add("clickedEl");
    document.querySelector("#" + hoverId + " .objStatus").style.display = "block";
    document.querySelector("#" + hoverId + " .objTapUsed").style.display = "block";
}

function collapseWaiter(idHov) {
    document.getElementById(idHov).style.height = "100px"
    document.querySelector("#" + idHov + " #downArrow").classList.remove("clickedEl");
    document.querySelector("#" + idHov + " .objStatus").style.display = "none";
    document.querySelector("#" + idHov + " .objTapUsed").style.display = "none";
}

function collapseWaiters() {
    for(j=0; j<document.getElementById("objContainer").childElementCount; j++) {
        el = document.getElementById("worker" + j);
        el.style.height = "100px"
        document.querySelector("#worker" + j + " #downArrow").classList.remove("clickedEl");
        document.querySelector("#worker" + j + " .objStatus").style.display = "none";
        document.querySelector("#worker" + j + " .objTapUsed").style.display = "none";
    }
}



