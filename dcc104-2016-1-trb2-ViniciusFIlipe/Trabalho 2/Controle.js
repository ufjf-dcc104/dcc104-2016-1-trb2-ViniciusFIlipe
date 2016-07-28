function teclaPressionada(e) {
	switch (e.keyCode) {
		case 32:
		if (pc2.canhao <= 0 && pc2.danificado <= 0) {
			var tiro = criaTiros();
                            			tiros2.push(tiro);
                            			tiro.x = pc2.x;
                            			tiro.y = pc2.y;
                            			tiro.vy = 200;
                            			pc2.canhao = 0.125;
                            		} else if (pc2.imune === true) {
                            			var tiro = criaTiros();
                            			tiros2.push(tiro);
                            			tiro.x = pc2.x;
                            			tiro.y = pc2.y;
                            			tiro.vy = 200;
                            			pc2.canhao = 0.125;
                            		}
                            		break;
                            	case 37:
                            		pc.ax = -300;
                            		break;
                            	case 39:
                            		pc.ax = 300;
                            		break;
                            	case 38:
                            		pc.ay = -300;
                            		break;
                            	case 40:
                            		pc.ay = 300;
                            		break;
                            	case 13:
                            		if (pc.canhao <= 0 && pc.danificado <= 0) {
                            			var tiro = criaTiros();
                            			tiros.push(tiro);
                            			tiro.x = pc.x;
                            			tiro.y = pc.y;
                            			tiro.vy = -200;
                            			pc.canhao = 0.125;
                            		} else if (pc.imune === true) {
                            			var tiro = criaTiros();
                            			tiros.push(tiro);
                            			tiro.x = pc.x;
                            			tiro.y = pc.y;
                            			tiro.vy = -200;
                            			pc.canhao = 0.125;
                            		}
                            		break;
                            	case 87:
                            		pc2.ay = -300;
                            		break;

                            	case 65:
                            		pc2.ax = -300;
                            		break;
                            	case 83:
                            		pc2.ay = 300;
                            		break;

                            	case 68:
                            		pc2.ax = 300;
                            		break;
                            	case 80:
                            		pause();
                            		break;
                            	default:
                            	}
                            }

                            function teclaSolta(e) {
                            	switch (e.keyCode) {
                            	case 37:

                            	case 39:
                            		pc.ax = 0;
                            		break;
                            	case 38:

                            	case 40:
                            		pc.ay = 0;
                            		break;
                            	case 68:
                            		pc2.ax = 0;
                            		break;
                            	case 65:
                            	case 87:
                            	case 83:
                            		pc.ay = 0;
                            		break;
                            	default:
                            	}
                            }
