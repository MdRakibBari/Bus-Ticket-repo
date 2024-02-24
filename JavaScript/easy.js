
let count = 0
document.getElementById('experiment').addEventListener('click', function (event) {
    if (count < 4) {
        const element = event.target;
        const eleText = element.innerText;
        colorPerSeat(eleText);

        const decSeat = textToNumber('decrease-the-seat');
        const decCount = decSeat - 1;
        setAsInnerText('decrease-the-seat', decCount);


        const incSeat = textToNumber('increase-the-seat');
        const incCount = incSeat + 1;
        setAsInnerText('increase-the-seat', incCount);


        const hideee = hide('question-mark');

        if (count === 0) {
            const firstTicket = showBuyTicket('first-ticket', 'first-ticket-buy', eleText);
            nextButtonPro();

        } {once : true}
        if (count === 1) {
            const secondTicket = showBuyTicket('second-ticket', 'second-ticket-buy', eleText)
        }
        if (count === 2) {
            const firstTicket = showBuyTicket('third-ticket', 'third-ticket-buy', eleText)
        }
        if (count === 3) {
            const secondTicket = showBuyTicket('fourth-ticket', 'fourth-ticket-buy', eleText);

            const first = document.getElementById('button-pro');
            first.removeAttribute('disabled')

            document.getElementById('input-section').addEventListener('keyup', function (event) {
                const first = event.target.value;
                if (first === "Couple20" || first === "couple20") {
                    document.getElementById('button-pro').addEventListener('click', function () {
                        const gotnum = countForCouple();
                        setAsInnerText('grand-total', gotnum);
                        hide('discount');
                        unhide('Successfully')
                    })
                }
                if (first === "NEW15" || first === "new15") {
                    document.getElementById('button-pro').addEventListener('click', function () {
                        const gotnum = countForNew();
                        setAsInnerText('grand-total', gotnum);
                        hide('discount');
                        unhide('Successfully')
                    })
                }
            })
        }

        const price = textToNumber('total-cost');
        const totalCost = price + 550;
        setAsInnerText('total-cost', totalCost);

        const get = document.getElementById('total-cost');

        const grand = textToNumber('grand-total');
        const grandto = grand + 550;
        setAsInnerText('grand-total', grandto);

        // const pet = document.getElementById('total-cost');




        count++
    }

})







function bannerToMainSection() {
    const mainSection = document.getElementById('main-section');
    mainSection.scrollIntoView({ behavior: 'smooth' })
}

// document.getElementById('input-section').addEventListener('click', function(event){
//     const element = event.target.value;
//     console.log(element)

//     const first = document.getElementById('button-pro');
//     first.removeAttribute('disabled')
// })


// document.getElementById('input-section').addEventListener('keyup', function(event){
//     const first = event.target.value;
//     if(first === "Couple20" || first === "NEW15"){
//         function calculating(){
//             calculate()
//         }
//     }
// })

function buttonFinish() {
    hide('header')
    hide('mainSec')
    hide('footer')
    unhide('SuccessfullyPaid')
}

function grandtotal(){
    const grand = document.getElementById('grand-total');
    grand.innerText = 0;
    return grand
}

function againDo() {
    unhide('header')
    unhide('mainSec')
    unhide('footer')
    hide('SuccessfullyPaid')
    unhide('discount');
    hide('Successfully');

    document.getElementById('input-section').addEventListener('keyup', function (event) {
        const first = event.target.value;
        console.log('Hiiii')
    })

    const seat = document.getElementById('increase-the-seat');
    seat.innerText = 0;

    const totalSeat = document.getElementById('decrease-the-seat');
    totalSeat.innerText = 40;

    const firstTicket = document.getElementById('first-ticket');
    firstTicket.classList.add('hidden')
    const secondTicket = document.getElementById('second-ticket');
    secondTicket.classList.add('hidden')
    const thirdTicket = document.getElementById('third-ticket');
    thirdTicket.classList.add('hidden')
    const fourthTicket = document.getElementById('fourth-ticket');
    fourthTicket.classList.add('hidden')
    unhide('question-mark');
    grandtotal()
}
