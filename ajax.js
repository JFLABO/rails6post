var data = {
      "activity":
        {
            gamenid: id,
            lat:vlat,
            lon:vlon,
            alt:valt,
            name:vname,
            message:vmes
        }
    };

    $.ajax({
      type: "post",
      url: "/activities",
      data: JSON.stringify(data),
      contentType: 'application/json',
      dataType: "json",

      success: function (data) {
        console.log("success");
        console.log(data);
        $("#mes").val("");
      },

      error: function (data) {
        console.log("error");
        console.log(data);
      }
    });
