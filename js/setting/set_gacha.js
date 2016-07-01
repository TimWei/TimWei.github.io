var AUTO_LOAD = true;
var HOST_IP = 'http://gacha-blue-fantasy.herokuapp.com';
var SERVICE_URL =  HOST_IP + "/api/get_gacha";

//constants
var BOSS = [
  'ナタク',
  'フラム＝グラス',
  'マキュラ・マリウス',
  'メドゥーサ',
  'アポロン',
  'Dエンジェル・オリヴィエ'
  ]

var BOSS_IMG_HASH = {
  'ナタク': 'img/hl_main/wind.png',
  'フラム＝グラス': 'img/hl_main/fire.png',
  'マキュラ・マリウス': 'img/hl_main/water.png',
  'メドゥーサ': 'img/hl_main/earth.png',
  'アポロン': 'img/hl_main/light.png',
  'Dエンジェル・オリヴィエ': 'img/hl_main/dark.png'
}
var BOSS_NAME_HASH = {
  'ナタク': 'wind',
  'フラム＝グラス': 'fire',
  'マキュラ・マリウス': 'water',
  'メドゥーサ': 'earth',
  'アポロン': 'light',
  'Dエンジェル・オリヴィエ': 'dark'
}

var EMPTY_STRING = '目前沒終突召喚!';
