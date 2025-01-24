import { Shape } from "./shape.js";

function square(sideLen: number): Shape {
    return {
        getBaseEff: () => sideLen,
        getHeightEff: () => sideLen,
        getArea: function (): number {
            return this.getBaseEff() * this.getHeightEff();
        }
    };
}

export { square }