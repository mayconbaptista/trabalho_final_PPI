async function buscaInteresses() {
    try {
        let response = await fetch("../PHP/interessesConta.php");
        if(!response.ok) throw new Error(response.statusText);
        let interesses = await response.json();

        return interesses.arr;
    } catch(e) {
        console.log(e);
    }
}

window.onload = async () => {
    let interesses = await buscaInteresses();
    let select = document.querySelector('#id');

    for(let interesse of interesses) {
        let option = document.createElement('option');
        
        option.value = interesse.codigo;
        option.textContent = interesse.codigo;

        select.appendChild(option);
    }
}