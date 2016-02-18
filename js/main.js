    function copyToClipboard(jindex,tindex) {
      var tar = '.js-copytextarea' + '-' + jindex + '-' + tindex;
      var copyTextarea = document.querySelector(tar);
      copyTextarea.select();
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      var bubble_div = $('.bubble');
      bubble_div.children('p').text( '複製成功!' );

    }
    
//constants
var BOSS = [
  'ティアマト・マグナ',
  'コロッサス・マグナ',
  'リヴァイアサン・マグナ',
  'ユグドラシル・マグナ',
  'シュヴァリエ・マグナ',
  'セレスト・マグナ'
  ]

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
        //show_bubble();

        //now show_bubble in resize event
        window.setTimeout(resize_document, 1500); 
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

    for(var i = 0 ; i< id_array.length;i++){
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
