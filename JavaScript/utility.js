function nextButtonPro(){
    document.getElementById('phone-number').addEventListener('keyup', function(event){
        const phone = event.target.value;
        if(phone === ""){
            const element = document.getElementById('button-next');
            element.setAttribute('disabled', true)
        }
        else{
            nextButton('button-next')
        }
    })
}

function nextButton(elementId){
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled')
}

function calculate(){
    const cost = document.getElementById('input-section');
    console.log(cost)
}

function hide (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    return element
}

function unhide(elementId){
    const nothidden = document.getElementById(elementId);
    nothidden.classList.remove('hidden');
    return nothidden;
}

function changeText(elementId1, elementId2){
    const element = document.getElementById(elementId1);
    element.innerText = elementId2;
    return element
}

function showBuyTicket(elementId1, elementId2, elementId3){
    unhide(elementId1);
    changeText(elementId2, elementId3)

}

function setAsInnerText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    return element
}

function textToNumber(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    const num = parseInt(text);
    return num
}

function colorPerSeat(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-lime-400');
    return element
}
function removeColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-lime-400');
    return element
}

function countForNew(){
    let total = 2200;
    let discountedprise = 2200 * 15 / 100;
    let final = total - discountedprise;
    return final
}

function countForCouple(){
    let total = 2200;
    let discountedprise = 2200 * 20 / 100;
    let final = total - discountedprise;
    return final
}
