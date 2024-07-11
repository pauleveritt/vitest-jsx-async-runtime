import "tsx/esm";

import {jsxToString} from "jsx-async-runtime";

export function Hello() {
    return <div>Hello</div>
}


const content = <Hello />;
const result = await jsxToString(content);

console.log(result);