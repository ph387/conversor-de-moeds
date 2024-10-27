const USD = 5.66
const EUR = 6.15
const GBP = 7.38

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const result = document.getElementById("result")
const description = document.getElementById("description") // Defina o elemento description no HTML

amount.addEventListener("input", () => {
    const hasCharactersRegex = /[^\d.,]/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD":
            convertCurrency(Number(amount.value), USD, "US$")
            break
        case "EUR":
            convertCurrency(Number(amount.value), EUR, "€")
            break
        case "GBP":
            convertCurrency(Number(amount.value), GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol) { 
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = (amount * price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter, tente novamente mais tarde.")
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
