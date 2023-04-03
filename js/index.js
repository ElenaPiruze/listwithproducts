let addButton = document.getElementById("addbtn");
let massDeleteButton = document.getElementById("delete-product-btn");
let checkBox = document.querySelectorAll(".delete-checkbox");

function selectingBox() {
  checkBox.forEach((box) => {
    if (box.checked) {
      window.location.href = "productpage.html";
      return;
    }
  });
}

addButton.addEventListener("click", () => {
  selectingBox();
});

function deletingSelectedBox() {
  checkBox.forEach((box) => {
    if (box.checked) {
      box.checked = false;
    }
  });
}

massDeleteButton.addEventListener("click", () => {
  deletingSelectedBox();
});
