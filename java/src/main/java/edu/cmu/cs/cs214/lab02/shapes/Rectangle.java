package edu.cmu.cs.cs214.lab02.shapes;

public class Rectangle implements Shape {
    private double height;
    private double width;
    
    public Rectangle(double height, double width){
        this.height = height;
        this.width = width;
    }

    public double getBaseEff() {
        return width; // define the base to width
    }

    public double getHeightEff() {
        return height; // define the height to be height 
    }
}
