import { Shape } from "./shape.js";
function newRectangle(width: number, height: number): Shape {
    return {
        getBaseEff: () => width,
        getHeightEff: () => height,
        getArea: function (): number {
            return this.getBaseEff() * this.getHeightEff();
        }
    };
}

export { newRectangle };