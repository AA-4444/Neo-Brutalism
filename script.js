document.querySelectorAll('.checkbox-input').forEach(input => {
    input.addEventListener('click', (e) => {
        e.target.checked = !e.target.checked;
    });
});
