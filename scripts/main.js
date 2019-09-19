const addButton = document.querySelector('.addButton');
var titleValue = document.querySelector('.titleField');
var descValue = document.querySelector('.descriptionField');
const container = document.querySelector('.container-fluid');
var searchInp = document.getElementById("searchInput");

class NewItem{
    constructor(title, desc){
        this.createDiv(title, desc)
    }
    createDiv(itemName, desc){
        let titleInput = document.createElement('input');        
        titleInput.value = itemName;
        titleInput.disabled = true;
        titleInput.type = 'text';
        titleInput.classList.add("input_div", "red", "titleClass");

        let descElm = document.createElement('input');        
        descElm.value = desc;
        descElm.disabled = true;
        descElm.type = 'text';
        descElm.classList.add("input_div", "red");

        let editButton = document.createElement('button');
        editButton.classList.add("btn_div");
        editButton.id = "editBtn";
        editButton.innerHTML = "EDIT";

        let removeButton = document.createElement('button');
        removeButton.classList.add("btn_div");
        removeButton.innerHTML = "REMOVE";

        let saveButton = document.createElement('button');
        saveButton.classList.add("btn_div");
        saveButton.innerHTML = "SAVE";
        saveButton.id = "saveBtn"
        saveButton.style.display = "none";

        let itemDiv = document.createElement('div');
        itemDiv.classList.add("maindiv");

        container.appendChild(itemDiv);
        itemDiv.appendChild(titleInput);
        itemDiv.appendChild(descElm);
        itemDiv.appendChild(editButton);
        itemDiv.appendChild(saveButton);
        itemDiv.appendChild(removeButton);        

        editButton.addEventListener('click', () => this.editInput(titleInput, descElm, saveButton, editButton));
        removeButton.addEventListener('click', () => this.removeElement(itemDiv));
        saveButton.addEventListener('click', () => this.saveList(titleInput, descElm,  saveButton, editButton))
    }

    editInput(input, descInp, savebtn, editbtn){
        $(savebtn).show();
        $(editbtn).hide();
        input.disabled = !input.disabled;
        descInp.disabled = !descInp.disabled;
        $(input).addClass('inputStyle');
        $(descInp).addClass('inputStyle');
        input.focus();
    }
    removeElement(listDiv){
        container.removeChild(listDiv)
    }
    saveList(input, descInp, savebtn, editbtn){        
        $(savebtn).hide();
        $(editbtn).show();
        $(input).removeClass('inputStyle');
        $(descInp).removeClass('inputStyle');
        input.disabled = !input.disabled;
        descInp.disabled = !descInp.disabled;
    }
}

//let newList = new NewItem("Super", "Deasd jjjser test");

function addList(){
    var itemList = $('#titleText').val().trim();
    let itemCount = $("#added-items .titleClass ").filter((i, li) => {
        let text = $(li).val().toLowerCase();
        console.log(text, li, text.substring(0, text.length-1), "dup")
        return text === itemList.toLowerCase();
    }).length;
    console.log(itemCount)
    if(itemCount > 0){
        $('#titleText').addClass("error")
        $("#errorText").removeClass("dispnone")
        return;
    } else{
        $('#titleText').removeClass("error")
        $("#errorText").addClass("dispnone")
    }
    if(titleValue.value != "" && descValue.value != ""){
        new NewItem(titleValue.value, descValue.value);
        titleValue.value = "";
        descValue.value = "";
    }
}
function fnSearchTodoList(event){
    var searchVal = event.target.value.toLowerCase();
    var nodes = document.getElementsByClassName('maindiv');

    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].firstElementChild.value.toLowerCase().includes(searchVal)) {
          nodes[i].style.display = "block";
        } else {
          nodes[i].style.display = "none";
        }
      }
    console.log(searchVal)

}
addButton.addEventListener('click', addList, false);