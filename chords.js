

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






///happy notes


///TONIC
///2 note progs
//v=10

///
const CBA2 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]
///

const CBAF = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: Am, duration: "1m" },
         { time: "3m", note: FM, duration: "1m" }]
///
const CBF2 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
///




//v=8
const CEGf2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: GfM, duration: "2m" }]
///
const CEF2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
///
const C2F2 = [{ time: "0m", note: CM, duration: "2m" },
         { time: "2m", note: FM, duration: "2m" }]
///


const CGF2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: GM, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
///
const CGFGf = [{ time: "0m", note: CM, duration: "1m" },
              { time: "1m", note: GM, duration: "1m" },
              { time: "2m", note: FM, duration: "1m" },
              { time: "3m", note: GfM, duration: "1m" }]
///
const CGA2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: GM, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]
///

//v=8

//SUBMEDIANT
//dramatic notes

///AC
const ACF2 =     [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: FM, duration: "2m" }]


const ACFGf = [{ time: "0m", note: Am, duration: "1m" },
                  { time: "1m", note: CM, duration: "1m" },
                  { time: "2m", note: FM, duration: "1m" },
                  { time: "3m", note: GfM, duration: "1m" }]

const ACD2= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: Dm, duration: "2m" }]

const ACGF = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: GM, duration: "1m" },
            { time: "3m", note: FM, duration: "1m" }]

///AF

const AFC2= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: CM, duration: "2m" }]

const AFCG= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]
///


const AFD7= [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]

///AG
const AGC2 = [{ time: "0m", note: Am, duration: "1m" },
          { time: "1m", note: GM, duration: "1m" },
          { time: "2m", note: CM, duration: "2m" }]

const AGF2 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "2m" }]


const AGFG = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]

      const AGFGf = [{ time: "0m", note: Am, duration: "1m" },
                  { time: "1m", note: GM, duration: "1m" },
                  { time: "2m", note: FM, duration: "1m" },
                  { time: "3m", note: GfM, duration: "1m" }]
//v=4


const AGFD = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "1m" },
            { time: "3m", note: Dm7, duration: "1m" }]

const AGD72 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]



const AED72 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Em, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]

///AE
const AECD = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Em, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: Dm, duration: "1m" }]
///











//FA


const F72A72 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Am7, duration: "2m" }]
///
const F2AC = [{ time: "0m", note: FM, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///
const FAD2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
const F2AG = [{ time: "0m", note: FM, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
const FAGD7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
const FAGA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Am, duration: "1m" }]
///
const FABD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: Bmo, duration: "1m" },
     { time: "3m", note: Dm, duration: "1m" }]
///


///FC


const F2C2 = [{ time: "0m", note: CM, duration: "2m" },
         { time: "2m", note: FM, duration: "2m" }]
////
const F7CD2 = [{ time: "0m", note: FM7, duration: "1m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
const F7CGf = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: GfM, duration: "2m" }]
///


///FD

const F72D72 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "2m" }]
///
///FDA
const F72D7A = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: Am, duration: "1m" }]
///

const FDA2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
///
const FD7A7G = [{ time: "0m", note: FM, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
            { time: "2m", note: Am7, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]
///


const FD7A7C = [{ time: "0m", note: FM, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
            { time: "2m", note: Am7, duration: "1m" },
            { time: "3m", note: CM, duration: "1m" }]
///

///FDC
const F72D7C = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: CMo, duration: "1m" }]
///

const FDC2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///

const FDCA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
         { time: "2m", note: CM, duration: "1m" },
         { time: "3m", note: Am, duration: "1m" }]
///

const FDCG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
         { time: "2m", note: CM, duration: "1m" },
         { time: "3m", note: GM, duration: "1m" }]
///

///FDG

const FDG2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///

const FDGA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Am, duration: "2m" }]
///
const F72D7Gf = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: GfM, duration: "1m" }]
///




//FE
const FEaD72 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Eam, duration: "1m" },
       { time: "2m", note: Dm7, duration: "2m" }]

const FED2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
const FEG2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: GM, duration: "2m" }]
///
const FEGfD7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: GfM, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
const FEA7D7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Am7, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
const FEAG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///
///FG
const FGA2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
///
const FGAG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
const FGAD7 = [{ time: "0m", note: FM, duration: "1m" },
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
const FGC2 = [{ time: "0m", note: FM, duration: "1m" },
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
const FGD2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
const F_Gf_D72 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GfM, duration: "1m" },
       { time: "2m", note: Dm7, duration: "2m" }]
