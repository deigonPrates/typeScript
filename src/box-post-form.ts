import EventMenager from './event-manager';
import BoxPostList from './box-post-list';

export default class BoxPostForm{
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