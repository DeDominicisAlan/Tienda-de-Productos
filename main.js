    const items = [
        { 
            id:1,
            nombre:"alfajor",
            precio: 100,
            cant:0
        },
        
        {
            id:2,
            nombre: "chupetin",
            precio: 50,
            cant:0
        },
        
        {
            id:3,
            nombre: "galletitas",
            precio: 300,
            cant: 0
        }
    ]
    
    const productos = document.querySelector('#productos')
    const carrito = document.querySelector('#carrito')
    const total = document.querySelector('#total')
    const reset = document.querySelector('#reset')
    var suma = 0
    
    reset.addEventListener('click',() =>{
        suma = 0
        total.textContent = ""
    })
    
    items.forEach(element => {
        const nodo = document.createElement('div')
        nodo.classList.add('card')
        
        const nombre = document.createElement('h3')
        nombre.classList.add('card-name')
        nombre.textContent = element.nombre
        
        const precio = document.createElement('p')
        nombre.classList.add('card-text')
        precio.textContent = element.precio
        
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.textContent = "+";
        btn.setAttribute('id', element.id)
        btn.addEventListener('click', () => {
            total.textContent = calcularTotal(items[element.id-1].precio)
            crearProducto(items[element.id-1])
            
        })
        
        nodo.appendChild(nombre)
        nodo.appendChild(precio)
        nodo.appendChild(btn)
        productos.appendChild(nodo)
        
        function calcularTotal(x){
            if(suma != 0)
                suma += x
            else
                suma = x
            return suma
        }
        
        function crearProducto(prod){
            if(prod.cant == 0){
            const producto = document.createElement('li')
            const productoNombre = document.createElement('p')
            const productoCant = document.createElement('p')
            const productoPrecio = document.createElement('p')
            productoPrecio.
            productoCant.id = "Producto"+prod.id
            prod.cant++
            productoNombre.textContent = prod.nombre
            productoCant.textContent = prod.cant
            
            producto.appendChild(productoCant)
            carrito.appendChild(producto)
            producto.appendChild(productoNombre)
            
            }else{
                const producto = document.querySelector('#Producto'+prod.id)
                producto.innerHTML = prod.cant
            }
            prod.cant++
            
            
            
        }
        
    });



