export interface StoryScene {
  id: string;
  purpose: string;
  narrative: string;
  visual: { type: "image" | "video" | "3d" | "canvas" | "ui" | "data" | "svg"; asset?: string };
  typography: { headline?: string; body?: string };
  interaction: { type: "static" | "reveal" | "scroll" | "pin" | "scrub" | "drag" | "hover" | "3d" | "reactive" };
  transition: { enter: string; exit: string };
}
