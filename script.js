let display = document.querySelector(".card-row");
let button = document.querySelectorAll(".btn");
for (const but of button) {
  but.addEventListener("click", (e) => {
    display.innerHTML = "";
    digimon(e.target.id);
  });
}

async function digimon(id) {
  try {
    let response = await fetch(
      `https://digimon-api.vercel.app/api/digimon/level/${id}`
    );
    let data = await response.json();
    cardCreator(data);
  } catch (error) {
    console.log(error);
  }
}

function cardCreator(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-lg-6");
    div.classList.add("col-md-4");
    div.classList.add("mx-auto");
    div.style = "width:18rem";
    div.innerHTML = `
    <img
    class="card-img-top"
    src="${el.img}"
    alt="Card image cap"
    />
    <div class="card-body">
    <h5 class="card-title">${el.name}</h5>
    <p class="card-text">${el.level}</p>
    </div> `;
    display.append(div);
  });
}