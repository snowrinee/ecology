
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
					self.moveNext(pagerIndex);
				} else if (pagerIndex < current) {
					self.movePrev(pagerIndex);
				}
				self.activePagerItem(pagerIndex);
			}
		});
		self.movePrev = function(moveIndex) {
			item.eq(current).animate({
				left: '100%'
			});
			item.eq(moveIndex).css({
				left: '-100%'
			}).animate({
				left: '0'
			});
		}
		self.moveNext = function(moveIndex) {
			item.eq(current).animate({
				left: '-100%'
			});
			item.eq(moveIndex).css({
				left: '100%'
			}).animate({
				left: '0'
			});
		}
		self.activePagerItem = function(activeIndex) {
			pager.eq(activeIndex).addClass('active').siblings().removeClass('active');
			item.eq(activeIndex).addClass('active').siblings().removeClass('active');
			current = activeIndex;
		}
		self.move = function(dir) {
			index = current + dir;
			if (0 > index) {
				index = item.length - 1;
			}
			if (index > item.length - 1) {
				index = 0;
			}
			if (dir == -1) {
				self.movePrev(index);
			} else {
				self.moveNext(index);
			}
			self.activePagerItem(index);
		} 
	}
	var slider = new Slider('.slider');
	
   $(".gnbMenu > li").mouseenter(function(){
	   $(this).find(".subWrap").fadeIn(0)
   });
	
	$(".gnbMenu > li").mouseleave(function(){
	  $(this).find(".subWrap").fadeOut(0)
	});