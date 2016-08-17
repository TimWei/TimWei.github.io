var AUTO_LOAD = false;
var HOST_IP = '//gacha-blue-fantasy.herokuapp.com';
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

var EMPTY_STRING = '沒活動唷!';