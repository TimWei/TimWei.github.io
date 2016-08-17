var AUTO_LOAD = false;
var HOST_IP = '//gacha-blue-fantasy.herokuapp.com';
var SERVICE_URL =  HOST_IP + "/api/get_main";

//constants
var BOSS = [
  'プロトバハムート',
  'ジ・オーダー・グランデ',
  'ティアマト・マグナ',
  'コロッサス・マグナ',
  'リヴァイアサン・マグナ',
  'ユグドラシル・マグナ',
  'シュヴァリエ・マグナ',
  'セレスト・マグナ'
  ]

var BOSS_IMG_HASH = {
  'プロトバハムート': 'img/main/baha.png',
  'ジ・オーダー・グランデ': 'img/main/grand.png',
  'ティアマト・マグナ': 'img/main/wind.png',
  'コロッサス・マグナ': 'img/main/fire.png',
  'リヴァイアサン・マグナ': 'img/main/water.png',
  'ユグドラシル・マグナ': 'img/main/earth.png',
  'シュヴァリエ・マグナ': 'img/main/light.png',
  'セレスト・マグナ': 'img/main/dark.png'
}
var BOSS_NAME_HASH = {
  'プロトバハムート': 'baha',
  'ジ・オーダー・グランデ': 'grand',
  'ティアマト・マグナ': 'wind',
  'コロッサス・マグナ': 'fire',
  'リヴァイアサン・マグナ': 'water',
  'ユグドラシル・マグナ': 'earth',
  'シュヴァリエ・マグナ': 'light',
  'セレスト・マグナ': 'dark'
}
var EMPTY_STRING = '沒主線唷!';