///
const FGDA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
         { time: "2m", note: Dm, duration: "1m" },
         { time: "3m", note: Am, duration: "1m" }]
///

//DA
const D72A72 = [{ time: "0m", note: Dm7, duration: "2m" },
         { time: "2m", note: Am7, duration: "2m" }]
///
///DAC
const D2AC = [{ time: "0m", note: Dm, duration: "2m" },
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
const DCF2 = [{ time: "0m", note: Dm, duration: "1m" },
         { time: "1m", note: CM, duration: "1m" },
       { time: "2m", note: FM, duration: "2m" }]
///



//DF
const D72F72 = [{ time: "0m", note: Dm7, duration: "2m" },
         { time: "2m", note: FM7, duration: "2m" }]








const F16TRIP1M = [{ time: "0:0:0", note: FM7, duration: "8t"},
          { time: "0:0:1.3333", note: FM7, duration: "8t" },
          { time: "0:0:2.6666", note: FM7, duration: "8t" },
          { time: "0:1:0", note: FM7, duration: "8t" },
          { time: "0:1:1.3333", note: FM7, duration: "8t" },
          { time: "0:1:2.6666", note: FM7, duration: "8t" },
          { time: "0:2:0", note: FM7, duration: "8t" },
          { time: "0:2:1.3333", note: FM7, duration: "8t" },
          { time: "0:2:2.6666", note: FM7, duration: "8t" },
          { time: "0:3:0", note: FM7, duration: "8t" },
          { time: "0:3:1.3333", note: FM7, duration: "8t" },
          { time: "0:3:2.6666", note: FM7, duration: "8t" }];

//console.log(F16TRIP1M);

const F7t2D7t2 = [F16TRIP1M,

            { time: "1:0:0", note: Dm7, duration: "8t" },
            { time: "1:0:1.3333", note: Dm7, duration: "8t" },
            { time: "1:0:2.6666", note: Dm7, duration: "8t" },
            { time: "1:1:0", note: Dm7, duration: "8t" },
            { time: "1:1:1.3333", note: Dm7, duration: "8t" },
            { time: "1:1:2.6666", note: Dm7, duration: "8t" },
            { time: "1:2:0", note: Dm7, duration: "8t" },
            { time: "1:2:1.3333", note: Dm7, duration: "8t" },
            { time: "1:2:2.6666", note: Dm7, duration: "8t" },
            { time: "1:3:0", note: Dm7, duration: "8t" },
            { time: "1:3:1.3333", note: Dm7, duration: "8t" },
            { time: "1:3:2.6666", note: Dm7, duration: "8t" },

              { time: "2:0:0", note: CM, duration: "8t" },
              { time: "2:0:1.3333", note: CM, duration: "8t" },
              { time: "2:0:2.6666", note: CM, duration: "8t" },
              { time: "2:1:0", note: CM, duration: "8t" },
              { time: "2:1:1.3333", note: CM, duration: "8t" },
              { time: "2:1:2.6666", note: CM, duration: "8t" },
              { time: "2:2:0", note: CM, duration: "8t" },
              { time: "2:2:1.3333", note: CM, duration: "8t" },
              { time: "2:2:2.6666", note: CM, duration: "8t" },
              { time: "2:3:0", note: CM, duration: "8t" },
              { time: "2:3:1.3333", note: CM, duration: "8t" },
              { time: "2:3:2.6666", note: CM, duration: "8t" },

                { time: "3:0:0", note: Em, duration: "8t" },
                { time: "3:0:1.3333", note: Em, duration: "8t" },
                { time: "3:0:2.6666", note: Em, duration: "8t" },
                { time: "3:1:0", note: Em, duration: "8t" },
                { time: "3:1:1.3333", note: Em, duration: "8t" },
                { time: "3:1:2.6666", note: Em, duration: "8t" },
                { time: "3:2:0", note: Em, duration: "8t" },
                { time: "3:2:1.3333", note: Em, duration: "8t" },
                { time: "3:2:2.6666", note: Em, duration: "8t" },
                { time: "3:3:0", note: Em, duration: "8t" },
                { time: "3:3:1.3333", note: Em, duration: "8t" },
                { time: "3:3:2.6666", note: Em, duration: "8t" }


    ]
///



///FG
