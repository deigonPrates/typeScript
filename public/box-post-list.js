define(["require", "exports", "./box-post-form"], function (require, exports, box_post_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.eventManager.addListener(box_post_form_1.default.BOX_POST_FORM_HIDDEN, function () {
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
    exports.default = BoxPostList;
});
//# sourceMappingURL=box-post-list.js.map