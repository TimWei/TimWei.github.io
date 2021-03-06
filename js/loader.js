    function copyToClipboard(jindex,tindex) {
      var tar = '.js-copytextarea' + '-' + jindex + '-' + tindex;
      var copyTextarea = document.querySelector(tar);
      copyTextarea.select();
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      var bubble_div = $('.bubble');
      bubble_div.children('p').text( '複製成功!' );

    }
    

$('.main_container').ready(function(){
  console.log(SERVICE_URL);
  var refresh_count = 0;
  var empty_flag = true;
  tick();
  function tick(){
    $('.list').eq(0).empty();
    get_data();
    if(AUTO_LOAD){ 
      window.setTimeout(tick, 5000); 
    } 
  }

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
        empty_flag = false;
      }else{
        continue;
      }
    }
  }
  
  function set_error(){
    var list = $('.list');
    var error = '<p class="error">' + ' <span>連線逾時，請稍後重試!!</span></br></br></p>';
    list.append(error);
  } 

  function append_list_item(parent,key){
    var list_item = '<div class="list_item">'+
                      '<div style="padding-top:50px;" id="'+BOSS_INFO[key]['id']+'">'+
                        '<img style="width:100px;" src="'+ BOSS_INFO[key]['img'] + '">'+
                        '<span style="font-size: 25px;">' + key + '</span>'
                      '</div>'+
                    '</div>';
    parent.append(list_item);
  }

  function append_table(parent,key,id_array){
    var img_div_id = '#' + BOSS_INFO[key]['id'];
    var boss_index = BOSS_INFO[key]['boss_index'];
    var table_data = '<table><tbody>';
    for(var i = 0 ; i< id_array.length;i++){
      var row_data = '<tr>'+
                        '<td id="' +boss_index+'_'+i+'" style="padding-top: 15px;">'+
                           '<textarea class="js-copytextarea-'+ boss_index+'-'+ boss_index+'_'+i+'" onclick="copyToClipboard('+boss_index+','+'\''+boss_index+'_'+i+'\''+')">'+ id_array[i]+'</textarea>'+
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
      bubble_div.children('p').text(EMPTY_STRING);
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
