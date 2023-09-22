function createStars() {
    const numStars = 100; 

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() + "s";
        document.body.appendChild(star);
    }
}

createStars();