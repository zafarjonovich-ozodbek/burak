console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id,
      memberStatus = $(`#${id}.member-status`).val();

    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((responce) => {
        console.log("responce:", responce);
        const result = responce.data;

        if (result.data) {
          console.log("User updated");
          $("memberStatus").blur();
        } else alert("User update failed");
      })
      .catch((err) => {
        console.log(err);
        alert("User update failed");
      });
  });
});
