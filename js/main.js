// Llamar a los elementos 

const imgHeader = document.querySelector("img");

//console.log(imgHeader);

const viajesContainer = document.querySelector(".viajes-container");

//console.log(viajesContainer);


// Array de la foto del header

const arrImgHeader = [
    {
        url_img: "assets/img/banner/1.jpg",
        alt: "Imagen header 1"
    },
    {
        url_img: "assets/img/banner/2.jpg",
        alt: "Imagen header 2"
    },
    {
        url_img: "assets/img/banner/3.jpg",
        alt: "Imagen header 3"
    },
    {
        url_img: "assets/img/banner/4.jpg",
        alt: "Imagen header 4"
    },
    {
        url_img: "assets/img/banner/5.jpg",
        alt: "Imagen header 5"
    },
    {
        url_img: "assets/img/banner/6.jpg",
        alt: "Imagen header 6"
    },
    {
        url_img: "assets/img/banner/7.jpg",
        alt: "Imagen header 7"
    },
    {
        url_img: "assets/img/banner/8.jpg",
        alt: "Imagen header 8"
    }
]

// Array de las tarjetas

const arrCards = [
    {
        url_img: "../assets/img/viajes/viajes-1.jpg",
        alt: "Imagen viaje 1",
        title: "Viaje 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    },
    {
        url_img: "../assets/img/viajes/viajes-2.jpg",
        alt: "Imagen viaje 2",
        title: "Viaje 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    },
    {
        url_img: "../assets/img/viajes/viajes-3.jpg",
        alt: "Imagen viaje 3",
        title: "Viaje 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    },
    {
        url_img: "../assets/img/viajes/viajes-4.jpg",
        alt: "Imagen viaje 4",
        title: "Viaje 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    },
    {
        url_img: "../assets/img/viajes/viajes-5.jpg",
        alt: "Imagen viaje 5",
        title: "Viaje 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    },
    {
        url_img: "../assets/img/viajes/viajes-6.jpg",
        alt: "Imagen viaje 6",
        title: "Viaje 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    },
    {
        url_img: "../assets/img/viajes/viajes-7.jpg",
        alt: "Imagen viaje 7",
        title: "Viaje 7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus quam tenetur! Est, doloribus sit. Minus ullam accusamus magnam alias facilis eos exercitationem aliquid."
    }
]

// Función para obtener un número aleatorio

const obtenerRandom = () => {
    let num = Math.random() * arrImgHeader.length;
    let randomNumber = Math.floor(num);
    return randomNumber;
}

// Función para pintar la imagen del header

const pintarBanner = () => {
    const i = obtenerRandom();
    const header = imgHeader.setAttribute("src", arrImgHeader[i].url_img);
    const altHeader = imgHeader.setAttribute("alt", arrImgHeader[i].alt);
    return (header, altHeader);
}


// Función para pintar las tarjetas 

const pintarCards = () => {
    const fragment = document.createDocumentFragment();

    arrCards.forEach((element) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        
        div.append(img, title, description);
        fragment.append(div);
        viajesContainer.append(fragment);

        img.setAttribute("src", element.url_img);
        img.setAttribute("alt", element.alt);
        title.append(element.title);
        description.append(element.description);
    })
}

// Invocar las funciones

pintarBanner();
pintarCards();