const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const blockWidth = 30;
const blockHeight = 30;
const boardWidth = canvas.width / blockWidth;
const boardHeight = canvas.height / blockHeight;

// Cria o tabuleiro do Tetris
const board = Array.from({ length: boardHeight }, () => Array(boardWidth).fill(0));

// Define as peças do Tetris
const tetrominos = [
    [
        [1, 1, 1, 1], // Linha reta
    ],
    [
        [1, 1, 1],
        [0, 1, 0], // T
    ],
    [
        [1, 1, 1],
        [1, 0, 0], // L
    ],
    [
        [1, 1],
        [1, 1], // Quadrado
    ],
];

let currentTetromino;
let currentX;
let currentY;

// Função para escolher uma peça aleatória
function randomTetromino() {
    const index = Math.floor(Math.random() * tetrominos.length);
    return tetrominos[index];
}

// Inicializa a peça atual
function initTetromino() {
    currentTetromino = randomTetromino();
    currentX = Math.floor(boardWidth / 2) - Math.floor(currentTetromino[0].length / 2);
    currentY = 0;
}

// Função para desenhar um bloco
function drawBlock(x, y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    ctx.strokeRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
}

// Função para desenhar o tabuleiro
function drawBoard() {
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            if (board[y][x]) {
                drawBlock(x, y);
            }
        }
    }
}

// Função para desenhar a peça atual
function drawTetromino() {
    for (let y = 0; y < currentTetromino.length; y++) {
        for (let x = 0; x < currentTetromino[y].length; x++) {
            if (currentTetromino[y][x]) {
                drawBlock(currentX + x, currentY + y);
            }
        }
    }
}

// Função para mover a peça para baixo
function moveDown() {
    currentY++;
    if (checkCollision()) {
        // Se houver colisão, fixa a peça no tabuleiro
        placeTetromino();
        initTetromino();
        if (checkCollision()) {
            // Se a nova peça colidir imediatamente, o jogo acabou
            alert("Fim do jogo!");
            location.reload(); // Recarrega a página
        }
    }
}

// Função para mover a peça para a esquerda
function moveLeft() {
    currentX--;
    if (checkCollision()) {
        currentX++;
    }
}

// Função para mover a peça para a direita
function moveRight() {
    currentX++;
    if (checkCollision()) {
        currentX--;
    }
}

// Função para verificar colisões
function checkCollision() {
    for (let y = 0; y < currentTetromino.length; y++) {
        for (let x = 0; x < currentTetromino[y].length; x++) {
            if (currentTetromino[y][x]) {
                const boardX = currentX + x;
                const boardY = currentY + y;

                if (boardX < 0 || boardX >= boardWidth || boardY >= boardHeight || board[boardY][boardX]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Função para fixar a peça no tabuleiro
function placeTetromino() {
    for (let y = 0; y < currentTetromino.length; y++) {
        for (let x = 0; x < currentTetromino[y].length; x++) {
            if (currentTetromino[y][x]) {
                const boardX = currentX + x;
                const boardY = currentY + y;
                board[boardY][boardX] = 1;
            }
        }
    }
}

// Função principal do jogo
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawTetromino();
    moveDown();
    requestAnimationFrame(gameLoop);
}

// Controles do jogador
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft();
    }
    if (event.key === "ArrowRight") {
        moveRight();
    }
    if (event.key === "ArrowDown") {
        moveDown();
    }
});

// Inicialização do jogo
initTetromino();
gameLoop();
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        
        move
moveLeft();
    }
    
   
if (event.key === "ArrowRight") {
        
        move
moveRight();
    }
    if (event.key === "ArrowDown") {
        moveDown();
    }
});

    