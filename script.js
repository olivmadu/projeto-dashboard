// Obtendo as cores definidas no :root
const rootStyles = getComputedStyle(document.documentElement);
const cor00 = rootStyles.getPropertyValue('--cor00').trim();
const cor01 = rootStyles.getPropertyValue('--cor01').trim();
const cor02 = rootStyles.getPropertyValue('--cor02').trim();
const cor03 = rootStyles.getPropertyValue('--cor03').trim();
const cor04 = rootStyles.getPropertyValue('--cor04').trim();
const cor05 = rootStyles.getPropertyValue('--cor05').trim();

// Gráfico de vendas
const salesCtx = document.getElementById("salesChart").getContext("2d");
new Chart(salesCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "vendas",
      data: [1000, 2000, 3000, 2500, 4000, 4500],
      borderColor: cor01, 
      backgroundColor: `${cor01}33`,
      borderWidth: 2,
    }]
  }
});

// Gráfico de ranking
const rankingCtx = document.getElementById("rankingChart").getContext("2d");
new Chart(rankingCtx, {
  type: "bar",
  data: {
    labels: ["Categoria A", "Categoria B", "Categoria C"],
    datasets: [{
      label: "vendas",
      data: [50, 30, 20],
      backgroundColor: [cor00, cor01, cor02], 
    }]
  }
});

// Gráfico de atingimento de meta
const metaCtx = document.getElementById("meta-chart").getContext("2d");
new Chart(metaCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "atingimento de meta",
      data: [90, 95, 100, 80, 85, 110],
      borderColor: cor04,
      backgroundColor: `${cor04}33`, 
      borderWidth: 2,
    }]
  }
});

// Gráfico de localidade
const cidadeCtx = document.getElementById("cidade-chart").getContext("2d");
new Chart(cidadeCtx, {
  type: "pie",
  data: {
    labels: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"],
    datasets: [{
      label: "localidade de Vendas",
      data: [30, 25, 20, 25],
      backgroundColor: [cor00, cor01, cor02, cor03],
    }]
  }
});




