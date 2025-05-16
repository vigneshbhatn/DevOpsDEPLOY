function callServlet() {
    fetch("hello").then(res => res.text()).then(data => {
        document.getElementById("result").innerText = data;
    });
}
