$(document).ready(function()
{
	$(".fancybox").fancybox();
});

$(document).ready(function()
{
	$(".answer").hide();
	$(".question").click(function()
	{
		$(this).next(".answer").slideToggle(500);
	});
});

$(document).ready(function()
{
	$("#hiddenform").hide();
	$("#checkavailability").click(function()
	{
		if (!(Date.parse(document.form1.checkin.value) && Date.parse(document.form1.checkout.value)))
		{
			alert("Please choose a valid Check-In and Check-Out date.");
		}
		else
		{
			$("#hiddenform").slideToggle(500);
			$("#submit").click(function(event)
			{
				if (!(document.form1.fname.value == "" || document.form1.lname.value == "" || document.form1.email.value == "" || document.form1.phone.value == ""))
				{
					event.Default();
				}
				else
				{
					alert("Please fill in all personal detail fields.");
					event.preventDefault();
				}
			});
		}
	});
});