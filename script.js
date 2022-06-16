document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector(".input");
  const label = document.querySelector(".dormant");
  const label2 = document.querySelector(".dormant2");
  const label3 = document.querySelector(".dormant3");
  const label4 = document.querySelector(".dormant4");

  if (input.value === "") {
    label.classList.add("active");
  } else if (input.value !== "") {
    label.classList.remove("active");
  }
  if (input.value === "") {
    label2.classList.add("active");
  } else if (input.value !== "") {
    label.classList.remove("active");
  }
  if (input.value === "") {
    label3.classList.add("active");
  } else if (input.value !== "") {
    label3.classList.remove("active");
  }
  if (input.value === "") {
    label4.classList.add("active");
  } else if (input.value !== "") {
    label4.classList.remove("active");
  }
});
