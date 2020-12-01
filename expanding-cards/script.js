const panels = document.querySelectorAll('.panel')

// add active class
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Remove active class
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}