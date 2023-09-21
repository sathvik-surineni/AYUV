// Define a mapping of options for the second search value based on the first input
const optionsMapping = {
    hello: ["Jaundice", "type2"],
    cyril: ["type4", "type5"],
    // Add more mappings as needed
};
let inputElement = document.getElementById("searchInput1");
let inputValue = inputElement.value;
function populateDropdown() {
    // Get the selected value from the first search input
    var searchValue1 = document.getElementById("searchInput1").value;
    var searchInput2 = document.getElementById("searchInput2");

    // Clear existing options
    searchInput2.innerHTML = '<option value="" disabled selected>Select an option</option>';

    // Enable the dropdown
    searchInput2.disabled = false;

    // Populate the dropdown based on the selected value from the first input
    if (optionsMapping.hasOwnProperty(searchValue1)) {
        var options = optionsMapping[searchValue1];
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i];
            option.value = options[i];
            searchInput2.add(option);
        }
    }
}

function redirectToPage() {
    // Get the selected value from the second search input
    let inputElement = document.getElementById("searchInput1");
    let inputValue = inputElement.value;
    var searchValue2 = document.getElementById("searchInput2").value;

    // Check if a valid option is selected
    if (searchValue2.trim() !== "") {
        // Construct the URL for redirection based on the selected option
        var redirectURL = searchValue2 + ".html"; // Modify as needed

        // Redirect to the specified page
        window.location.href = redirectURL;
    } else {
        alert("Please select your desisese type"+inputValue);
    }
}

// Add an event listener to populate the dropdown when the first search input changes
document.getElementById("searchInput1").addEventListener("change", populateDropdown);
