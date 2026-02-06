/*  Services Available  */
const row_s = document.getElementById("serviceRow");
const scrollRight_s = document.getElementById("serviceScrollRight");
const scrollLeft_s = document.getElementById("serviceScrollLeft");

scrollRight_s.addEventListener("click", () => {
    row_s.scrollBy({
        left: getCardWidth(row_s, ".service-available-card"),
        behavior: "smooth"
    });
});

scrollLeft_s.addEventListener("click", () => {
    row_s.scrollBy({
        left: -getCardWidth(row_s, ".service-available-card"),
        behavior: "smooth"
    });
});

/*  Popular Services  */
const row = document.getElementById("cardRow");
const scrollRight = document.getElementById("scrollRight");
const scrollLeft = document.getElementById("scrollLeft");

function getCardWidth(rowEl, cardClass) {
    const card = rowEl.querySelector(cardClass);
    const gap = 16;
    return card.offsetWidth + gap;
}

scrollRight.addEventListener("click", () => {
    row.scrollBy({
        left: getCardWidth(row, ".service-card"),
        behavior: "smooth"
    });
});

scrollLeft.addEventListener("click", () => {
    row.scrollBy({
        left: -getCardWidth(row, ".service-card"),
        behavior: "smooth"
    });
});


/*  All Services  */
const row_a = document.getElementById("cardRow_s");
const scrollRight_a = document.getElementById("scrollRight_s");
const scrollLeft_a = document.getElementById("scrollLeft_s");

scrollRight_a.addEventListener("click", () => {
    row_a.scrollBy({
        left: getCardWidth(row, ".service-card"),
        behavior: "smooth"
    });
});

scrollLeft_a.addEventListener("click", () => {
    row_a.scrollBy({
        left: -getCardWidth(row, ".service-card"),
        behavior: "smooth"
    });
});