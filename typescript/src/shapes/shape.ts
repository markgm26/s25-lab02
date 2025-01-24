export abstract class Shape {
    //getBaseEff and getHeightEff are the methods you must change when you implement a new shape.
    // As an example, the effective base of a circle might be pi*r, and the effective height just r.
    abstract getBaseEff(): number;
    abstract getHeightEff(): number;
    getArea(): number {
        return this.getBaseEff() * this.getHeightEff();
    }
}