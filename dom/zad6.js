document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxClose = document.getElementById("lightbox-close");
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");

    let currentIndex = 0;

    galleryItems.forEach(function (item, index) {
      item.addEventListener("click", function () {
        currentIndex = index;
        updateLightboxImage();
        lightbox.style.display = "flex";
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    lightboxPrev.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxImage();
    });

    lightboxNext.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateLightboxImage();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
      } else if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxImage();
      }
    });

    function updateLightboxImage() {
      const imgSrc = galleryItems[currentIndex].getAttribute("data-src");
      lightboxImage.setAttribute("src", imgSrc);
    }

    function closeLightbox() {
      lightbox.style.display = "none";
    }
  });