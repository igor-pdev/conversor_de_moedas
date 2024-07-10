document.addEventListener("DOMContentLoaded", function() {
    const usdInput = document.getElementById("usd");
    const brlInput = document.getElementById("brl");

    async function getExchangeRate() {
        try {
            const response = await fetch("https://v6.exchangerate-api.com/v6/32940cfda8d7573c39e320f7/latest/USD");
            const data = await response.json();
            return data.conversion_rates.BRL;
        } catch (error) {
            console.error("Erro ao buscar a cotação do dólar:", error);
        }
    }

    async function convertToBRL() {
        const rate = await getExchangeRate();
        const usdValue = parseFloat(usdInput.value);
        if (!isNaN(usdValue)) {
            brlInput.value = (usdValue * rate).toFixed(2);
        }
    }

    usdInput.addEventListener("input", convertToBRL);
});
