var counter=0;

function increment(){
    counter=counter+1;
    counter=counter<0?0:counter;
    document.getElementsByTagName("h1")[0].innerText=counter;
}
function decrement(){
    counter=counter-1;
    counter=counter<0?0:counter;
    document.getElementsByTagName("h1")[0].innerText=counter;
}
function reset(){
    counter=0;
    document.getElementsByTagName("h1")[0].innerText=counter;
}