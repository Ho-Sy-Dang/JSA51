// bat su kien cho search button
document.getElementById("searchBtn").addEventListener("click", function() {
    // kiem tra du lieu nhap vao
    const searchInput = document.getElementById("search").value.trim();
    // khong co du lieu => khong thuc hien
    if (searchInput === ""){
        alert("Vui lòng nhập từ khoá tìm kiếm.");
        return;
    }
    // lay du lieu tu va tim kiem tren API
    loadData(searchInput);
    return;
})
  function loadData(searchInput) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    //   fetch du lieu tu API
    fetch(apiURL)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Khong tim thay du lieu phu hop.");
        }
        //   chuyen tu kieu json -> javascript object (json())
        return response.json();
      })
      .then((data) => {
          console.log(data);
        //   hien thi du lieu len man hinh
  renderData(data.name, data.sprites.front_default, data.weight);
      })
      .catch((error) => {
        alert(error);
      });
    }
// hàm render dữ liệu
function renderData(name, img_url, bio) {
    // lấy element trong HTML => load lại nội dung
    const nameElement = document.getElementById("name");
    const imgElement = document.querySelector("#image");
    const bioElement = document.getElementById("bio");

    // gán dữ liệu vào element
    nameElement.textContent = name;
    imgElement.src = img_url;
    imgElement.alt = name;
    bioElement.innerHTML = bio;
}
