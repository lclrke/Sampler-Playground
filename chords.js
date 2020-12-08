
var Am = ["A2","A3","C4","E4"];
var Am7 = ["A2","A3","C4","E4","G4"];
var AGm = ["A2","G3","B3","D4"];

var Bm= ["B2","G3","B3","D4"];
var Bmo= ["B2","B3","D4","G4"];

var CM = ["C2","C3","E3","G3"];
var CMo = ["C2","C3","E4","G4"];

var Dm = ["D2","D3","F3","A3"];
var Dm7 = ["D2","D3","F3","A3","C4"];

var Em = ["E2","E3","G3","B3"];
var Eam = ["E2","E3","A3","C4"];

var FM = ["F2","F3","A3","C4"];
var FM7 = ["F2","F3","A3","C4","E4"];

var GM = ["G2","G3","B3","D4"];
var GfM = ["G2","F3","A3","C4"];


//CD
const CDA_112 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Dm, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]

const CDAF = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Dm, duration: "1m" },
           { time: "2m", note: Am, duration: "1m" },
         { time: "3m", note: Am, duration: "1m" }]

//CE

const CEGf_112 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: GfM, duration: "2m" }]

const CEF_112 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
//CF

const CF_22 = [{ time: "0m", note: CM, duration: "2m" },
         { time: "2m", note: FM, duration: "2m" }]

//CF

const CGF_112 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: GM, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]

const CGFGf = [{ time: "0m", note: CM, duration: "1m" },
              { time: "1m", note: GM, duration: "1m" },
              { time: "2m", note: FM, duration: "1m" },
              { time: "3m", note: GfM, duration: "1m" }]

const CGA_112 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: GM, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]


//CB
const CBA_112 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]


const CBAF = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: Am, duration: "1m" },
         { time: "3m", note: FM, duration: "1m" }]

const CBF_112 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]


//AC

const ACF_112 =     [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: FM, duration: "2m" }]


const ACFGf = [{ time: "0m", note: Am, duration: "1m" },
                  { time: "1m", note: CM, duration: "1m" },
                  { time: "2m", note: FM, duration: "1m" },
                  { time: "3m", note: GfM, duration: "1m" }]

const ACD_112= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: Dm, duration: "2m" }]

const ACGF = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: GM, duration: "1m" },
            { time: "3m", note: FM, duration: "1m" }]
//AD
const AD_22 =     [{ time: "0m", note: Am7, duration: "2m" },
            { time: "2m", note: Dm7, duration: "2m" }]
//
const ADC_211 =     [{ time: "0m", note: Am, duration: "2m" },
            { time: "2m", note: Dm, duration: "1m" },
          { time: "3m", note: CMo, duration: "1m" },]
//

const ADCF =     [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
          { time: "2m", note: CMo, duration: "1m" },
        { time: "3m", note: FM, duration: "1m" },]
//

const ADGf_211 =     [{ time: "0m", note: Am7, duration: "2m" },
            { time: "2m", note: Dm7, duration: "1m" },
          { time: "3m", note: GfM, duration: "1m" },]
//

//AE
const AECD = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Em, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: Dm, duration: "1m" }]


const AED7_112 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Em, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]


//AF

const AFC_112= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: CM, duration: "2m" }]

const AFCG= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]



//AG
const AGC_112 = [{ time: "0m", note: Am, duration: "1m" },
          { time: "1m", note: GM, duration: "1m" },
          { time: "2m", note: CM, duration: "2m" }]
//
const AGCF = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: FM, duration: "1m" }]





const AGFD = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "1m" },
            { time: "3m", note: Dm7, duration: "1m" }]

const AGD7_112 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]






//FA


const F7A7_22 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Am7, duration: "2m" }]
///
const FAC_211 = [{ time: "0m", note: FM, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///
const FAD_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
const FAG_211 = [{ time: "0m", note: FM, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
const FAG_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: GM, duration: "2m" }]
///


const FAGD7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///

const FABD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: Bmo, duration: "1m" },
     { time: "3m", note: Dm, duration: "1m" }]
///


//FC

const FC_22 = [{ time: "0m", note: CM, duration: "2m" },
         { time: "2m", note: FM, duration: "2m" }]
