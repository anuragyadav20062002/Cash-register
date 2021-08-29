var billAmount= document.querySelector("#bill-amount");
var cashAmount= document.querySelector("#cash-deposit");
var checkButton= document.querySelector("#check-button");
var message= document.querySelector("#error-message");
var noOfNOtes= document.querySelectorAll(".no-of-notes");

const curreny=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateAmounts() {
    message.style.display="none";
    if(billAmount.value>0){
        if( cashAmount.value >= billAmount.value){
            var totalChange= cashAmount.value-billAmount.value;
            calulatedChange(totalChange);
        }
        else{
            message.style.display="block";
        message.innerText="Please select a valid amount";
        }

    }else{
        message.style.display="block";
        message.innerText="Please select a valid amount";
    }
});

function calulatedChange(totalChange){
    for(let i=0;i<curreny.length;i++){
        const numberOfNOtes= Math.trunc(calulatedChange/curreny[i]
            );
        totalChange= totalChange%curreny[i];
        noOfNOtes[i].innerText= numberOfNOtes;

    }

}

