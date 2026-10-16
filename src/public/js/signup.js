console.log("Signup frontend javascript file");

// "Image Preloading" - ozini qoymoqchi bolgan 'image'ni chap tarafdagi joyda qanday korinishini oldindan bilishi uchun
$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0],
        fileType = uploadFile["type"],
        validImageType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("Please insert only png, jpg and jpeg!");
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile)); // URL blob
          $(".upload-img-frame")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });
});

// Frontend Validator | "signup"dagi "input"larni ushlab olyapmiz
function validateSignupForm() {
  const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();

  //   Frontend Validator shartlari(tekshiruvlari):
  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please insert all required inputs!");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Password differs, pleasre check!");
    return false;
  }

  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0].name
    : null;
  if (!memberImage) {
    alert("Please insert restaurant image!");
    return false;
  }
}
