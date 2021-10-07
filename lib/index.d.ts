/**
 * Create a window with the width and height and the name of the window, dont worry you can change it later
 */
export declare function CreateWindow(width: number, height: number, title: string): void;
/**
 * Closes the window and unloads the memory
 */
export declare function CloseWindow(): void;
/**
 * Checks whether the window is initalized or not
 */
export declare const WindowReady: boolean;
/**
 * Toggles between windowed and fullscreen
 */
export declare function ToggleFullScreen(): void;
