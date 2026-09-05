/* =====================================================
   Mine Japan - Lesson Page JavaScript
   Handles lesson content rendering and completion
   ===================================================== */

// ===== Load and Display Lesson =====

function loadLessonFromURL() {
    const lessonIndex = getCurrentLessonFromURL();
    displayLesson(lessonIndex);
}

function displayLesson(lessonIndex) {
    const lesson = lessonManager.getLesson(lessonIndex);
    
    if (!lesson) {
        console.error('Lesson not found:', lessonIndex);
        return;
    }
    
    // Update lesson number
    const lessonNum = String(lessonIndex + 1).padStart(3, '0');
    document.getElementById('lessonNumber').textContent = `LESSON ${lessonNum}`;
    
    // Update main content
    document.getElementById('lessonTitle').textContent = lesson.japanese;
    document.getElementById('lessonJapanese').textContent = lesson.japanese;
    document.getElementById('lessonReading').textContent = lesson.reading;
    document.getElementById('lessonMeaning').textContent = lesson.meaning;
    document.getElementById('lessonExample').innerHTML = lesson.example.replace(/\n/g, '<br>');
    document.getElementById('lessonActivity').textContent = lesson.activity;
    
    // Update progress text
    const progress = progressManager.getProgress();
    document.getElementById('lessonProgressText').textContent = 
        `Lesson ${lessonNum} of 300 • ${progress.percentage}% completed`;
    
    // Update button states
    updateNavigationButtons(lessonIndex);
    
    // Check if already completed
    if (progressManager.isLessonCompleted(lessonIndex)) {
        const completeBtn = document.querySelector('.activity-box .btn');
        if (completeBtn) {
            completeBtn.textContent = '✓ COMPLETED';
            completeBtn.disabled = true;
            completeBtn.classList.add('btn-disabled');
        }
    }
}

// ===== Navigation Button Control =====

function updateNavigationButtons(lessonIndex) {
    const prevBtn = document.querySelector('.btn-nav-left');
    const nextBtn = document.querySelector('.btn-nav-right');
    const totalLessons = lessonManager.getTotalLessons();
    
    // Disable previous if first lesson
    if (lessonIndex <= 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('btn-disabled');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('btn-disabled');
    }
    
    // Disable next if last lesson
    if (lessonIndex >= totalLessons - 1) {
        nextBtn.disabled = true;
        nextBtn.classList.add('btn-disabled');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('btn-disabled');
    }
}

// ===== Complete Lesson and Continue =====

function completeLessonAndContinue() {
    const currentIndex = getCurrentLessonFromURL();
    
    // Mark as completed
    progressManager.completeLesson(currentIndex);
    
    // Show completion message
    const completeBtn = document.querySelector('.activity-box .btn');
    if (completeBtn) {
        completeBtn.textContent = '✓ COMPLETED';
        completeBtn.disabled = true;
        completeBtn.classList.add('btn-disabled');
    }
    
    // Log progress
    console.log('✨ Lesson completed!');
    logProgress();
    
    // Auto go to next lesson after 1 second
    setTimeout(() => {
        goToNextLesson();
    }, 800);
}

// ===== Initialize Lesson Page =====

document.addEventListener('DOMContentLoaded', () => {
    loadLessonFromURL();
    enableMobileNavigation();
    
    console.log('✨ Lesson page loaded!');
    
    // Add fade-in animation
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});
