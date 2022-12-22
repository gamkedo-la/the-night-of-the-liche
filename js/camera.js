function instantCamFollow() {
	camPanX = player.x - canvas.width / 2;
	camPanY = player.y - canvas.height / 2;
}

function cameraFollow() {
	var cameraFocusCenterX = camPanX + canvas.width / 2;
	var cameraFocusCenterY = camPanY + canvas.height / 2;

	var playerDistFromCameraFocusX = Math.abs(player.x - cameraFocusCenterX);
	var playerDistFromCameraFocusY = Math.abs(player.y - cameraFocusCenterY);

	if (playerDistFromCameraFocusX > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X) {
		if (cameraFocusCenterX < player.x) {
			camPanX += playerMoveSpeed;
		} else {
			camPanX -= playerMoveSpeed;
		}
	}
	if (playerDistFromCameraFocusY > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y) {
		if (cameraFocusCenterY < player.y) {
			camPanY += playerMoveSpeed;
		} else {
			camPanY -= playerMoveSpeed;
		}
	}

	if (camPanX < 0) {
		camPanX = 0;
	}
	if (camPanY < 0) {
		camPanY = 0;
	}
	var maxPanRight = ROOM_COLS * TILE_W - canvas.width;
	var maxPanTop = ROOM_ROWS * TILE_H - canvas.height;
	if (camPanX > maxPanRight) {
		camPanX = maxPanRight;
	}
	if (camPanY > maxPanTop) {
		camPanY = maxPanTop;
	}
}