// hide them 1st

flashMessage.style.display = 'none';
f2vDiv.style.display = 'none';
v2fDiv.style.display = 'none';
notPostedDiv.style.display = 'none';
prevWorkedDiv.style.display = 'none';
generateMemoDiv.style.display = 'none';
otherMemoDiv.style.display = 'none';
viewer1.style.display = 'none';
viewer2.style.display = 'none';
viewer3.style.display = 'none';
viewer4.style.display = 'none';
viewer5.style.display = 'none';
copyViewer1.style.display = 'none';
copyViewer2.style.display = 'none';
copyViewer3.style.display = 'none';
copyViewer4.style.display = 'none';
copyViewer5.style.display = 'none';

refresh.addEventListener('click', () => {
    clearfrdToVld()
    clearvldToFrd();
    clearnotPostedDiv();
    clearprevWorked();
    cleargenerateMemo();
    clearotherMemo();

    viewer1.style.display = 'none';
    viewer2.style.display = 'none';
    viewer3.style.display = 'none';
    viewer4.style.display = 'none';
    viewer5.style.display = 'none';
    copyViewer1.style.display = 'none';
    copyViewer2.style.display = 'none';
    copyViewer3.style.display = 'none';
    copyViewer4.style.display = 'none';
    copyViewer5.style.display = 'none';


    console.log(memo);
    console.log(memo.length);
});


function getLast4(last4) {
    return last4.value.substr(last4.value.length - 4)
}

function intro() {
    // intro

    memo = `MCHSPT//<REPORT TYPE HERE>`

    // SF or RPL last 4

    if (SFLast4.value != '') {
        memo +=`//SF ${getLast4(SFLast4)}`;
    } else if (RPLLast4.value != '') {
        memo +=`//RPL ${getLast4(RPLLast4)}`;
    }

    // per request & request details
    if (rqstdate.value != '' && textareaRAFRqst.value != '') {
        memo +=`//referral on ${rqstdate.value} states, '${textareaRAFRqst.value}'`;
    } else if (rqstdate.value == '' && textareaRAFRqst.value != '') {
        memo +=`//referral states, '${textareaRAFRqst.value}'`;
    } else if (rqstdate.value == '' && textareaRAFRqst.value == '') {
        memo += ``;
    } else if (rqstdate.value != '' && textareaRAFRqst.value == '') {
        memo += `//referral date ${rqstdate.value}`;
    }

    // txn details
    if (textareaTxnDetails.value != '') {
        memo +=`//${textareaTxnDetails.value}`;
    }
}

function showDiv(div) {
    $(div)
    .slideDown(300);
}

function clearfrdToVld() {
    // hide div, clear the rest
    f2vDiv.style.display = 'none';
    // radio
    taggedVldAdj.checked = false;
    manualAdj.checked = false;
    rebillAfterFin.checked = false;
    // checkbox
    untaggedRPL.checked = false;
    sentCBRet.checked = false;
    movedMCtoRPL.checked = false;
    noFWIR.checked = false;
    // input
    sentCBRetInput.value = '';
    movedMCtoRPLInput.value = '';
}

function clearvldToFrd() {
    // hide div, clear the rest
    v2fDiv.style.display = 'none';
    // radio
    // checkbox
    taggedFrdv2f.checked = false;
    movedMCtoSF.checked = false;
    noFWIR2.checked = false;
    // input
    movedMCtoSFInput.value = '';
}

function clearnotPostedDiv() {
    // hide div, clear the rest
    notPostedDiv.style.display = 'none';
    // radio
    // checkbox
    taggedCORAG.checked = false;
    authN.checked = false;
    authPrevValid.checked = false;
    noFWIR3.checked = false;
    // input
}

function clearprevWorked() {
    // hide div, clear the rest
    prevWorkedDiv.style.display = 'none';
    // radio
    prevWorkedbyCSU.checked = false;
    prevWorkedbyRAF.checked = false;
    prevWorkedbyRPU.checked = false;
    // checkbox
    noFWIR4.checked = false;
    // input
}

function cleargenerateMemo() {
    // hide div, clear the rest
    generateMemoDiv.style.display = 'none';
    // radio
    // checkbox
    noFWIR5.checked = false;
    // input
    generateMemoTxt.value = '';
}

function clearotherMemo() {
    // hide div, clear the rest
    otherMemoDiv.style.display = 'none';
    // radio
    unableToLocate.checked = false;
    FPOBizCardTOTT.checked = false;
    txnOrigRPL.checked = false;
    // checkbox
    noFWIR6.checked = false;
    // input
}

