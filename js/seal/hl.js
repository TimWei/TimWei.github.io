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
var SERVICE_URL =  HOST_IP + "/api/get_hl";

//constants
var BOSS = [
  'ローズクイーン',
  'ナタク',
  'フラム＝グラス',
  'マキュラ・マリウス',
  'メドゥーサ',
  'アポロン',
  'Dエンジェル・オリヴィエ',
  'ティアマト・マグナ＝エア',
  'コロッサス・マグナ',
  'リヴァイアサン・マグナ',
  'ユグドラシル・マグナ',
  'シュヴァリエ・マグナ',
  'セレスト・マグナ'
  ]

var BOSS_IMG_HASH = {
  'ローズクイーン': 'img/hl_main/rosen.png',
  'ナタク': 'img/hl_main/wind.png',
  'フラム＝グラス': 'img/hl_main/fire.png',
  'マキュラ・マリウス': 'img/hl_main/water.png',
  'メドゥーサ': 'img/hl_main/earth.png',
  'アポロン': 'img/hl_main/light.png',
  'Dエンジェル・オリヴィエ': 'img/hl_main/dark.png',
  'ティアマト・マグナ＝エア': 'img/main/wind.png',
  'コロッサス・マグナ': 'img/main/fire.png',
  'リヴァイアサン・マグナ': 'img/main/water.png',
  'ユグドラシル・マグナ': 'img/main/earth.png',
  'シュヴァリエ・マグナ': 'img/main/light.png',
  'セレスト・マグナ': 'img/main/dark.png',
}

var BOSS_NAME_HASH = {
  'ローズクイーン': 'rosen',
  'ナタク': 'wind_hl',
  'フラム＝グラス': 'fire_hl',
  'マキュラ・マリウス': 'water_hl',
  'メドゥーサ': 'earth_hl',
  'アポロン': 'light_hl',
  'Dエンジェル・オリヴィエ': 'dark_hl',
  'ティアマト・マグナ＝エア': 'wind',
  'コロッサス・マグナ': 'fire',
  'リヴァイアサン・マグナ': 'water',
  'ユグドラシル・マグナ': 'earth',
  'シュヴァリエ・マグナ': 'light',
  'セレスト・マグナ': 'dark'
}


$('.main_container').ready(function(){
  
  var refresh_count = 0;
  var empty_flag = true;
  get_data();
  // init();


  // function init(){
  //   $('.list').eq(0).empty();
  //   if(refresh_count < 60){
  //     get_data();
  //     window.setTimeout(init, 10000); 
  //     refresh_count++;
  //   }else{
  //     say('該F5了ㄛ');
  //   }
  // }

  function get_data(){
    console.log(SERVICE_URL)
    $.ajax({
      type: "GET",
      url: SERVICE_URL,
      timeout: 5000,
      success: function(json) {
        set_list(json);
        //show_bubble();

        //now show_bubble in resize event
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
        empty_flag = false;
      }else{
        continue;
      }
    }
  }
  
  function set_error(){
    var list = $('.list');
    var error = '<p class="error">' + ' <span>維修時段!!</span></br></br></p>';
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
    if(empty_flag){
      bubble_div.children('p').text( '目前沒HL唷!' );
    }else{
      bubble_div.children('p').text( random_text() );
    }
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
  function say(e){
    $('.bubble').children('p').text(e);
  }
});
