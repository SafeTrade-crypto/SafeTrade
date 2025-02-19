async function fetchCryptoPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd');
    const data = await response.json();

    document.getElementById('btc-price').innerText = `Bitcoin (BTC): $${data.bitcoin.usd}`;
    document.getElementById('eth-price').innerText = `Ethereum (ETH): $${data.ethereum.usd}`;
    document.getElementById('usdt-price').innerText = `Tether (USDT): $${data.tether.usd}`;
}

// Chamar a função ao carregar a página
fetchCryptoPrices();
