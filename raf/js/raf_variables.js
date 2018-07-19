// div

const flashMessage = document.querySelector('#flashMessage');

const f2vDiv = document.querySelector('#f2vDiv');
const v2fDiv = document.querySelector('#v2fDiv');
const notPostedDiv = document.querySelector('#notPostedDiv');
const prevWorkedDiv = document.querySelector('#prevWorkedDiv');
const generateMemoDiv = document.querySelector('#generateMemoDiv');
const otherMemoDiv = document.querySelector('#otherMemoDiv');
const viewerContainer = document.querySelector('#viewerContainer');

const viewer1 = document.querySelector('#viewer1 p');
const viewer2 = document.querySelector('#viewer2 p');
const viewer3 = document.querySelector('#viewer3 p');
const viewer4 = document.querySelector('#viewer4 p');
const viewer5 = document.querySelector('#viewer5 p');

// input

const SFLast4 = document.querySelector('#SFLast4');
const RPLLast4 = document.querySelector('#RPLLast4');

const rqstdate = document.querySelector('#rqstdate');

const sentCBRetInput = document.querySelector('#sentCBRetInput');
const movedMCtoRPLInput = document.querySelector('#movedMCtoRPLInput');

const movedMCtoSFInput = document.querySelector('#movedMCtoSFInput');

// button

const frdToVld = document.querySelector('#frdToVld');
const vldToFrd = document.querySelector('#vldToFrd');
const notPosted = document.querySelector('#notPosted');
const prevWorked = document.querySelector('#prevWorked');
const generateMemo = document.querySelector('#generateMemo');
const otherMemo = document.querySelector('#otherMemo');

const copyViewer1 = document.querySelector('#copyViewer1');
const copyViewer2 = document.querySelector('#copyViewer2');
const copyViewer3 = document.querySelector('#copyViewer3');
const copyViewer4 = document.querySelector('#copyViewer4');
const copyViewer5 = document.querySelector('#copyViewer5');

// checkbox

const untaggedRPL = document.querySelector('#untaggedRPL');
const sentCBRet = document.querySelector('#sentCBRet');
const movedMCtoRPL = document.querySelector('#movedMCtoRPL');
const noFWIR = document.querySelector('#noFWIR');

const taggedFrdv2f = document.querySelector('#taggedFrdv2f');
const movedMCtoSF = document.querySelector('#movedMCtoSF');
const noFWIR2 = document.querySelector('#noFWIR2');

const taggedCORAG = document.querySelector('#taggedCORAG');
const authN = document.querySelector('#authN');
const authPrevValid = document.querySelector('#authPrevValid');
const noFWIR3 = document.querySelector('#noFWIR3');

const noFWIR4 = document.querySelector('#noFWIR4');

const noFWIR5 = document.querySelector('#noFWIR5');

const noFWIR6 = document.querySelector('#noFWIR6');

// radio

const taggedVldAdj = document.querySelector('#taggedVldAdj');
const manualAdj = document.querySelector('#manualAdj');
const rebillAfterFin = document.querySelector('#rebillAfterFin');

const prevWorkedbyCSU = document.querySelector('#prevWorkedbyCSU');
const prevWorkedbyRAF = document.querySelector('#prevWorkedbyRAF');
const prevWorkedbyRPU = document.querySelector('#prevWorkedbyRPU');

const unableToLocate = document.querySelector('#unableToLocate');
const FPOBizCardTOTT = document.querySelector('#FPOBizCardTOTT');
const txnOrigRPL = document.querySelector('#txnOrigRPL');

// textarea

const textareaRAFRqst = document.querySelector('#textareaRAFRqst');

const textareaTxnDetails = document.querySelector('#textareaTxnDetails');

const generateMemoTxt = document.querySelector('#generateMemoTxt');


// global scope variables

let memo = '';
let combinedMemo = '';
let continuation1 = 'MCHSPT//cont1...';
let continuation2 = 'MCHSPT//cont2...';
let continuation3 = 'MCHSPT//cont3...';
let continuation4 = 'MCHSPT//cont4...';