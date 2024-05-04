
  var onLoad = function (event) {
    // Key listener.
    window.addEventListener("keydown", (kevent) => {
      if (kevent.key === "Escape") {
        isRunning = !isRunning;

        if (isRunning) {
          window.requestAnimationFrame(draw);
        }
      }
    });

    var canvas = document.createElement("canvas");
    canvas.id = "screen";
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.border = "1px solid #CCCCCC";

    const container = document.createElement("div");
    container.id = "container";

    const body = document.getElementsByTagName("body")[0];
    body.appendChild(container);

    container.appendChild(canvas);

    if (canvas.getContext) {
      var isRunning = true;
      var context = canvas.getContext("2d");

      var reverse = false;
      x = 50;
      y = 50;

      function draw() {
        if (!isRunning) {
          return;
        }

        window.requestAnimationFrame(draw);

        context.save();
        context.clearRect(0, 0, 500, 500);

        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle = "#1180ff";
        context.fill();

        if (reverse) {
          x -= 5;
          y -= 5;
        } else {
          x += 5;
          y += 5;
        }

        if (y >= 450) {
          reverse = true;
        }

        if (y <= 50) {
          reverse = false;
        }

        context.restore();
      }

      window.requestAnimationFrame(draw);
    } else {
      window.alert("O navegador não suporta o recurso 'Canvas' do HTML5 ");
    }
  };

  window.addEventListener("load", onLoad);
