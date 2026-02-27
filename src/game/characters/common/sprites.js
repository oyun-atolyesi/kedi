export function addSprite(scene, name, x, y, {asset = name, animationStart = 0, animationEnd, repeat = -1, frameRate = 10 } = {}) {
    const sprite = scene.add.sprite(x, y, asset);
    scene.anims.create({
        key: name,
        frames: scene.anims.generateFrameNumbers(asset, { start: animationStart, end: animationEnd }),
        repeat,
        frameRate
    })
    sprite.play(name)

    return sprite
}