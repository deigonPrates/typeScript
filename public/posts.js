var EventMenager = /** @class */ (function () {
    function EventMenager() {
        this.listeners = {};
    }
    EventMenager.prototype.addListener = function (eventName, callable) {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    };
    EventMenager.prototype.runEvent = function (eventName) {
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventMenager;
}());
var BoxPostList = /** @class */ (function () {
    function BoxPostList(eventManager) {
        this.eventManager = eventManager;
        this.buttonListSelector = "#" + BoxPostList.boxId + ">button[type=button]";
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent(BoxPostList.BOX_POST_LIST_HIDDEN);
        });
        this.eventManager.addListener(BoxPostForm.BOX_POST_FORM_HIDDEN, function () {
            _this.showBox();
        });
    };
    BoxPostList.prototype.hiddenBox = function () {
        var boxList = document.getElementById(BoxPostList.boxId);
        boxList.style.display = 'none';
    };
    BoxPostList.prototype.showBox = function () {
        var boxList = document.getElementById(BoxPostList.boxId);
        boxList.removeAttribute('style');
    };
    BoxPostList.boxId = 'box-post-list';
    BoxPostList.BOX_POST_LIST_HIDDEN = 'box-post-list-hidden';
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm(eventManager) {
        this.eventManager = eventManager;
        this.buttonFormSelector = "#" + BoxPostForm.boxId + ">button[type=button]";
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent(BoxPostForm.BOX_POST_FORM_HIDDEN);
        });
        this.eventManager.addListener(BoxPostList.BOX_POST_LIST_HIDDEN, function () {
            _this.showBox();
        });
    };
    BoxPostForm.prototype.hiddenBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    };
    BoxPostForm.boxId = 'box-post-form';
    BoxPostForm.BOX_POST_FORM_HIDDEN = 'box-post-form-hidden';
    return BoxPostForm;
}());
var PostForm = /** @class */ (function () {
    function PostForm(eventManager) {
        this.eventManager = eventManager;
        this.init();
    }
    PostForm.prototype.init = function () {
        new BoxPostForm(this.eventManager);
        new BoxPostList(this.eventManager);
    };
    return PostForm;
}());
new PostForm(new EventMenager());
//# sourceMappingURL=posts.js.map