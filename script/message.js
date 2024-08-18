// jokeGenerator.js

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSarcasticMessage() {
    const subjects = ["Oh, you’re", "Wow, you’ve really", "Amazing, you’ve"];
    const verbs = ["solved all the world's problems", "become a coding genius", "revolutionized JavaScript"];
    const endings = ["...in your dreams.", "by sitting there.", "by doing absolutely nothing."];
    
    const subject = getRandomElement(subjects);
    const verb = getRandomElement(verbs);
    const ending = getRandomElement(endings);

    return `${subject} ${verb} ${ending}`;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('joke').textContent = generateSarcasticMessage();
});
