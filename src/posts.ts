interface ListnerInterface{
    ():void;
}

class EventMenager{
    private listeners:{[eventName:string]:Array<ListnerInterface>} = {};

    addListener(eventName:string, callable:ListnerInterface){
        if(!(this.listeners[eventName] instanceof Array)){
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    }

    runEvent(eventName:string){
        for(let callable of this.listeners[eventName]){
            callable();
        }
    }
}

class BoxPostList{
    static boxId = 'box-post-list';
    static BOX_POST_LIST_HIDDEN = 'box-post-list-hidden';

    private buttonListSelector = `#${BoxPostList.boxId}>button[type=button]`;

    constructor(private eventManager:EventMenager){
        this.init();
    }

    private init(){
        const buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', () => {
            this.hiddenBox();  

            this.eventManager.runEvent(BoxPostList.BOX_POST_LIST_HIDDEN);
        });
        this.eventManager.addListener(BoxPostForm.BOX_POST_FORM_HIDDEN, () => {
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
    static BOX_POST_FORM_HIDDEN = 'box-post-form-hidden';

    private buttonFormSelector = `#${BoxPostForm.boxId}>button[type=button]`;

    constructor(private eventManager:EventMenager){
        this.init();
    }

    private init(){
        const buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener('click', () => {
            this.hiddenBox();  

            this.eventManager.runEvent(BoxPostForm.BOX_POST_FORM_HIDDEN);
        });

        this.eventManager.addListener(BoxPostList.BOX_POST_LIST_HIDDEN, () => {
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

class PostForm{
    constructor(private eventManager:EventMenager){
        this.init();
    }

    init(){
        new BoxPostForm(this.eventManager);
        new BoxPostList(this.eventManager);
    }
}

new PostForm(new EventMenager());
