// Wait for the document to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Create a new application with specific width and height
    const app = new PIXI.Application({ 
        antialias: true, 
        backgroundColor: 0x262A32, 
        width: 1500, 
        height: 300 
    });

    // Append the application canvas to the pixi-container
    document.getElementById('pixi-container').appendChild(app.view);

    // Create the circle
    const circle = new PIXI.Graphics()
        .beginFill(0xd11f1f)
        .drawCircle(0, 0, 140)
        .endFill();

    // Add the circle to the stage
    app.stage.addChild(circle);

    // Set the initial position of the circle to the center of the PIXI application
    circle.position.set(app.screen.width / 2, app.screen.height / 2);

    // Enable interactivity
    circle.interactive = true;
    circle.buttonMode = true;

    // Follow the pointer
    document.addEventListener('mousemove', (e) => {
        const { left, top } = app.view.getBoundingClientRect();
        circle.position.set(e.clientX - left, e.clientY - top);
    });
});