function workfrdToVld() {
    intro();

    if (taggedVldAdj.checked == true) {
        if (textareaTxnDetails.value != '') {
            memo += `--tagged vld w/ adj credit SF${getLast4(SFLast4)} debit RPL${getLast4(RPLLast4)}`;
        } else if (textareaTxnDetails.value == '') {
            memo += `//tagged vld w/ adj credit SF${getLast4(SFLast4)} debit RPL${getLast4(RPLLast4)}`;
        }
    }

    if (manualAdj.checked == true) {
        if (textareaTxnDetails.value != '') {
            memo += `--manual adj credit SF${getLast4(SFLast4)} debit RPL${getLast4(RPLLast4)}`;
        } else if (textareaTxnDetails.value == '') {
            memo += `//manual adj credit SF${getLast4(SFLast4)} debit RPL${getLast4(RPLLast4)}`;
        }
    }

    if (rebillAfterFin.checked == true) {
        if (textareaTxnDetails.value != '') {
            memo += `--sent for approval rebill after finality`;
        } else if (textareaTxnDetails.value == '') {
            memo += `//sent for approval rebill after finality`;
        }
    }

    if (untaggedRPL.checked == true) {
        memo += `//removed frd tag`;
    }

    if (sentCBRet.checked == true) {
        if (sentCBRetInput.value == '') {
            memo += `//dispute prev processed, sent dispute return form`;
        } else if (sentCBRetInput.value != '') {
            memo += `//dispute prev processed, sent dispute return form for txn ${sentCBRetInput.value}`;
        }
    }

    if (movedMCtoRPL.checked == true) {
        if (movedMCtoRPLInput.value == '') {
            memo += `//manual adj MC to RPL, debit SF credit RPL, MC matches vld txn`;
        } else if (movedMCtoRPLInput.value != '') {
            memo += `//manual adj MC ${movedMCtoRPLInput.value} to RPL, debit SF credit RPL, MC matches vld txn`;
        }
    }

    if (taggedVldAdj.checked == true || rebillAfterFin.checked == true) {
        noFWIR.disabled = true;
        noFWIR.checked = false;
    } else {
        noFWIR.disabled = false;
    }
    
    if (noFWIR.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }
}

function workvldToFrd() {
    intro();

    if (textareaTxnDetails.value != '') {
        memo += `--`;
    } else if (textareaTxnDetails.value == '') {
        memo += `//`;
    }

    memo += `DEBIT SF${getLast4(SFLast4)} CREDIT RPL${getLast4(RPLLast4)}, fee calc T`

    if (taggedFrdv2f.checked == true) {
        memo += `//added frd tag`;
    }

    if (movedMCtoSF.checked == true) {
        if (movedMCtoSFInput.value != '') {
            memo += `//manual adj credit ${movedMCtoSFInput.value} to SF, credit SF debit RPL, credit matches frd txn`;
        } else if (movedMCtoSFInput.value == '') {
            memo += `//manual adj credit to SF, credit SF debit RPL, credit matches frd txn`;
        }
    }

    if (noFWIR2.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }
}

function worknotPosted() {
    intro();

    if (textareaTxnDetails.value != '') {
        memo += `--`;
    } else if (textareaTxnDetails.value == '') {
        memo += `//`;
    }

    memo += `not posted at time of review`;

    if (taggedCORAG.checked == true && authN.checked == true) {
        memo += `//tagged CORA G and auth N in WFRD`;
    } else if (taggedCORAG.checked == true) {
        memo += `//tagged CORA G in WFRD`;
    } else if (authN.checked == true) {
        memo += `//tagged auth N in WFRD`;
    }

    if (authPrevValid.checked == true) {
        memo += `//auth previously tagged as valid`;
    }

    if (noFWIR3.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }
}

function workprevWorked() {
    intro();

    if (textareaTxnDetails.value != '') {
        memo += `--`;
    } else if (textareaTxnDetails.value == '') {
        memo += `//`;
    }

    memo += `previously worked`;

    if (prevWorkedbyCSU.checked == true) {
        memo += ` by CSU`;
    } else if (prevWorkedbyRAF.checked == true) {
        memo += ` by RAF`;
    } else if (prevWorkedbyRPU.checked == true) {
        memo += ` by RPU`;
    }

    if (noFWIR4.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }
}

function workgenerateMemo() {
    intro();

    if (textareaTxnDetails.value != '') {
        memo += `--`;
    } else if (textareaTxnDetails.value == '') {
        memo += `//`;
    }

    memo += `${generateMemoTxt.value}`;

    if (noFWIR5.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }
}

function workotherMemo() {
    intro();

    if (textareaTxnDetails.value != '') {
        memo += `--`;
    } else if (textareaTxnDetails.value == '') {
        memo += `//`;
    }

    if (unableToLocate.checked == true) {
        memo += `unable to locate txn, sent invalid referral`
    } else if (FPOBizCardTOTT.checked == true) {
        memo += `BizCard TOTT, sent FPO referral for adj`
    } else if (txnOrigRPL.checked == true) {
        memo += `frd txn originated in RPL, sent FPO referral`
    }

    if (noFWIR6.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }
}

