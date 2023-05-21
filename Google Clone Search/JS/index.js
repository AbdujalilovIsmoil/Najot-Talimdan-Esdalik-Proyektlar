// GOOGLE CLONE JAVASCRIPT TO THE CODES
window.addEventListener("DOMContentLoaded", () => {
  let search = document.getElementById("search");
  let form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    if (search.value == "") {
      e.preventDefault();
    } else {
      let link = `https://www.google.com/search?q=${search.value}`;
      window.open(link);
    }
  });
});
