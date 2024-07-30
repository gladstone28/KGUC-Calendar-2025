function toggleForm() {
    const formContainer = document.getElementById('submitForm');
    formContainer.style.display = formContainer.style.display === 'none' || !formContainer.style.display ? 'flex' : 'none';
}

document.querySelectorAll('.month-card').forEach(card => {
    card.addEventListener('click', () => {
        const activities = card.querySelector('.activities');
        activities.style.display = activities.style.display === 'none' || !activities.style.display ? 'block' : 'none';
    });
});
