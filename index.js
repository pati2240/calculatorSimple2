let inp1El = document.getElementById("inp1El")
let inp2El = document.getElementById("inp2El")
let h1El = document.getElementById("h1El")

function calc(f){

     if(inp1El.value=="" || inp2El.value==""){
        h1El.innerText = "Please Enter Required Numbers"
    }else if(f===`+`){
        h1El.innerText = Number(inp1El.value)+Number(inp2El.value)
        inp1El.value = ""
        inp2El.value = ""
    }else if(f===`-`){
        h1El.innerText = Number(inp1El.value)-Number(inp2El.value)
        inp1El.value = ""
        inp2El.value = ""
    }else if(f===`*`){
        h1El.innerText = Number(inp1El.value)*Number(inp2El.value)
        inp1El.value = ""
        inp2El.value = ""
    }else if(f===`/`){
        h1El.innerText = Number(inp1El.value)/Number(inp2El.value)
        inp1El.value = ""
        inp2El.value = ""
    }else{
        h1El.innerText = "ERROR.."
    }
    //     switch(f){
    //     case `+`:
    //         h1El.innerText = Number(inp1El.value)+Number(inp2El.value)
    //         inp1El.value = ""
    //         inp2El.value = ""
    //         break;
    //     case `-`:
    //         h1El.innerText = Number(inp1El.value)-Number(inp2El.value)
    //         inp1El.value = ""
    //         inp2El.value = ""
    //         break;
    //     case `*`:
    //         h1El.innerText = Number(inp1El.value)*Number(inp2El.value)
    //         inp1El.value = ""
    //         inp2El.value = ""
    //         break;
    //     case '/':
    //         h1El.innerText = Number(inp1El.value)/Number(inp2El.value)
    //         inp1El.value = ""
    //         inp2El.value = ""
    //         break;
    // }
}