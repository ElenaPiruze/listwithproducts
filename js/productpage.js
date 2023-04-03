let select = document.getElementById("productType");
let container = document.getElementById("input_container");
let description = document.getElementById("description");

select.addEventListener("change", function () {
  let selectedValue = select.value;
  container.innerHTML = "";
  description.innerHTML = "";

  switch (selectedValue) {
    case "DVD":
      let sizeInput = document.createElement("input");
      sizeInput.type = "text";
      sizeInput.name = "Size(MB)";
      sizeInput.id = "size";
      sizeInput.setAttribute("required", "true");
      container.appendChild(document.createTextNode("Size (MB) "));
      container.appendChild(sizeInput);
      description.appendChild(document.createTextNode("Please, provide size"));

      sizeInput.addEventListener("blur", function () {
        let value = sizeInput.value.trim();
        if (isNaN(value)) {
          alert("Please provide the data of indicated type");
          sizeInput.value = "";
        }
      });
      break;

    case "Book":
      let weightInput = document.createElement("input");
      weightInput.type = "text";
      weightInput.name = "Weight(KG)";
      weightInput.id = "weight";
      weightInput.setAttribute("required", "true");
      container.appendChild(document.createTextNode("Weight (KG) "));
      container.appendChild(weightInput);
      description.appendChild(
        document.createTextNode("Please, provide weight")
      );

      weightInput.addEventListener("blur", function () {
        let value = weightInput.value.trim();
        if (isNaN(value)) {
          alert("Please provide the data of indicated type");
          weightInput.value = "";
        }
      });
      break;

    case "Furniture":
      let widthDiv = document.createElement("div");
      let widthDescription = document.createElement("div");
      widthDescription.appendChild(
        document.createTextNode("Please, provide width")
      );
      container.appendChild(widthDescription);

      let widthInput = document.createElement("input");
      widthInput.type = "text";
      widthInput.name = "Width(CM)";
      widthInput.id = "width";
      widthInput.setAttribute("required", "true");
      container.appendChild(document.createTextNode("Width (CM)"));
      container.append(widthInput, widthDiv);

      widthInput.addEventListener("blur", function () {
        let value = widthInput.value.trim();
        if (isNaN(value)) {
          alert("Please provide the data of indicated type");
          widthInput.value = "";
        }
      });

      let lengthDiv = document.createElement("div");
      let lengthDescription = document.createElement("div");
      lengthDescription.appendChild(
        document.createTextNode("Please, provide length")
      );
      container.appendChild(lengthDescription);

      let lengthInput = document.createElement("input");
      lengthInput.type = "text";
      lengthInput.name = "Length(CM)";
      lengthInput.id = "length";
      lengthInput.setAttribute("required", "true");
      container.appendChild(document.createTextNode("Length (CM)"));
      container.append(lengthInput, lengthDiv);

      lengthInput.addEventListener("blur", function () {
        let value = lengthInput.value.trim();
        if (isNaN(value)) {
          alert("Please provide the data of indicated type");
          lengthInput.value = "";
        }
      });

      let heightDiv = document.createElement("div");
      let heightDescription = document.createElement("div");
      heightDescription.appendChild(
        document.createTextNode("Please, provide height")
      );
      container.appendChild(heightDescription);

      let heightInput = document.createElement("input");
      heightInput.type = "text";
      heightInput.name = "Height(CM)";
      heightInput.id = "height";
      heightInput.setAttribute("required", "true");
      container.appendChild(document.createTextNode("Height (CM)"));
      container.append(heightInput, heightDiv);

      heightInput.addEventListener("blur", function () {
        let value = heightInput.value.trim();
        if (isNaN(value)) {
          alert("Please provide the data of indicated type");
          heightInput.value = "";
        }
      });
      break;
    default:
      container.innerHTML = "Please select a product type";
      description.innerHTML = "";
  }
});

let saveBtn = document.getElementsByClassName("save_button");

saveBtn[0].addEventListener("click", function () {
  let requiredInputs = container.querySelectorAll("input[required]");
  let allFilled = true;
  requiredInputs.forEach(function (input) {
    if (!input.value) {
      allFilled = false;
    }
  });
  if (!allFilled) {
    alert("Please submit required data");
  }
});

let cancelBtn = document.getElementsByClassName("cancel_button")[0];

cancelBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
