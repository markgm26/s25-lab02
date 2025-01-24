import { Shape } from "./shape.js";

function circle(radius: number): Shape {
    return {
        getBaseEff: () => Math.PI * radius,
        getHeightEff: () => radius,
        getArea: function (): number {
            return this.getBaseEff() * this.getHeightEff();
        }
    }
}

export { circle }
