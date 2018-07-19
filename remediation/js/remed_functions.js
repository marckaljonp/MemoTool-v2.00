// hide them 1st

flashMessage.style.display ='none'
divRemedNoFWIR.style.display = 'none';
viewer1.style.display = 'none';
viewer2.style.display = 'none';
viewer3.style.display = 'none';
copyViewer1.style.display = 'none';
copyViewer2.style.display = 'none';
copyViewer3.style.display = 'none';


// clear divRemedNoFWIR
function clearDivRemedNoFWIR() {
    divRemedNoFWIR.style.display = 'none';
}

function DisplayViewer() {
    // clears viewer
    viewer1.textContent = '';
    viewer2.textContent = '';
    viewer3.textContent = '';

    // combining all memo
    combinedMemo = memo;

    // displays viewer panel
    if (combinedMemo.length <= 250) {
        viewer1.style.display = 'block';
        viewer1.textContent = combinedMemo;
        copyViewer1.style.display = 'block';

        copy1()
    } else if (combinedMemo.length <= 485) {
        viewer1.style.display = 'block';
        viewer2.style.display = 'block';
        viewer1.textContent = combinedMemo.substr(0, 250);
        viewer2.textContent = continuation1 + combinedMemo.substr(viewer1.textContent.length, 250 - continuation1.length);
        copyViewer1.style.display = 'block';
        copyViewer2.style.display = 'block';

        copy1()
    } else if (combinedMemo.length <= 719) {
        viewer1.style.display = 'block';
        viewer2.style.display = 'block';
        viewer3.style.display = 'block';
        viewer1.textContent = combinedMemo.substr(0, 250);
        viewer2.textContent = continuation1 + combinedMemo.substr(viewer1.textContent.length, 250 - continuation1.length);
        viewer3.textContent = continuation2 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length - continuation2.length, 250 - continuation2.length);
        copyViewer1.style.display = 'block';
        copyViewer2.style.display = 'block';
        copyViewer3.style.display = 'block';

        copy1()
    } else {
        alert('Memo must be less than 765 characters.')
    }

    // sets the button span text to whatever the length of the viewer is
    $('#viewerContainer #viewer1 #copyViewer1 span').text(viewer1.textContent.length);
    $('#viewerContainer #viewer2 #copyViewer2 span').text(viewer2.textContent.length);
    $('#viewerContainer #viewer3 #copyViewer3 span').text(viewer3.textContent.length);
}

refresh.addEventListener('click', () => {
    clearDivRemedNoFWIR()
    textareaAmount.value = ''
    viewer1.style.display = 'none';
    viewer2.style.display = 'none';
    viewer3.style.display = 'none';
    copyViewer1.style.display = 'none';
    copyViewer2.style.display = 'none';
    copyViewer3.style.display = 'none';
});