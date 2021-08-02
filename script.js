fetch("https://brunfoobar.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => workData(data));

function workData(x) {
    console.log(x);
    document.getElementById("barName").textContent = x.bar.name;
    x.bartenders.forEach(el => {
        let tempBody = document.getElementById("objContainer");
        let template = document.getElementById("objTemplate");
        let clone = template.content.cloneNode(true);
        clone.querySelector(".objHeader").textContent = el.name;
        clone.querySelector(".objText").textContent = el.status;
        tempBody.appendChild(clone);
    });
}