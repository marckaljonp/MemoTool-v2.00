s1.addEventListener('click', () => {
    memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//MC ${textareaAmount.value}--removed F tag, took recovery in FWIR as MC//NFAT`;

    clearDivRemedNoFWIR();
    DisplayViewer();

    console.log(memo);
    console.log(memo.length);
});

s2.addEventListener('click', () => {
    memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//MC ${textareaAmount.value}--removed F tag, prev recovered in FWIR//NFAT`;

    clearDivRemedNoFWIR();
    DisplayViewer();

    console.log(memo);
    console.log(memo.length);
});

s3.addEventListener('click', () => {
    memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//MC ${textareaAmount.value}--F tag prev removed, took recovery in FWIR as MC//NFAT`;

    clearDivRemedNoFWIR();
    DisplayViewer();

    console.log(memo);
    console.log(memo.length);
});

s4.addEventListener('click', () => {
    memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//MC ${textareaAmount.value}--F tag prev removed, prev recovered in FWIR//NAT`;

    clearDivRemedNoFWIR();
    DisplayViewer();

    console.log(memo);
    console.log(memo.length);
});

s5.addEventListener('click', () => {
    memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//prev worked cred ${textareaAmount.value}//NAT`;

    clearDivRemedNoFWIR();
    DisplayViewer();

    console.log(memo);
    console.log(memo.length);
});

s6.addEventListener('click', () => {
    // divRemedNoFWIR.style.display = 'block';
    $('#divRemedNoFWIR')
    .slideDown(200)
    .delay(200);

    if (NoFTagRemoved.checked == true){
        memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//working on MC ${textareaAmount.value}//no F tag removed//unable to access acct in FWIR//NFAT`;
    } else {
        memo = `MCHSPT//R-CASTT//Unrecovered Transactions Report//working on MC ${textareaAmount.value}//manually removed F tag//unable to access acct in FWIR//NFAT`;
    }
    
    DisplayViewer();

    console.log(memo);
    console.log(memo.length);
});