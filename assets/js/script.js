tagHtml = {
  tabCidade: document.getElementById('inputCity'),
  tabEstado: document.getElementById('inputState'),
  tabBairro: document.getElementById('inputAddress'),
  tabBtn: document.querySelector('.btn'),
  tabCEP: document.getElementById('inputCEP'),
  tabNome: document.getElementById('inputName'),
  tabSobrenome: document.getElementById('inputLast')
};

const urlToConsumeApi = async(paramQuery)=>{
  const url = `https://brasilapi.com.br/api/cep/v2/${paramQuery}`;
  const response = await fetch(url);
  if(response.status === 200){
    const data = response.json();
    return data;
  }
}

const insertAddressToFields = async(paramQuery)=>{
  const data = await urlToConsumeApi(paramQuery);
  tagHtml.tabCidade.value = data.city;
  tagHtml.tabEstado.value = data.state;
  tagHtml.tabBairro.value = data.street +", "+ data.neighborhood;
}

tagHtml.tabBtn.addEventListener('click', (event =>{
  event.preventDefault();
  tagHtml.tabCEP.value = "";
  tagHtml.tabCidade.value = "";
  tagHtml.tabEstado.value = "";
  tagHtml.tabBairro.value = "";
  tagHtml.tabNome.value = "";
  tagHtml.tabSobrenome.value = "";
}));

tagHtml.tabCEP.oninput = function(){
  insertAddressToFields(tagHtml.tabCEP.value);
}