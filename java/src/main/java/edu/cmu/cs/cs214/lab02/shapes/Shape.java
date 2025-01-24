package edu.cmu.cs.cs214.lab02.shapes;

public interface Shape {
    double getBaseEff();
    double getHeightEff();
    default double getArea() {
        return getBaseEff() * getHeightEff();
    }
}
