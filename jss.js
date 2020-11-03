function fxx() {
    var link = document.getElementById('link').value
    var time = document.getElementById('time').value
    console.log(link)
    console.log(time)

    // alert(window.location.href)

    var aa = window.open("https://www.w3schools.com/")
        // window.moveTo();
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // alert(parseInt(time) + 1)

    sleep(1000).then(() => {
        // meet.window.close();
        // meet.document.getElementsByClassName("Q8LRLc")[0].style.color = "red";
        // meet.console.log(723852380)
        // meet.alert("hasglha")
        console.log(window.location.href)
        aa.console.log(12);




    });


}