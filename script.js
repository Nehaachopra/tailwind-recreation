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

// Version 2
document.querySelectorAll("[class]").forEach(el => {
  el.classList.forEach(cls => {

    // Padding
    if (cls.startsWith("chai-p-")) {
      const key = cls.replace("chai-p-", "");
      el.style.padding = `${key}px`;
    }

    // Margin
    if (cls.startsWith("chai-m-")) {
      const key = cls.replace("chai-m-", "");
      el.style.margin = `${key}px`;
    }

  });
});