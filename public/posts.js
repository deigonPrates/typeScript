define(["require", "exports", "./event-manager", "./box-post-form", "./box-post-list"], function (require, exports, event_manager_1, box_post_form_1, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostForm = /** @class */ (function () {
        function PostForm(eventManager) {
            this.eventManager = eventManager;
            this.init();
        }
        PostForm.prototype.init = function () {
            new box_post_form_1.default(this.eventManager);
            new box_post_list_1.default(this.eventManager);
        };
        return PostForm;
    }());
    new PostForm(new event_manager_1.default());
});
//# sourceMappingURL=posts.js.map