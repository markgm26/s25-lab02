package edu.cmu.cs.cs214.lab02.shapes;

public interface Shape {
    //getBaseEff and getHeightEff are the methods you must change when you implement a new shape.
    // As an example, the effective base of a circle might be pi*r, and the effective height just r.
    double getBaseEff();
    double getHeightEff();
    default double getArea() {
        return getBaseEff() * getHeightEff();
    }
}