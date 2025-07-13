const texts = [ //文本//
    "Laziness is a way of life.",
    "Why so serious?",
    "Ahh, just a very simple bug. I'll fix it sometime this century.",
    "Why does everyone have a girlfriend except me?",
    "F*ck",
    "Why can't this shit run? I don't see any problem with it.",
    "I don't car",
    "Nobody cares about you. Stay goblin.",
    "You should learn to understand yourself.",
    "No money, no brains, no love — just vibes.",


];
const index = Math.floor(Math.random() * texts.length);
document.getElementById("random-text").textContent = texts[index];

//重新加载页面，使用户二次破防（）
document.getElementById("Im-gonna-cry").addEventListener("click", () => {
    location.reload();
});