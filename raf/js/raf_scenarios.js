frdToVld.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input value
    showDiv(f2vDiv);

    // clearfrdToVld()
    clearvldToFrd();
    clearnotPostedDiv();
    clearprevWorked();
    cleargenerateMemo();
    clearotherMemo();
    //constructs the memo
    workfrdToVld();
    //copy function, including flash message
    displayViewer();

    console.log(memo);
    console.log(memo.length);
});

vldToFrd.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input value
    showDiv(v2fDiv);

    clearfrdToVld()
    // clearvldToFrd();
    clearnotPostedDiv();
    clearprevWorked();
    cleargenerateMemo();
    clearotherMemo();
    //constructs the memo
    workvldToFrd();
    //copy function, including flash message
    displayViewer();

    console.log(memo);
    console.log(memo.length);
});

notPosted.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input value
    showDiv(notPostedDiv);

    clearfrdToVld()
    clearvldToFrd();
    // clearnotPostedDiv();
    clearprevWorked();
    cleargenerateMemo();
    clearotherMemo();
    //constructs the memo
    worknotPosted();
    //copy function, including flash message
    displayViewer();

    console.log(memo);
    console.log(memo.length);
});

prevWorked.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input value
    showDiv(prevWorkedDiv);

    clearfrdToVld()
    clearvldToFrd();
    clearnotPostedDiv();
    // clearprevWorked();
    cleargenerateMemo();
    clearotherMemo();
    //constructs the memo
    workprevWorked();
    //copy function, including flash message
    displayViewer();

    console.log(memo);
    console.log(memo.length);
});

generateMemo.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input value
    showDiv(generateMemoDiv);

    clearfrdToVld()
    clearvldToFrd();
    clearnotPostedDiv();
    clearprevWorked();
    // cleargenerateMemo();
    clearotherMemo();
    //constructs the memo
    workgenerateMemo();
    //copy function, including flash message
    displayViewer();

    console.log(memo);
    console.log(memo.length);
});

otherMemo.addEventListener('click', () => {
    //hides other divs, unchecks, and removes input value
    showDiv(otherMemoDiv);

    clearfrdToVld()
    clearvldToFrd();
    clearnotPostedDiv();
    clearprevWorked();
    cleargenerateMemo();
    // clearotherMemo();
    //constructs the memo
    workotherMemo();
    //copy function, including flash message
    displayViewer();

    console.log(memo);
    console.log(memo.length);
});