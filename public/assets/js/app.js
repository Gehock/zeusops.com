var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("controllers/controller", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Controller = (function () {
        function Controller() {
            this.setup();
        }
        return Controller;
    }());
    exports.Controller = Controller;
});
define("utils/testutils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestUtils = (function () {
        function TestUtils() {
        }
        TestUtils.isThisWorking = function () {
            return "Test test 123";
        };
        return TestUtils;
    }());
    exports.TestUtils = TestUtils;
});
define("components/test-button/test-button", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestButton = (function () {
        function TestButton(text) {
            this.text = text;
        }
        TestButton.prototype.setOnClick = function (callback) {
            this.onClickCallback = callback;
        };
        TestButton.prototype.getView = function () {
            var _this = this;
            var template = "<button>" + this.text + "</button>";
            return $(template)
                .on("click", function (e) { return _this.onClickCallback(e); });
        };
        return TestButton;
    }());
    exports.TestButton = TestButton;
});
define("controllers/maincontroller", ["require", "exports", "controllers/controller", "utils/testutils", "components/test-button/test-button"], function (require, exports, controller_1, testutils_1, test_button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainController = (function (_super) {
        __extends(MainController, _super);
        function MainController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainController.prototype.setup = function () {
            var testButton = new test_button_1.TestButton("Click me");
            testButton.setOnClick(function (e) {
                alert(testutils_1.TestUtils.isThisWorking());
                $.get("/views/test.html").done(function (data) {
                    $("#test-button").append(data);
                });
            });
            $("#test-button").append(testButton.getView());
        };
        return MainController;
    }(controller_1.Controller));
    exports.MainController = MainController;
});
define("app", ["require", "exports", "controllers/maincontroller"], function (require, exports, maincontroller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.main = function () {
            var controller = new maincontroller_1.MainController();
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map