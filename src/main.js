// This is the High level JS runtime for Rive
// https://rive.app/community/doc/web-js/docvlgbnS1mp

const riveInstance = new rive.Rive({
  src: "catfollowmouse.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "Artboard",
  stateMachines: "State Machine 1",

  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();


    let Mouse_Target;

    mouse_Target = riveInstance.artboard.node("Mouse_Target");

    // mouse_Target.x = 250
    // mouse_Target.y = 220
    

  // Mouse Position
  const mouse = {
    x: null,
    y: null,
  };

  // Canvas position in the document
  let rect = canvas.getBoundingClientRect();
 
  

  // On Mouse Move
  document.addEventListener("mousemove", function (event) {
    detectPosition(event);
  });

  function detectPosition(event) {

    rect = canvas.getBoundingClientRect();
 

    // Calculate the position
    mouse.x = (Math.floor(event.x - rect.x) * 500)/ rect.width;
    mouse.y = (Math.floor(event.y - rect.y) * 500)/ rect.height;

   
    

    mouse_Target.x = mouse.x;
    mouse_Target.y = mouse.y;

    // Format text
    // let positionData = "X: " + mouse.x + "\n" + "Y: " + mouse.y;
    // console.log(positionData);
    

  
  }
    
  },
});
