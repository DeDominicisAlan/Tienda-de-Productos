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
        carrito.innerHTML = ""
        vaciarProductos()
    })
    
    function vaciarProductos(){
        items.forEach(element => {
            element.cant = 0
        });
    }
    
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
            //Un contenedor para el producto
            const producto = document.createElement('li')
            producto.classList.add ('lista-item')
            //Creo los espacios para los datos del producto
            const productoNombre = document.createElement('p')
            const productoCant = document.createElement('p')
            const productoPrecio = document.createElement('p')
            
            //Le agregamos ID a los datos del producto para poder modificarlos despues
            productoCant.id = "Producto"+prod.id
            productoPrecio.id = "Precio"+prod.id
            
            //Le agregamos los datos
            prod.cant++
            productoNombre.textContent = prod.nombre
            productoCant.textContent = prod.cant
            productoPrecio.textContent = prod.precio
            
            //Los agregamos en la lista y agregamos los datos del producto a su contenedor de producto
            producto.appendChild(productoCant)
            carrito.appendChild(producto)
            producto.appendChild(productoNombre)
            producto.appendChild(productoPrecio)
            
            }else{
                //En caso que ya exista el producto, modificamos sus datos
                //Accedemos mediante su ID
                const producto = document.querySelector('#Producto'+prod.id)
                const precio = document.querySelector('#Precio'+prod.id)
                producto.innerHTML = prod.cant
                precio.innerHTML = parseInt(precio.innerHTML,10) + prod.precio
            }
            prod.cant++
            
            
            
        }
        
    });



