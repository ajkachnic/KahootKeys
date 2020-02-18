(function() {

    var tl = prompt("Top Right Square Key:").toLowerCase() || "w";
    var tr = prompt("Top Left Square Key:").toLowerCase() || "e";
    var bl = prompt("Bottom Right Square Key:").toLowerCase() || "s";
    var br = prompt("Bottom Left Square Key:").toLowerCase() || "d";
    
    document.addEventListener('keypress', function (e) {
        const key = e.key;
        // Top Left
        if (key.toLowerCase() === tl) {
            document.getElementsByClassName("card-button__CardButton-vbewcy-1").click();
        }
        // Top Right
        else if (key.toLowerCase() === tr) {
            document.getElementsByClassName("card-button__CardButton-vbewcy-1")[1].click();
        }
    // Bottom Left
    else if (key.toLowerCase() === bl) {
        document.getElementsByClassName("card-button__CardButton-vbewcy-1")[2].click();
    }
    // Bottom Right
    else if (key.toLowerCase() === br) {
        document.getElementsByClassName("card-button__CardButton-vbewcy-1")[3].click();
    }
})
})()