function Slider(element) {

	var self = this;

	var el = $(element);

	var item = el.find('.item');

	var index = 0;

	var current = 0;

	var prev_btn = el.find('.prev_btn');

	var next_btn = el.find('.next_btn');

	var pager = $('.pager');

	item.eq(index).css({
		top: 0,
		left: 0
	});

	prev_btn.on('click', function() {
		if (!item.is(':animated')) {
			self.move(-1);
		}
	});

	next_btn.on('click', function() {
		if (!item.is(':animated')) {
			self.move(1);
		}
	});

	pager.on('click', function() {
		if (!item.is(':animated')) {
			var pagerIndex = $(this).index();
			if (pagerIndex > current) {
				item.eq(current).animate({
					left: '-100%'
				});
				item.eq(pagerIndex).css({
					left: '100%'
				}).animate({
					left: '0'
				})
			} else if (pagerIndex < current) {
				item.eq(current).animate({
					left: '100%'
				})
				item.eq(pagerIndex).css({
					left: '-100%'
				}).animate({
					left: '0'
				})
			}

			self.activePager(pagerIndex);
			current = pagerIndex;
		}
	});

	self.activePager = function(pagerIndex) {
		pager.eq(pagerIndex).addClass('active').siblings().removeClass('active');
	}

	self.move = function(dir) {
		index = index + dir;

		if (0 > index) {
			index = item.length - 1
		}

		if (index > item.length - 1) {
			index = 0;
		}

		if (dir == -1) {
			item.eq(current).animate({
				left: '100%'
			})
			item.eq(index).css({
				left: '-100%'
			}).animate({
				left: '0'
			})
		} else {
			item.eq(current).animate({
				left: '-100%'
			});
			item.eq(index).css({
				left: '100%'
			}).animate({
				left: '0'
			})
		}

		self.activePager(index);

		current = index;

		console.log(index);
	}

}