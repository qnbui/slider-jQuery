
var currentIndex = 0,
  items = $('.slider div'),
  itemLen = items.length;


// eq crée un nouvel objet jquery d'un élément et la fonction carousel
// permet de superposer une image sur un autre
function carousel() {
  var item = $('.slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

//la fonction crée un slider automatique
var automatic = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemLen - 1) {
    currentIndex = 0;
  }
  carousel();
}, 3500);

//la fonction next marche par un clique sur un bouton dès qu'elle est
//activé la fonction next permet de changer d'image et elle arrête
//le slide automatique et elle fonctionne de gauche à droite
//pour aller à l'image suivante
$('.next').click(function() {
  clearInterval(automatic);
  currentIndex += 1;
  if (currentIndex > itemLen - 1) {
    currentIndex = 0;
  }
  carousel();
});

//la fonction prev marche comme la next sauf qu'elle fonctionne
//de droite à gauche pour revenir à l'image précédente
$('.prev').click(function() {
  clearInterval(automatic);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemLen - 1;
  }
  carousel();
});
