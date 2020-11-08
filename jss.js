var last_number = 1;

function nextbtn() {






    //radom_number for the img
    last_number = (Math.floor(Math.random() * 5) + 1);
    // var random_done = [];
    // for(var i=0;i<no_of_memes;i++) {
    //     random_done[i]=false;
    // }
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpg ';


};

function bb() {
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpg ';
}