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

const shifts = [
    new Date('2024-04-06'),
    new Date('2024-04-07'),
    new Date('2024-04-10'),
    new Date('2024-04-11'),
    new Date('2024-04-14'),
    new Date('2024-04-15'),
    new Date('2024-04-17'),
    new Date('2024-04-18'),
    new Date('2024-04-19'),
    new Date('2024-04-20'),
    new Date('2024-04-22'),
    new Date('2024-04-23'),
    new Date('2024-04-27'),
    new Date('2024-04-28'),
    new Date('2024-04-29')
];

const now = new Date();
const index = shifts.findIndex(element => element >= now);

document.getElementById('shifts').innerHTML = index === -1 ? shifts.length : shifts.length - index;
