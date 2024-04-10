document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtenha os dados do formulário
    var pizzaType = document.getElementById('pizza-type').value;
    var quantity = document.getElementById('quantity').value;
    var customerName = document.getElementById('customer-name').value;
    var customerEmail = document.getElementById('customer-email').value;

    // Aqui você pode adicionar a lógica para enviar os dados do pedido para o servidor ou realizar outras ações

    // Exemplo de saída dos dados do pedido no console
    console.log("Pedido de " + quantity + " pizza(s) de " + pizzaType + " para " + customerName + " (" + customerEmail + ")");
});
