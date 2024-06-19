//Menu 
const $iconMenu = document.querySelector(".icon-hamburger");
const $mobileMenu = document.querySelector(".nav-mobile");
let valuePledge;
let valid = false;

//Back this project button
const $backBtn = document.querySelector(".back-btn");
const $selectionModal = document.querySelector("#back-modal");
const $overlay = document.querySelector(".overlay");
const $closeBtn = document.querySelector(".close-btn");
const $optionsContainer = document.querySelectorAll(".selection-modal .card .options-container");

// Options box in back this project button
const $card = document.querySelectorAll(".card-modal");
const $inputCardModal = document.querySelectorAll(".input-modal");
const $buttonSubmit = document.querySelectorAll("button[type='submit']");
const $inputPledge = document.querySelectorAll(".pledge-q")
console.log($inputPledge);
const $errors = document.querySelectorAll(".error")
const $availableBtn = document.querySelectorAll(".available");

// Success Modal
const $form = document.querySelector("form");
const successModal = document.querySelector(".modal-success");
const $closeSuccessModal = document.querySelector("#close-success-modal");
console.log($closeSuccessModal);

// Bookmark button

const $bookmarkBtn = document.querySelector(".bookmark-btn-desktop");
console.log($bookmarkBtn);
const $bookmarkIcon = document.querySelector(".bookmark-icon")

// Menu code
$iconMenu.addEventListener("click", e =>  {
    if(e.target) {
        $mobileMenu.classList.toggle("hide");
        $overlay.classList.toggle("hide");
    } 
})

// Back this project code

$backBtn.addEventListener("click", e => {
    $selectionModal.classList.remove("hide");
    $overlay.classList.remove("hide")
    $selectionModal.classList.add("visible");
})

$availableBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        if(e) {
            $selectionModal.classList.remove("hide");
            $overlay.classList.remove("hide")
            $selectionModal.classList.add("visible");
        }
    })
})

//  Check boxes

$inputCardModal.forEach((input, i) => {
    input.addEventListener("click", e => {
        valuePledge = "";
        input.classList.remove("checked");
        $card.forEach(card => {
            card.classList.remove("active");
        })
        $optionsContainer.forEach(optCont => {
            optCont.classList.add("hide"); 
        })
        $inputPledge.forEach(pledge => {
            pledge.value = "";
        })

        if(e) {
            $card[i].classList.add("active");
            input.classList.add("checked");
            $optionsContainer[i].classList.remove("hide");
        } 
    })
})

// Close back this project modal

$closeBtn.addEventListener("click", e => {
    if(e) {
        $selectionModal.classList.add("hide");
        $overlay.classList.add("hide");
    }
})

// Bookmark button 

$bookmarkBtn.addEventListener("click", e => {
    if(e) {
        $bookmarkBtn.classList.toggle("checked");
    }
})

// Modal success

$inputPledge.forEach(pledge => {
    pledge.addEventListener("input", e => {
    valuePledge =  Number(pledge.value);
    validatePledge()
    })
})


function validatePledge() {
    if($inputPledge[0].value !== "") {
        if(Number($inputPledge[0].value) < 25) {
            valid = false;
            $errors[0].classList.remove("hide");
        } else {
            valid = true;
            $errors[0].classList.add("hide");
        }
    }

    if($inputPledge[1].value !== "") {
        if(Number($inputPledge[1].value) < 75) {
            valid = false;
            $errors[1].classList.remove("hide");
        } else {
            valid = true;
            $errors[1].classList.add("hide");
        }
    }

}

$buttonSubmit.forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault();
        validatePledge();

        if($buttonSubmit[0] && $inputCardModal[0].checked) {
            successModal.classList.remove("hide");
            $selectionModal.classList.add("hide");
        }

        if(valid === true && valuePledge) {
            successModal.classList.remove("hide");
            $selectionModal.classList.add("hide");
            $form.reset();
            valuePledge = 0;
        }
    })
})

$closeSuccessModal.addEventListener("click", e => {
    if(e) {
        successModal.classList.add("hide");
        $overlay.classList.add("hide");
    }
})
