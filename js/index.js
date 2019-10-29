function deleteItem(event){
  var everything = document.getElementById('test');
  var current = event.currentTarget.parentNode;
  everything.removeChild(current);
}

function getPriceByProduct(itemNode){
  let quantity = itemNode.querySelector('input').value;
  let priceString = itemNode.querySelector('.unitcost').textContent;
  let price = parseFloat(priceString);
  let currentAmount = itemNode.querySelector('.totalprice');
  let totalPrice = parseFloat(price * quantity);

  currentAmount.innerHTML = (totalPrice);
  return totalPrice;
}
function getTotalPrice() {
  var total = 0;
  var allProducts = [...document.querySelectorAll('.products')]
  console.log(allProducts);
  allProducts.forEach(function(element) {
    total += getPriceByProduct(element);
    document.getElementById('total').innerHTML = total;
  })
}

function createQuantityInput(){
  let span = document.createElement('span');
  let input = document.createElement('input');
  let label = document.createElement('label');
  let num = document.createAttribute('type');
  num.value = 'number'
  input.setAttributeNode(num);
  let proto = document.createAttribute('placeholder');
  proto.value = '0'
  input.setAttributeNode(proto);
  label.textContent = 'QTY';
  span.appendChild(label);
  span.appendChild(input);
  return span;
}

function createDeleteButton(){
  let button = document.createElement('button');
  button.innerHTML = 'Delete'
  button.classList.add('btn-delete');
  return button;
}
function createTotalNode() {
  let span = document.createElement('span');
  span.classList.add('totalprice');
  span.textContent = '0';
  return span;
}

function createItemNode(dataType, itemData){
  let span = document.createElement('span');  
  if(dataType === 'name') {
    span.classList.add('productname');
    span.innerHTML = itemData;
  }
  if(dataType === 'price') {
    span.classList.add('unitcost');
    span.innerHTML = itemData;
  } 
  return span; 
}

function createNewItemRow(itemName, itemUnitPrice){
  let name = createItemNode('name', itemName);
  let price = createItemNode('price', itemUnitPrice);
  let quantity = createQuantityInput();
  let total = createTotalNode();
  let delet = createDeleteButton();
  let div = document.createElement('div');
  div.appendChild(name);
  div.appendChild(price);
  div.appendChild(quantity);
  div.appendChild(total);
  div.appendChild(delet);
  console.log(div);
  return div;
  
}

function createNewItem(){
  let name = document.getElementById('createtext').value;
  let price = document.getElementById('createnum').value;
  let newItem = createNewItemRow(name,price);
  newItem.classList.add('products');
  let before = document.getElementById('createtext');
  let bef = document.getElementById('test')
  bef.append(newItem);
}



window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
let deleter = document.getElementById('deleter');
deleter.onclick = function() {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}