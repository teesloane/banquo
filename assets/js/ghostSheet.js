/* File Map
A Globals
B Dom Manipulation
  1: Mobile Nav
Z Misc + Interactivity
  1: Header lines
*/

/*=============== A. Globals =================== */
var banquo = {
  breakPoint: 700,
};


/*=============== B1 Mobile Nav =================== */
(function() {
  var mobileNavToggle = document.getElementById('mobile-nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (window.innerWidth < banquo.breakPoint) {
    mainNav.style.display = 'none';
  }

  mobileNavToggle.addEventListener('click', function() {
    if(mainNav.style.display === 'none') {
      mainNav.style.display = 'block';
    } else {
      mainNav.style.display = 'none';
    }
  });

  // if moving from mobile viewport to desktop, also show the mainNav
  // if moving to mobile, hide the mainNav
  window.addEventListener('resize', function() {
    if (window.innerWidth > banquo.breakPoint) {
      mainNav.style.display = 'block';
    } else {
      mainNav.style.display = 'none';

    }
  });
})();


/*=============== Z1 Interactive Header Lines =================== */
(function() {
  // Target container, append lines, create array of lines.
  var stackOfLines = document.getElementById('pyramid');
  createLines(stackOfLines, 7);
  var lines = Array.prototype.slice.call(stackOfLines.children);

  // set the line width (%) and how much to increment each line by.
  var lineWidth = 50;
  var widthIncrement = lineWidth / lines.length;

  // loop through the lines and increment each suceeding line.
  for(var i = 0; i < lines.length; i++) {
    lines[i].style.width = lineWidth + "%";
    lineWidth -= widthIncrement;
  }

  /* for each line, set the width it should return to,
  length of the line before it, and format it to be animated */
  lines.forEach(function(line, idx) {
    var currentWidth = removePercentage(line.style.width);
    var previousWidth = lines[lines.length - (idx + 1)].style.width;
    var newWidthToAnimate = removePercentage(previousWidth);

    line.addEventListener('mouseover', function() {
      line.style.width = newWidthToAnimate + "%";
    });

    line.addEventListener('mouseleave', function() {
      setTimeout(function() {
        line.style.width = currentWidth + "%";
      }, 4000);
    });
  });

  // helper to work with string'd style values.
  function removePercentage(string) {
    string = string.split('%').slice(0, 1)[0];
    return string;
  }

  function createLines(parent, numLines) {
    for (var i = 0; i < numLines; i++) {
      var line = document.createElement('div');
      line.classList.add('line');
      parent.appendChild(line);
    }
  }
})();
