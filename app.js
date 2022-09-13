var array = [
    {
        name: "bulbasaur",
        tipo: ["planta", "veneno"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        carta: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_1.png"
    },
    {
        name: "ivysaur",
        tipo: ["planta", "veneno"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
        carta: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_2.png"
    },
    {
        name: "venusaur",
        tipo: ["planta", "veneno"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_3.png"
    },
    {
        name: "charmander",
        tipo: ["fogo"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_8.png"
    },
    {
        name: "charmeleon",
        tipo: ["fogo"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_9.png"
    },
    {
        name: "charizard",
        tipo: ["fogo"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_10.png"
    },
    {
        name: "squirtle",
        tipo: ["água"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_15.png"
    },
    {
        name: "wartortle",
        tipo: ["água"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_16.png"
    },
    {
        name: "blastoise",
        tipo: ["água"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/PGO/PGO_PT-BR_17.png"
    },
    {
        name: "caterpie",
        tipo: ["inseto"],
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
        carta:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SM1/SM1_PT-BR_1.png"
    }
];

var iconTipo = [

    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/120px-Pok%C3%A9mon_Fire_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/120px-Pok%C3%A9mon_Water_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/120px-Pok%C3%A9mon_Grass_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/120px-Pok%C3%A9mon_Bug_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/120px-Pok%C3%A9mon_Electric_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/120px-Pok%C3%A9mon_Flying_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/120px-Pok%C3%A9mon_Ground_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/120px-Pok%C3%A9mon_Rock_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/120px-Pok%C3%A9mon_Ice_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/120px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/120px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/120px-Pok%C3%A9mon_Steel_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/120px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/120px-Pok%C3%A9mon_Dark_Type_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/120px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png"
]
let conteudo = document.getElementById("conteudo");

function mostraPokemon() {
    document.getElementById("conteudo").innerHTML = ""; //limpa todo conteudo que já existe
    for (var i = 0; i < array.length; i++) {
        let pokeDiv = document.createElement("div"); //cria uma div
        pokeDiv.classList.add("pokeDiv"); //adiciona a classe "pokeDiv" a div
        let imgTag = document.createElement("img"); //cria uma tag "img" para cada elemento da lista
        imgTag.src = array[i].url; //adiciona a url de cada tag de acordo com o indice do array
        imgTag.classList.add("pokemon"); //adiciona a classe "pokemon" para poder estilizar no CSS
        let pokeName = document.createElement("h2"); //cria uma tag h2
        pokeName.classList.add("pokeName"); //add classe "pokeName" ao h2
        pokeName.innerHTML = array[i].name; //o conteudo do h2 será o valor da chave "name" do objeto
        pokeDiv.appendChild(imgTag); //adiciona a tag img dentro da div "pokeName"
        pokeDiv.appendChild(pokeName); //adiciona a tag h2 dentro da div "pokeName"
        conteudo.appendChild(pokeDiv); //coloca todas as tags criadas para dentro da div "conteudo"
    }
}

let botaoAdiciona = document.getElementById("adicionar");
botaoAdiciona.addEventListener("click", function (e) {
    e.preventDefault(); //previne o comportamento padrão do botão, evitando que a pagina seja recarregada
    adicionar();
});

function adicionar() {
    let novoPokemon = { name: "", url: "" }; //objeto que será adicionado a lista
    var nomePokemon = document.getElementById("nomeDoPoke").value.toLowerCase(); //nome digitado no primeiro input
    var urlPokemon = document.getElementById("input").value.toLowerCase(); //url digitada no segundo input
    if (urlPokemon.endsWith(".png") || urlPokemon.endsWith(".jpg")) {
        if (nomePokemon != "" && urlPokemon != "") {
            //checa se os dois inputs estão preenchidos
            novoPokemon.name = nomePokemon;
            novoPokemon.url = urlPokemon;
            array.push(novoPokemon); //pega o objeto com as info digitada pelo usuario e adiciona no array
            mostraPokemon(); //chama a função novamente para mostrar a lista atualizada
            document.getElementById("nomeDoPoke").value = ""; //limpa o primeiro input
            document.getElementById("input").value = ""; //limpa o segundo input
        }
    } else {
        alert("Oh Campeão, preencha os campos corretamente ");
    }
}

function toggleModal() {//mostra e esconde modal
    let modal = document.getElementById("modal");
    let fade = document.getElementById("fade");
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

function preencheModal(pokemon) {
    let tipoModal = document.querySelector(".tipo");
    document.querySelector(".tipo").innerHTML = "";
    for (let i = 0; i < pokemon.tipo.length; i++) {
        if (pokemon.tipo[i] == "fogo") {
            tipoModal.src = iconTipo[0]
        }
        if (pokemon.tipo[i] == "água") {
            tipoModal.src = iconTipo[1]
        }
        if (pokemon.tipo[i] == "planta") {
            tipoModal.src = iconTipo[2]
        }
        if (pokemon.tipo[i] == "veneno") {
            tipoModal.src = iconTipo[10]
        }
    }
    let modalImg = document.querySelector(".modalImg");
    modalImg.src = pokemon.url;
    let titulo = document.querySelector(".modalNome");
    titulo.innerHTML = pokemon.name;
}

conteudo.addEventListener("click", (e) => {
    if (e.target.classList.contains("pokemon")) {
        let item = array.filter((el) => el.url == e.target.src);
        let pokemon = item[0];
        toggleModal();
        preencheModal(pokemon);
        console.log(pokemon);
    }
});

mostraPokemon(); //chama a função de mostrarPokemon assim que a página é carregada
