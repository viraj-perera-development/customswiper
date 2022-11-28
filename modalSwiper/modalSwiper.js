let managers = [
    {image: "./media/robertoravazzolo.png", name: "Roberto Ravazzolo", citazione: "Le Azioni parlano più forte delle parole", idVideo: "B4Pc6JvVhFE", id: "robertoravazzolo"},
    {image: "./media/pierluigileoni.png", name: "Pierluigi Leoni", citazione: "Trasformare idee in realtà è il senso della vita. Ma la vera differenza la fai quando decidi di farlo", idVideo: "V0Ywa8eTeCY", id: "pierluigileoni"},
    {image: "./media/stefanodalzovo.png", name: "Stefano Dal Zovo", citazione: "Il valore che hai è quello che ti dai. Puoi sempre alzare l'asticella, dipende da te", idVideo: "29i2P5DbZxc", id: "stefanodalzovo"},
    {image: "./media/giacomogasperini.png", name: "Giacomo Gasperini", citazione: "Osa sognare alla grande...sempre!", idVideo: "E6Y3QCheMjc", id: "giacomogasperini"},
    {image: "./media/paolodellosso.png", name: "Paolo Dell'Osso", citazione: "Vincere non è importante, è l'unica cosa che conta", idVideo: "PWiM2xSZ7PE", id: "paolodellosso"},
    {image: "./media/mauriziogottardo.png", name: "Maurizio Gottardo", citazione: "Mollare mai! Crederci sempre!", idVideo: "0T3cjNrPwCE", id: "mauriziogottardo"},
    {image: "./media/rosellatravaglini.png", name: "Rosella Travaglini", citazione: "Non arrenderti. Rischieresti di farlo un’ora prima del miracolo", idVideo: "41ZDCfOHcGo", id: "rosellatravaglini"},
    {image: "./media/pascaldicesare.jpg", name: "Pascal Di Cesare", citazione: "Vincere è solo metà del gioco. L’altra metà è divertirsi", idVideo: "kEmpRGjeuhk", id: "pascaldicesare"},
    {image: "./media/laurapetetta.jpg", name: "Laura Petetta", citazione: "Il dare per scontato elimina i sogni", idVideo: "rIcjgOE5ELs", id: "laurapetetta"},
    {image: "./media/giuliadiambri.jpg", name: "Giulia Diambri", citazione: "Non smetterò mai di sognare, avrò forza per vincere, coraggio per non mollare, pazienza per persistere", idVideo: "HX5yUVx9u20", id: "giuliadiambri"},
    {image: "./media/robertoanelli.jpg", name: "Roberto Anelli", citazione: "Avanti tutta!", idVideo: "JvyYGgezyhg", id: "robertoanelli"},
    {image: "./media/lucabrignoli.png", name: "Luca Brignoli", citazione: "Non si può battere una persona che non si arrende mai", idVideo: "NI-GTuQjZow", id: "lucabrignoli"},
    {image: "./media/ancamihoc.png", name: "Anca Mihoc", citazione: "Nella vita puoi ottenere tutto quello che vuoi se aiuti le altre persone ad ottenere tutto quello che loro vogliono!", idVideo: "xI2UwhmKGow", id: "ancamihoc"},
];



/* SWIPER BUSINESS MANAGER */
var swiper = new Swiper(".mobileSwiper", {
    slidesPerView: 3, 
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".fa-circle-chevron-right",
      prevEl: ".fa-circle-chevron-left",
    },
    autoplay: {
    delay: 1500,
  }
  });

/* business manager mobile section */
let mobileWrapper = document.querySelector(".mobile-wrapper");

managers.forEach( (manager) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = 
    `  
        <a class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#${manager.id}">
        <img src="${manager.image}" class="img-fluid custom-circle w-100" alt="immagine profilo Business Manager">
        <h6 class="bolder mt-2 text-dark">${manager.name}</h6>
        <p class="text-center gold-care">More..</p>
        </a>
    `
    mobileWrapper.appendChild(div);
});

let modalWrapper = document.querySelector(".modal-wrapper");
managers.forEach( (manager) => {
    let div = document.createElement('div');
    div.classList.add('row', 'd-flex', 'justify-content-center', 'align-items-center');
    div.innerHTML = 
    `
    <div class="modal fade" id="${manager.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content custom-light">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="row d-flex justify-content-center align-items-center pb-3 bg-copertina-modale">
                            <div class="text-end">
                            <button type="button" class="btn-close pt-5 pe-5" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="col-3">
                                <img src="${manager.image}" class="img-fluid custom-circle w-100" alt="immagine profilo Business Manager">
                            </div>
                            <div class="col-9 text-start">
                            <h6 class="bolder mt-2 fs-2 gold-care">${manager.name}</h6>
                            </div>
                        </div>
                        <div class="col-10 text-center py-3">
                            <p class="fst-italic mt-3">"${manager.citazione}"</p>
                        </div>
                        <div class="col-11 text-center mb-4">
                            <iframe width="100%" height="194vh" class="player-detail" src="https://www.youtube.com/embed/${manager.idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    `   
    modalWrapper.appendChild(div);
});

/* 
let desktopWrapper = document.querySelector(".desktop-wrapper");

managers.forEach( (manager) => {
    let div = document.createElement('div');
    div.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'text-center', 'p-5');
    div.innerHTML = 
    `
        <a href="${manager.id}" class="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#${manager.id}A">
        <img src="${manager.image}" class="img-fluid rounded-circle" alt="immagine profilo Business Manager">
        <h6 class="bolder fs-5 mt-4">${manager.name}</h6>
        <p class="text-muted mb-2">Business Manager</p>
        <p class="gold-care">Video Intervista</p>
        <p class="fst-italic mt-2">"${manager.citazione}"</p></a>
    `
    desktopWrapper.appendChild(div);
});

let modalLgWrapper = document.querySelector(".modal-lg-wrapper");

managers.forEach( (manager) => {
    let div = document.createElement('div');
    div.classList.add('col-10', 'text-center');
    div.innerHTML =
    `
        <div class="modal fade" id="${manager.id}A" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content custom-light">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="row justify-content-end">
                            <button type="button" class="btn-close pt-5 pe-5" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="col-10 text-center">
                                <h6 class="bolder fs-1 pb-4 gold-care">${manager.name}</h6>
                            </div>
                            <div class="col-10 text center mb-5 mt-3 w-75">
                                <iframe width="100%" height="422px" class="player-detail border border-dark" src="https://www.youtube.com/embed/${manager.idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    `
    modalLgWrapper.appendChild(div);
}); */
/* SWIPER BUSINESS MANAGER */