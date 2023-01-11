let actors = [];
function formSubmit(e, type) {
    e.preventDefault();
    const form = document.getElementById('cms-form');
    const resDiv = document.getElementById('response');
    resDiv.style.display = 'none';

    let movie = {};
    for (let item of form.elements) {
        if (item.value) {
            if (item.type !== "submit" && !item.id.startsWith("actor")) {
                if (item.id === 'bdpts' || item.id === 'gdpts') {
                    value = item.value.split("\n");
                    movie[item.id] = value;

                } else {
                    movie[item.id] = item.value;
                }
            }
        }
    }
    movie = { ...movie, actors: actors };
    const req = new XMLHttpRequest();
    if (type === 'INSERT') {
        req.open("POST", "/cms", true);
    } else {
        req.open("PUT", `/cms/${movie.id}`, true);
    }
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(movie));
    req.onreadystatechange = function () {
        resDiv.style.display = 'block';
        resDiv.tabIndex = 0;
        resDiv.focus();
        resDiv.tabIndex = -1;
        if (this.readyState == 4 && this.status == 200) {
            resDiv.classList.remove('alert-danger');
            resDiv.classList.add('alert-success');
            const response = JSON.parse(this.responseText);
            resDiv.innerHTML = response.message;
        } else {
            resDiv.classList.add('alert-danger');
            resDiv.innerHTML = response.message;
        }
    }
}

function addActor(e) {
    let actor = {};
    const elements = document.getElementsByClassName('actor-el');
    const div = document.getElementById('cast');
    console.log(elements);
    for (let item of elements) {
        actor[item.id] = item.value;
    }
    const newDiv = document.createElement('div');
    newDiv.classList.add('row', 'mx-0', 'mb-3');
    newDiv.innerHTML = `
    <div class="form-group px-3 col-12 col-md-4 pl-0 mb-3">
                        <label for="actorName" class="mb-3">Actor Name</label>
                        <input type="text" id="actorName" name="actorName" class="form-control actor-el"></input>
                    </div>
                    <div class="form-group px-3 col-12 col-md-4 mb-3">
                        <label for="actorCharacter" class="mb-3">Character</label>
                        <input type="text" id="actorCharacter" name="actorCharacter" class="form-control actor-el"></input>
                    </div>
                    <div class="form-group px-3 col-12 col-md-4 mb-3">
                        <label for="actorImage" class="mb-3">Image Url</label>
                        <input type="text" id="actorImage" name="actorImage" class="form-control actor-el"></input>
                    </div>
    `;
    div.appendChild(newDiv);
    if (actor.actorName) {
        actors.push(actor);
    }

}