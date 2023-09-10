let Text_1 = 0
Text_1 += storage.getNumber(StorageSlots.s1)
if (Text_1 == 0) {
    basic.setLedColor(0xff0000)
    basic.showNumber(Text_1)
    Text_1 += 1
    storage.putNumber(StorageSlots.s1, Text_1)
} else if (Text_1 == 1 || Text_1 == 2) {
    basic.setLedColor(0xffff00)
    basic.showNumber(Text_1)
    basic.pause(500)
    Text_1 += 1
    storage.putNumber(StorageSlots.s1, Text_1)
} else {
    basic.setLedColor(0x00ff00)
    basic.showNumber(Text_1)
    basic.pause(500)
    storage.removeNumber(StorageSlots.s1)
}
basic.forever(function () {
    control.reset()
})
