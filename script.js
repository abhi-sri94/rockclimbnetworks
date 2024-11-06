// JavaScript function to show the selected section

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Initially show the Home section
window.onload = function() {
    showSection('home');
};
