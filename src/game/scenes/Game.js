import { Scene } from 'phaser';
import { addCatBox } from '../characters/catbox/catbox';
import { addDraculaCat } from '../characters/draculacat/draculacat';
import { addSprite } from '../characters/common/sprites';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.spritesheet('cat-box', 'Box3.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('draculacat', 'drculacat.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('cat-idle', 'Idle.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.catBox = addSprite(this, 'cat-box', 300, 300, { animationEnd: 3, frameRate: 6 });
        this.catIdle = addSprite(this, 'cat-idle', 400, 300, { animationEnd: 9, frameRate: 16 });
        this.draculaCat = addSprite(this, 'draculacat', 500, 300, { animationEnd: 5, frameRate: 6 });
    }
}
