buttondnm.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input
    clearMove();
    clearPrev();
    //constructs the memo
    workDNM();
    //copy function, including flash message
    DisplayViewer();
});

buttonmove.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input
    clearDNM();
    clearPrev();
    //constructs the memo
    workMove();
    //copy function, including flash message
    DisplayViewer();
});

buttonprev.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input
    clearDNM();
    clearMove();
    //constructs the memo
    workPrev();
    //copy function, including flash message
    DisplayViewer();
});