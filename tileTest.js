window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Load tileset image
    var tilesetImage = new Image();
    tilesetImage.src = "tilemap.png";

    // Define map data (grass tiles with index 0)
    var mapData = [
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    ];

    // Define tile size
    var tileSize = 32; // Assuming each tile is 32x32 pixels

    // Render the map
    function renderMap() {
        for (var row = 0; row < mapData.length; row++) {
            for (var col = 0; col < mapData[row].length; col++) {
                var tileIndex = mapData[row][col];
                var tileX = col * tileSize;
                var tileY = row * tileSize;
                ctx.drawImage(tilesetImage, tileIndex * tileSize, 0, tileSize, tileSize, tileX, tileY, tileSize, tileSize);
            }
        }
    }

    // Wait for the tileset image to load before rendering the map
    tilesetImage.onload = function() {
        renderMap();
    };
};

