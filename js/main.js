$('.main_container').ready(function{
  var data;
  get_data(data);
  console.log(data);


  function get_data(e){
    $.ajax({
      type: "GET",
      url: "http://192.168.1.103:3000/api/get_main",
      timeout: 5000,
      success: function(json) {
        e = json;
      },
      error: function(){
        e = 'timeout';
      }
    });
  }

})