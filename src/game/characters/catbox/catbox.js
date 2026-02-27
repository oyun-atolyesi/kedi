export function addCatBox(gameObject) {
    gameObject.catBox = gameObject.add.sprite(400, 300, 'cat-box');
    gameObject.anims.create({
        key: 'cat-box',
        frames: gameObject.anims.generateFrameNumbers('cat-box', { start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
        })
    gameObject.catBox.play('cat-box')
}