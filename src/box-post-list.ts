import EventMenager from './event-manager';
import BoxPostForm from './box-post-form';

export default class BoxPostList{
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