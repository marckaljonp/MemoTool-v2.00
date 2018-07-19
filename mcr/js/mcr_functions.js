// hide them 1st

flashMessage.style.display ='none'
divdnm.style.display = 'none';
divmove.style.display = 'none';
divprev.style.display = 'none';
viewer1.style.display = 'none';
viewer2.style.display = 'none';
viewer3.style.display = 'none';
copyViewer1.style.display = 'none';
copyViewer2.style.display = 'none';
copyViewer3.style.display = 'none';

function showDiv(div) {
    $(div)
    .slideDown(300);
}

function clearDNM() {
    //div
    divdnm.style.display = 'none';

    // checkbox
    AllCBReturn.checked = false;
    PartialMCRecv.checked = false;
    PartialCBReturn.checked = false;
    FullMCRecvWithExcess.checked = false;
    NoAccessDNM.checked = false;
    // text input
    PartialMCRecvInput.value ='';
    PartialCBReturnInput.value ='';
    ExcessMCAmount.value ='';
}

function clearMove() {
    //div
    divmove.style.display = 'none';

    // checkbox
    ICAdj.checked = false;
    ManualAdj.checked = false;
    NoAccessMove.checked = false;
    // text input
    ICAdjInput.value ='';
    SFLast4Input.value ='';
    RPLLast4Input.value ='';
}

function clearPrev() {
    //div
    divprev.style.display = 'none';

    // checkbox
    NoAccessPrev.checked = false;
}

function workDNM() {

    showDiv('#divdnm');

    if (PartialMCRecv.checked == true || reportType.value == 'BizCard Match' || reportType.value == 'BizCard No Match') {
        NoAccessDNM.checked = false;
        NoAccessDNM.disabled = true;
    } else {
        NoAccessDNM.disabled = false;
    }

    if (reportType.value == 'BizCard Match' || reportType.value == 'BizCard No Match') {
        PartialMCRecv.checked = false;
        PartialMCRecv.disabled = true;
        PartialMCRecvInput.disabled = true;
    } else {
        PartialMCRecv.disabled = false;
        PartialMCRecvInput.disabled = false;
    }
    
    memo = `MCHSPT//Manual Report//MCR ${reportType.value} ${reportDate.value}//no F tag removed, no macro adjustments//MC ${textareaAmount.value} to remain in SF d/t mtchng frd`;

    if (NoAccessDNM.checked == false && PartialMCRecv.checked == false) {
        memo += `, took recv in FWIR as MC`;
    }

    if (PartialMCRecv.checked == true) {
        memo += `, took recv in FWIR as partial MC to txn ${PartialMCRecvInput.value}`;
    } else {
        PartialMCRecvInput.value = '';
    }

    if (AllCBReturn.checked == true) {
        memo += `//dispute prev processed, sent dispute return form`;
    }

    if (PartialCBReturn.checked == true) {
        memo += `//dispute prev processed, sent for partial amt dispute return ${PartialCBReturnInput.value}`;
    } else {
        PartialCBReturnInput.value = '';
    }

    if (FullMCRecvWithExcess.checked == true) {
        memo += `//sent excess MC ret req ${ExcessMCAmount.value}`;
    } else {
        ExcessMCAmount.value ='';
    }

    if (NoAccessDNM.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }

    memo += '//NFAT';

    console.log(memo);
    console.log(memo.length);
};

function workMove() {

    showDiv('#divmove');

    if (reportType.value == 'BizCard Match' || reportType.value == 'BizCard No Match') {
        NoAccessMove.checked = false;
        NoAccessMove.disabled = true;
    } else {
        NoAccessMove.disabled = false;
    }

    if (ManualAdj.checked == false) {
        memo = `MCHSPT//Manual Report//MCR ${reportType.value} ${reportDate.value}//sent to have macro remove F tag and dbt SF crt RPL ${textareaAmount.value}//MC matches valid txn, merch in CH history`;
    } else {
        memo = `MCHSPT//Manual Report//MCR ${reportType.value} ${reportDate.value}//MC matches valid txn, merch in CH history//removed F tag and manual adj MC ${textareaAmount.value} dbt SF${SFLast4Input.value} crt RPL${RPLLast4Input.value}`;
    }

    if (ICAdj.checked == true) {
        memo += `//IC reversal ${ICAdjInput.value}, uploaded IC calc in FN`;
    } else {
        memo += `//no IC to adj`;
    }

    if (NoAccessMove.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }

    memo += `//NFAT`;

    console.log(memo);
    console.log(memo.length);
};

function workPrev() {

    if (reportType.value == 'BizCard Match' || reportType.value == 'BizCard No Match') {
        NoAccessPrev.checked = false;
        NoAccessPrev.disabled = true;
    } else {
        NoAccessPrev.disabled = false;
    }

    showDiv('#divprev');

    memo = `MCHSPT//Manual Report//MCR ${reportType.value} ${reportDate.value}//prev worked cred ${textareaAmount.value}`;

    if (NoAccessPrev.checked == true) {
        memo += `//acct inaccessible in FWIR`;
    }

    memo += `//NAT`;

    console.log(memo);
    console.log(memo.length);
};

refresh.addEventListener('click', () => {
    clearDNM();
    clearMove();
    clearPrev();
    flashMessage.style.display ='none'
    divdnm.style.display = 'none';
    divmove.style.display = 'none';
    divprev.style.display = 'none';
    viewer1.style.display = 'none';
    viewer2.style.display = 'none';
    viewer3.style.display = 'none';
    copyViewer1.style.display = 'none';
    copyViewer2.style.display = 'none';
    copyViewer3.style.display = 'none';
    textareaAmount.value = '';
    viewer1Placeholder.value = '';
    viewer2Placeholder.value = '';
    viewer3Placeholder.value = '';
});

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

function actionViewer() {
  console.clear();
  combinedMemo = memo + memo2 + memo3 + memo4 + memo5 + memo6 + memo7 + memo8 +memoLast2;
  console.log(combinedMemo);

  // clears viewer
  viewer1.textContent = '';
  viewer2.textContent = '';
  viewer3.textContent = '';
  viewer4.textContent = '';
  viewer5.textContent = '';

  // displays viewer panel
  if (combinedMemo.length <= 250) {
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
    viewer5.textContent = continuation3 + combinedMemo.substr(viewer1.textContent.length + viewer2.textContent.length + viewer3.textContent.length + viewer4.textContent.length - continuation2.length - continuation3.length - continuation4.length, 250 - continuation4.length);
    copyViewer1.style.display = 'block';
    copyViewer2.style.display = 'block';
    copyViewer3.style.display = 'block';
    copyViewer4.style.display = 'block';
    copyViewer5.style.display = 'block';

  } else {
    alert('Memo must be less than 1186 characters.')
  }
  
  // sets the button span text to whatever the length of the viewer is
  $('button.copy.copyViewer1 span').text(viewer1.textContent.length);
  $('button.copy.copyViewer2 span').text(viewer2.textContent.length);
  $('button.copy.copyViewer3 span').text(viewer3.textContent.length);
  $('button.copy.copyViewer4 span').text(viewer4.textContent.length);
  $('button.copy.copyViewer5 span').text(viewer5.textContent.length);

  copy1()
}