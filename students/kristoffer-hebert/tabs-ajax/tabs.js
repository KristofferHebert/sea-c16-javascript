$(document).ready(function() {


    $.getJSON('http://rs.hankyates.com:3000/content', function() {
        console.log('successfully connected');
    }).done(function(pages) {
        var temp,
            output,
            navOutput;
        $.each(pages, function(key, page) {
            output = $('<section />', {
                id: page.name,
                class: 'tab'
            });
            output.append('<h2>' + page.name + '</h2>');
            output.append('<p>' + page.content + '</p>');
            $('#content').append(output);
        });

        $.each(pages, function(key, page) {
            navOutput = $('<li><a href="#' + page.name + '">' + page.name + '</a></li>');

            $('nav ul').append(navOutput);
        });

        $('nav a').on('click', function(e) {
            var anchor = $(this),
                target = $(anchor.attr("href")),
                tabs = $('.tab'),
                nav = $('nav a');

            nav.removeClass('active');
            anchor.addClass('active');
            tabs.removeClass('show');
            target.addClass('show');
        });

        $('nav a:first').click();


    }).error(function(err) {
        console.log(err.statusText);
    });
});