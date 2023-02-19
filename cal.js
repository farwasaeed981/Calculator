function display(val){
    document.getElementById('inp').value += val;
    return val
}
function solve(){
    let x= document.getElementById('inp').value
    let y=eval(x)
    document.getElementById('inp').value = y;
    return y
}

function pressClear() {
    document.getElementById('inp').value = ''
}
// function del(){
//     // let out = document.getElementById('inp').value
//     document.getElementById('inp').value =  document.getElementById('inp').value
// }