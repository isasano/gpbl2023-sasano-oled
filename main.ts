OLED.init(128, 64)
basic.forever(function () {
    for (let カウンター = 0; カウンター <= 4; カウンター++) {
        OLED.writeNumNewLine(0)
        basic.pause(1000)
        OLED.clear()
    }
})
