
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
var EMPTY_STRING = '目前沒主線唷!';