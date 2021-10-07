"use strict";
exports.__esModule = true;
exports.ToggleFullScreen = exports.WindowReady = exports.CloseWindow = exports.CreateWindow = void 0;
/**
 * better-raylib
 *
 * https://github.com/Googcoon/Better-Raylib
 */
var r = require('raylib');
//presets for raylib
r.SetTraceLogLevel(r.LOG_NONE);
r.SetExitKey(0);
/**
 * Create a window with the width and height and the name of the window, dont worry you can change it later
 */
function CreateWindow(width, height, title) {
    r.InitWindow(width, height, title);
}
exports.CreateWindow = CreateWindow;
/**
 * Closes the window and unloads the memory
 */
function CloseWindow() {
    r.CloseWindow();
}
exports.CloseWindow = CloseWindow;
/**
 * Checks whether the window is initalized or not
 */
exports.WindowReady = r.IsWindowReady();
/**
 * Toggles between windowed and fullscreen
 */
function ToggleFullScreen() {
    r.ToggleFullScreen();
}
exports.ToggleFullScreen = ToggleFullScreen;
//# sourceMappingURL=index.js.map