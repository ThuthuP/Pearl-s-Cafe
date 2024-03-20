// JavaScript code for responsive navigation
$(document).ready(function(){
    $('.menu-item').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Handle form submission for adding items to cart
    $('#coffee-form, #pastry-form').submit(function(event) {
        event.preventDefault();

        // Get form data
        var formData = $(this).serialize();

        // Perform AJAX request to submit order
        $.ajax({
            type: 'POST',
            url: 'submit_order.php', // Adjust URL to your PHP script
            data: formData,
            success: function(response) {
                // Handle success response
                alert('Item added to cart!');
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.error(xhr.responseText);
                alert('An error occurred. Please try again.');
            }
        });
    });
});

