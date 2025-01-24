import { newRenderer } from "./renderer.js";
import { newRectangle } from "./shapes/rectangle.js";

const rectangle = newRectangle(2, 3); // Returns a Shape object (Rectangle instance)
const renderer = newRenderer(rectangle); // Renderer works with any Shape
renderer.draw();
