var AUTO_LOAD = false;
var HOST_IP = '//gacha-blue-fantasy.herokuapp.com';
var SERVICE_URL =  HOST_IP + "/api/get_hl";
var BOSS_INFO = {
              'ローズクイーン':{
                          'img':'img/hl_main/rosen.png',
                          'id':'rosen',
                          'boss_index':'0'
                        },
              'ナタク':{
                          'img':'img/hl_main/wind.png',
                          'id':'wind_hl',
                          'boss_index':'1'
                        },
              'フラム＝グラス':{
                          'img':'img/hl_main/fire.png',
                          'id':'fire_hl',
                          'boss_index':'2'
                        },
              'マキュラ・マリウス':{
                          'img':'img/hl_main/water.png',
                          'id':'water_hl',
                          'boss_index':'3'
                        },
              'メドゥーサ':{
                          'img':'img/hl_main/earth.png',
                          'id':'earth_hl',
                          'boss_index':'4'
                        },
              'アポロン':{
                          'img':'img/hl_main/light.png',
                          'id':'light_hl',
                          'boss_index':'5'
                        },
              'Dエンジェル・オリヴィエ':{
                          'img':'img/hl_main/dark.png',
                          'id':'dark_hl',
                          'boss_index':'6'
                        },
              'ティアマト・マグナ＝エア':{
                          'img':'img/main/wind.png',
                          'id':'wind',
                          'boss_index':'7'
                        },
              'コロッサス・マグナ':{
                          'img':'img/main/fire.png',
                          'id':'fire',
                          'boss_index':'8'
                        },
              'リヴァイアサン・マグナ':{
                          'img':'img/main/water.png',
                          'id':'water',
                          'boss_index':'9'
                        },
              'ユグドラシル・マグナ':{
                          'img':'img/main/earth.png',
                          'id':'earth',
                          'boss_index':'10'
                        },
              'シュヴァリエ・マグナ':{
                          'img':'img/main/light.png',
                          'id':'light',
                          'boss_index':'11'
                        },
              'セレスト・マグナ':{
                          'img':'img/main/dark.png',
                          'id':'dark',
                          'boss_index':'12'
                        },

            };

var EMPTY_STRING = '沒HL唷!';