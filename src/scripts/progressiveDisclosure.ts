const progressiveSections = document.querySelectorAll<HTMLElement>(
	'[data-progressive-disclosure]',
);

progressiveSections.forEach((section) => {
	const initialVisible = Number(section.dataset.initialVisible);
	const items = Array.from(
		section.querySelectorAll<HTMLElement>('[data-progressive-item]'),
	);
	const toggle = section.querySelector<HTMLButtonElement>(
		'[data-progressive-toggle]',
	);
	const label = toggle?.querySelector<HTMLElement>('[data-progressive-label]');

	if (
		!toggle ||
		!label ||
		!Number.isFinite(initialVisible) ||
		items.length <= initialVisible
	) {
		return;
	}

	const expandLabel = toggle.dataset.expandLabel ?? '查看全部';
	const collapseLabel = toggle.dataset.collapseLabel ?? '收起内容';

	const setExpanded = (expanded: boolean) => {
		items.forEach((item, index) => {
			item.hidden = !expanded && index >= initialVisible;
		});

		toggle.setAttribute('aria-expanded', String(expanded));
		label.textContent = expanded ? collapseLabel : expandLabel;
	};

	toggle.hidden = false;
	setExpanded(false);

	toggle.addEventListener('click', () => {
		setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
	});
});
