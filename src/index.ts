/**
 * Better-Raylib v1.0.5
 *
 * https://github.com/Googcoon/Better-Raylib
 */


const r = require('raylib')
const fs = require('fs')
// Presets for Raylib
r.SetTraceLogLevel(r.LOG_NONE)
r.SetExitKey(0)
r.SetConfigFlags(r.FLAG_WINDOW_RESIZABLE)
r.SetTargetFPS(60)

/**
 * Create a window with a name
 */
 export function CreateWindow(title: string, icon = r.LoadImage('./node_raylib.png') ): void {
            r.InitWindow(0, 0, title)
            r.SetWindowIcon(icon)
            r.MaximizeWindow()
            while (!r.WindowShouldClose) {
                if (!r.IsWindowMinimized && r.IsWindowResized){}
            }
         
        
 }

/**
 * Checks whether the window is about to close or not
 */
export const WindowClose = r.WindowShouldClose()

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
export async function Fullscreen(fullscreen: boolean): Promise<void> {
    if (fullscreen) {
      await  r.SetWindowSize(-1, -1)
    } else {

    }
}





 


