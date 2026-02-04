export const mainScreen = () => {
    let body = document.querySelector('body');

    body.innerHTML = 
    `
    <div class="master-container" id="master-box">
        <svg class="flame-svg" viewBox="0 0 24 24">
            <path d="M12 2C12 2 6 7.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 7.5 12 2 12 2Z" />
        </svg>
        <div class="master-label">DAILY GOAL</div>
    </div>

    <div class="task-list">
        <div class="task-card">
            <div class="task-info">
                <span class="task-icon">✨</span>
                <span class="task-name">example</span>
            </div>
            <button class="check-btn"></button>
            <button class="delete-btn">🗑️</button>
        </div>
    </div>
    `;

    function toggleTask(btn) {
        btn.classList.toggle('done');
        btn.innerHTML = btn.classList.contains('done') ? '✓' : ' ';

        const allButtons = document.querySelectorAll('.check-btn');
        const doneButtons = document.querySelectorAll('.check-btn.done');
        const flame = document.getElementById('master-box');

        if (allButtons.length > 0 && allButtons.length === doneButtons.length) {
            flame.classList.add('ignited');
        } else {
            flame.classList.remove('ignited');
        };
    };

    const container = document.querySelector('.task-list');

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('check-btn')) {
            toggleTask(e.target);
        }
    });
}