const kwamis = document.querySelectorAll(".kwami");
const holderName = document.getElementById("holder-name");
kwamis.forEach(kwami => {
  kwami.addEventListener("click", () => {
    const holder = kwami.getAttribute("data-holder");
    holderName.textContent = holder;
    holderName.style.opacity = "0";
    setTimeout(() => {
      holderName.style.opacity = "1";
    }, 100);
  });
});
