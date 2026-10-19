console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id, // memberni "ID" bilan ushlab olyapmiz
      memberStatus = $(`#${id}.member-status`).val(); // o'sha "ID"dagi membering 'statusi'

    // updateChosenUser'ning 'status'ni o'zgartirish uchun
    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((response) => {
        console.log("response:", response); // responce - "axios"dan kelayotgan data
        const result = response.data; // "BackEnd"dan kelayotgan o'zgargan 'data'
        if (result.data) {
          console.log("User updated");
          $(".member-status").blur();
        } else alert("User update failed");
      })
      .catch((err) => {
        console.log(err);
        alert("User update failed");
      });
  });
});
