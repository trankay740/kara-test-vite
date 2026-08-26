/// <reference types="vite/client" />

export interface ImagetoolsImg {
  src: string;
  w: number;
  h: number;
  srcset?: string;
}

declare module '*?as=img' {
  const img: ImagetoolsImg;
  export default img;
}

declare module '*?as=url' {
  const url: string;
  export default url;
}

declare module '*?as=srcset' {
  const srcset: string;
  export default srcset;
}
