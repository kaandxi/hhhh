scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
. . . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . . f c c b b b b b f . . . . . . . . 
. . . . . . . f c c b b b b c b b f . . . . . . . 
. . . . . . f b b b b b b b c c b b f . . . . . . 
. . . . . f b b c c f f f b b c c b f . . . . . . 
. . . . . f b c f f f e f f b b c c f . . . . . . 
. . . . . f b f f e e e d e f b b c c f . . . . . 
. . . . . f c f e 1 f d f 1 f c b c c f . . . . . 
. . . . . . f c e 1 f d f 1 e f b b f . . . . . . 
. . . . . . . f d d d d d d d e c b f . . . . . . 
. . . . . . . f d d d d d d d e c f . . . . . . . 
. . . . . . . c f d d b b d d c f c f . . . . . . 
. . . . . f f c b b d d d d c c f c f . . . . . . 
. . . . f b b b f b b b c c c b c c f f . . . . . 
. . . . f b b c b f b b b b b b c c 9 f f . . . . 
. . . f b c b b f c c b b c c c f 9 9 9 f f . . . 
. . f b c c b b c f c c c c c f 9 9 9 6 9 9 f . . 
. f b b c c c b c c f f b c f 6 9 9 9 6 6 6 9 f . 
. f b c c f c c b b b c c f 6 9 9 9 f 6 6 6 9 f . 
f b b c c f c b b b c c 6 9 9 9 9 6 f 6 6 6 9 9 f 
f b b c f f b b c c c f 6 9 9 9 9 6 f f 6 6 9 9 f 
. f b b f c c c c f 6 9 9 9 9 9 9 6 f f f 6 9 9 f 
f d f f f f c c f 6 6 6 6 6 6 6 6 6 f . . f f f . 
f d d d f . f f f f f 2 2 2 f f f f f . f d d d f 
. f f f . f 6 6 6 6 6 6 6 6 9 9 9 6 6 f . f f f . 
. . . . . . f f f f f f f f f f f f f . . . . . . 
. . . . . f f 4 4 e e f . f e 4 4 4 f f . . . . . 
. . . . f 4 4 4 4 e e f . f e 4 4 4 4 4 f . . . . 
. . . . f e e e e e e f . f e e e e e e f . . . . 
. . . . f f f f f f f . . . f f f f f f f . . . . 
`, SpriteKind.Player)
