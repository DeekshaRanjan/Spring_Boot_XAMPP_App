$(document).ready(function () {
    // Load user data on page load
    loadUsers();

    // Save button click event
    $("#save-button").click(function () {
        saveUser();
    });

    // Function to load users from backend
    function loadUsers() {
        // Make AJAX request to backend
        // Populate user-table in HTML
    }

    // Function to save user to backend
    function saveUser() {
        // Collect form data
        // Make AJAX request to backend to save user
        // Clear form and reload users
    }
});
