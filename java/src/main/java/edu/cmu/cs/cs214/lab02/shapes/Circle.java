package edu.cmu.cs.cs214.lab02.shapes;

public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getBaseEff() {
        return Math.PI * radius; // define the base to be pi * r
    }

    public double getHeightEff() {
        return radius; // define the height to 
    }
}
