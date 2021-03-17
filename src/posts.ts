class EventMenager{
    private listeners = {};

    addListener(eventName, callable){
        if(!(this.listeners[eventName] instanceof Array)){
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    }

    runEvent(eventName){
        for(let callable of this.listeners[eventName]){
            callable();
        }
    }
}

class BoxPostList{
    static boxId = 'box-post-list';
    private buttonListSelector = `#${BoxPostList.boxId}>button[type=button]`;

    constructor(private eventManager:EventMenager){
        this.init();
    }

    private init(){
        const buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', () => {
            this.hiddenBox();  

            this.eventManager.runEvent('box-post-list-hidden');
        });
        this.eventManager.addListener('box-post-form-hidden', () => {
            this.showBox();
        });
    }
    hiddenBox(){
        const boxList = document.getElementById(BoxPostList.boxId);
        boxList.style.display = 'none';
    }
    showBox(){
        const boxList = document.getElementById(BoxPostList.boxId);
        boxList.removeAttribute('style');
    }
}

class BoxPostForm{
    static boxId = 'box-post-form';
    private buttonFormSelector = `#${BoxPostForm.boxId}>button[type=button]`;

    constructor(private eventManager:EventMenager){
        this.init();
    }

    private init(){
        const buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener('click', () => {
            this.hiddenBox();  

            this.eventManager.runEvent('box-post-form-hidden');
        });
        
        this.eventManager.addListener('box-post-list-hidden', () => {
            this.showBox();
        });
    }
    hiddenBox(){
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    }
    showBox(){
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    }
}
const eventManager = new EventMenager();
new BoxPostForm(eventManager);
new BoxPostList(eventManager);