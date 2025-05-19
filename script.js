function goToPage(choice) {
    if (choice === 'ok') {
      window.location.href = 'celebrate.html';
    } else if (choice === 'idc') {
      window.location.href = 'cry.html';
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no");
  
    // Save the original position
    const originalStyle = {
      position: noBtn.style.position || "relative",
      left: noBtn.style.left || "auto",
      top: noBtn.style.top || "auto"
    };
  
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
  
      const btnWidth = noBtn.offsetWidth;
      const btnHeight = noBtn.offsetHeight;
  
      const maxX = window.innerWidth - btnWidth;
      const maxY = window.innerHeight - btnHeight;
  
      const randX = Math.floor(Math.random() * maxX);
      const randY = Math.floor(Math.random() * maxY);
  
      noBtn.style.left = randX + "px";
      noBtn.style.top = randY + "px";
    });
  
    noBtn.addEventListener("mouseleave", () => {
      noBtn.style.position = originalStyle.position;
      noBtn.style.left = originalStyle.left;
      noBtn.style.top = originalStyle.top;
    });
  });
  