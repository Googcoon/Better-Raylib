/**
 * better-raylib
 *
 * https://github.com/Googcoon/Better-Raylib
 */
const r = require('raylib')
import { EventEmitter } from "events"
//presets for raylib
r.SetTraceLogLevel(r.LOG_NONE)
r.SetExitKey(0)

/**
 * Create a window with the width and height and the name of the window, dont worry you can change it later
 */
 export function CreateWindow(width: number, height: number, title: string): void {
        r.InitWindow(width, height, title)
}

/**
 * Closes the window and unloads the memory
 */
export function CloseWindow(): void {
    r.CloseWindow()
}

/**
 * Checks whether the window is initalized or not
 */
export const WindowReady: boolean = r.IsWindowReady()
/**
 * Toggles between windowed and fullscreen
 */
export function ToggleFullScreen(): void {
    r.ToggleFullScreen();
}





 


