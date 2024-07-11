import {test} from "vitest";
import {Hello} from "./hello";
import {jsxToString} from "jsx-async-runtime";

test("Render Hello", async () => {
    const result = await jsxToString(<Hello/>);
});
