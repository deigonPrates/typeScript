import EventMenager from './event-manager';
import BoxPostForm from './box-post-form';
import BoxPostList from './box-post-list';

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
