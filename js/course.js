/* =====================================================
   Mine Japan - Course Page JavaScript
   Handles lesson rendering and progress display
   ===================================================== */

// ===== Render Course Page =====

function renderCourse() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) return;
    
    lessonsGrid.innerHTML = '';
    
    // Render all 300 lessons
    for (let i = 0; i < lessonManager.getTotalLessons(); i++) {
        const lesson = lessonManager.getLesson(i);
        const isCompleted = progressManager.isLessonCompleted(i);
        const isUnlocked = progressManager.isLessonUnlocked(i);
        
        const lessonCard = createLessonCard(i, lesson, isCompleted, isUnlocked);
        lessonsGrid.appendChild(lessonCard);
    }
}

// ===== Create Lesson Card Element =====

function createLessonCard(index, lesson, isCompleted, isUnlocked) {
    const card = document.createElement('div');
    card.className = 'lesson-card animate-fade';
    
    if (isCompleted) {
        card.classList.add('completed');
    } else if (!isUnlocked) {
        card.classList.add('locked');
    }
    
    // Lesson number (formatted)
    const lessonNum = String(index + 1).padStart(3, '0');
    
    // Status badge HTML
    let statusHTML = '';
    let statusText = '';
    
    if (isCompleted) {
        statusHTML = '<div class="lesson-status-badge completed">✓</div>';
        statusText = '<span class="lesson-status-text">COMPLETED</span>';
    } else if (isUnlocked) {
        statusHTML = '<div class="lesson-status-badge unlocked">🔓</div>';
        statusText = '<span class="lesson-status-text">UNLOCKED</span>';
    } else {
        statusHTML = '<div class="lesson-status-badge locked">🔒</div>';
        statusText = '<span class="lesson-status-text">LOCKED</span>';
    }
    
    card.innerHTML = `
        <div class="lesson-card-number">LESSON ${lessonNum}</div>
        <div class="lesson-card-japanese">${lesson.japanese}</div>
        <div class="lesson-card-title">${lesson.title}</div>
        <div class="lesson-card-status">
            ${statusHTML}
            ${statusText}
        </div>
    `;
    
    // Add click handler
    if (isUnlocked) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            goToLessonPage(index);
        });
    }
    
    return card;
}

// ===== Update Progress Display =====

function updateProgressDisplay() {
    const progress = progressManager.getProgress();
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress.percentage + '%';
    }
    
    // Update progress text
    const progressText = document.getElementById('progressText');
    if (progressText) {
        progressText.textContent = `${progress.completed} / ${progress.total}`;
    }
    
    // Update percentage
    const progressPercentage = document.getElementById('progressPercentage');
    if (progressPercentage) {
        progressPercentage.textContent = `${progress.percentage}%`;
    }
}

// ===== Reset All Progress =====

function resetAllProgress() {
    const confirmed = confirm('🔄 Reset all progress? This cannot be undone!');
    if (confirmed) {
        progressManager.resetProgress();
        updateProgressDisplay();
        renderCourse();
        console.log('✨ Progress reset!');
    }
}

// ===== Subscribe to Progress Changes =====

progressManager.subscribe(() => {
    updateProgressDisplay();
    renderCourse();
});

// ===== Initialize Course Page =====

document.addEventListener('DOMContentLoaded', () => {
    renderCourse();
    updateProgressDisplay();
    console.log('✨ Course page loaded!');
    
    // Add fade-in animation
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});
