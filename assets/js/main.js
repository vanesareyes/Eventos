window.onload = function() {

    function colorAlAzar() {
        let colores = ['red', 'blue', 'green', 'orange', 'black']
            //let i = parseInt(Math.random() * 10)
        let random = Math.floor(Math.random() * Math.floor(colores.length))
        return color = colores[random]
    }

    document
        .getElementById('abracadabra')
        .addEventListener('click', function() {
            let nombre = prompt('Ingrese su nombre')
            let titulo = document.querySelector('h1#titular strong').innerHTML = nombre
        })

    document
        .querySelector('#portfolio footer a')
        .addEventListener('dblclick', function() {
            document
                .querySelector('#portfolio footer .parrafo-color')
                .style.color = colorAlAzar()
        })

    let sections = document.querySelectorAll('section.box.style1')
    Array.from(sections)
        .forEach(function(elemento) {
            elemento.addEventListener('click', function() {
                let titulo = this.querySelector('h3').innerHTML
                alert('Clickeaste sobre ' + titulo)
            })
        })

    document
        .querySelector('#work footer a')
        .addEventListener('mouseover', function() {
            document
                .querySelector('#work footer p')
                .style.color = colorAlAzar()

        })
    document
        .querySelector('#work footer a')
        .addEventListener('mouseleave', function() {
            document
                .querySelector('#work footer p')
                .style.color = '#888'
        })
    document
        .getElementById('lechuza')
        .addEventListener('click', function() {
            alert('Preparate para el futuro...')
            setTimeout(function() {
                alert('“Y el futuro ya llegó!”')
            }, 5000)
        })

    /*document.onkeydown = function() {
        alert('Ey, tocaste el teclado!')
    }*/
    document
        .getElementById('email')
        .addEventListener('keypress', function(e) {
            if (e.keyCode === 32) {
                e.preventDefault();
                alert('Ey, tocaste la barra!')
            }
        })

    document.addEventListener('keypress', function() {

    })











}