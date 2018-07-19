$('.copy').hide();
$('#flashMessage').hide();

function copy1() {
    // transfer contents of div to textarea dummy holder (because .select() function only works on input or textarea)
    viewer1Placeholder.value = viewer1.textContent;

    // from the interwebzzz
    var copyText = viewer1Placeholder;
    copyText.select();
    document.execCommand("Copy");

    // color change indicating that text was already copied
    viewer1.style.backgroundColor = 'seagreen';

    // notification
    flashmsg()
}

function copy2() {
    // transfer contents of div to textarea dummy holder (because .select() function only works on input or textarea)
    viewer2Placeholder.value = viewer2.textContent;

    // from the interwebzzz
    var copyText = viewer2Placeholder;
    copyText.select();
    document.execCommand("Copy");

    // color change indicating that text was already copied
    viewer2.style.backgroundColor = 'seagreen';

    // notification
    flashmsg()
}

function copy3() {
    // transfer contents of div to textarea dummy holder (because .select() function only works on input or textarea)
    viewer3Placeholder.value = viewer3.textContent;

    // from the interwebzzz
    var copyText = viewer3Placeholder;
    copyText.select();
    document.execCommand("Copy");
    // color change indicating that text was already copied
    viewer3.style.backgroundColor = 'seagreen';

    // notification
    flashmsg()
}

function copy4() {
    // transfer contents of div to textarea dummy holder (because .select() function only works on input or textarea)
    viewer4Placeholder.value = viewer4.textContent;

    // from the interwebzzz
    var copyText = viewer4Placeholder;
    copyText.select();
    document.execCommand("Copy");
    // color change indicating that text was already copied
    viewer4.style.backgroundColor = 'seagreen';

    // notification
    flashmsg()
}

function copy5() {
    // transfer contents of div to textarea dummy holder (because .select() function only works on input or textarea)
    viewer5Placeholder.value = viewer5.textContent;

    // from the interwebzzz
    var copyText = viewer5Placeholder;
    copyText.select();
    document.execCommand("Copy");
    // color change indicating that text was already copied
    viewer5.style.backgroundColor = 'seagreen';

    // notification
    flashmsg()
}


function flashmsg() {
$('#flashMessage')
    .slideDown(300)
    .delay(200)
    .slideUp(300);
}

// RAF BUTTON CLICK
$('.RAFFlexChildrafScenarioButton ul li button').click(function () {
  $('.RAFFlexChildrafScenarioButton ul li button').css('background-color', '#34515e');
  $(this).css('background-color', 'LightSlateGray');
});

// MCR BUTTON CLICK
$('.mcrScenarioButtons ul li button').click(function () {
    $('.mcrScenarioButtons ul li button').css('background-color', '#34515e');
    $(this).css('background-color', 'LightSlateGray');
});

// REMED BUTTON CLICK
$('.remedScenarioButtons ul li button').click(function () {
    $('.remedScenarioButtons ul li button').css('background-color', '#34515e');
    $(this).css('background-color', 'LightSlateGray');
});