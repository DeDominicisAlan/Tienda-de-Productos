    const  items = [
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
        nodo.classList.add('text-bg-dark')
        nodo.classList.add('mb-3')
        
        const imagen = document.createElement('img')
        imagen.classList.add('card-img-top')
        
        
        const cuerpo = document.createElement('div')
        cuerpo.classList.add('card-body')
        
        const nombre = document.createElement('h5')
        nombre.classList.add('card-title')
        nombre.textContent = element.nombre
        
        const precio = document.createElement('p')
        nombre.classList.add('card-text')
        precio.textContent = "$"+element.precio
        
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.classList.add("btn-primary")
        btn.textContent = "+";
        btn.setAttribute('id', element.id)
        btn.addEventListener('click', () => {
            total.textContent = calcularTotal(items[element.id-1].precio)
            crearProducto(items[element.id-1])
            
        })
        
        cuerpo.appendChild(nombre)
        cuerpo.appendChild(precio)
        cuerpo.appendChild(btn)
        nodo.appendChild(cuerpo)
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
            producto.classList.add ('lista-item'+prod.id)
            //Creo los espacios para los datos del producto
            const productoNombre = document.createElement('p')
            const productoCant = document.createElement('p')
            const productoPrecio = document.createElement('p')
            //Un boton para quitar la cantidad de productos
            const productoBoton = document.createElement('button')
            productoBoton.classList.add('btn-borrar')
            productoBoton.textContent = '-'
            
            //Le agregamos ID a los datos del producto para poder modificarlos después
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
            producto.appendChild(productoBoton)
            
            //Funcion del boton de borrado
            productoBoton.addEventListener('click', () => {
                if(prod.cant == 1){
                    prod.cant = 0
                    carrito.removeChild(producto)
                }else if(prod.cant > 1){
                    prod.cant --
                    productoCant.textContent = prod.cant
                    productoPrecio.textContent -= prod.precio
                }
                suma -= prod.precio
                total.textContent = suma
                if(total.textContent == 0)
                    total.textContent = ""
                })
            
            }else{
                //En caso que ya exista el producto, modificamos sus datos
                //Accedemos mediante su ID
                prod.cant++
                const producto = document.querySelector('#Producto'+prod.id)
                const precio = document.querySelector('#Precio'+prod.id)
                producto.innerHTML = prod.cant
                precio.innerHTML = parseInt(precio.innerHTML,10) + prod.precio
            }
            
            
            
            
        }
        
    });



