var last_number = 1;
var photos = [];

function nextbtn() {





    while (true) {
        if (photos.length === 5) {
            photos = []
        } else {
            last_number = (Math.floor(Math.random() * 5) + 1);
            if (!photos.includes(last_number)) {
                photos.push(last_number);
                break;
            }
        }
    }
    console.log(photos)
    console.log(last_number)
        //radom_number for the img
        // last_number = (Math.floor(Math.random() * 5) + 1);

    // var random_done = [];
    // for(var i=0;i<no_of_memes;i++) {
    //     random_done[i]=false;
    // }
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpg ';


};

function bb() {
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpg ';
}