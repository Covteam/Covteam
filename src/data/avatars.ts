import type { ImageMetadata } from 'astro';

// 成员头像统一放在 src/assets/avatars/，构建时由 astro:assets 压缩并转为 WebP。
const avatarModules = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/avatars/*.{jpg,jpeg,png,webp,avif}',
	{ eager: true },
);

const avatars = new Map(
	Object.entries(avatarModules).map(([path, module]) => [
		path.slice(path.lastIndexOf('/') + 1),
		module.default,
	]),
);

const DEFAULT_AVATAR = 'default-ava.jpg';

/**
 * 根据 members.ts 中填写的文件名解析头像。
 * 留空时使用默认头像；文件名写错会让构建直接失败，避免线上出现裂图。
 */
export function resolveAvatar(fileName?: string): ImageMetadata {
	const name = fileName?.trim() || DEFAULT_AVATAR;
	const avatar = avatars.get(name);
	if (!avatar) {
		throw new Error(
			`[members] 找不到头像 "${name}"，请确认文件位于 src/assets/avatars/ 且文件名大小写一致。`,
		);
	}
	return avatar;
}
