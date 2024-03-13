const userInput = document.getElementById('userInput');
const searchInput = document.getElementById('searchInput');
const submitBtn = document.getElementById('submitBtn');
const listContent= document.querySelector('.homeContent');

let allList = []
console.log(allList)

if (localStorage.getItem('toDoList') !== null){
    allList = JSON.parse(localStorage.getItem('toDoList'));
    DisplayList();
    console.log(allList)
}else{
    allList = [] ;
}


//create
function AddItem(){
    let toDo = {
        name : userInput.value
    };

    allList.push(toDo);

    console.log(toDo);
    // console.log(allList)

    ClearUserInput();
    DisplayList();

    localStorage.setItem('toDoList' , JSON.stringify(allList));

};



submitBtn.addEventListener('click' , function(){

    AddItem();

});




// clear input 

function ClearUserInput() {
    userInput.value = '';
};




//display 

function DisplayList(){

    let divs = ''
    for(let i =0 ; i<allList.length ; i++){
        divs += ` <div class="text-dark bg-light d-flex justify-content-between mb-3 p-3 rounded-2 w-50 m-auto  ">
                    <p class="m-0 ">${allList[i].name}</p>
                    <i class="fa-sharp fa-solid fa-trash text-danger pointer" onclick="DeleteItem(${i})"></i>
                </div>`
    }

    listContent.innerHTML=divs;

}



//delet item

function DeleteItem(index){
    allList.splice(index , 1);

    localStorage.setItem("toDoList" , JSON.stringify(allList))
   
    DisplayList();
}



//search fo item

function Search(){

    let searchText = searchInput.value;

    let divs = ''
    for(let i =0 ; i<allList.length ; i++){

        if(allList[i].name.toLowerCase().includes(searchText.toLowerCase())){
           
            divs += ` <div class="text-dark bg-light d-flex justify-content-between mb-3 p-3 rounded-2 w-50 m-auto  ">
                    <p class="m-0 ">${allList[i].name}</p>
                    <i class="fa-sharp fa-solid fa-trash text-danger pointer" onclick="DeleteItem(${i})"></i>
                </div>`
            }
    }

    listContent.innerHTML=divs;

}

searchInput.addEventListener('keyup' , function(){
    Search()
})