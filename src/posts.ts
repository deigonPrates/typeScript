const buttonForm = document.querySelector('#box-post-form>button[type=button]');
buttonForm.addEventListener('click', () =>{
    const boxForm = document.getElementById('box-post-form');
    boxForm.style.display = 'none';

    const boxList = document.getElementById('box-post-list');
    boxList.removeAttribute('style');
});

const buttonList = document.querySelector('#box-post-list>button[type=button]');
buttonList.addEventListener('click', () =>{
    const boxList = document.getElementById('box-post-list');
    boxList.style.display = 'none';

    const boxForm = document.getElementById('box-post-form');
    boxForm.removeAttribute('style');
});