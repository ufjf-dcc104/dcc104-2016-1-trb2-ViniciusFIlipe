function criaMina() {
	mina = new Sprite();
	mina.x = Math.random() * 450;
	mina.y = -50;
	mina.vy = 250;
	mina.vx = 0;
	mina.raio = 25;
	mina.temp = 15;
	mina.desenhar = function() {
		ctx.drawImage(imgMine, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
	};
	return mina;
}
function criaVida() {
	vida = new Sprite();
	vida.x = Math.random() * 450;
	vida.y = -100;
	existe = 0;
	vida.raio = 10;
	vida.vy = 250;
	vida.ax = Math.random() * 200;
	vida.restricoes = function() {
		if (this.y > tela.height + 15) {
			existe = 1;
			vida.temp = 13;
		}
	};
	vida.desenhar = function() {
		ctx.drawImage(imgVida, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
	};
	return vida;
}
function criaTiros() {
	var tiro = new Sprite();
	tiro.y = -12000;
	tiro.raio = 4;
	tiro.cor = 'yellow';
	tiro.col = 0;
	tiro.restricoes = function() {};
	tiro.desenhar = function() {
		ctx.drawImage(imgTiros, Math.floor(this.col) * 22, 0, 24, 22, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
		if (this.col >= 4) {
			this.col = 0;
		} else {
			this.col += 15 * dt;
		}
	};
	return tiro;
}
//preenche o vetor de tiros
tiros.push(criaTiros());
tiros2.push(criaTiros());
pc.desenhar = function() {
	if (this.danificado > 0) {
		ctx.strokeStyle = 'hsl(' + (this.danificado) / 2 * 120 + ',50%,50%)';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
	} else {
		ctx.fillStyle = this.cor;
	}
	this.danificado -= dt;
	ctx.drawImage(nave, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
};
pc2.desenhar = function() {
	if (this.danificado > 0) {
		ctx.strokeStyle = 'hsl(' + (this.danificado) / 2 * 120 + ',50%,50%)';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
	} else {
		ctx.fillStyle = this.cor;
	}
	this.danificado -= dt;
	ctx.drawImage(nave2, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
};
function criaSpeed() {
	speed = new Sprite();
	speed.x = Math.random() * 450;
	speed.y = -50;
	speed.vy = 250;
	speed.raio = 10;
	speedtemp = 13;
	speed.desenhar = function() {
		ctx.drawImage(imgSpeed, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
	};
	speed.restricoes = function() {};
	return speed;
}
function telaInicial() {
	if (cont >= 0) {
		ctx.font = "31px Arial";
		escreve("Mate seu inimigo o máximo que conseguir e tome", 10, tela.width / 2 - 170);
		escreve("cuidado com o que pode surgir na tela.", 70, tela.width / 2 - 140);
		escreve("Jogo se inicia em: " + Math.round(cont), 190, tela.width / 2 - 110);
		ctx.font = "15px Arial";
		escreve("Legenda:", tela.height / 2, tela.width / 2 - 80);
		escreve("BOMBA: Nocivo, impede de atirar por 2s.", tela.height / 2, tela.width / 2 - 60);
		escreve("CORAÇÃO: Pacivo, imunidade de dano por 10s.", tela.height / 2, tela.width / 2 - 40);
		escreve("RAIO CORTADO: Pacivo, lentidão por 5s", tela.height / 2, tela.width / 2 - 20);
		escreve("< ---Player 1", pc.x + 15, pc.y);
		escreve("Espaço: Atira", pc.x + 15, pc.y - 20);
		escreve("Setas: Controlam", pc.x + 15, pc.y - 40);
		escreve("< ---Player 2", pc2.x + 15, pc2.y);
		escreve("WASD: Controlam", pc2.x + 15, pc2.y + 40);
		escreve("Enter: Atira", pc2.x + 15, pc2.y + 20);
     }
}
//funcao para pausar o jogo
var gamePaused = false;
function pause() {
	if (!gamePaused) {
		jogo = clearInterval(jogo);
		gamePaused = true;
		ctx.fillStyle = "white";
		ctx.strokeStyle = "white";
		ctx.lineWidth = 1;
		ctx.font = "50px Arial";
		escreve("LEGENDA:", tela.height / 2, tela.width / 2 - 200);
		ctx.font = "15px Arial";
		escreve("BOMBA: Nocivo, impede de atirar por 2s.", tela.height/2,tela.width/2-150);
		escreve("CORAÇÃO: Pacivo, imunidade de dano por 10s.", tela.height/ 2, tela.width/2-130);
		escreve("RAIO CORTADO: Pacivo, lentidão por 5s",tela.height/2, tela.width/2-110);
		escreve("< ---Player 1", pc.x + 15, pc.y);
		escreve("Espaço: Atira", pc.x + 15, pc.y - 20);
		escreve("Setas: Controlam", pc.x + 15, pc.y - 40);
		escreve("< ---Player 2", pc2.x + 15, pc2.y);
		escreve("WASD: Controlam", pc2.x + 15, pc2.y + 40);
		escreve("Enter: Atira", pc2.x + 15, pc2.y + 20);
		} else if (gamePaused) {
			jogo = setInterval(passo, 1000 / fps);
			gamePaused = false;
		}
}
function desenhaPlacar() {
	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.lineWidth = 1;
	ctx.font = "15px Arial";
	escreve("Player 1: " + pc.ponto, 10, 30);
	escreve("Player 2: " + pc2.ponto, 10, 50);
	escreve("P: Pause e Legenda", 10, 70);
}
function escreve(texto, x, y) {
	ctx.fillText(texto, x, y);
	ctx.strokeText(texto, x, y);
}
