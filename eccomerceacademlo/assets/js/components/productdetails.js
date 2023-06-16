let previewContainer = document.querySelector('.products-preview');
let previewbox = previewContainer.querySelector('.preview');

document.querySelectorAll('.products-container .products').forEach(products=>{
    products.onclick = () =>{
        previewContainer.style.display = 'flex';
       let name = products.getAttribute('data-id');
       previewbox.forEach(preview => {
        let target = preview.getAttribute('data-')
         if(name == target){
            preview.classList.add('active')
         }
       })
    }
})
previewbox.forEach(close =>{
    close.querySelector('.fa times').onclick =()=>{
        console.classList.remove('active')
        previewContainer.style.display = 'none'
    }
}
    )