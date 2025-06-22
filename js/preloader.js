document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
        
    if (content) {
        content.classList.remove("hidden");
        content.classList.add("visible");

        document.body.style.overflow = "auto";
    } else {
        console.error("Content element not found!");
    }
});
  
  