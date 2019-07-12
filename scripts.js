
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



function appendContent(contentId) {
    const content = document.getElementById(contentId);
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('p');
        const text = "Some text content " + (i + 1);

        element.append(text);
        content.append(element);
    }
}

(function() {
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        if (event.target.matches('.dropdown-option')) {
            document.querySelector('.dropbtn').textContent = event.target.textContent;
        }

        if (event.target.matches('#dynamicContentTrigger')) {
            appendContent('dynamicContent');
        }

        if (event.target.matches('#dynamicContentTriggerLive')) {
            appendContent('dynamicContentLive');
        }
    };


    const formElement = document.getElementById('validate');
    if(formElement.addEventListener){
        formElement.addEventListener("submit", validateSubmit, false);  //Modern browsers
    }

})();

function validateSubmit(event) {
    event.preventDefault();
    const formErrorsElement = document.getElementById('formErrors');
    formErrorsElement.style.display = 'block';
    formErrorsElement.tabIndex = 0;
    formErrorsElement.focus();
    formErrorsElement.tabIndex = -1;
    console.log(formErrorsElement);
}