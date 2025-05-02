document.addEventListener("DOMContentLoaded", function () {
  fetch("google_post_slider_4cards/posts.json")
    .then(response => response.json())
    .then(posts => {
      const slider = document.getElementById("post-slider");
      posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `
          <a href="${post.link}" target="_blank">
            <img src="${post.image}" alt="投稿画像">
            <div class="post-text">${post.text}</div>
          </a>
        `;
        slider.appendChild(card);
      });

      const prev = document.querySelector(".slider-btn.prev");
      const next = document.querySelector(".slider-btn.next");

      prev.addEventListener("click", () => {
        slider.scrollBy({ left: -260, behavior: "smooth" });
      });

      next.addEventListener("click", () => {
        slider.scrollBy({ left: 260, behavior: "smooth" });
      });

      setInterval(() => {
        slider.scrollBy({ left: 260, behavior: "smooth" });
      }, 5000);
    });
});