////
const FCD_112 = [{ time: "0m", note: FM7, duration: "1m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///

const FCG_211 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" }]
///
const F7CGf_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: GfM, duration: "2m" }]
///


//FD

const F7D7_22 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "2m" }]
///
//FDA

const FDA_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
///


const FDAG = [{ time: "0m", note: FM, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
            { time: "2m", note: Am7, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]
///

const FDAC = [{ time: "0m", note: FM, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
            { time: "2m", note: Am7, duration: "1m" },
            { time: "3m", note: CM, duration: "1m" }]

//FDC
const FDC_211 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: CMo, duration: "1m" }]
///

const FDC_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///


const FDCG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
         { time: "2m", note: CM, duration: "1m" },
         { time: "3m", note: GM, duration: "1m" }]
///

//FDG

const FDG_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: GM, duration: "2m" }]
///
const FDGf_112 = [{ time: "0m", note: FM, duration: "2m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: GfM, duration: "1m" }]
///


const FDGA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Am, duration: "2m" }]
///





//FE
const FEaD_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Eam, duration: "1m" },
       { time: "2m", note: Dm7, duration: "2m" }]

const FED_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///

const FEGfD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: GfM, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
const FEAD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Am7, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
const FEAG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///
//FG
const FGA_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
///
const FGAG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
const FGAD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: Dm7, duration: "1m" }]
///
const FGAC = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///
const FGAE = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: Em, duration: "1m" }]
///
const FGC_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///

const FGCG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///
const FGCGf = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: GfM, duration: "1m" }]
///

const FGCD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: Dm, duration: "1m" }]
///
const FGCA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: Am, duration: "1m" }]
///

//FGD
const FGD_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]

const FGfD_112 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GfM, duration: "1m" },
       { time: "2m", note: Dm7, duration: "2m" }]
///
const FGDA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
         { time: "2m", note: Dm, duration: "1m" },
         { time: "3m", note: Am, duration: "1m" }]
///




//DA
const DA_22 = [{ time: "0m", note: Dm7, duration: "2m" },
         { time: "2m", note: Am7, duration: "2m" }]
///
///DAC
const DAC_211 = [{ time: "0m", note: Dm, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///
const DACG = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///
const DACB = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: Bm, duration: "1m" }]
///
const DACF = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: FM, duration: "1m" }]
///
//DC

const DCAG = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
const DCAGf = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GfM, duration: "1m" }]
///


const DCF_112 = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: FM, duration: "2m" }]
///

const DCFG = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: FM, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///





const DCG_112 = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: GM, duration: "2m" }]
///
const DCGA = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Am, duration: "1m" }]
///
const DCGF = [{ time: "0m", note: Dm7, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: FM, duration: "1m" }]
///
//DE
const DEF_112 = [{ time: "0m", note: Dm7, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: FM7, duration: "2m" }]
//
//
const DEFG = [{ time: "0m", note: Dm7, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: FM7, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]

//DF
const DF_22 = [{ time: "0m", note: Dm7, duration: "2m" },
         { time: "2m", note: FM7, duration: "2m" }]
///
const DFA_112 = [{ time: "0m", note: Dm7, duration: "1m" },
         { time: "1m", note: FM7, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
//
const DFAG = [{ time: "0m", note: Dm7, duration: "1m" },
         { time: "1m", note: FM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]

const DFAC = [{ time: "0m", note: Dm7, duration: "1m" },
         { time: "1m", note: FM7, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
     { time: "3m", note: CM, duration: "1m" }]


//DG

const DGf_22 = [{ time: "0m", note: Dm7, duration: "2m" },
         { time: "2m", note: GfM, duration: "2m" }]
///
const DGA_211 = [{ time: "0m", note: Dm, duration: "2m" },
         { time: "2m", note: GM, duration: "1m" },
       { time: "3m", note: Am7, duration: "1m" }]
///
const DGfA_211 = [{ time: "0m", note: Dm, duration: "2m" },
         { time: "2m", note: GfM, duration: "1m" },
       { time: "3m", note: Am7, duration: "1m" }]
///
const DGAC = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
     { time: "3m", note: FM, duration: "1m" }]
///

const DGF_211 = [{ time: "0m", note: Dm, duration: "2m" },
         { time: "2m", note: GM, duration: "1m" },
       { time: "3m", note: FM, duration: "1m" }]
///















///



///FG
