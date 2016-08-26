var AUTO_LOAD = false;
var HOST_IP = '//gacha-blue-fantasy.herokuapp.com';
var SERVICE_URL =  HOST_IP + "/api/get_event";
var BOSS_INFO = {
              'ティターン':{
                          'img':'img/event/four_earth.png',
                          'id':'four_earth',
                          'boss_index':'0'
                        },
              'アグニス':{
                          'img':'img/event/four_fire.png',
                          'id':'four_fire',
                          'boss_index':'1'
                        },
              'ゼピュロス':{
                          'img':'img/event/four_wind.png',
                          'id':'four_wind',
                          'boss_index':'2'
                        },
              'ネプチューン':{
                          'img':'img/event/four_water.png',
                          'id':'four_water',
                          'boss_index':'3'
                        },
              '玄武':{
                          'img':'img/event/four_water_ex.png',
                          'id':'four_water_ex',
                          'boss_index':'4'
                        },
              '朱雀':{
                          'img':'img/event/four_fire_ex.png',
                          'id':'four_fire_ex',
                          'boss_index':'5'
                        },
              '白虎':{
                          'img':'img/event/four_earth_ex.png',
                          'id':'four_earth_ex',
                          'boss_index':'6'
                        },
              '青竜':{
                          'img':'img/event/four_wind_ex.png',
                          'id':'four_wind_ex',
                          'boss_index':'7'
                        }
            };

var EMPTY_STRING = '沒活動唷!';