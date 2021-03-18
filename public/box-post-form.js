define(["require", "exports", "./box-post-list"], function (require, exports, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.eventManager.addListener(box_post_list_1.default.BOX_POST_LIST_HIDDEN, function () {
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
    exports.default = BoxPostForm;
});
//# sourceMappingURL=box-post-form.js.map