window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Load tileset image
    var tilesetImage = new Image();
    tilesetImage.src = "tilemap.png";

    // Define map data (grass tiles with index 0)
    var mapData = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
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

