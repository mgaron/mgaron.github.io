/**
 * Soooooo this is just a placeholder site. I probably wouldn't do things
 * this way IRL, but I have one day and just want to post something. Hopefully
 * you have a sense of humor about this stuff. 😀
 */

/**
 * Toggle the display of the modal content. This is very tightly
 * coupled to the content of the page. Sorry. See the disclaimer
 * above. I'm not trying to have a reusable modal component here.
 */
function toggleModal() {
    let modal = document.getElementById('modal-menu');
    if (!modal) {
        console.warn("Welp, that's weird. Missing modal content.");
        return;
    }

    if (modal.classList.contains('closed')) {
        modal.classList.replace('closed', 'open');
    } else {
        modal.classList.replace('open', 'closed');
    }
}

/**
 * Bind clicks on the menu button to the toggle modal function.
 */
const menuButton = document.getElementById('main-menu-button');
if (menuButton) {
    menuButton.onclick = function() {
        // Fetch the modal that whose display want to toggle.
        toggleModal();
    };
}

/**
 * Bind clicks on the modal close button to the toggle function.
 */
const modalCloseButton = document.getElementById('modal-menu-close');
if (modalCloseButton) {
    modalCloseButton.onclick = function() {
        toggleModal();
    };
}
