const VERSION = 2; // change to 1 or 2

if (VERSION === 1) {
  // Version 1
  document.querySelectorAll("[class]").forEach(el => {
    let styles = "";
    el.classList.forEach(cls => {
      if (cls.startsWith("chai-p-")) {
        const value = cls.replace("chai-p-", "");
        styles += `padding: ${value}px; `;
      }

      else if (cls.startsWith("chai-m-")) {
        const value = cls.replace("chai-m-", "");
        styles += `margin: ${value}px; `;
      }
    });

    el.setAttribute("style", styles);
  })
}

else if (VERSION === 2) {
  // Version 2
  document.querySelectorAll("[class]").forEach(el => {
    el.classList.forEach(cls => {

      // Padding
      if (cls.startsWith("chai-p-")) {
        const key = cls.replace("chai-p-", "");
        el.style.padding = `${key}px`;
      }

      // Margin
      else if (cls.startsWith("chai-m-")) {
        const key = cls.replace("chai-m-", "");
        el.style.margin = `${key}px`;
      }

      // Background
      else if (cls.startsWith("chai-bg-rgb-")) {
        const [r, g, b] = cls.replace("chai-bg-rgb-", "").split("-");
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
      else if (cls.startsWith("chai-bg-")) {
        const key = cls.replace("chai-bg-", "");
        el.style.backgroundColor = `${key}`;
      }
    });
  });
}