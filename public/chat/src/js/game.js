const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Centraliza o canvas na tela
canvas.width = 800;
canvas.height = 600;

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    speed: 5,
    score: 0
};

const bullets = [];
const enemies = [];
const enemySpeed = 2;

// Função para desenhar a nave do jogador
function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Função para desenhar as balas
function drawBullets() {
    ctx.fillStyle = "red";
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, 5, 10);
    });
}

// Função para desenhar os inimigos
function drawEnemies() {
    ctx.fillStyle = "green";
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, 30, 30);
    });
}

// Função para mover as balas
function moveBullets() {
    bullets.forEach(bullet => {
        bullet.y -= 5;
    });
}

// Função para mover os inimigos
function moveEnemies() {
    enemies.forEach(enemy => {
        enemy.y += enemySpeed;
    });
}

// Função para criar uma nova bala
function shoot() {
    bullets.push({
        x: player.x + player.width / 2 - 2.5,
        y: player.y,
    });
}

// Função para verificar colisões
function checkCollisions() {
    bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
            if (
                bullet.x < enemy.x + 30 &&
                bullet.x + 5 > enemy.x &&
                bullet.y < enemy.y + 30 &&
                bullet.y + 10 > enemy.y
            ) {
                bullets.splice(bulletIndex, 1);
                enemies.splice(enemyIndex, 1);
                player.score += 10; // Ganhe pontos por acertar um inimigo
            }
        });
    });

    enemies.forEach((enemy, enemyIndex) => {
        if (
            player.x < enemy.x + 30 &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + 30 &&
            player.y + player.height > enemy.y
        ) {
            // Perde pontos por colidir com um inimigo
            player.score -= 20;
            if (player.score < 0) {
                player.score = 0;
            }
            enemies.splice(enemyIndex, 1);
        }
    });
}

// Função principal do jogo
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawBullets();
    drawEnemies();
    moveBullets();
    moveEnemies();
    checkCollisions();

    // Exibe a pontuação na tela
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText(`Pontuação: ${player.score}`, 20, 30);

    requestAnimationFrame(gameLoop);
}

// Controles do jogador
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && player.x > 0) {
        player.x -= player.speed;
    }
    if (event.key === "ArrowRight" && player.x + player.width < canvas.width) {
        player.x += player.speed;
    }
    if (event.key === " ") {
        shoot();
    }
});

// Inicialização do jogo
gameLoop();
setInterval(() => {
    enemies.push({
        x: Math.random() * (canvas.width - 30),
        y: 0,
    });
}, 1000);