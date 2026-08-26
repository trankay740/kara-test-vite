import type { ImagetoolsImg } from '@/vite-env';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import experience1 from '@/assets/images/Experience_1.jpg?w=400;640;900&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import experience2 from '@/assets/images/Experience_2.jpg?w=400;640;900&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import experience3 from '@/assets/images/Experience_3.jpg?w=400;640;900&format=webp&as=img';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import footerBg from '@/assets/images/Experience_3.jpg?w=1600&format=webp&as=url';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import flavor1 from '@/assets/images/FlavorSection_1.jpg?w=500;700;900;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import flavor2 from '@/assets/images/FlavorSection_2.jpg?w=400;500;700&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import flavor3 from '@/assets/images/FlavorSection_3.jpg?w=400;500;700&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import flavor4 from '@/assets/images/FlavorSection_4.jpg?w=400;500;700&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import flavor5 from '@/assets/images/FlavorSection_5.jpg?w=400;500;700&format=webp&as=img';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip1_1 from '@/assets/images/phong-vip1-1.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip1_2 from '@/assets/images/phong-vip1-2.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip1_3 from '@/assets/images/phong-vip1-3.jpg?w=400;640;800;1200&format=webp&as=img';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip2_1 from '@/assets/images/phong-vip2-1.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip2_2 from '@/assets/images/phong-vip2-2.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip2_3 from '@/assets/images/phong-vip2-3.jpg?w=400;640;800;1200&format=webp&as=img';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_1 from '@/assets/images/phong-vip3-1.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_2 from '@/assets/images/phong-vip3-2.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_3 from '@/assets/images/phong-vip3-3.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_4 from '@/assets/images/phong-vip3-4.jpg?w=400;640;800;1200&format=webp&as=img';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_5 from '@/assets/images/phong-vip3-5.jpg?w=400;640;800;1200&format=webp&as=img';

// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip1_1_t from '@/assets/images/phong-vip1-1.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip1_2_t from '@/assets/images/phong-vip1-2.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip1_3_t from '@/assets/images/phong-vip1-3.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip2_1_t from '@/assets/images/phong-vip2-1.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip2_2_t from '@/assets/images/phong-vip2-2.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip2_3_t from '@/assets/images/phong-vip2-3.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_1_t from '@/assets/images/phong-vip3-1.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_2_t from '@/assets/images/phong-vip3-2.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_3_t from '@/assets/images/phong-vip3-3.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_4_t from '@/assets/images/phong-vip3-4.jpg?w=240&format=webp&as=url';
// @ts-expect-error - vite-imagetools query import not recognized by tsc
import vip3_5_t from '@/assets/images/phong-vip3-5.jpg?w=240&format=webp&as=url';

export const experienceImages: ImagetoolsImg[] = [experience1, experience2, experience3];
export const footerBgUrl: string = footerBg;
export const flavorImages: ImagetoolsImg[] = [flavor1, flavor2, flavor3, flavor4, flavor5];

export const roomImages: Record<string, ImagetoolsImg[]> = {
  'vip-1': [vip1_1, vip1_2, vip1_3],
  'vip-2': [vip2_1, vip2_2, vip2_3],
  'vip-3': [vip3_1, vip3_2, vip3_3, vip3_4, vip3_5],
};

export const roomThumbs: Record<string, string[]> = {
  'vip-1': [vip1_1_t, vip1_2_t, vip1_3_t],
  'vip-2': [vip2_1_t, vip2_2_t, vip2_3_t],
  'vip-3': [vip3_1_t, vip3_2_t, vip3_3_t, vip3_4_t, vip3_5_t],
};
