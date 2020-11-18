input.onButtonPressed(Button.A, function () {
    cliente_sale = cliente_sale + 1
    aforo = cliente_entra - cliente_sale
    basic.showNumber(aforo)
})
input.onButtonPressed(Button.AB, function () {
    cliente_sale = 0
    cliente_entra = 0
    aforo = 0
    basic.showNumber(aforo)
})
input.onButtonPressed(Button.B, function () {
    cliente_entra = cliente_entra + 1
    aforo = cliente_entra - cliente_sale
    basic.showNumber(aforo)
})
let aforo = 0
let cliente_entra = 0
let cliente_sale = 0
cliente_sale = 0
cliente_entra = 0
aforo = 0
basic.showNumber(aforo)
