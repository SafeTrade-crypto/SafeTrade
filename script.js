// Função para buscar preços das criptomoedas
async function fetchCryptoPrices() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd');
    const data = await response.json();

    document.getElementById('btc-price').innerText = `$${data.bitcoin.usd.toFixed(2)}`;
    document.getElementById('eth-price').innerText = `$${data.ethereum.usd.toFixed(2)}`;
    document.getElementById('usdt-price').innerText = `$${data.tether.usd.toFixed(2)}`;
  } catch (error) {
    console.error('Erro ao carregar preços:', error);
    document.getElementById('btc-price').innerText = 'Indisponível';
    document.getElementById('eth-price').innerText = 'Indisponível';
    document.getElementById('usdt-price').innerText = 'Indisponível';
  }
}

// Chamar a função ao carregar a página
fetchCryptoPrices();

// Função para filtrar anúncios
function filtrarAnuncios() {
  const cryptoFilter = document.getElementById('filter-crypto').value;
  const paymentFilter = document.getElementById('filter-payment').value;
  const adsContainer = document.getElementById('ads-container');
  const ads = adsContainer.children;

  for (let ad of ads) {
    const crypto = ad.getAttribute('data-crypto');
    const payment = ad.getAttribute('data-payment');

    if (
      (cryptoFilter === 'all' || crypto === cryptoFilter) &&
      (paymentFilter === 'all' || payment === paymentFilter)
    ) {
      ad.style.display = 'block';
    } else {
      ad.style.display = 'none';
    }
  }
}
