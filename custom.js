const menuOpen = document.getElementById("menuShow");
const menuList = document.getElementById("menuListShow");

menuOpen.addEventListener("click", () => {
  menuList.classList.toggle("menuActive");
  menuOpen.classList.toggle("menuShowActive");
});

fetch("/review.json")
  .then((res) => res.json())
  .then((data) => {
    const review = document.getElementById("review");
    data.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<div>
      <div class="starParent">
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
      </div>
      <p class="peopleParagraph">
        ${item?.paragraph}
      </p>
      <div class="userParent">
        <img src="${item?.image}" alt="" />
        <div>
          <h2 class="userName">${item?.name}</h2>
          <p class="userStatus">${item?.title}</p>
        </div>
      </div>
    </div>`;
      div.classList.add("card");
      review.appendChild(div);
    });
  });
