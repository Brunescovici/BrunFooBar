fetch("https://brunfoobar.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => workData(data));

function workData(x) {
    console.log(x);
    document.getElementById("barName").textContent = x.bar.name;
    document.querySelector(".objHeader").textContent = x.bartenders[0].name;
}