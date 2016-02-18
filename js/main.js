$('.main_container').ready(function{
    $.ajax({
    type: "GET",
    url: "http://192.168.1.103/api/get_main",
    success: function(json) {
      console.log(json)
    }
  });
})