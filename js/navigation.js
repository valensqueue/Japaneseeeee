/* =====================================================
   Mine Japan - Navigation JavaScript
   Handles page navigation and flow
   ===================================================== */

// ===== Navigation Functions =====

function goToCoursePage() {
    transitionToPage('course.html');
}

function goToStartPage() {
    transitionToPage('index.html');
}

function goToLessonPage(lessonIndex) {
    // Save current lesson
    progressManager.progress.currentLesson = lessonIndex;
    progressManager.saveProgress();
    
    // Navigate to lesson
    window.location.href = `lesson.html?lesson=${lessonIndex}`;
}

function goToNextLesson() {
    const currentIndex = progressManager.progress.currentLesson;
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < progressManager.progress.totalLessons) {
        goToLessonPage(nextIndex);
    } else {
        alert('🎉 You completed all lessons! Congratulations!');
        goToCoursePage();
    }
}

function goToPreviousLesson() {
    const currentIndex = progressManager.progress.currentLesson;
    const prevIndex = currentIndex - 1;
    
    if (prevIndex >= 0) {
        goToLessonPage(prevIndex);
    } else {
        goToCoursePage();
    }
}

// ===== Lesson Parameter Handling =====

function getCurrentLessonFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('lesson')) || 0;
}

// ===== Page Ready Handler =====

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to body
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// ===== Navigation Helper for Mobile =====

function enableMobileNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            goToNextLesson();
        } else if (e.key === 'ArrowLeft') {
            goToPreviousLesson();
        }
    });
}
