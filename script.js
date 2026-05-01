// Order management
let orders = [];

function addToOrder(name, price) {
    const existingOrder = orders.find(order => order.name === name);
    
    if (existingOrder) {
        existingOrder.quantity++;
    } else {
        orders.push({ name, price, quantity: 1 });
    }
    
    displayOrderModal();
}

function displayOrderModal() {
    const modal = document.getElementById('orderModal');
    const orderItems = document.getElementById('orderItems');
    const totalPrice = document.getElementById('totalPrice');
    
    if (orders.length === 0) {
        orderItems.innerHTML = '<p style="text-align: center;">No items ordered yet</p>';
        totalPrice.textContent = '0.00';
        return;
    }
    
    orderItems.innerHTML = orders.map((order, index) => `
        <div class="order-item">
            <div>
                <strong>${order.name}</strong>
                <p>Quantity: ${order.quantity} x $${order.price.toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeOrder(${index})">Remove</button>
        </div>
    `).join('');
    
    const total = orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);
    totalPrice.textContent = total.toFixed(2);
    
    modal.style.display = 'block';
}

function removeOrder(index) {
    orders.splice(index, 1);
    displayOrderModal();
}

function closeOrder() {
    document.getElementById('orderModal').style.display = 'none';
}

function placeOrder() {
    if (orders.length === 0) {
        alert('Please add items to your order first!');
        return;
    }
    
    const total = orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);
    alert(`Order placed successfully!\n\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    
    orders = [];
    closeOrder();
}

// Smooth scrolling
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Mobile menu
document.getElementById('menuToggle').addEventListener('click', function() {
    alert('Mobile menu: Home | Products | About | Reviews | Contact');
});
