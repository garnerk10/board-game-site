//Game night page
//collapsing game list

let listNo = document.getElementById('listNo');
let buttonNum = document.getElementById('buttonNum');

const collapse = () => {
    if (listNo.style.display == 'block'){
        listNo.style.display = 'none';
    } else {
        listNo.style.display = 'block';
    }
};

buttonNum.addEventListener('click', collapse);