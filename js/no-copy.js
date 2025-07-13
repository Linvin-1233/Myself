// 禁止右键菜单
document.addEventListener("contextmenu", function (e) {
    const target = e.target;
    if (target.classList.contains("no-copy-image")) {
        e.preventDefault(); // 阻止右键菜单
    }
});
document.querySelectorAll(".no-copy-image").forEach(img => {
    img.setAttribute("draggable", "false");
});