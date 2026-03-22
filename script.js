const VERSION = 1;

if (VERSION === 1) {
  document.querySelectorAll("[class]").forEach(el => {
  el.classList.forEach(cls => {

    // -------------------
    // 🟢 SPACING
    // -------------------

    if (cls.startsWith("chai-p-")) {
      el.style.padding = `${cls.replace("chai-p-", "")}px`;
    }
    else if (cls.startsWith("chai-m-")) {
      el.style.margin = `${cls.replace("chai-m-", "")}px`;
    }

    // Axis-based spacing
    else if (cls.startsWith("chai-px-")) {
      const val = cls.replace("chai-px-", "");
      el.style.paddingLeft = `${val}px`;
      el.style.paddingRight = `${val}px`;
    }
    else if (cls.startsWith("chai-py-")) {
      const val = cls.replace("chai-py-", "");
      el.style.paddingTop = `${val}px`;
      el.style.paddingBottom = `${val}px`;
    }

    // -------------------
    // 🎨 COLORS
    // -------------------

    else if (cls.startsWith("chai-bg-rgb-")) {
      const [r, g, b] = cls.replace("chai-bg-rgb-", "").split("-");
      el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    else if (cls.startsWith("chai-bg-")) {
      el.style.backgroundColor = cls.replace("chai-bg-", "");
    }
    else if (cls.startsWith("chai-text-rgb-")) {
      const [r, g, b] = cls.replace("chai-text-rgb-", "").split("-");
      el.style.color = `rgb(${r}, ${g}, ${b})`;
    }
    else if (cls.startsWith("chai-text-")) {
      el.style.color = cls.replace("chai-text-", "");
    }

    // -------------------
    // 🔤 TYPOGRAPHY
    // -------------------

    else if (cls.startsWith("chai-text-size-")) {
      el.style.fontSize = `${cls.replace("chai-text-size-", "")}px`;
    }
    else if (cls === "chai-text-center") {
      el.style.textAlign = "center";
    }
    else if (cls === "chai-text-left") {
      el.style.textAlign = "left";
    }
    else if (cls === "chai-text-right") {
      el.style.textAlign = "right";
    }
    else if (cls === "chai-text-bold") {
      el.style.fontWeight = "bold";
    }

    // -------------------
    // 🟣 BORDERS
    // -------------------

    else if (cls.startsWith("chai-border-")) {
      const val = cls.replace("chai-border-", "");
      el.style.border = `${val}px solid black`;
    }
    else if (cls.startsWith("chai-rounded-")) {
      el.style.borderRadius = `${cls.replace("chai-rounded-", "")}px`;
    }

    // -------------------
    // 📦 LAYOUT
    // -------------------

    else if (cls === "chai-flex") {
      el.style.display = "flex";
    }
    else if (cls === "chai-flex-col") {
      el.style.display = "flex";
      el.style.flexDirection = "column";
    }
    else if (cls === "chai-justify-center") {
      el.style.justifyContent = "center";
    }
    else if (cls === "chai-items-center") {
      el.style.alignItems = "center";
    }
    else if (cls === "chai-block") {
      el.style.display = "block";
    }
    else if (cls === "chai-inline") {
      el.style.display = "inline";
    }

  });
});
}

else if (VERSION === 2) {
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