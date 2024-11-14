//wait for the document to be loaded
document.addEventListener('DOMContentLoaded', ()=>{

    const nameContainer = document.getElementById('name-container')
    const colors =['black']// ['#e74c3c', '#8e44ad', '#3498db', '#1abc9c', '#f39c12', '#d35400', '#2ecc71']
    function displayName(name){
        name.split('').forEach(letter=>{
            const letterElement = document.createElement('span')
            letterElement.classList.add('name-letter')
            letterElement.textContent = letter
            nameContainer.appendChild(letterElement)
        })
    }

    function animateSquares(letterEl, callback){
        const squares = []
        nameContainer.style.visibility = 'visible'
        letterEl.forEach((letter, index)=>{
            const rect = letter.getBoundingClientRect()
            const square = document.createElement('div')
            square.classList.add('square')
            square.style.backgroundColor = colors[index % colors.length]
            document.body.appendChild(square)
            squares.push(square)

            anime({
                targets: square,
                translateX : (rect.left + window.scrollX + (letter.offsetWidth / 2) - (window.innerWidth / 2)),
                translateY : [window.innerHeight, rect.top + window.scrollY + (letter.offsetHeight / 2) - (window.innerHeight / 2)],
                duration: 2500, // Reduced duration for smoother timing
                easing: 'easeInOutQuad',
                opacity: [0,1],
                delay: index * 200, // Adjusted delay for a more fluid staggered effect
                complete: function(){
                    if (index === (letterEl.length - 1)){
                        letterEl.forEach(letter=>{
                            letter.style.opacity = 1
                        })
                        squares.forEach((square, i)=>{
                            setTimeout(()=>{
                                anime({
                                    targets: square,
                                    scaleY: [1,0],
                                    duration: 3000, // Reduced fade out duration
                                    easing: 'easeInOutQuad',
                                    delay: i * 200,
                                    complete: function(){
                                            squares.forEach((square, i)=>{
                                                setTimeout(()=>{
                                                    anime({
                                                        targets: square,
                                                        scaleY:[0,1],
                                                        duration: 2500, // Adjusted timing for reappear effect
                                                        delay: i * 250,
                                                        easing: 'easeInOutQuad',
                                                        complete: function(){
                                                            if (i === letterEl.length - 1){
                                                                letterEl.forEach(letter=>{
                                                                    setTimeout(()=>{
                                                                        letter.style.opacity = 0
                                                                    }, 1500) // Reduced timing to synchronize transitions
                                                                   
                                                                })
                                                            }
                                                            setTimeout(()=>{
                                                                anime({
                                                                    targets : square,
                                                                    scaleY: [1,0],
                                                                    duration: 1500, // Shortened final fade
                                                                    delay: i * 300,
                                                                    easing: 'easeInOutQuad',
                                                                    complete: function(){
                                                                        if ((i === (letterEl.length - 1)) && callback){
                                                                            setTimeout(callback, 500);
                                                                        }
                                                                        
                                                                    }
                                                                })
                                                            }, 2000) // Adjusted timing for smooth transition
                                                        }
                                                    })
                                            }, 3000)
                                        }, 2000)
                                    }
                                })
                            }, 2000)
                        })
                    }
                }
            })

        })
    }
    const firstName = 'OMOLEMO'
    const lastName = 'TLOMATSANE'

    displayName(firstName)
    const nameLetters = document.querySelectorAll('.name-letter')
    

    animateSquares(nameLetters, ()=>{
         nameContainer.innerHTML = ''
            displayName(lastName)
            const lastNameLetters = document.querySelectorAll('.name-letter')
            animateSquares(lastNameLetters, ()=>{console.log('Animation done for last name')})
    })
})
