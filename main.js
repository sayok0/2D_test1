window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10,
        speed: 2,
        direction: 1 // 1 for moving down, -1 for moving up
    };

    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the green platform
        ctx.fillStyle = "green";
        ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

        // Draw the white ball
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update ball position
        ball.y += ball.speed * ball.direction;

        // Change direction if ball reaches top or bottom of the canvas
        if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
            ball.direction *= -1;
        }

        requestAnimationFrame(draw);
    }

    draw();
};
