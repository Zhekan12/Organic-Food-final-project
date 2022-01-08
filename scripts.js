const loupe = document.querySelector('.search-click');
loupe.addEventListener('click' ,function(event){
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.remove('active-click');
    loupe.classList.add('active-click');
})