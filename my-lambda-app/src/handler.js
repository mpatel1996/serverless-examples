var messages = [
    'Hello World',
    'Testing messages',
    'Los Angeles Rams',
    'December 2021',
    'Final Message',
    'Testing messages',
    'Los Angeles Rams',
    'December 2021',
    'More Messages',
    'Hawkeye',
    'Avengers',
    'Far Cry 6',
    'MSI Laptop',
    'Next Meeting is at 2'
    ]

exports.handler = async (event) => {
    let message =  messages[Math.floor(Math.random() * messages.length)];
    return message; 
};
