import type { ImagetoolsImg } from '@/vite-env';
import { roomImages, roomThumbs } from '@/lib/imageAssets';

export type RoomGlow = 'gold' | 'violet' | 'magenta';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: ImagetoolsImg[];
  thumbSrcs: string[];
  glow: RoomGlow;
}

// NOTE: Tên và mô tả dưới đây là gợi ý tạm thời (ấm áp / dịu nhẹ / sôi động).
// Chưa xem được ảnh thật của từng phòng nên chưa thể khớp chính xác 100% với
// màu đèn/decor thực tế - dễ dàng đổi lại text sau khi xem bản build.
export const rooms: Room[] = [
  {
    id: 'vip-1',
    name: 'VIP Dạ Yến',
    tagline: 'Ấm Áp · Sang Trọng',
    description:
      'Tông ánh sáng ấm, không gian tinh tế - phù hợp cho những buổi gặp gỡ cần sự riêng tư, kín đáo.',
    images: roomImages['vip-1'],
    thumbSrcs: roomThumbs['vip-1'],
    glow: 'gold',
  },
  {
    id: 'vip-2',
    name: 'VIP Nguyệt Cung',
    tagline: 'Dịu Dàng · Thư Thái',
    description:
      'Ánh sáng êm dịu, không gian nhẹ nhàng - lựa chọn lý tưởng cho những cuộc trò chuyện thư giãn cùng bạn bè.',
    images: roomImages['vip-2'],
    thumbSrcs: roomThumbs['vip-2'],
    glow: 'violet',
  },
  {
    id: 'vip-3',
    name: 'VIP Thịnh Yến',
    tagline: 'Sôi Động · Rực Rỡ',
    description:
      'Hệ đèn màu biến ảo theo nhịp nhạc - không gian lý tưởng cho tiệc sinh nhật, họp mặt đông vui.',
    images: roomImages['vip-3'],
    thumbSrcs: roomThumbs['vip-3'],
    glow: 'magenta',
  },
];
