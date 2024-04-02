import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import CoronaBusterScene from './CoronaBusterScene'
import GameOverScene from "./GameOverScene"

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [CoronaBusterScene, GameOverScene],

	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	}
};

export default new Phaser.Game(config)
