var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a graduate computer science student at the University of North Carolina at Charlotte') 
  .pauseFor(3000)
  .start()


var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/atkins.jpg',
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3'],
                ['#4CAF50', '#92D395']
            ],
            transitionSpeed: 8000
        }
    }
});

// Function to open modals
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";

  if (modalId === 'modal4') {
    loadTableauVisualization();
  }
}

// Function to close modals
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

document.getElementById("btn1").onclick = function() {
  openModal("modal1");
};

document.getElementById("btn2").onclick = function() {
  openModal("modal2");
};
document.getElementById("btn4").onclick = function() {
  openModal("modal4");
};
document.getElementById("btn5").onclick = function() {
  openModal("modal5");
};
document.getElementById("btn6").onclick = function() {
  openModal("modal6");
};
document.getElementById("btn7").onclick = function() {
  window.open("https://github.com/RiffRoom/Final-project-ORG_REP", "_blank");
};
document.getElementById("hobbyBtn1").onclick = function() {
  openModal("modalHobby1");
};
document.getElementById("hobbyBtn2").onclick = function() {
  openModal("modalHobby2");
};
document.getElementById("hobbyBtn3").onclick = function() {
  openModal("modalHobby3");
};
document.getElementById("hobbyBtn4").onclick = function() {
  openModal("modalHobby4");
};
document.getElementById("hobbyBtn5").onclick = function() {
  openModal("modalHobby5");
};
document.getElementById("hobbyBtn6").onclick = function() {
  openModal("modalHobby6");
};

// Closing modals
document.querySelectorAll('.closeModal').forEach(function(element) {
  element.onclick = function() {
    var modal = element.closest('.modal');
    modal.style.display = "none";
  };
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
  console.log("Window click detected:", event.target);
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
    console.log("Closing modal from outside click:", event.target.id);
  }
});

function loadTableauVisualization() {
  var divElement = document.getElementById('viz1720284925294');
  if (!divElement) return;
  
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width = '100%';
  vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
  
  // Only create the script element if it doesn't already exist
  if (!document.getElementById('tableau-script')) {
    var scriptElement = document.createElement('script');
    scriptElement.id = 'tableau-script';
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
