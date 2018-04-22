import { Controller } from "controller";
import { TestUtils } from "utils/testutils";
import { TestButton } from "components/test-button/test-button";

export class MainController extends Controller {

    protected setup(): void {
        let testButton: TestButton = new TestButton("Click me");
        testButton.setOnClick((e: any) => {
            alert(TestUtils.isThisWorking());

            $.get("/views/test.html").done(function(data: any) {
                $("#test-button").append(data);
            });
        })

        $("#test-button").append(testButton.getView());
    }
}