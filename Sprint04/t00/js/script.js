
function transformation(event) {

  if (hero.textContent === 'Bruce Banner') {

    hero.innerHTML = 'HULK';
    hero.style.font = "130px 'Bowlby One', cursive";
    hero.style.letterSpacing = "6px";
    lab.style.background = '#70964b';
  }
  else {
    hero.innerHTML = 'Bruce Banner';
    hero.style.font = "60px 'Bowlby One', cursive";
    hero.style.letterSpacing = "2px";
    lab.style.background = '#ffb300';
  }
}
