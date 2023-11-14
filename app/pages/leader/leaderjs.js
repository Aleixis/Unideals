// Get the modal element
var modal = document.getElementById("policyModal");

// Get the link that opens the modal
var policyLink = document.getElementById("policyLink");

// Get the element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
policyLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block";
}

// When the user clicks on the close button (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
