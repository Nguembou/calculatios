input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Heart)
let number = 0
sprite = game.createSprite(1, 4)
basic.forever(function () {
	
})
