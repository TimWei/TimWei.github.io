$('.main_container').ready(function(){
  get_data();

  function get_data(){
    $.ajax({
      type: "GET",
      url: "http://192.168.1.103:3000/api/get_main",
      timeout: 5000,
      success: function(json) {
        set_list(json);
      },
      error: function(){
        return 'timeout';
      }
    });
  }

  function set_list(data){
    var list = $('.list');
    for(var key in data){
      if(data[key].length > 0){
        append_list_item(list,key);
      }else{
        continue;
      }
    }
  } 

  function append_list_item(parent,key){
    var list_item = '<div class="list_item">'+
                      '<div style="padding-top:50px;">'+
                        '<img style="width:100px;" src="img/" '+ key + '.png">'+
                        '<span style="font-size: 25px;">' + key + '</span>'
                      '</div>'+
                    '</div>';
    parent.append(list_item);
  }

});