

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
CBA2 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]
///

CBAF = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: Am, duration: "1m" },
         { time: "3m", note: FM, duration: "1m" }]
///
CBF2 = [{ time: "0m", note: CMo, duration: "1m" },
           { time: "1m", note: Bm, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
///




CEF2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
//v=8
CEGf2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: GfM, duration: "2m" }]
///
CEF2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: Em, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
///
C2F2 = [{ time: "0m", note: CM, duration: "2m" },
         { time: "2m", note: FM, duration: "2m" }]
///


CGF2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: GM, duration: "1m" },
           { time: "2m", note: FM, duration: "2m" }]
///
CGFGf = [{ time: "0m", note: CM, duration: "1m" },
              { time: "1m", note: GM, duration: "1m" },
              { time: "2m", note: FM, duration: "1m" },
              { time: "3m", note: GfM, duration: "1m" }]
///
CGA2 = [{ time: "0m", note: CM, duration: "1m" },
           { time: "1m", note: GM, duration: "1m" },
           { time: "2m", note: Am, duration: "2m" }]
///

//v=8

//SUBMEDIANT
//dramatic notes

///AC
ACF2 =     [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: FM, duration: "2m" }]


ACFGf = [{ time: "0m", note: Am, duration: "1m" },
                  { time: "1m", note: CM, duration: "1m" },
                  { time: "2m", note: FM, duration: "1m" },
                  { time: "3m", note: GfM, duration: "1m" }]

ACD2= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: Dm, duration: "2m" }]

ACGF = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: CM, duration: "1m" },
            { time: "2m", note: GM, duration: "1m" },
            { time: "3m", note: FM, duration: "1m" }]

///AF

AFC2= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: CM, duration: "2m" }]

AFCG= [{ time: "0m", note: Am7, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]
///


AFD7= [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: FM, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]

///AG
AGC2 = [{ time: "0m", note: Am, duration: "1m" },
          { time: "1m", note: GM, duration: "1m" },
          { time: "2m", note: CM, duration: "2m" }]

AGF2 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "2m" }]


AGFG = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]

      AGFGf = [{ time: "0m", note: Am, duration: "1m" },
                  { time: "1m", note: GM, duration: "1m" },
                  { time: "2m", note: FM, duration: "1m" },
                  { time: "3m", note: GfM, duration: "1m" }]
//v=4


AGFD = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: FM, duration: "1m" },
            { time: "3m", note: Dm7, duration: "1m" }]

AGD72 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: GM, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]



AED72 = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Em, duration: "1m" },
            { time: "2m", note: Dm7, duration: "2m" }]

///AE
AECD = [{ time: "0m", note: Am, duration: "1m" },
            { time: "1m", note: Em, duration: "1m" },
            { time: "2m", note: CM, duration: "1m" },
            { time: "3m", note: Dm, duration: "1m" }]
///











//FA


F72A72 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Am7, duration: "2m" }]
///
F2AC = [{ time: "0m", note: FM, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///
FAD2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
F2AG = [{ time: "0m", note: FM, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
FAGD7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
FAGA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Am, duration: "1m" }]
///
FABD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Am, duration: "1m" },
       { time: "2m", note: Bmo, duration: "1m" },
     { time: "3m", note: Dm, duration: "1m" }]
///


///FC


F2C2 = [{ time: "0m", note: CM, duration: "2m" },
         { time: "2m", note: FM, duration: "2m" }]
////
F7CD2 = [{ time: "0m", note: FM7, duration: "1m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
F7CGf = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: CMo, duration: "1m" },
       { time: "2m", note: GfM, duration: "2m" }]
///


///FD

F72D72 = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "2m" }]
///
///FDA
F72D7A = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: Am, duration: "1m" }]
///

FDA2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
///
FD7A7G = [{ time: "0m", note: FM, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
            { time: "2m", note: Am7, duration: "1m" },
            { time: "3m", note: GM, duration: "1m" }]
///


FD7A7C = [{ time: "0m", note: FM, duration: "1m" },
            { time: "1m", note: Dm7, duration: "1m" },
            { time: "2m", note: Am7, duration: "1m" },
            { time: "3m", note: CM, duration: "1m" }]
///

///FDC
F72D7C = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: CMo, duration: "1m" }]
///

FDC2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///

FDCA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
         { time: "2m", note: CM, duration: "1m" },
         { time: "3m", note: Am, duration: "1m" }]
///

FDCG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm, duration: "1m" },
         { time: "2m", note: CM, duration: "1m" },
         { time: "3m", note: GM, duration: "1m" }]
///

///FDG

FDG2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///

FDGA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Dm7, duration: "1m" },
       { time: "2m", note: GM, duration: "1m" },
     { time: "3m", note: Am, duration: "2m" }]
///
F72D7Gf = [{ time: "0m", note: FM7, duration: "2m" },
         { time: "2m", note: Dm7, duration: "1m" },
       { time: "3m", note: GfM, duration: "1m" }]
///




//FE
FEaD72 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Eam, duration: "1m" },
       { time: "2m", note: Dm7, duration: "2m" }]

FED2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
FEG2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: GM, duration: "2m" }]
///
FEGfD7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: GfM, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
FEA7D7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Am7, duration: "1m" },
     { time: "3m", note: Dm7, duration: "1m" }]
///
FEAG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: Em, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///
///FG
FGA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "2m" }]
///
FGAG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: GM, duration: "1m" }]
///
FGAD7 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: Dm7, duration: "1m" }]
///
FGAC = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///
FGAE = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: Em, duration: "1m" }]
///
FGC2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "2m" }]
///

FGCG = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: GM, duration: "1m" }]
///
FGCGf = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: GfM, duration: "1m" }]
///

FGCD = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: Dm, duration: "1m" }]
///
FGCA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: CM, duration: "1m" },
     { time: "3m", note: Am, duration: "1m" }]
///

//FGD
FGD2 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
       { time: "2m", note: Dm, duration: "2m" }]
///
F_Gf_D72 = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GfM, duration: "1m" },
       { time: "2m", note: Dm7, duration: "2m" }]
///
FGDA = [{ time: "0m", note: FM, duration: "1m" },
         { time: "1m", note: GM, duration: "1m" },
         { time: "2m", note: Dm, duration: "1m" },
         { time: "3m", note: Am, duration: "1m" }]
///

//DA
D72A72 = [{ time: "0m", note: Dm7, duration: "2m" },
         { time: "2m", note: Am7, duration: "2m" }]
///
D2AC = [{ time: "0m", note: Dm, duration: "2m" },
         { time: "2m", note: Am, duration: "1m" },
       { time: "3m", note: CM, duration: "1m" }]
///



//DF
D72F72 = [{ time: "0m", note: Dm7, duration: "2m" },
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

F7t2D7t2 = [F16TRIP1M,

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
