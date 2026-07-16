export interface DirectionItem {
	title: string;
	description: string;
}

export interface SiteLink {
	href: string;
	label: string;
	external?: boolean;
}

export interface FooterGroup {
	title: string;
	links: SiteLink[];
}

export interface RecruitmentData {
	features: string[];
	gains: string[];
	hopes: string[];
	news: string[];
}

export interface Member {
	name: string;
	role: string;
	image?: string;
	link?: string;
	bio: string;
}

export interface StatItem {
	label: string;
	value: string;
}
