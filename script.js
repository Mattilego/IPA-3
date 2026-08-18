document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", update);
});

function update() {
    const AA = parseFloat(document.getElementById("AAinput").value) || 0;
    const OF = parseFloat(document.getElementById("OFinput").value) || 0;
    const GH = parseFloat(document.getElementById("GHinput").value) || 0;
    const SM = parseFloat(document.getElementById("SMinput").value) || 0;
    const SS = parseFloat(document.getElementById("SSinput").value) || 0;
    const RS = parseFloat(document.getElementById("RSinput").value) || 0;
    const MS = parseFloat(document.getElementById("MSinput").value) || 0;
    const SO = parseFloat(document.getElementById("SOinput").value) || 0;
    const AK = parseFloat(document.getElementById("AKinput").value) || 0;
    const NO = parseFloat(document.getElementById("NOinput").value) || 0;
    const SSB = parseFloat(document.getElementById("SSBinput").value) || 0;
    const SLB = parseFloat(document.getElementById("SLBinput").value) || 0;
    const age = parseInt(document.getElementById("ageInput").value) || 6;

    if (age < 6 || age > 13) {
        return;
    }

    const rawToStdPnt = window.Tables.rawToStdPnt;
    const stdPntToPerc = window.Tables.stdPntToPerc;
    const stdPntToStan = window.Tables.stdPntToStan;
    const sum12ToKvot = window.Tables.sum12ToKvot;
    const sum6ToKvot = window.Tables.sum6ToKvot;
    const sum2ToKvot = window.Tables.sum2ToKvot;
    const kvotToPerc = window.Tables.kvotToPerc;
    const percToStan = window.Tables.percToStan;

    const AAStd = rawToStdPnt[age][0][AA];
    const OFStd = rawToStdPnt[age][1][Math.min(OF,21)];
    const GHStd = rawToStdPnt[age][2][Math.min(GH,23)];
    const SMStd = rawToStdPnt[age][3][Math.min(SM,24)];
    const SSStd = rawToStdPnt[age][4][Math.min(SS,25)];
    const RSStd = rawToStdPnt[age][5][Math.min(RS,9)];
    const MSStd = rawToStdPnt[age][6][Math.min(MS,9)];
    const SOStd = rawToStdPnt[age][7][Math.min(SO,17)];
    const AKStd = rawToStdPnt[age][8][Math.min(AK,17)];
    const NOStd = rawToStdPnt[age][9][Math.min(NO,24)];
    const SSBStd = rawToStdPnt[age][10][Math.min(SSB,13)];
    const SLBStd = rawToStdPnt[age][11][Math.min(SLB,22)];

    const AAperc = stdPntToPerc[AAStd];
    const OFperc = stdPntToPerc[OFStd];
    const GHperc = stdPntToPerc[GHStd];
    const SMperc = stdPntToPerc[SMStd];
    const SSperc = stdPntToPerc[SSStd];
    const RSperc = stdPntToPerc[RSStd];
    const MSperc = stdPntToPerc[MSStd];
    const SOperc = stdPntToPerc[SOStd];
    const AKperc = stdPntToPerc[AKStd];
    const NOperc = stdPntToPerc[NOStd];
    const SSBperc = stdPntToPerc[SSBStd];
    const SLBperc = stdPntToPerc[SLBStd];

    const AAStan = stdPntToStan[AAStd];
    const OFStan = stdPntToStan[OFStd];
    const GHStan = stdPntToStan[GHStd];
    const SMStan = stdPntToStan[SMStd];
    const SSStan = stdPntToStan[SSStd];
    const RSStan = stdPntToStan[RSStd];
    const MSStan = stdPntToStan[MSStd];
    const SOStan = stdPntToStan[SOStd];
    const AKStan = stdPntToStan[AKStd];
    const NOStan = stdPntToStan[NOStd];
    const SSBStan = stdPntToStan[SSBStd];
    const SLBStan = stdPntToStan[SLBStd];

    const generalSum = AAStan + OFStan + GHStan + SMStan + SSStan + RSStan + MSStan + SOStan + AKStan + NOStan + SSBStan + SLBStan;
    const speakingSum = AAStan + OFStan + GHStan + SMStan + SSStan + RSStan;
    const writingSum = MSStan + SOStan + AKStan + NOStan + SSBStan + SLBStan;
    const semanticSum = AAStan + OFStan;
    const grammarSum = GHStan + SMStan;
    const fonologySum = SSStan + RSStan;
    const understandingSum = MSStan + SOStan;
    const decodingSum = AKStan + NOStan;
    const spellingSum = SSBStan + SLBStan;
    const visSymbrocSum = AKStan + SSBStan;
    const audSymbprocSum = NOStan + SLBStan;

    const generalKvot = sum12ToKvot[generalSum];
    const speakingKvot = sum6ToKvot[speakingSum];
    const writingKvot = sum6ToKvot[writingSum];
    const semanticKvot = sum2ToKvot[semanticSum];
    const grammarKvot = sum2ToKvot[grammarSum];
    const fonologyKvot = sum2ToKvot[fonologySum];
    const understandingKvot = sum2ToKvot[understandingSum];
    const decodingKvot = sum2ToKvot[decodingSum];
    const spellingKvot = sum2ToKvot[spellingSum];
    const visSymbrocKvot = sum2ToKvot[visSymbrocSum];
    const audSymbprocKvot = sum2ToKvot[audSymbprocSum];

    const generalPerc = kvotToPerc[generalKvot];
    const speakingPerc = kvotToPerc[speakingKvot];
    const writingPerc = kvotToPerc[writingKvot];
    const semanticPerc = kvotToPerc[semanticKvot];
    const grammarPerc = kvotToPerc[grammarKvot];
    const fonologyPerc = kvotToPerc[fonologyKvot];
    const understandingPerc = kvotToPerc[understandingKvot];
    const decodingPerc = kvotToPerc[decodingKvot];
    const spellingPerc = kvotToPerc[spellingKvot];
    const visSymbrocPerc = kvotToPerc[visSymbrocKvot];
    const audSymbprocPerc = kvotToPerc[audSymbprocKvot];

    const generalStan = percToStan[generalPerc];
    const speakingStan = percToStan[speakingPerc];
    const writingStan = percToStan[writingPerc];
    const semanticStan = percToStan[semanticPerc];
    const grammarStan = percToStan[grammarPerc];
    const fonologyStan = percToStan[fonologyPerc];
    const understandingStan = percToStan[understandingPerc];
    const decodingStan = percToStan[decodingPerc];
    const spellingStan = percToStan[spellingPerc];
    const visSymbrocStan = percToStan[visSymbrocPerc];
    const audSymbprocStan = percToStan[audSymbprocPerc];

    fillClass("AAperc", AAperc);
    fillClass("OFperc", OFperc);
    fillClass("GHperc", GHperc);
    fillClass("SMperc", SMperc);
    fillClass("SSperc", SSperc);
    fillClass("RSperc", RSperc);
    fillClass("MSperc", MSperc);
    fillClass("SOperc", SOperc);
    fillClass("AKperc", AKperc);
    fillClass("NOperc", NOperc);
    fillClass("SSBperc", SSBperc);
    fillClass("SLBperc", SLBperc);

    fillClass("AAstd", AAStd);
    fillClass("OFstd", OFStd);
    fillClass("GHstd", GHStd);
    fillClass("SMstd", SMStd);
    fillClass("SSstd", SSStd);
    fillClass("RSstd", RSStd);
    fillClass("MSstd", MSStd);
    fillClass("SOstd", SOStd);
    fillClass("AKstd", AKStd);
    fillClass("NOstd", NOStd);
    fillClass("SSBstd", SSBStd);
    fillClass("SLBstd", SLBStd);

    fillClass("AAstan", AAStan);
    fillClass("OFstan", OFStan);
    fillClass("GHstan", GHStan);
    fillClass("SMstan", SMStan);
    fillClass("SSstan", SSStan);
    fillClass("RSstan", RSStan);
    fillClass("MSstan", MSStan);
    fillClass("SOstan", SOStan);
    fillClass("AKstan", AKStan);
    fillClass("NOstan", NOStan);
    fillClass("SSBstan", SSBStan);
    fillClass("SLBstan", SLBStan);

    fillClass("generalSum", generalSum);
    fillClass("speakingSum", speakingSum);
    fillClass("writingSum", writingSum);
    fillClass("semanticSum", semanticSum);
    fillClass("grammarSum", grammarSum);
    fillClass("fonologySum", fonologySum);
    fillClass("understandingSum", understandingSum);
    fillClass("decodingSum", decodingSum);
    fillClass("spellingSum", spellingSum);
    fillClass("visSymbProcSum", visSymbrocSum);
    fillClass("audSymbProcSum", audSymbprocSum);

    fillClass("generalKvot", generalKvot);
    fillClass("speakingKvot", speakingKvot);
    fillClass("writingKvot", writingKvot);
    fillClass("semanticKvot", semanticKvot);
    fillClass("grammarKvot", grammarKvot);
    fillClass("fonologyKvot", fonologyKvot);
    fillClass("understandingKvot", understandingKvot);
    fillClass("decodingKvot", decodingKvot);
    fillClass("spellingKvot", spellingKvot);
    fillClass("visSymbProcKvot", visSymbrocKvot);
    fillClass("audSymbProcKvot", audSymbprocKvot);

    fillClass("generalPerc", generalPerc);
    fillClass("speakingPerc", speakingPerc);
    fillClass("writingPerc", writingPerc);
    fillClass("semanticPerc", semanticPerc);
    fillClass("grammarPerc", grammarPerc);
    fillClass("fonologyPerc", fonologyPerc);
    fillClass("understandingPerc", understandingPerc);
    fillClass("decodingPerc", decodingPerc);
    fillClass("spellingPerc", spellingPerc);
    fillClass("visSymbProcPerc", visSymbrocPerc);
    fillClass("audSymbProcPerc", audSymbprocPerc);

    fillClass("generalStan", generalStan);
    fillClass("speakingStan", speakingStan);
    fillClass("writingStan", writingStan);
    fillClass("semanticStan", semanticStan);
    fillClass("grammarStan", grammarStan);
    fillClass("fonologyStan", fonologyStan);
    fillClass("understandingStan", understandingStan);
    fillClass("decodingStan", decodingStan);
    fillClass("spellingStan", spellingStan);
    fillClass("visSymbProcStan", visSymbrocStan);
    fillClass("audSymbProcStan", audSymbprocStan);

    drawDiagrams()
}

function fillClass(className, value) {
    document.querySelectorAll(`.${className}`).forEach((element) => {
        element.textContent = value;
    });
}

function drawDiagrams(){
    const ctxk = document.querySelector("#kvotGraph").getContext("2d");
    const ctxp = document.querySelector("#stdPointGraph").getContext("2d");
}

document.querySelector("#print").addEventListener("click", ()=>{
    window.print();
});

update();