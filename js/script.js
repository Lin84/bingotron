(function() {

	$(document).ready(function() {
	// --- carousel ----------------------------------------------------------
		var options = {
			ovalWidth: 400,
			ovalHeight: 190,
			offsetX: 100,
			offsetY: 325,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'item'
		}

		var carousel = $('.carousel').CircularCarousel(options);

		carousel.on('itemBeforeActive', function(e, item) {
		/* Fires when an item is about to start it's activate animation */
			$(item).css('box-shadow', '0 0 20px blue');
		});
		
		carousel.on('itemActive', function(e, item) {
		/* Fires after an item finishes it's activate animation */
			$(item).css('box-shadow', '0 0 20px green');
		});
		
		carousel.on('itemBeforeDeactivate', function(e, item) {
		/* Fires when an active item starts it's de-activate animation */
			$(item).css('box-shadow', '0 0 20px red');
		})

		carousel.on('itemAfterDeactivate', function(e, item) {
		/* Fires after an active item has finished it's de-activate animation */
			$(item).css('box-shadow', '');
		})
		
		$('.controls .previous').click(function(e) {
			/* Previous button */
			carousel.cycleActive('previous');
			e.preventDefault();
		});
		
		$('.controls .next').click(function(e) {
			/* Next button */
			carousel.cycleActive('next');
			e.preventDefault();
		});
		
		$('.carousel .item').click(function(e) {
			/* Manaully click an item anywhere in the carousel */
			var index = $(this).index('.item');
			carousel.cycleActiveTo(index);
			e.preventDefault();
		});

	// --- button hover on off  feeling pushed remains -----------------------
		// $("#license-btn").on("click",function(){
		// 	$(this).toggleClass("license-hover");
		// 	$(this).toggleClass("license-nohover");
		// })
		// $("#option-btn").on("click",function(){
		// 	$(this).toggleClass("option-hover");
		// 	$(this).toggleClass("option-nohover");
		// })
		// $("#history-btn").on("click",function(){
		// 	$(this).toggleClass("history-hover");
		// 	$(this).toggleClass("history-nohover");
		// })

	// --- log in &  log out function ----------------------------------------
		var user = ["admin", "tester", "user"];
		var pass = ["padmin", "ptester", "puser"];
		var uname;
		var pword;
		var loginSuccess=false

		function login(){
			uname = document.getElementById("username").value;
			pword = document.getElementById("password").value;
			if(uname==""||pword==""){
				/* if browser see any invalid variable will trick to fill in
				correct login, in this case:
				undefined "check_empty()" is not created = invalid */
				if(document.addEventListener){
					/* if username or password is not entered*/
					document.addEventListener('invalid', function(e){
						e.target.className += ' invalid';
						$(".fa-user").css("color","#fdc2b2");
						$(".fa-lock").css("color","#fdc2b2");
						$("#username").css("background-color","#fdc2b2");
						$("#password").css("background-color","#fdc2b2");
						$(".login-form-attention").slideDown();
					}, true);
				}
				check_empty();	
			}
			if(uname== user[0] && pword == pass[0] || 
			uname== user[1] && pword == pass[1] ||
			uname== user[2] && pword == pass[2] ){
				$("#login-pop-up").slideUp();
				$(".footer-left").fadeIn(0.1);
				$("#login-text").text("Выход");
				$("#username").css("background-color","#ffffff");
				$("#password").css("background-color","#ffffff");
				$(".fa-user").css("color","#ffffff");
				$(".fa-lock").css("color","#ffffff");
				$(".login-form-attention").slideUp();
				$("#username").val("");
				$("#password").val("");
				loginSuccess=true;
			}
			else{
				$("#username").css("background-color","#fdc2b2");
				$("#password").css("background-color","#fdc2b2");
				$(".fa-user").css("color","#fdc2b2");
				$(".fa-lock").css("color","#fdc2b2");
				$(".login-form-attention").slideDown();
			}
		}

		function logout(){
			$("#login-text").text("Вход");
			$(".footer-left").fadeOut(0.1);
			loginSuccess=false;
		}

	// --- log in pop up -----------------------------------------------------
		// function check_empty() { 
			// 		/* Validating Empty Field*/
			// 		if (document.getElementById('name').value == "" || 
			// 		document.getElementById('password').value == "") {
			// 			$("#name").css("background-color","#fdc2b2");
			// 			$("#password").css("background-color","#fdc2b2");
			// 			$(".fa-user").css("color","#fdc2b2");
			// 			$(".fa-lock").css("color","#fdc2b2");
			// 			alert("Fill All Fields, Please!");
			// 			$("#name").css("background-color","#ffffff");
			// 			$("#password").css("background-color","#ffffff");
			// 			$(".fa-user").css("color","#ffffff");
			// 			$(".fa-lock").css("color","#ffffff");
			// 		} 
			// 		else {
			// 			document.getElementById('login-form').submit();
			// 			alert("Welcome back player!");
			// 		}
		// };

		$("#login-btn").on("click",function(){
			// log in into game
			login();
		});

		$("#login-menu-btn").on("click",function(){
			// if is not login = login menu will show up
			// if user is already logged = click on login-menu-btn 
			// will log user out 
			if(!loginSuccess){
				$("#login-pop-up").slideToggle();
			}
			else{
				$("#balanceRemain-pop-up").slideToggle();
				// logout();
			}
		});

		// $(".close").on("click",function(){
		// 	// close login pop up window;
		// 	$("#login-pop-up").slideUp();
		// });

		$("#repeat-btn").on("click",function(){
			// confirm to log out of game
			logout();
			$("#balanceRemain-pop-up").slideToggle();
		});

		$("#return-btn").on("click",function(){
			// return back to game
			$("#balanceRemain-pop-up").slideUp();
		});

	// --- license pop up ----------------------------------------------------
		$("#license-btn").on("click",function(){
			// login-pop-up shows;
			$("#license-pop-up").slideToggle();
		});		

	// --- offer pop up window -----------------------------------------------
		$("#offer-btn").on("click",function(){
			$("#offer-pop-up").slideToggle();
		})

	// --- history pop up window ---------------------------------------------
		$("#history-btn").on("click",function(){
				$("#history-pop-up").slideToggle();
		}) 


	// --- start button attention-pop-up to confirm balance = need to login --
		$("#start-btn").on("click",function(){
			//  if are want to play but ont logged yet = confirm  balance pop up 
			if(!loginSuccess){
				$("#attention-pop-up").slideToggle();
			}
		})

		$("#attention-btn").on("click",function(){
			// close license pop up window;
			$("#attention-pop-up").slideUp();
		});

	// --- button event.preventDefault() -------------------------------------
		$("button").on("click",function(){
			/* prevent default */
			event.preventDefault();
		});

	// --- click on close mark will close every opened pop up window ---------
		$(".close").on("click",function(){
			// generally close every poped up window;
			$("#attention-pop-up").slideUp();
			$("#login-pop-up").slideUp();
			$("#balanceRemain-pop-up").slideUp();
			$("#license-pop-up").slideUp();
			$("#offer-pop-up").slideUp();
			$("#history-pop-up").slideUp();
		});

	// --- pagination --------------------------------------------------------
		$("#pagination-control-one").on("click",function(){
			$(".table-data-page").css("display","none");
			$("#table-data-page_one").slideToggle();
		})
		$("#pagination-control-two").on("click",function(){
			$(".table-data-page").css("display","none");
			$("#table-data-page_two").slideToggle();
		})
		$("#pagination-control-three").on("click",function(){
			$(".table-data-page").css("display","none");
			$("#table-data-page_three").slideToggle();
		})

	});
})();



