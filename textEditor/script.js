//selectors 

const textInput = document.querySelector('#text-input')
const textOutput = document.querySelector('#text-output')
const boldBtn = document.querySelector('#bold')
const italicBtn = document.querySelector('#italic')
const underlineBtn = document.querySelector('#underline')
const leftalignBtn = document.querySelector('#left-align')
const rightalignBtn = document.querySelector('#right-align')
const centeralignBtn = document.querySelector('#center-align')



//eventlistner
textInput.addEventListener('keydown',updateText=>{
    let text = document.getElementById('text-input').value
    document.getElementById('text-output').innerText = text
})

boldBtn.addEventListener('click',()=>{
    if(textOutput.classList.contains('bold')){
        textOutput.classList.remove('bold')
    }
    else{
        textOutput.classList.add("bold")
    }
})

italicBtn.addEventListener('click',()=>{
    if(textOutput.classList.contains('italic')){
        textOutput.classList.remove('italic')
    }
    else{
        textOutput.classList.add('italic')
    }
})

underlineBtn.addEventListener('click',()=>{
    if(textOutput.classList.contains('underline')){
        textOutput.classList.remove('underline')
    }
    else{
        textOutput.classList.add("underline")
    }
})


leftalignBtn.addEventListener('click',()=>{
    textOutput.style.textAlign="left"
})

rightalignBtn.addEventListener('click',()=>{
    textOutput.style.textAlign="right"
})

centeralignBtn.addEventListener('click',()=>{
    textOutput.style.textAlign="center"
})