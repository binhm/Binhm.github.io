


// hello world! animation
function helloWorldText(){
    var targetBlock=document.getElementById("text");
    var cnt=0
    var increment=true;
    var word="Hello, World!"
    var visible=true;
    var con = document.getElementById('console');
    // targetBlock.setAttribute('style','color:'+'#3BE9BB'); // COMMENT ME, use CSS
    window.setInterval(function(){
        
        if (cnt>=word.length){
            // out of index, decrement
            cnt-=1;
            increment=false;
        }
        else if (increment===true){
            cnt+=1;
        }
        else if (increment===false && cnt<=0){
            increment=true;
            cnt+=1;
        }
        else if (increment===false){
            cnt-=1;
        }

        targetBlock.innerHTML = word.substring(0, cnt) + "_";

    },500); // setInterval will execute the function every 500ms
    // console.log("hellowWorldText called!"); // COMMENT ME
}

helloWorldText();

