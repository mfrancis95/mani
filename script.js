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
    new Date('2024-04-27'),
    new Date('2024-04-28'),
    new Date('2024-04-29'),
    new Date('2024-05-01'),
    new Date('2024-05-02'),
    new Date('2024-05-03'),
    new Date('2024-05-04'),
    new Date('2024-05-08'),
    new Date('2024-05-09'),
    new Date('2024-05-10'),
    new Date('2024-05-11'),
    new Date('2024-05-15'),
    new Date('2024-05-16'),
    new Date('2024-05-20'),
    new Date('2024-05-21'),
    new Date('2024-05-22'),
    new Date('2024-05-23'),
    new Date('2024-05-25'),
    new Date('2024-05-26'),
    new Date('2024-05-27'),
    new Date('2024-05-28'),
    new Date('2024-05-29')
];

const now = new Date();
const index = shifts.findIndex(element => element >= now);

document.getElementById('shifts').innerHTML = index === -1 ? shifts.length : shifts.length - index;
