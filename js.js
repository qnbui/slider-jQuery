
var currentIndex = 0,
  items = $('.slider div'),
  itemAmt = items.length;

function carousel() {
  var item = $('.slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var automatic = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  carousel();
}, 3500);

$('.next').click(function() {
  clearInterval(automatic);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  carousel();
});

$('.prev').click(function() {
  clearInterval(automatic);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  carousel();
});
