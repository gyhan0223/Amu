function submitApartmentName() {
  const apartmentName = document.getElementById("apartmentName").value;
  const apartmentNameError = document.getElementById("apartmentNameError");

  if (apartmentName === "") {
    apartmentNameError.textContent = "아파트 이름을 입력해 주세요";
    apartmentNameError.style.display = "block";
  } else {
    apartmentNameError.style.display = "none";
    // Proceed with form submission or further processing
    alert("아파트 이름이 제출되었습니다: " + apartmentName);
    // You can add form submission logic here
  }
}
