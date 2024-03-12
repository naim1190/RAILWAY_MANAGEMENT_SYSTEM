document.addEventListener('DOMContentLoaded', function() {
    var selectedTickets = []; // Array to store selected tickets

    // Get all "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each "Add to Cart" button
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Get the ticket information
            var ticket = event.target.parentElement;
            var ticketName = ticket.querySelector('h3').innerText;
            var ticketPrice = parseFloat(ticket.querySelector('p').innerText.replace(/\D/g, '')); // Extract price and convert to number

            // Create a new cart item
            var cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.innerText = ticketName + ' - Tk' + ticketPrice.toFixed(2);

            // Add the cart item to the cart
            var cart = document.querySelector('.cart-items');
            cart.appendChild(cartItem);

            // Add ticket to selectedTickets array
            selectedTickets.push({ name: ticketName, price: ticketPrice });

            // Update subtotal
            updateSubtotal(selectedTickets);
        });
    });

    // Function to update subtotal
    function updateSubtotal(selectedTickets) {
        var subtotal = selectedTickets.reduce(function(total, ticket) {
            return total + ticket.price;
        }, 0);

        var subtotalElement = document.querySelector('.subtotal');
        subtotalElement.innerText = 'Subtotal: $' + subtotal.toFixed(2);
    }

    // Show the ticket options container when the search button is clicked
    document.querySelector('.search a').addEventListener('click', function() {
        document.querySelector('.ticket-options').classList.remove('hidden');
    });
});
