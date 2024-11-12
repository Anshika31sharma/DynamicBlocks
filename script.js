const blocks = document.querySelectorAll('.color-block');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
let intervals = [];

function animateBlock(block, minHeight, maxHeight, interval) {
    return setInterval(() => {
        const newHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        block.style.height = newHeight + '%';
    }, interval);
}

startButton.addEventListener('click', () => {
    intervals.forEach(interval => clearInterval(interval));
    intervals = [
        animateBlock(blocks[0], 0, 100, 500),
        animateBlock(blocks[1], 0, 100, 600),
        animateBlock(blocks[2], 0, 100, 700),
        animateBlock(blocks[3], 0, 100, 800),
        animateBlock(blocks[4], 0, 100, 900)
    ];
});

stopButton.addEventListener('click', () => {
    intervals.forEach(interval => clearInterval(interval));
    intervals = [];
});

resetButton.addEventListener('click', () => {
    intervals.forEach(interval => clearInterval(interval));
    intervals = [];
    blocks.forEach(block => {
        block.style.height = '100%';
    });
});
