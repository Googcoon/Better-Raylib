/**
 * Better-Raylib v1.0.5
 *
 * https://github.com/Googcoon/Better-Raylib
 */
/**
 * Create a window with a name
 */
export declare function CreateWindow(title: string, icon?: any): void;
/**
 * Checks whether the window is about to close or not
 */
export declare const WindowClose: any;
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
export declare function Fullscreen(fullscreen: boolean): Promise<void>;
