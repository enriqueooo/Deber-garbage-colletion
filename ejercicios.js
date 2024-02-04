let characters = {
    name: "Napoleon",
    age: 40,
    father : {
        name: "Josefina",
        age: 39,
        Mother: {
            name: "Alejandro José ",
            age: 20, 
            stepsister: {
                name: "Charlotte Chappuis",
                age:15,
            }
        }
    }

}
function askingGame() { 
    alert("Bueno este juego se trata de salvar a napoleon, josefins, alejandro jose y charlotte chappuis.");
    alert("¿Napoleon y Josefina que eran?");
    alert("1.-Esposos, 2.-Hermanos, 3.-Amigos")

    let questionOne = prompt("Seleciona tu respuesta"); 
    switch (questionOne) {
        case "1":
            alert("Esposos"); 
            break; 
        case "2":
        case "3":
            delete characters.father.Motherther.stepsister;
            document.getElementById('messageContainerOne').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
            console.log(JSON.stringify(characters))
            console.log(characters.friend.father.stepbrother)
            alert("sigue intentándolo");
            break;
    }

    alert("¿Que era Napoleon en la vida?");
    let questionTwo = prompt("a) 1.-Militar, 2.-Conde de Essex, 3.-Duque de Norfolk");
    switch (questionTwo) {
        case "1":
            alert("Militar"); 
            break; 
        case "2":
        case "3": 
            delete characters.father.Mother; 
            document.getElementById('messageContainerTwo').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
            console.log(JSON.stringify(characters))
            console.log(characters.friend.father)
            alert("sigue intentándolo");
            break; 
    } 
    alert("¿Que es lo que afecto a napoleon y josefina para su separacion?");
    let questionThree = prompt("1.-Josefina no le dio un hijo baron, 2.-No le queria, 3.-Se enamoro de otro");
    switch (questionThree) {
        case "1":
        alert("Josefina no le dio un hijo baron"); 
        break; 
        case "2":
        case "3":     
        delete characters.father;
        document.getElementById('messageContainerThree').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
        console.log(JSON.stringify(characters))
        console.log(characters.friend)
        alert("sigue intentándolo");
        break; 
    }
    alert("¿Napoleon que dijo a Josefina?");
    let questionFour = prompt("1.-Que deseaba anular su matrimonio, 2.-Que le queria, 3.-Que la queria a su lado");
    switch (questionFour) {
        case "1":
            alert("Que deseaba anular su matrimonio"); 
            alert("Has tomado una buena desición. Has salvado a Napoleon, Josefina, Alejandro Jose y Charlotte Chappuis"); 
            alert("Gracias por jugar"); 
        break; 
        case "2":
        case "3": 
        delete characters.name;
        delete characters.age;
        characters =  null ; 
        console.log("fin del juego.");
        document.getElementById('messageContainerFour').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
        console.log(JSON.stringify(characters));
        alert("Has eliminado a Napoleon, Josefina, Alejandro Jose y Charlotte Chappuis")
        break; 
    }
}
askingGame(); 