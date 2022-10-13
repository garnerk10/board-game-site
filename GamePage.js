//Game night page
//collapsing game list

/*let listNo = document.getElementById('listNo');
let buttonNum = document.getElementById('buttonNum');

const collapse = () => {
    if (listNo.style.display == 'block'){
        listNo.style.display = 'none';
    } else {
        listNo.style.display = 'block';
    }
};

buttonNum.addEventListener('click', collapse);*/

let allLists = document.getElementsByTagName('h3');

for (let i = 0; i < allLists.length; i++){
    allLists[i].onclick = function() {
        if(this.parentNode){
            let childList = this.parentNode.getElementsByTagName('ul');

            if(childList[i].style.display == 'block'){
                childList[i].style.display = 'none'
            } else {childList[i].style.display = 'block'}
        }
    }
};