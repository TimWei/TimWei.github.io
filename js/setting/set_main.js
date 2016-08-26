var AUTO_LOAD = false;
var HOST_IP = '//gacha-blue-fantasy.herokuapp.com';
var SERVICE_URL =  HOST_IP + "/api/get_main";
var BOSS_INFO = {
              'プロトバハムート':{
                          'img':'img/main/baha.png',
                          'id':'baha',
                          'boss_index':'0'
                        },
              'ジ・オーダー・グランデ':{
                          'img':'img/main/grand.png',
                          'id':'grand',
                          'boss_index':'1'
                        },
              'ティアマト・マグナ':{
                          'img':'img/main/wind.png',
                          'id':'wind',
                          'boss_index':'2'
                        },
              'コロッサス・マグナ':{
                          'img':'img/main/fire.png',
                          'id':'fire',
                          'boss_index':'3'
                        },
              'リヴァイアサン・マグナ':{
                          'img':'img/main/water.png',
                          'id':'water',
                          'boss_index':'4'
                        },
              'ユグドラシル・マグナ':{
                          'img':'img/main/earth.png',
                          'id':'earth',
                          'boss_index':'5'
                        },
              'シュヴァリエ・マグナ':{
                          'img':'img/main/light.png',
                          'id':'light',
                          'boss_index':'6'
                        },
              'セレスト・マグナ':{
                          'img':'img/main/dark.png',
                          'id':'dark',
                          'boss_index':'7'
                        },

            };

var EMPTY_STRING = '沒主線唷!';