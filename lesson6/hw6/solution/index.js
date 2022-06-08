function withdraw(clients, balances, client, amount) {
    let index = 0;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            index = i;
            break;
        }
    }

    if (balances[index] >= amount) {
        balances[index] -= amount;
        return balances[index];
    }

    return -1;
}

