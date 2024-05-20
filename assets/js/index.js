


const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting  = true)  {
            entry.target.classList.add('show')
        }

        else {
            entry.target.classList.remove('show')
        }
    })
})

const webAnimation = document.querySelectorAll(".animation-web") 


webAnimation.forEach(element => {
    myObserver.observe(element)
});


