// === Dropdown === //

$('.ui.dropdown')
  .dropdown()
;

// === Model === //
$('.ui.modal')
  .modal({
    blurring: true
  })
  .modal('show')
;

// === Tab === //
$('.menu .item')
  .tab()
;

// === checkbox Toggle === //
$('.ui.checkbox')
  .checkbox()
;

// === Toggle === //
$('.enable.button')
  .on('click', function() {
    $(this)
      .nextAll('.checkbox')
        .checkbox('enable')
    ;
  })
;


// Home Live Stream
$('.live_stream').owlCarousel({
	items:10,
	loop:false,
	margin:10,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:3
		},
		1000:{
			items:4
		},
		1200:{
			items:5
		},
		1400:{
			items:6
		}
	}
})

// Featured Courses home
$('.featured_courses').owlCarousel({
	items:10,
	loop:false,
	margin:20,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:2
		},
		1400:{
			items:3
		}
	}
})

// Student Says
$('.Student_says').owlCarousel({
	items:10,
	loop:false,
	margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// features Careers
$('.feature_careers').owlCarousel({
	items:4,
	loop:false,
	margin:20,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		},
		1200:{
			items:1
		},
		1400:{
			items:1
		}
	}
});

// hook up the expand/collapse all
expandLink.click(function(){
    var isAllOpen = !$(this).data('isAllOpen');
    console.log({isAllOpen: isAllOpen, contentAreas: contentAreas})
    contentAreas[isAllOpen? 'slideDown': 'slideUp']();
    
    expandLink.text(isAllOpen? 'Collapse All': 'Expand all')
                .data('isAllOpen', isAllOpen);    
});


// Payment Method Accordion
$('input[name="paymentmethod"]').on('click', function () {
	var $value = $(this).attr('value');
	$('.return-departure-dts').slideUp();
	$('[data-method="' + $value + '"]').slideDown();
});
