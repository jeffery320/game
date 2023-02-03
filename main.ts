input.onButtonPressed(Button.A, function () {
    defendet.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    biu = game.createSprite(defendet.get(LedSpriteProperty.X), defendet.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        biu.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    biu.delete()
})
input.onButtonPressed(Button.B, function () {
    defendet.move(1)
})
let biu: game.LedSprite = null
let defendet: game.LedSprite = null
game.setScore(0)
defendet = game.createSprite(2, 4)
let invoder = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
	
})
basic.forever(function () {
    if (biu) {
        if (biu.isTouching(invoder)) {
            game.addScore(1)
            invoder.set(LedSpriteProperty.X, randint(0, 4))
            invoder.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    basic.pause(1000)
    invoder.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (invoder.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
