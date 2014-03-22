
//

var hero = {
  name: "Tharin",
  health: 10
}

hero.attack = function(){
  return Math.floor(Math.random()*5) + 1
}
 
 var ogre = {
   name: "Gorthok",
   health:  10,
 }
 
 ogre.attack = function(){
   return Math.floor(Math.random() * 5) + 1
 }

while (ogre.health > 0 && hero.health > 0){
  hero_damage = hero.attack();
  ogre_damage = ogre.attack();
  alert("Ogre takes " + hero_damage + " damage this round.")
  ogre.health -= hero_damage;
  alert("Hero takes " + ogre_damage + " damage this round.")
  
  hero.health -= ogre_damage;
  if (ogre.health <= 0){
    alert("VICTORY! " + hero.name + " has defetaed the ogre!");
    break;
  }
  if (hero.health <= 0){
    alert(ogre.name + " kills you and prepares a stew for your bones");
    break;
  }
}