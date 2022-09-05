input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    texto1 = "killy"
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto1)
})
let num = 0
let texto1 = ""
texto1 = "lili"
num = 0
