    function copyToClipboard(jindex,tindex) {
      var tar = '.js-copytextarea' + '-' + jindex + '-' + tindex;
      var copyTextarea = document.querySelector(tar);
      copyTextarea.select();
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      var bubble_div = $('.bubble');
      bubble_div.children('p').text( '複製成功!' );

    }

  var HOST_IP = 'http://gacha-blue-fantasy.herokuapp.com';
  var SERVICE_URL =  HOST_IP + "/api/get_event";
    
//constants
var BOSS = [
  'ティターン',
  'アグニス',
  'ゼピュロス',
  'ネプチューン',
  '玄武',
  '朱雀',
  '白虎',
  '青竜'
  ]

var BOSS_IMG_HASH = {
  'ティターン': 'img/event/four_earth.png',
  'アグニス': 'img/event/four_fire.png',
  'ゼピュロス': 'img/event/four_wind.png',
  'ネプチューン': 'img/event/four_water.png',
  '玄武': 'img/event/four_water_ex.png',
  '朱雀': 'img/event/four_fire_ex.png',
  '白虎': 'img/event/four_earth_ex.png',
  '青竜': 'img/event/four_wind_ex.png'
}
var BOSS_NAME_HASH = {
  'ティターン': 'four_earth',
  'アグニス': 'four_fire',
  'ゼピュロス': 'four_wind',
  'ネプチューン': 'four_water',
  '玄武':'four_water_ex',
  '朱雀':'four_fire_ex',
  '白虎':'four_earth_ex',
  '青竜':'four_wind_ex'
}


$('.main_container').ready(function(){
  get_data();

  function get_data(){
    $.ajax({
      type: "GET",
      url: SERVICE_URL,
      timeout: 5000,
      success: function(json) {
        set_list(json);
        window.setTimeout(resize_document, 800); 
      },
      error: function(){
        set_error();
        show_bubble_error();
      }
    });
  }

  function set_list(data){
    var list = $('.list');
    for(var key in data){
      if(data[key].length > 0){
        append_list_item(list,key);
        append_table(list,key,data[key]);
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

  function append_table(parent,key,id_array){
    var img_div_id = '#' + BOSS_NAME_HASH[key];
    var boss_index = BOSS.indexOf(key);
 //   var table_id = 'table_'+boss_index;
 //   var table_data = '<table><tbody id="'+table_id+'">';
   var table_data = '<table><tbody>';

    for(var i = id_array.length-1 ; i >= 0 ;i--){
      var row_data = '<tr>'+
                        '<td id="' +boss_index+'_'+i+'" style="padding-top: 15px;">'+
                           '<textarea class="js-copytextarea-'+ boss_index+'-'+ boss_index+'_'+i+'" onclick="copyToClipboard('+boss_index+','+'\''+boss_index+'_'+i+'\''+')">'+ id_array[i].split("：")[1]+'</textarea>'+
                            '<a href="javascript: void;" style="display:inline; color:red; font-weight: bold;"  onclick="document.getElementById(\''+boss_index+'_'+i+ '\').style.display=\'none\';return false;">刪除</a>'+
                        '</td>'+
                      '</tr>';

      table_data += row_data;
    }

    table_data += '</tbody></table>';
    $(table_data).insertAfter(img_div_id);
  }
  
  function resize_document(){
    var wheight = $(document).height();
    $('html').height(wheight);
    $('body').height(wheight);
    show_bubble();
  }

  function show_bubble(){
    var bubble_div = $('.bubble');
    bubble_div.children('p').text( random_text() );
    bubble_div.removeClass('hide');

  }

  function show_bubble_error(){
    var bubble_div = $('.bubble');
    bubble_div.children('p').text('連線失敗!')
    bubble_div.removeClass('hide');
  }

  function random_text(){
    var text_arr = [
      '讀取成功!',
      '丸!',
      '粗奶丸!',
      '連線成功',
      '太好丸惹',
      '舔!',
      '識貨ㄛ',
      '識貨ㄛ',
      '識貨ㄛ',
      '識貨ㄛ'
    ];
    var text = text_arr[Math.floor(Math.random()*text_arr.length)];
    return text;
  }  
});