function displayViewer() {
    combinedMemo = memo;

    // clears viewer
    viewer1.textContent = '';
    viewer2.textContent = '';
    viewer3.textContent = '';

    // combining all memo
    combinedMemo = memo;
  
    // clears viewer
    viewer1.textContent = '';
    viewer2.textContent = '';
    viewer3.textContent = '';
    viewer4.textContent = '';
    viewer5.textContent = '';
  
    // displays viewer panel
    if (combinedMemo.length <= 250) {
      viewerContainer.style.display = 'block';
      viewer1.style.display = 'block';
      viewer1.textContent = combinedMemo;
      copyViewer1.style.display = 'block';
      copyViewer2.style.display = 'none';
      copyViewer3.style.display = 'none';
      copyViewer4.style.display = 'none';
      copyViewer5.style.display = 'none';
  
  
    } else if (combinedMemo.length <= 500 - continuation1.length) {
      viewer1.style.display = 'block';
      viewer2.style.display = 'block';
      viewer1.textContent = combinedMemo.substr(0, 250);
      viewer2.textContent = continuation1 + combinedMemo.substr(viewer1.textContent.length, 250 - continuation1.length);
      copyViewer1.style.display = 'block';
      copyViewer2.style.display = 'block';
      copyViewer3.style.display = 'none';
      copyViewer4.style.display = 'none';
      copyViewer5.style.display = 'none';
  
  
    } else if (combinedMemo.length <= 750 - continuation1.length - continuation2.length) {
      viewer1.style.display = 'block';
      viewer2.style.display = 'block';
      viewer3.style.display = 'block';
      viewer1.textContent = combinedMemo.substr(0, 250);
      viewer2.textContent = continuation1 + combinedMemo.substr(viewer1.textContent.length, 250 - continuation1.length);
      viewer3.textContent = continuation2 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length - continuation2.length, 250 - continuation2.length);
      copyViewer1.style.display = 'block';
      copyViewer2.style.display = 'block';
      copyViewer3.style.display = 'block';
      copyViewer4.style.display = 'none';
      copyViewer5.style.display = 'none';
    
    } else if (combinedMemo.length <= 1000) {
      viewer1.style.display = 'block';
      viewer2.style.display = 'block';
      viewer3.style.display = 'block';
      viewer4.style.display = 'block';
      viewer1.textContent = combinedMemo.substr(0, 250);
      viewer2.textContent = continuation1 + combinedMemo.substr(viewer1.textContent.length, 250 - continuation1.length);
      viewer3.textContent = continuation2 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length - continuation2.length, 250 - continuation2.length);
      viewer4.textContent = continuation3 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length + viewer3.textContent.length - continuation2.length - continuation3.length, 250 - continuation3.length);
      copyViewer1.style.display = 'block';
      copyViewer2.style.display = 'block';
      copyViewer3.style.display = 'block';
      copyViewer4.style.display = 'block';
      copyViewer5.style.display = 'none';
  
    } else if (combinedMemo.length <= 1250) {
      viewer1.style.display = 'block';
      viewer2.style.display = 'block';
      viewer3.style.display = 'block';
      viewer4.style.display = 'block';
      viewer5.style.display = 'block';
      viewer1.textContent = combinedMemo.substr(0, 250);
      viewer2.textContent = continuation1 + combinedMemo.substr(viewer1.textContent.length, 250 - continuation1.length);
      viewer3.textContent = continuation2 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length - continuation2.length, 250 - continuation2.length);
      viewer4.textContent = continuation3 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length + viewer3.textContent.length - continuation2.length - continuation3.length, 250 - continuation3.length);
      viewer5.textContent = continuation4 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length + viewer3.textContent.length + viewer4.textContent.length - continuation2.length - continuation3.length - continuation3.length, 250 - continuation4.length);
      copyViewer1.style.display = 'block';
      copyViewer2.style.display = 'block';
      copyViewer3.style.display = 'block';
      copyViewer4.style.display = 'block';
      copyViewer5.style.display = 'block';
  
    } else {
      alert('Memo must be less than 1186 characters.')
    }
    
    // sets the button span text to whatever the length of the viewer is
    $('#viewerContainer #viewer1 #copyViewer1 span').text(viewer1.textContent.length);
    $('#viewerContainer #viewer2 #copyViewer2 span').text(viewer2.textContent.length);
    $('#viewerContainer #viewer3 #copyViewer3 span').text(viewer3.textContent.length);
    $('#viewerContainer #viewer4 #copyViewer4 span').text(viewer4.textContent.length);
    $('#viewerContainer #viewer5 #copyViewer5 span').text(viewer5.textContent.length);
  
    copy1()
}