function fetchDashboardData() {
    // Simulate API call
    document.getElementById('userCount').textContent = Math.floor(Math.random() * 10000);
    document.getElementById('sessionCount').textContent = Math.floor(Math.random() * 1000);
    document.getElementById('revenue').textContent = '$' + Math.floor(Math.random() * 100000);
    
    console.log('Dashboard data fetched at ' + new Date().toISOString());
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDashboardData();
    // Refresh every 30 seconds
    setInterval(fetchDashboardData, 30000);
});