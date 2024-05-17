// loadLevels.js
levels = {}
tuto = {}

for (let i = 1; i <= NUMBER_OF_LEVEL; i++) {
    let script = document.createElement('script');
    script.src = `./assets/levels/level${i}.js`;
    document.head.appendChild(script);
}
