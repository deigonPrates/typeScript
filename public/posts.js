var buttonForm = document.querySelector('#box-post-form>button[type=button]');
buttonForm.addEventListener('click', function () {
    var boxForm = document.getElementById('box-post-form');
    boxForm.style.display = 'none';
    var boxList = document.getElementById('box-post-list');
    boxList.removeAttribute('style');
});
var buttonList = document.querySelector('#box-post-list>button[type=button]');
buttonList.addEventListener('click', function () {
    var boxList = document.getElementById('box-post-list');
    boxList.style.display = 'none';
    var boxForm = document.getElementById('box-post-form');
    boxForm.removeAttribute('style');
});
