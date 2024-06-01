const emojis = [
    '🐻',
    '🐈',
    '🐱',
    '😺',
    '😹',
    '😻',
    '🐕',
    '😂',
    '🫶',
    '💋',
    '❤️',
    '🤣'
];

const emoji = emojis[Math.floor(Math.random() * emojis.length)];
document.getElementById('emoji').innerHTML = emoji.repeat(Math.floor(Math.random() * emojis.length));

const now = new Date();
const severance = new Date('2024-08-02');
const difference = severance - now;
    
document.getElementById('severance').innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
