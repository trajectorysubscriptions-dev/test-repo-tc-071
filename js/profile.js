function initializeProfile() {
    // Simulate loading profile data
    const joinDate = new Date(2023, 0, 15);
    document.getElementById('joinDate').textContent = joinDate.toLocaleDateString();
    console.log('Profile initialized');
}

function editProfile() {
    alert('Edit profile functionality coming soon!');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = '/logout';
    }
}

document.addEventListener('DOMContentLoaded', initializeProfile);