const mobileMenu = document.querySelector(".menu");
const header = document.querySelector(".header__nav");
mobileMenu.addEventListener("click", () => {
    header.classList.toggle("active");
})

//модальное окно
const btns = document.querySelectorAll(".btn_take");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
btns.forEach((item) => item.addEventListener("click", ()=> {
    event.preventDefault();
    modal.classList.add("active");
}))
close.addEventListener("click", ()=> {
    modal.classList.remove("active");
})

//раздел услуги и цены

const list = [
    [
        {
            img : "./images/services/1.jpg",
            price: 2000,
            title: "Традиционный массаж",
            text: "Массажист глубоко прорабатывает все тело: от стоп до макушки головы — разминая, растягивая, надавливая"
        },
        {
            img : "./images/services/2.jpg",
            price: 2200,
            title: "Тай-SPA массаж",
            text: "Это чарующий массаж всего тела с арома-маслом, cпособствующий глубокой релаксации. "
        },
        {
            img : "./images/services/3.jpg",
            price: 2000,
            title: "Спортивный OIL массаж",
            text: "Массаж избавляет от боли в мышцах, оказывая расслабляющее, противоспалительное и восстанавливающее действие"
        },
        {
            img : "./images/services/4.jpg",
            price: 1400,
            title: "Массаж лица и головы",
            text: "Сочетание двух массажей: лица и головы — поможет обрести сияющий, бодрый вид и отличное настроение."
        },
        {
            img : "./images/services/5.jpg",
            price: 2500,
            title: "Тайский SLIM массаж",
            text: "Slim-массаж — это отличное решение на пути стройности. Корректирующий фигуру массаж со специальным кремом."
        },
        {
            img : "./images/services/6.jpg",
            price: 1200,
            title: "Массаж шеи, спины и плеч",
            text: "С первых минут массаж шеи, спины и плеч избавляет от болезненного дискомфорта, вызванного сидячим образом жизни"
        }
    ],
    [
        {
            img : "./images/services/7.jpg",
            price: 2900,
            title: "Сияние молодости",
            text: "Программа включает деликатное очищение, скраб, маску и «массаж головы и лица». Уникальность ухода состоит в целебном воздействии и специальной технике точечного воздействия"
        },
        {
            img : "./images/services/8.jpg",
            price: 4300,
            title: "Бархатное прикосновение",
            text: "Программа по уходу за лицом, в которую входит очищение, маска, «массаж головы и лица» с тайскими травяными мешочками "
        },
        {
            img : "./images/services/9.jpg",
            price: 2700,
            title: "Эликсир молодости",
            text: "Программа включает распаривание в кедровой бочке, мягкое очищение тела кремовым кофейным скрабом. И в завершении программы на тело наносится увлажняющий лосьон."
        },
        {
            img : "./images/services/10.jpg",
            price: 1900,
            title: "Кокосовый рай",
            text: "Программа включает посещение кедровой бочки, нанесение кокосового скраба, а в завершении — «OIL-массажа» с натуральным кокосовым маслом, которое омолаживает и защищает кожу."
        },
        {
            img : "./images/services/11.jpg",
            price: 4500,
            title: "Сила океана",
            text: "В программу включено посещение кедровой бочки, которая распарит кожу и откроет поры. А последующая процедура с соляным скрабом придаст ощущение свежести и легкости."
        },
        {
            img : "./images/services/12.jpg",
            price: 2300,
            title: "Священный лотос",
            text: "В состав программы входит кедровая бочка, соляной скраб и «OIL-массаж». Поможет отдохнуть, расслабиться, восстанавить энергетический баланс и смягчить кожу."
        }
    ]
]

const cards = document.querySelector(".cards");
const chapters = document.querySelector(".price__chapters");

const renderCard = (info) => {
    const card = document.createElement("div");
    card.className = "cards__item card";
    card.innerHTML = ` <div class="card__img">
                 
    <img src=${info.img} alt="img">
    <div class="card__price">от ${info.price} р.</div>
</div>
<div class="card__title">${info.title}</div>
<div class="card__info">${info.text}
</div>
    `
    const btn = document.createElement("button");
    btn.className = "card__btn btn btn_dark btn_take";
    btn.textContent = "Запишитесь";
    btn.addEventListener("click", ()=> {
        modal.classList.add("active");
    })
    card.append(btn);
    return card;
}
const render = (arr) => {
    cards.innerHTML = "";
    arr.forEach((item)=> {
        cards.append(renderCard(item));

    })
}
chapters.addEventListener("click", ()=> {
    const target = event.target;
    if(target.closest(".massage")){
       render(list[0])
    }
    if(target.closest(".cosmet")){
        render(list[1])
     }
})
render(list[0]);