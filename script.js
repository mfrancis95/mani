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
const totalInCurrentMonth = shifts.findLastIndex(element => element.getMonth() === now.getMonth()) + 1;
const index = shifts.findIndex(element => element >= now);

document.getElementById('shifts').innerHTML = index === -1 ? totalInCurrentMonth : totalInCurrentMonth - index;

const severance = new Date('2024-08-02');
const difference = severance - now;
    
document.getElementById('severance').innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
