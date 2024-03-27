window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Load tileset image
    var tilesetImage = new Image();
    tilesetImage.src = "tilemap.png";

    // Define map data (grass tiles with index 0)
    var mapData = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 1, 1, 4],
        [29, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 40],
        [99, 89, 79, 69, 59, 49, 39, 29, 19, 9, 1, 1, 4]
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

