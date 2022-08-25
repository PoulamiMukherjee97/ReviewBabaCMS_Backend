function formSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('cms-form');
    const resDiv = document.getElementById('response');

    let movie = {};
    for (let item of form.elements) {
        if (item.type !== "submit") {
            if (item.id === 'bdpts' || item.id === 'gdpts') {
                value = item.value.split("\n");
                movie[item.id] = value;

            } else {
                movie[item.id] = item.value;
            }
        }
    }
    const req = new XMLHttpRequest();
    req.open("POST", "/cms", true);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(movie));
    req.onreadystatechange = function () {
        resDiv.style.display = 'block';
        resDiv.tabIndex=0;
        resDiv.focus();
        resDiv.tabIndex=-1;
        if (this.readyState == 4 && this.status == 200) {
            resDiv.classList.remove('alert-danger');
            resDiv.classList.add('alert-success');
            const response = JSON.parse(this.responseText);
            resDiv.innerHTML = response.message;
        } else{
            resDiv.classList.add('alert-danger');
            resDiv.innerHTML = response.message;
        }
    }
}
