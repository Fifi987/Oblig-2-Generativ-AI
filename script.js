let cart = [];

// Legger til et produkt i handlekurven
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Fjerner et produkt fra handlekurven basert på indeks
function removeFromCart(index) {
  cart.splice(index, 1);  // Fjerner produktet ved gitt indeks
  updateCart();
}

// Oppdaterer handlekurven
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  
  cartItems.innerHTML = "";  // Tømmer listen for å oppdatere
  
  // Legger til hvert produkt i handlekurven
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    
    // Legger til en "Fjern" knapp for hvert produkt
    const removeButton = document.createElement('button');
    removeButton.textContent = "Fjern";
    removeButton.onclick = () => removeFromCart(index);  // Kaller removeFromCart ved klikk
    
    li.appendChild(removeButton);  // Legger til "Fjern" knapp i hvert element
    cartItems.appendChild(li);     // Legger til elementet i listen
  });
  
  // Oppdaterer total antall varer
  total.textContent = `Totalt: ${cart.length} varer`;
}

// Betalingsknapp funksjonalitet
function checkout() {
  if (cart.length === 0) {
    alert("Handlekurven er tom!");
  } else {
    alert("Takk for kjøpet!");
    cart = [];  // Tømmer handlekurven etter kjøp
    updateCart();
  }
}