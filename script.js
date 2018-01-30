window.onload = function () {
    var myForm = document.querySelector('#myForm');
    var input = document.querySelector('#pokeInput');
    var pokemons = '';
    var pokemon = '';
    var request = new XMLHttpRequest();
    var name = document.querySelector('#name');
    var type = document.querySelector('#type');
    var img = document.querySelector('#myImage');
    var errorBlock = document.querySelector('#errorBlock');


    request.open("GET", 'pokedex.json');
    request.onload = function (e) {
        pokemons = JSON.parse(request.responseText);
    };
    request.send();

    myForm.onsubmit = function () {
        name.innerHTML = "";
        type.innerHTML = "";

        for (var i in pokemons) {
            if (!isNaN(input.value)) {
                if (input.value == i) {
                    pokemon = pokemons[i].name;
                    name.innerHTML += "Name: " + pokemon;
                    pokemon = pokemons[i].type;
                    type.innerHTML += "Type: " + pokemon;
                    img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + pokemons[i].name.toLowerCase() + '.gif');
                }
            }
            if (input.value == pokemons[i].name) {
                pokemon = pokemons[i].name;
                name.innerHTML += "Name: " + pokemon;
                pokemon = pokemons[i].type;
                type.innerHTML += "Type: " + pokemon;
                img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + pokemons[i].name.toLowerCase() + '.gif');
            }

            if (!isNaN(input.value)) {
                if (1 > input.value || 152 < input.value) {
                    errorBlock.innerText = 'pokemon number not found, please enter a number between 1 and 151.';
                    img.style.display = "none";
                }
                else if (input.value === pokemons[i].name.toLowerCase() || i === input.value) {
                    img.style.display = "inherit";
                    img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + pokemons[i].name.toLowerCase() + '.gif');

                }


                if (input.value === "Farfetch'd") {
                    img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/farfetchd.gif');
                }
                if (input.value === "Mr. mime") {
                    img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/mr-mime.gif');
                }
                if (input.value === "Nidoran♀") {
                    img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/nidoranf.gif');
                }
                if (input.value === "Nidoran♂") {
                    img.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/nidoranm.gif');
                }
            }
        }
        return false
    }
}
