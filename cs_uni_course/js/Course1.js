document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    var videoItems = document.querySelectorAll(".content ul li");
    videoItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            if (event.target.tagName !== 'INPUT') {
                var videoId = this.getAttribute("data-video-id");
                var iframe = document.getElementById("video");
                iframe.src = "https://www.youtube.com/embed/" + videoId;
            }
        });
    });

    var checkboxes = document.querySelectorAll(".content ul li input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            if (Array.from(checkboxes).every(cb => cb.checked)) {
                showPopup();
            }
        });
    });

    function showPopup() {
        var popup = document.createElement("div");
        popup.classList.add("popup");
        popup.textContent = "You did it!!!";

        var fireworks = document.createElement("div");
        fireworks.classList.add("fireworks");

        for (let i = 0; i < 30; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = Math.random() * 100 + "vw";
            firework.style.top = Math.random() * 100 + "vh";
            fireworks.appendChild(firework);
        }

        document.body.appendChild(popup);
        document.body.appendChild(fireworks);

        popup.style.display = "block";
        fireworks.style.display = "block";

        setTimeout(function() {
            popup.style.display = "none";
            fireworks.style.display = "none";
            document.body.removeChild(popup);
            document.body.removeChild(fireworks);
        }, 10000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const fadeInSection = document.querySelector('.fade-in-section');

  function checkVisibility() {
    const rect = fadeInSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      fadeInSection.classList.add('visible');
    }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  checkVisibility(); // Initial check in case the section is already in view
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
