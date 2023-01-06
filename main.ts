let B = 0
let Y = 0
let X = 0
led.enable(true)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P1)
    Y = pins.analogReadPin(AnalogPin.P0)
    B = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("X", X)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    basic.pause(100)
    if (X < 300) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (X > 600) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (Y < 300) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Y > 600) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
