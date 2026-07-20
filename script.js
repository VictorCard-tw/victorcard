(function () {
  const config = window.VICTORCARD_CONFIG || {};
  const links = config.links || {};

  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (config[key]) el.textContent = config[key];
  });

  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.getAttribute("data-link");
    const url = links[key];

    if (url && url !== "#") {
      el.href = url;
    } else {
      el.href = "#";
      el.addEventListener("click", (event) => {
        event.preventDefault();
        alert("此連結尚未設定，請先修改 config.js。");
      });
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
