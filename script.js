function addImage() {
  const imageUrl = document.getElementById("imageUrl").value;
  const imageGrid = document.getElementById("imageGrid");

  if (imageUrl) {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");

    const img = document.createElement("img");
    img.src = imageUrl;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      imageGrid.removeChild(imageItem);
    };

    imageItem.appendChild(img);
    imageItem.appendChild(deleteBtn);

    imageGrid.appendChild(imageItem);
    document.getElementById("imageUrl").value = "";
  } else {
    alert("Please enter a valid image URL");
  }
}
