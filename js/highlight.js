for (let span of document.querySelectorAll('.hl')) {
	span.addEventListener('mouseover', e => {
		span.className = 'highlight';
	});
}
console.log('running');
