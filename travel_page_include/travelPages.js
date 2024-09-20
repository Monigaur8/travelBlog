// travel guides content update

 // An object that holds text for each div
 const textData = {
    "text-box-1": "The Lal Bahadur Shastri National Academy of Administration (LBSNAA), Mussoorie is a premier training institution",
    "text-box-2": "South Asian Network Operators Group (SANOG) is a regional bi-annual event that brings together network operators,",
    "text-box-3": "The Academy is located at Mussoorie, a hill station at a height of little above 6580 ft.",
    "text-box-4": "Finally, this is the text for box 4, loaded at runtime."
};

// Function to populate each div with its corresponding text
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(textData).forEach(id => {
        document.getElementById(id).textContent = textData[id];
    });
});

