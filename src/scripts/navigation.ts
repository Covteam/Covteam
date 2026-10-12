const header = document.querySelector<HTMLElement>('[data-site-nav]');
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const menu = document.querySelector<HTMLElement>('#site-menu');
if (header && toggle && menu) {
	const mobile = window.matchMedia('(max-width: 767px)');
	const label = toggle.querySelector<HTMLElement>('[data-nav-label]');
	const setOpen = (open: boolean) => {
		toggle.setAttribute('aria-expanded', String(open));
		if (label) label.textContent = open ? '收起' : '菜单';
		menu.hidden = mobile.matches && !open;
	};
	const syncLayout = () => {
		toggle.hidden = !mobile.matches;
		setOpen(false);
	};
	syncLayout();
	mobile.addEventListener('change', syncLayout);
	toggle.addEventListener('click', () =>
		setOpen(toggle.getAttribute('aria-expanded') !== 'true'),
	);
	menu.addEventListener('click', (event) => {
		if ((event.target as Element).closest('a')) setOpen(false);
	});
	header.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && mobile.matches && !menu.hidden) {
			setOpen(false);
			toggle.focus();
		}
	});
	const measureHeader = () => {
		document.documentElement.style.setProperty(
			'--nav-height',
			`${header.getBoundingClientRect().height}px`,
		);
	};
	measureHeader();
	new ResizeObserver(measureHeader).observe(header);
	const links = Array.from(
		menu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
	);
	const sections = links
		.map((link) => document.querySelector<HTMLElement>(link.hash))
		.filter((section): section is HTMLElement => Boolean(section));
	const markCurrent = () => {
		const threshold = header.getBoundingClientRect().height + 80;
		const current =
			sections
				.filter((section) => section.getBoundingClientRect().top <= threshold)
				.at(-1) ?? sections[0];
		links.forEach((link) => {
			if (link.hash === `#${current?.id}`)
				link.setAttribute('aria-current', 'location');
			else link.removeAttribute('aria-current');
		});
	};
	let scheduled = false;
	window.addEventListener(
		'scroll',
		() => {
			if (scheduled) return;
			scheduled = true;
			requestAnimationFrame(() => {
				markCurrent();
				scheduled = false;
			});
		},
		{ passive: true },
	);
	window.addEventListener('resize', markCurrent);
	markCurrent();
}
