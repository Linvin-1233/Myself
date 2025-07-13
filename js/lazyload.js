//在加载时从原本的低分辨率背景到高分辨率
document.addEventListener("DOMContentLoaded", () => {
    const img = new Image();
    img.src = "images/normal/background-3165721.jpg";
    img.onload = () => {
        document.body.classList.add("loaded");
    };
});