// Sidebar functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const header = document.getElementById('header');
const mainContent = document.getElementById('mainContent');
let sidebarOpen = false;

function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    if (sidebarOpen) {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        hamburger.classList.add('active');
        header.classList.add('sidebar-open');
        mainContent.classList.add('sidebar-open');
    } else {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('active');
        header.classList.remove('sidebar-open');
        mainContent.classList.remove('sidebar-open');
    }
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarOpen) {
        toggleSidebar();
    }
});

// Sidebar flip on hover (only if not open)
sidebar.addEventListener('mouseenter', function () {
    if (!sidebarOpen) sidebar.classList.add('flip-hover');
});

sidebar.addEventListener('mouseleave', function () {
    sidebar.classList.remove('flip-hover');
});