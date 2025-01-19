const heroName = document.querySelector('.hero');
const heroRole = document.querySelector('.hero-role');
const btn = document.querySelector('.btn');

heroList = [{
  hero: "Miya",
  role: "Marksman"
},{
  hero: "Balmond",
  role: "Fighter"
},{
  hero: "Saber",
  role: "Assassin"
},{
  hero: "Alice",
  role: "Mage/Tank"
},{
  hero: "Nana",
  role: "Mage"
},{
  hero: "Tigreal",
  role: "Tank"
},{
  hero: "Alucard",
  role: "Fighter/Assassin"
},{
  hero: "Karina",
  role: "Assassin"
},{
  hero: "Akai",
  role: "Tank"
},{
  hero: "Franco",
  role: "Tank"
},{
  hero: "Bane",
  role: "Fighter/Mage"
},{
  hero: "Bruno",
  role: "Marksman"
},{
  hero: "Clint",
  role: "Marksman"
},{
  hero: "Rafaela",
  role: "Support"
},{
  hero: "Eudora",
  role: "Mage"
},{
  hero: "Zilong",
  role: "Fighter/Assassin"
},{
  hero: "Layla",
  role: "Marksman"
},{
  hero: "Minotaur",
  role: "Tank/Support"
},{
  hero: "Lolita",
  role: "Support/Tank"
},{
  hero: "Hayabusa",
  role: "Assassin"
},{
  hero: "Freya",
  role: "Fighter"
},{
  hero: "Gord",
  role: "Mage"
},{
  hero: "Natalia",
  role: "Assassin"
},{
  hero: "Kagura",
  role: "Mage"
},{
  hero: "Chou",
  role: "Fighter"
},{
  hero: "Sun",
  role: "Fighter"
},{
  hero: "Alpha",
  role: "Fighter"
},{
  hero: "Ruby",
  role: "Fighter"
},{
  hero: "Yi Sun-Shin",
  role: "Assassin/Marksman"
},{
  hero: "Moskov",
  role: "Marksman"
},{
  hero: "Johnson",
  role: "Tank/Support"
},{
  hero: "Cyclops",
  role: "Mage"
},{
  hero: "Estes",
  role: "Support"
},{
  hero: "Hilda",
  role: "Fighter/Tank"
},{
  hero: "Aurora",
  role: "Mage"
},{
  hero: "Lapu-Lapu",
  role: "Fighter"
},{
  hero: "Vexana",
  role: "Mage"
},{
  hero: "Roger",
  role: "Fighter/Marksman"
},{
  hero: "Karrie",
  role: "Marksman"
},{
  hero: "Gatotkaca",
  role: "Tank/Fighter"
},{
  hero: "Harley",
  role: "Assassin/Mage"
},{
  hero: "Irithel",
  role: "Marksman"
},{
  hero: "Grock",
  role: "Tank/Fighter"
},{
  hero: "Odette",
  role: "Mage"
},{
  hero: "Lancelot",
  role: "Assassin"
},{
  hero: "Diggie",
  role: "Support"
},{
  hero: "Hylos",
  role: "Tank"
},{
  hero: "Zhask",
  role: "Mage"
},{
  hero: "Helcurt",
  role: "Assassin"
},{
  hero: "Pharsa",
  role: "Mage"
},{
  hero: "Lesley",
  role: "Marksman/Assassin"
},{
  hero: "Jawhead",
  role: "Fighter"
},{
  hero: "Angela",
  role: "Support"
},{
  hero: "Gusion",
  role: "Assassin"
},{
  hero: "Valir",
  role: "Mage"
},{
  hero: "Martis",
  role: "Fighter"
},{
  hero: "Uranus",
  role: "Tank"
},{
  hero: "Hanabi",
  role: "Marksman"
},{
  hero: "Chang'e",
  role: "Mage"
},{
  hero: "Kaja",
  role: "Support/Fighter"
},{
  hero: "Selena",
  role: "Assassin/Mage"
},{
  hero: "Aldous",
  role: "Fighter"
},{
  hero: "Claude",
  role: "Marksman"
},{
  hero: "Vale",
  role: "Mage"
},{
  hero: "Leomord",
  role: "Fighter"
},{
  hero: "Lunox",
  role: "Mage"
},{
  hero: "Hanzo",
  role: "Assassin"
},{
  hero: "Belerick",
  role: "Tank"
},{
  hero: "Kimmy",
  role: "Marksman/Mage"
},{
  hero: "Thamuz",
  role: "Fighter"
},{
  hero: "Harith",
  role: "Mage"
},{
  hero: "Minsitthar",
  role: "Fighter"
},{
  hero: "Kadita",
  role: "Mage/Assassin"
},{
  hero: "Faramis",
  role: "Support/Mage"
},{
  hero: "Badang",
  role: "Fighter"
},{
  hero: "Khufra",
  role: "Tank"
},{
  hero: "Granger",
  role: "Marksman"
},{
  hero: "Guinevere",
  role: "Fighter"
},{
  hero: "Esmeralda",
  role: "Tank/Mage"
},{
  hero: "Terizla",
  role: "Fighter/Tank"
},{
  hero: "X.Borg",
  role: "Fighter"
},{
  hero: "Ling",
  role: "Assassin"
},{
  hero: "Dyrroth",
  role: "Fighter"
},{
  hero: "Lylia",
  role: "Mage"
},{
  hero: "Baxia",
  role: "Tank"
},{
  hero: "Masha",
  role: "Fighter/Tank"
},{
  hero: "Wanwan",
  role: "Marksman"
},{
  hero: "Silvanna",
  role: "Fighter"
},{
  hero: "Cecilion",
  role: "Mage"
},{
  hero: "Carmilla",
  role: "Support/Tank"
},{
  hero: "Atlas",
  role: "Tank"
},{
  hero: "Popol and Kupa",
  role: "Marksman"
},{
  hero: "Yu Zhong",
  role: "Fighter"
},{
  hero: "Luo Yi",
  role: "Mage"
},{
  hero: "Benedetta",
  role: "Assassin/Fighter"
},{
  hero: "Khaleed",
  role: "Fighter"
},{
  hero: "Barats",
  role: "Tank/Fighter"
},{
  hero: "Brody",
  role: "Marksman"
},{
  hero: "Yve",
  role: "Mage"
},{
  hero: "Mathilda",
  role: "Support/Assassin"
},{
  hero: "Paquito",
  role: "Fighter/Assassin"
},{
  hero: "Gloo",
  role: "Tank"
},{
  hero: "Beatrix",
  role: "Marksman"
},{
  hero: "Phoveus",
  role: "Fighter"
},{
  hero: "Natan",
  role: "Marksman"
},{
  hero: "Aulus",
  role: "Fighter"
},{
  hero: "Aamon",
  role: "Assassin"
},{
  hero: "Valentina",
  role: "Mage"
},{
  hero: "Edith",
  role: "Tank/Marksman"
},{
  hero: "Floryn",
  role: "Support"
},{
  hero: "Yin",
  role: "Fighter/Asssassin"
},{
  hero: "Melissa",
  role: "Marksman"
},{
  hero: "Xavier",
  role: "Mage"
},{
  hero: "Julian",
  role: "Fighter/Mage"
},{
  hero: "Fredrinn",
  role: "Fighter/Tank"
},{
  hero: "Joy",
  role: "Assassin"
},{
  hero: "Novaria",
  role: "Mage"
},{
  hero: "Arlott",
  role: "Fighter/Assassin"
},{
  hero: "Ixia",
  role: "Marksman"
},{
  hero: "Nolan",
  role: "Assassin"
},{
  hero: "Cici",
  role: "Fighter"
},{
  hero: "Chip",
  role: "Support/Tank"
},{
  hero: "Zhuxin",
  role: "Mage"
},{
  hero: "Suyou",
  role: "Assassin/Fighter"
},{
  hero: "Lukas",
  role: "Fighter"
},{
  hero: "Melissa",
  role: "Marksman"
},{

}]

const pick = btn.addEventListener("click",function(){
  
})