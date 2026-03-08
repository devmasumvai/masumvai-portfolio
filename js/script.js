// Adding a subtle hover parallax effect to cards
document.querySelectorAll('.glass').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let cardWidth = card.clientWidth;
        let cardHeight = card.clientHeight;
        let transX = (x - cardWidth / 2) / 20;
        let transY = (y - cardHeight / 2) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${-transY}deg) rotateY(${transX}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

// Logic for custom animations or data can be added here
console.log("Welcome, Masum Vai!");
