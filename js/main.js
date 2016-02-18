//constants
var BOSS_IMG_HASH = {
  'ティアマト・マグナ': 'img/main/wind.png',
  'コロッサス・マグナ': 'img/main/fire.png',
  'リヴァイアサン・マグナ': 'img/main/water.png',
  'ユグドラシル・マグナ': 'img/main/earth.png',
  'シュヴァリエ・マグナ': 'img/main/light.png',
  'セレスト・マグナ': 'img/main/dark.png'
}
var BOSS_NAME_HASH = {
  'ティアマト・マグナ': 'wind',
  'コロッサス・マグナ': 'fire',
  'リヴァイアサン・マグナ': 'water',
  'ユグドラシル・マグナ': 'earth',
  'シュヴァリエ・マグナ': 'light',
  'セレスト・マグナ': 'dark'
}


$('.main_container').ready(function(){
  get_data();

  function get_data(){
    $.ajax({
      type: "GET",
      url: "http://111.184.30.75:4444/api/get_main",
      timeout: 5000,
      success: function(json) {
        set_list(json);
      },
      error: function(){
        set_error();
      }
    });
  }

  function set_list(data){
    var list = $('.list');
    for(var key in data){
      if(data[key].length > 0){
        append_list_item(list,key);
        append_table(list,key);
      }else{
        continue;
      }
    }
  } 
  function set_error(){
    var list = $('.list');
    var error = '<p class="error">' + ' <span>伺服器沒有回應，請稍後片刻</span></br></br></br></br></br>'+
    '<span class="hidden_text">作者：windows又爆炸啦</span></br>'+
    '<span class="hidden_text">作者：請給我一點黃金</span></br>'+
    '<span class="hidden_text">作者：請給我一點黃金</span></br>'+
    '<span class="hidden_text">作者：請給我一點黃金</span></p>';
    list.append(error);
  } 

  function append_list_item(parent,key){
    var list_item = '<div class="list_item">'+
                      '<div style="padding-top:50px;" id="'+BOSS_NAME_HASH[key]+'">'+
                        '<img style="width:100px;" src="'+ BOSS_IMG_HASH[key] + '">'+
                        '<span style="font-size: 25px;">' + key + '</span>'
                      '</div>'+
                    '</div>';
    parent.append(list_item);
  }

  function append_table(parent,key){
    var img_div_id = '#' + BOSS_NAME_HASH[key];
    $('<p>hello</p>').insertAfter(img_div_id);
  }

});