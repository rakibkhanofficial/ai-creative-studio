export interface CreativeAsset {
  id: string;
  type: "image" | "video" | "model3d" | "sequence" | "svg" | "texture";
  purpose: string;
  source: "generated" | "placeholder" | "client" | "stock";
  path?: string;
  mobilePath?: string;
  poster?: string;
  alt: string;
  replaceable: boolean;
}
