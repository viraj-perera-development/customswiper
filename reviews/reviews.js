let reviews = [
    {image: "isabel.jpg", name: "Isabel Segarra", stars: 5, text: `La migliore scuola di formazione con un eccellente TEAM ben formato e molto professionale.`},
    {image: "roberto.jpg", name: "Roberto Emanuel", stars: 4, text: `Ho appena frequentato il corso DNA del Leader e ne sono rimasto entusiasta: grande energia, professionalità, disponibilità....concetti interessanti da applicare in ogni campo della tua vita! Il prodotto non ha eguali ed il metodo è.."vincente"!!! 4Change....4Ever!!!`},
    {image: "francesco.png", name: "Federico Fracassi", stars: 3, text: `Bellissima opportunità per una crescita personale e professionale, fatta con persone speciali dove amicizia e formazione sono veramente al top. Complimenti`},
    {image: "sebastiano.jpg", name: "Sebastiano Salamone", stars: 4, text: `Un'esperienza unica e irripetibile, entusiasmante; un percorso di vita che conduce alla libertà finanziaria.`}, 

];

/* swiper recensioni*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".fa-chevron-right",
        prevEl: ".fa-chevron-left",
    },
    autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    },
    breakpoints: {
    /* 576: {
    slidesPerView: [1]  
    },
    768: {
        slidesPerView:[2]
    },
    992: {
        slidesPerView: [3]
    }, */
    },
    on: {
        init: function () {

        },
    },
    id: {

    }
    });
    /* swiper recensioni */

    console.log(reviews.length);

    let myWrapper = document.querySelector(".my-wrapper");
    let countId = 1;

    reviews.forEach( (review) => {
        let div = document.createElement('div');
        div.classList.add('swiper-slide', 'p-5');
        div.innerHTML = 
        `
        <div class="row d-flex justify-content-start align-items-center">
            <div class="col-3">
                <img class="img-fluid w-100 rounded-circle" src="./media/${review.image}" alt="immagine profilo utente">
            </div>
            <div class="col-9 ps-3">
                <h6 class="text-dark text-start">${review.name}</h6>
                <div class="star-wrapper text-start" id="star${countId}"></div>
            </div>
        </div>
        <div class="row mt-3">
            <p class="text-start text-long text-lenght">${review.text}</p>
        </div>
        `
        myWrapper.appendChild(div);

        let full = review.stars;
        let empty = 5 - full;
        let fullStar = "";
        for (let x = 0; x < full; x++) {
            fullStar = fullStar + `<i class="fa-solid fa-star text-warning"></i>`;
        console.log(x);
        };
        for (let x = 0; x < empty; x++) {
            fullStar = fullStar + `<i class="fa-regular fa-star text-warning"></i>`;
  
        };
        let starWrapper = document.querySelector("#star" + countId);
        starWrapper.innerHTML = fullStar; 
        countId++;
    });

    $(".text-lenght").click(function(){
        $(this).toggleClass("text-long");
    });

    swiper.on('slideChange', function () {
        $(".text-lenght").addClass("text-long");
      });
