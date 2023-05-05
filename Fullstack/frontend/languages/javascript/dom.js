let object=["priya","ruchi","suchi"]
object.map((element)=>{
    let h1=document.createElement('h1')
    h1.innerHTML=element
    let div=document.getElementById('root')
    div.appendChild(h1)
    
})

