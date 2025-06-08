function showList(element){
    list= element.nextElementSibling;
    if (list.style.display == 'flex'){
        list.style.display='none';
    }
    else{
        list.style.display='flex';
    }
}