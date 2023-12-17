import React, { useState, useEffect } from 'react';
import axios from 'axios';
import decode_polyline from './Polyline_Decoding_Component';
import Map_Container from './Map_Container';
import '../customCSS/TollCSS.css'

const TollComponent = () => {

    const [origin, setOrigin] = useState('New York, NY');
    const [destination, setDestination] = useState('Philadelphia, Pennsylvania');
    const [serviceProvider, setServiceProvider] = useState('here');
    const [vehicleType, setVehicleType] = useState('2AxlesTaxi');
    const [decodedPolyline, setDecodedPolyline] = useState('');
    const [sourcePos, setSourcePos] = useState(null);
    const [destinationPos, setDestinationPos] = useState([40.71455, -74.00715]);


    const [apiData, setApiData] = useState(null);
    const fetchDataFromApi = async () => {
        try {
            const requestData = {
                origin: origin,
                destination: destination,
                vehicle: vehicleType
            };
            setSourcePos([39.95209, -75.16219]);
            console.log("here source :", sourcePos);
             setDecodedPolyline(decode_polyline("y`owFloubMiAjD{BzF}AnE{@fCsApD[z@GP[~@Qf@e@Gm@Gk@IqASeAOcBW}Fw@aBQeD_@iC]aCY_CWeCYqAQ_BSTiE@OH}@p@gAj@w@z@oAr@kAf@{@QWU_@S[U[S[QWMGKCICOCUCMAOAW?O@OBQFMDSJKHQPQTKPEJEJI`@Gb@IlAMrCObDU~DGv@CVIdAg@lKa@zIOfCQlBO|ASnBm@hGc@tEWhCGh@Iz@Eh@WfCKfAWfCsAvMQzBEdAaAzUSnEAd@I~AKfAWjA_@fBu@dDQt@Ot@Or@I^GRERGRM^GPO^IT_@v@S^Yb@_@j@g@|@S\\Wr@Oh@Mf@EZW`GE`ACd@?RCn@C`@SbEEt@EbAEt@IfBCn@AVElAGzACj@IvAAj@AnA?b@BxDDjCDlBCzAI|CClB?f@Bt@Db@D\\F^H\\HZJVJTPXd@l@ZVNNLJJFnAr@RJLFPHTJ`@PRHVJNFRHPFTHRF\\J^J|A`@|Bh@bFnA`@JrFtAtCv@VFdBd@nBh@`@JPD`@JTFRF`@J`@Jz@TjAZvDv@jCn@bB`@bB`@bBX|APb@DhAFB?jA?dA?f@Ev@Kp@QzA_@zAq@~@c@x@a@r@]r@]HG\\Mr@Yd@Ov@U`@I\\Eb@Cj@Ch@Bv@Bh@Ht@JzA^l@Rt@^HD|@h@d@^b@^b@f@^h@j@~@l@pAxBlFzAzDj@vAd@lA`A|BHPr@fBVn@`AzBLZf@nATj@b@dA\\x@l@rAv@vAv@nAr@`Az@hATXRTb@`@TRJJnClCdAbAJJbA`AdAhAtAxA~AtBt@jAdAjBNVJRR^`@~@`@dAZx@j@`BNf@h@jBVdA`@hBr@pDt@vDb@tBVdANl@J`@Pl@h@fBRj@\\`Ax@nBz@lBj@dAt@tAdA`BhA|AjAxAd@h@bAfAvAvAxB|BnNvN|B~BfAdAz@z@f@f@tAxAhAxAhAdBfBvCrAjCJTv@hBt@rBx@fCJ^f@pBb@pBTrAFh@D^RrAHfA@PBb@Bj@D~@?~@?\\C~@A^APEhAAVCd@Gf@Gb@CPCPCLKd@Mj@c@zA_@bA]r@g@|@o@bAc@j@g@n@q@~@a@f@iBdC}BrCw@dAw@hAMPaA|AYf@_@v@Sb@c@`Am@dBKXITIXOp@i@xBOp@iArFa@lBQr@S`Ae@|BiAlFKf@UbAgAfF{BpKkChMmD|P]bBeAfFiF|VcE~RoAbGyH|^qEtTI`@qBhJ_@bBk@`CWfAq@nCa@hB_@xA[fAWx@i@fBGNg@vAwAxD]|@yA~Dg@pAc@nAOb@Y|@[lA_ApDa@bBKb@Md@YhAIZUx@On@Ol@EPS|@Mb@WfASr@Oj@KTMVGJKPIJIHOHSDQAQGOMKQGWCW@[DQFQFMLKHEJCLAL?N@H@LBPDRFZJTFNDXJv@Xn@Tb@PlAh@ZL|@^dChAzAp@dBx@x@\\bBt@pB~@bEvBf@RXNh@Zl@\\tAv@pDtBpBhAb@VTLTJ\\J\\HZDl@H\\DRDVHVJ\\PXPrCjBx@h@`Al@t@^x@\\hAd@fAr@rA|@lAx@nD|BhBhAb@X|CpBrD~B\\R^R\\TjBjA`@VjAr@f]~SvLlHfHlEtCfBjElCf@Z~BxAfBjAdBlAzCbCfDtCfIrHbGtFfAbA|CxCTRnAjATR~FhFVTxArAjD`D`BzANLz@v@`@^j@f@b@^^ZZV\\Xb@\\n@f@l@d@j@b@f@^^XXRd@Zn@b@p@b@h@\\^Tf@Zd@Xx@f@jBhAhAr@`@T~@j@tDzB`Al@rCbB|A|@\\Rd@X`@V~AfAfA`AlAjAh@j@hApA|AtBt@hAlAzBnC~FpAvCpAvCtAzCpAtCrAxCdBxD~AnDvBxER`@f@dAj@hApB|Cl@z@^^p@t@NPp@t@jB`BJJlA`AfAt@nAv@hAl@ZLz@`@bAb@`@P`GhClF~B~@d@|DtBt@^jEzBXNnDhBx@`@nB`A|BlA`Ah@n@Zh@V`Ah@bBz@`Bz@vEbC~BjAbD`BbAh@nDlBr@^r@^jLlGlAp@bAh@LFdFnCpCzArCxAj@XbDbBvInE`G|CvNnHfIfErDlBNHHDVLzAr@pBfAz@b@nFnCdEvBxC|At@b@vDlBzAt@`Ah@nAn@vAr@jB`AlB`AHD`@T|Av@lAn@jAl@v@`@~@d@|@d@dAh@dAh@|@d@t@`@zC`Bh@ZzAz@tHpExCfBb@Vn@^pCvAb@TdAl@d@V^PPHt@^XNpAp@LHv@`@zEdCdFhCJFn@\\XN|EnC`HvDbSfKjAl@lCtAbJ`FbDjBhIvEhEbChEdCxBvAlCdBtCpBtA~@`BlAfF~D|AlAbBvAtDbD|DpDdJpIpEbErAnAhFzEfGvFHHfC|BdHzGzCtCjAhAxEnErBjBl@h@nFvEhHvGtEfEvBtBvC|ChBrBjAtAxAhBzBtCnAfBvBvCT^LTx@jAz@vAdCrEvClFh@`AZj@nA~B~AxCzCvFvAtCdArB^x@Zj@|CxFzBrEb@|@`@x@DFNX`@z@dAjCXt@h@xA\\`AtAvDb@~@bA|Ch@`BjBpG^tAj@|B\\vAn@tCn@pCPz@f@dCl@bD\\~Bt@tEJh@L~@TbBR|AThB`@rDXdDj@zGn@fIZdEPxBd@`GDl@x@nLVnDDr@v@vLTzDLbBD\\Fr@B`@TjCVdCJbAJz@@L^|CXrBb@|CZpBd@rCbApFp@hD~@rEt@vDT|@\\pA`@|ApBrHx@nC~@vCjAhDtArDdBjEhD~HbBlDhCxEpFhJj@~@lErHZh@Xd@pAzBd@v@jAnBp@fAV`@lAvBlAvBz@|AP`@\\l@z@`BpAjCtArCn@vAx@nBzA|D^hAl@dBx@fCZ|@FTl@pBz@pCfArDX`Af@bBt@hCrB~GjB`HhGzTvAdF`EpNlAdEp@pBrAzDZx@\\~@^bAfAjC|AnDzAbDpAlC~BpExChF~AhCvAvBj@x@xArBfAxAnBfCtEpF~AjBlC|Cb@f@~@dArNpPtFrGbExEh@n@`EvExIbKtLhNv@|@|@dA`FzFlHrI|DrEtUhXlAvAjAtAbHdIrEnFTVb@h@HJbClCjArAZ^l@t@nBxBtC`Dn@n@^\\lAjArDhDd@`@|ChCXRxAdAlCjBrDfCnBnAhBhAd@X`CzAvBrAZR\\RLHd@Zf@Zb@Xh@\\t@f@`Al@pBrAzAdA|B`BpA`Ax@j@nCtBv@j@t@h@h@^|@n@h@\\|@j@r@b@|Az@dAj@tBfAhCtAtDnBrCzAlDdBbG|C`IhErBfAtHbExCxAhJvEjDbBvGdDlExB`D~AjExBhErBTLrE|BlHpDvCxAnB`Az@^rBdAvCxA`FbCz@^|CzAjHlD~GhDlFpC^R~@f@dDfBhBhAlBnA~JzGtClB`BjAtChBtAbAfDvBbG|DjCbBpBxAJFt@f@l@^tBzA|DtChAz@jClBlCnBdAv@fDdCtB|A~BfBrA~@vAdAnBvAr@f@`@X~@n@fAt@r@d@bAp@n@`@h@\\dAp@|ClBf@XdCxAdAl@f@Vh@Z`Ah@vAv@dEvBtAp@~CzAzCrA~@b@r@Zl@V|@^~@^tAj@hA`@jBr@lDjA|C|@XHvGjBnFtAjJbC`AV~Bl@~Bp@r@PZJv@RpA\\vBj@vA^pCt@jA\\jEnAz@V~C`ArIjC`NdEvH|Bl@PzH`CjJrCx\\bKbU~GdYrIjBj@r@R`@LnHzBhF~At@VjA^fWxH|C~@\\Jn@RzBn@`AZzAd@nErAvIlCdIbCbGjB~CbAfCz@|Bv@rDpAxDpAzAh@fFhBnC|@lGvBvK~D~CfAbIrC`NtEtCbAnBp@VJXJd@Nj@PjE|AdCz@`EtAbGrBnDnAvFpB|DtAtC`ArAf@dFdBbDhAt@VdExApAd@pAb@p@TtG`CpC~@|CdAfC`AjBn@|@XlBj@pEnA~Bn@~F|AxElAdAXhBf@z@VbCt@rAb@lEzAjBl@jE~AdHjCjG|BpM~E|EhBn@TpE`B|Bv@f@PxAd@`@LdJzC|GzBrHbCtf@lPbGnBxBp@hA\\nA`@`F`BrNzEpGxBxFlBhDjApAf@zFlB~FrBlC|@|Ah@nFjBnFjBxC~@zIxC`EtAnExA`F`BlDlAXJhC|@fDhA`Cx@r@TxAf@bA\\pBp@vC|@~Ad@tA^`Cp@VHrFzAtBl@jGfBxKzC`Bd@JB|Bn@xCx@fFvA`IzBzErA`KtC~Af@v@VlDnAzAl@dAb@~Ar@~BfAvBhA`CrAlDzBhBpAzBbBjBzAjB|AlAfAfAbAnBnBb@f@rB|BzAjB~BvCrAjBvArBrB`DzAhC|ApCpAfC|BxEdDfHtBrE~DpIr@zAfA|Bv@bBbAzBlAfCdGlMfA`CjB|DjEbJnBfEnBbEnAjClAjC~AhDtAvCzA~CdArBfBfDj@dAbAfBjAnB|AhCtBjD|DrGdCbEjI`NtEvHnD~FxC`F|BrDpBdDrOdWtFbJhG~J~@zA`DlFrLxRhR`[vDhGtNzUpNpUlFxIdBtC\\j@dAdBtBjDdN~TbE|GvBjDhFtIpDbGp@fAp@hAd@v@jAnBfAlB|@dBVf@bB~CrBdEpBhEbAvB`BnDnBdEtHfP^x@lAjC~IpR|@lBbGnMRb@vA~CvDfItDbIjDlHnAlCn@tAx@dBxEdKdE|InBdEnDxHtGnNrBlEj@nAfCpFxBnEpBdE~BrE|@bBxBbEdB|CpA|BpCzE~BzDpBbDtBdDz@pAt@jAlBnChBpC|F`IpMfQ|EtG`CbDX`@TXX^bAvAt@bAdAvAjZfa@dOjSpw@|eAbIvKlA`BdDpEtIlLvFtHrH`KxNzRlBhClJhMd@n@hDtEzArBd@n@\\d@dAtA|F|HFHhAzArCxDrD`FhDtEf@p@tAjB|DlFnCrDtC|DX^zArBjBdCjA|AjA|A`@h@zBtC~ArB|AnBrAbBhBzBdCxC|DxE~CrDhDxDpFfGlFvFxD~DzF`GbDbDnEjEXXrMrMl@l@rApAtCrCfAzApA`BdAjAxAzAhEfE~B|Bl@p@TTn@r@`@f@b@n@`@p@l@hAN\\\\z@Xx@Tt@\\nAVpAJp@Jt@JnAFv@JvAHhAP|BNfBR~C@Px@bMHnAv@nMN|BPfCPfCFdA@LPpCDr@`AjOzBl^HrAx@vNT`FXzJPdKBtC?nJArCG`FEdCO|FErAW`HIbBKzAKvAInAo@|Ii@bGe@rEkAxKGr@w@pFk@jDa@|BYxAq@~CmAbFyAvFWd@w@zDYhA}@zC{CvJ_BrEM\\q@jBa@hA_AbCsA`DsCtGyAjDo@zAOZk@pAsDpImApCu@bBSj@s@dByAhDUf@cA`CaFnLcFtL_BrDyArD[z@w@tBoAtDs@zBMd@c@xAs@fCi@pBs@vCq@zC}@pEgA`GyAbIa@xBgAfG[`BkAtGaAtFoA~GMn@wBdLqBvKaCnMgA|FyBhLkBdKk@zCi@vCm@bDgCzMq@rD[hBCJGXkB~JqAbHMp@Gb@[`BgBfJUpAg@jCQ|@Mp@c@zBk@nCs@zDYzAQ~@UnAa@jCUpASfA{@vE]tBG`@Kv@AJYxBOnAYpCa@`Fq@|Iu@`JEl@SlCUxCuAlQ}@lKm@dHi@|F_@`EgAlMW|CaAzKSbBMjAQxBSfCQdB]`CUnAYtAu@hDUjAMp@Kr@Ip@Ix@GfACz@?z@?l@@p@DnADr@Fh@Jh@Nh@TfAJb@HZFRFRHVFPLZJTJTJTJRR\\LRRZNRTZVZPPVV\\Xl@b@h@\\n@\\bA`@d@LXHb@H`@FTBRBT@`@@h@?b@AZAj@Ch@C~@ElAGb@CTAb@Ah@Ah@Ax@?^?zA@bBDbCJnBLhBNlANbDd@xAVpAVrAZpCp@vCr@rCt@lCl@dF|A~Aj@rCfAnB`AnAt@r@d@HH`@Zj@b@fA`A~@|@p@t@`@d@RVz@hA~@rAn@dAHPx@zAf@fAr@~Ap@bBHTt@|Bb@vAJ`@ZxAJj@RdA^|B^vB\\vBRlAN~@Jn@VlBZlBZjB`@hCTrA`@hBj@pBZx@t@nBZv@r@zAb@z@j@`AlAtBf@`A@Bl@jAt@vAtBrDJP|IlP~@bBn@hAt@lAdA|A|@lAh@p@b@f@jBpBpChCx@t@fCzBvDbDzAzAtAvAv@|@z@fAnA`B~@rA~AjCnBnDtB|DnDxGrCnFxCvFfC`FzCjGrAvCP`@pBpE|ApD|AlD|@hBR`@rAfChAfBr@jApArBpArBhBrClEfHbDvF|ErIjIrOLTh@`AtAhCd@z@hAnB^t@R`@j@lAVf@z@hBh@pALZx@pBr@pBhAfDr@|B@B^rAv@xCb@hBp@dDl@fD`@~Br@|E@JXtBTdBJt@N~@b@zBRz@l@vBl@lBDLr@jBZt@l@nAP\\bAdBhAbB`D`Er@v@Z\\XZb@h@\\b@x@hAp@`AhAfBR\\n@bAb@x@lBxDXl@d@jAb@hAbCpGtArDfEfLhEhLbEzKVr@j@|AXr@\\z@Tj@Xl@Xn@`@x@x@xAh@z@p@dAf@t@v@dAjAvAhApAhCfCZXfC|B|BtBbHpGlBnBtA`Bv@fAl@|@dAdB`AhBz@jBl@zAd@pAh@~AXbAd@jBh@fCX~A`@pCZnCZlCn@jF^dCZxAXhAj@|Al@fBj@rA`@v@Zj@d@z@`A~Al@v@p@t@|AvA~@r@~A`AhBx@`Bn@|B|@p@XtB~@`BbAp@b@|@p@nAbAv@t@x@z@l@t@j@v@x@lAp@fAn@bAj@hAh@nAf@pAd@tA`@rAj@tBn@dChAlE~AhGpAvEXbAXdAh@pBl@|Bp@bCl@hB|@fCf@nAf@jAr@|A^x@^p@f@z@dAzAf@n@n@x@h@b@jAv@p@d@r@b@t@^r@Xn@Rv@T`AZbA\\z@Xt@VVFXHb@Rp@Z^TbAn@b@\\f@`@l@n@d@n@\\f@T`@Rd@r@tAh@jA~@vBXl@nAfClAdCv@pBHPJV^r@pAlCx@hBj@pAb@hAj@|AFRLf@Pj@Tx@Pv@Pz@VnAJj@V|A`@hCVfBTpBJl@l@bDVpAH`@fAtE|@xDhBdI`AbEdAjEl@rBz@hChDvJdEvKnCxGxAvD`H`QjFzMhCxGpA`Dp@bBp@~ApAtCjGxMrClGl@zAp@pB|@`DLf@^jBXfBRxAV|B\\zCXfCL|@Lx@F\\FXb@|Bd@rBTx@Pp@Xz@Vv@Pd@FPJX`@fAPb@BFLXXn@z@hBt@zAFLJPP\\h@z@p@~@|@lAx@dAz@bANPr@v@nAnA|@z@~@z@hA|@l@d@v@l@dAt@|B|AfBjAbDxBbMnIvA~@~AfA`@Xn@b@vA~@PLZRNJZTh@^l@`@v@h@bFhDnFpDr@d@p@b@r@b@r@b@v@d@`Ah@~DvBVNnAt@vA~@b@\\rAlAn@p@Z\\fAvAX^b@p@|@`BpAhClArCrDvIz@tBTd@lA|CrAdDr@jBL^Tr@ZfAdAvCp@fBTx@Ld@nB~E`BzEJZd@vAf@zAXx@fCjH^fAv@tBx@dCT|@^bBhApGXvAp@jC\\xAJ`@Nj@`@rAh@~AZz@n@|A|@rBVl@p@`BrA|C\\z@vD`JjAjCTh@tAdDp@`BVl@X|@Tx@\\l@Tl@f@lAbA`CnAvCjBhEfBxDfBjDVj@x@tA`A`B|ApCHNd@v@hB`DFJR\\\\p@b@~@j@tAj@`Bj@vBXvA\\|AlAjGr@nD|@nEbBlIb@pBTv@n@jBJZf@fAVf@`A|An@~@j@r@LLTTlAfAvAlAXd@HJJJRP`@Z|@n@d@Zd@XdAl@`Ad@~@`@bAb@n@Tl@RzBp@LDfB`@xCl@|AX~@Rd@NZNTNVRXVb@l@Xf@NZNd@Jd@Hf@Dh@DnAAr@Gz@ATIjAMnBIzAYdDQzBANANQpCKfBCv@?`ADdBFz@Fl@Ff@RxARpAPv@NbAPfAN`ALdAFl@BVDbA@d@?vAAh@GjAQbCMlBa@lEc@vHUvCSdDu@jLIvAK`BWlAYhAO|@ADABABABCDCDCBCBIFIDGBE@MBI@I?g@Ec@GMCSGKEECEEEECECECIAGAM@M@G@EBGDGFEDCFCDAFAD?D?d@AR?t@F`@Ft@Lf@FF@\\FH@XDRBlANv@JdBTbBRnANvBV~@LZDRBt@JfAL`@BL@H?L@XB`@DVBlANRB`@FN@J?NANCHCHGHIDIBGBIBK@GBWBa@@U@]BcA@[@S@KFo@Di@Dg@?M?GAIAECGCEEEGEGCQEMCICa@EIIEICGCMAOBa@"));

            const response = await axios.get('https://toll-server.vercel.app/');
            console.log(response.data);
            setApiData(response.data);
            // setDecodedPolyline(decode_polyline(JSON.stringify(apiData.routes[0].polyline, null, 2)));

            // axios.post('http://localhost:3001/getTollData', requestData, {
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'x-api-key': '6j6jjJLtN7QHJ2NPh3n2p4fQ9P4n3Hmt',
            //     },
            //   })
            //     .then(response => {
            //       setApiData(response.data);
            //       setDecodedPolyline(decode_polyline(JSON.stringify(apiData.routes[0].polyline, null, 2)));
                  
            //         // decode_polyline("y`owFloubMiAjD{BzF}AnE{@fCsApD[z@GP[~@Qf@e@Gm@Gk@IqASeAOcBW}Fw@aBQeD_@iC]aCY_CWeCYqAQ_BSTiE@OH}@p@gAj@w@z@oAr@kAf@{@QWU_@S[U[S[QWMGKCICOCUCMAOAW?O@OBQFMDSJKHQPQTKPEJEJI`@Gb@IlAMrCObDU~DGv@CVIdAg@lKa@zIOfCQlBO|ASnBm@hGc@tEWhCGh@Iz@Eh@WfCKfAWfCsAvMQzBEdAaAzUSnEAd@I~AKfAWjA_@fBu@dDQt@Ot@Or@I^GRERGRM^GPO^IT_@v@S^Yb@_@j@g@|@S\\Wr@Oh@Mf@EZW`GE`ACd@?RCn@C`@SbEEt@EbAEt@IfBCn@AVElAGzACj@IvAAj@AnA?b@BxDDjCDlBCzAI|CClB?f@Bt@Db@D\\F^H\\HZJVJTPXd@l@ZVNNLJJFnAr@RJLFPHTJ`@PRHVJNFRHPFTHRF\\J^J|A`@|Bh@bFnA`@JrFtAtCv@VFdBd@nBh@`@JPD`@JTFRF`@J`@Jz@TjAZvDv@jCn@bB`@bB`@bBX|APb@DhAFB?jA?dA?f@Ev@Kp@QzA_@zAq@~@c@x@a@r@]r@]HG\\Mr@Yd@Ov@U`@I\\Eb@Cj@Ch@Bv@Bh@Ht@JzA^l@Rt@^HD|@h@d@^b@^b@f@^h@j@~@l@pAxBlFzAzDj@vAd@lA`A|BHPr@fBVn@`AzBLZf@nATj@b@dA\\x@l@rAv@vAv@nAr@`Az@hATXRTb@`@TRJJnClCdAbAJJbA`AdAhAtAxA~AtBt@jAdAjBNVJRR^`@~@`@dAZx@j@`BNf@h@jBVdA`@hBr@pDt@vDb@tBVdANl@J`@Pl@h@fBRj@\\`Ax@nBz@lBj@dAt@tAdA`BhA|AjAxAd@h@bAfAvAvAxB|BnNvN|B~BfAdAz@z@f@f@tAxAhAxAhAdBfBvCrAjCJTv@hBt@rBx@fCJ^f@pBb@pBTrAFh@D^RrAHfA@PBb@Bj@D~@?~@?\\C~@A^APEhAAVCd@Gf@Gb@CPCPCLKd@Mj@c@zA_@bA]r@g@|@o@bAc@j@g@n@q@~@a@f@iBdC}BrCw@dAw@hAMPaA|AYf@_@v@Sb@c@`Am@dBKXITIXOp@i@xBOp@iArFa@lBQr@S`Ae@|BiAlFKf@UbAgAfF{BpKkChMmD|P]bBeAfFiF|VcE~RoAbGyH|^qEtTI`@qBhJ_@bBk@`CWfAq@nCa@hB_@xA[fAWx@i@fBGNg@vAwAxD]|@yA~Dg@pAc@nAOb@Y|@[lA_ApDa@bBKb@Md@YhAIZUx@On@Ol@EPS|@Mb@WfASr@Oj@KTMVGJKPIJIHOHSDQAQGOMKQGWCW@[DQFQFMLKHEJCLAL?N@H@LBPDRFZJTFNDXJv@Xn@Tb@PlAh@ZL|@^dChAzAp@dBx@x@\\bBt@pB~@bEvBf@RXNh@Zl@\\tAv@pDtBpBhAb@VTLTJ\\J\\HZDl@H\\DRDVHVJ\\PXPrCjBx@h@`Al@t@^x@\\hAd@fAr@rA|@lAx@nD|BhBhAb@X|CpBrD~B\\R^R\\TjBjA`@VjAr@f]~SvLlHfHlEtCfBjElCf@Z~BxAfBjAdBlAzCbCfDtCfIrHbGtFfAbA|CxCTRnAjATR~FhFVTxArAjD`D`BzANLz@v@`@^j@f@b@^^ZZV\\Xb@\\n@f@l@d@j@b@f@^^XXRd@Zn@b@p@b@h@\\^Tf@Zd@Xx@f@jBhAhAr@`@T~@j@tDzB`Al@rCbB|A|@\\Rd@X`@V~AfAfA`AlAjAh@j@hApA|AtBt@hAlAzBnC~FpAvCpAvCtAzCpAtCrAxCdBxD~AnDvBxER`@f@dAj@hApB|Cl@z@^^p@t@NPp@t@jB`BJJlA`AfAt@nAv@hAl@ZLz@`@bAb@`@P`GhClF~B~@d@|DtBt@^jEzBXNnDhBx@`@nB`A|BlA`Ah@n@Zh@V`Ah@bBz@`Bz@vEbC~BjAbD`BbAh@nDlBr@^r@^jLlGlAp@bAh@LFdFnCpCzArCxAj@XbDbBvInE`G|CvNnHfIfErDlBNHHDVLzAr@pBfAz@b@nFnCdEvBxC|At@b@vDlBzAt@`Ah@nAn@vAr@jB`AlB`AHD`@T|Av@lAn@jAl@v@`@~@d@|@d@dAh@dAh@|@d@t@`@zC`Bh@ZzAz@tHpExCfBb@Vn@^pCvAb@TdAl@d@V^PPHt@^XNpAp@LHv@`@zEdCdFhCJFn@\\XN|EnC`HvDbSfKjAl@lCtAbJ`FbDjBhIvEhEbChEdCxBvAlCdBtCpBtA~@`BlAfF~D|AlAbBvAtDbD|DpDdJpIpEbErAnAhFzEfGvFHHfC|BdHzGzCtCjAhAxEnErBjBl@h@nFvEhHvGtEfEvBtBvC|ChBrBjAtAxAhBzBtCnAfBvBvCT^LTx@jAz@vAdCrEvClFh@`AZj@nA~B~AxCzCvFvAtCdArB^x@Zj@|CxFzBrEb@|@`@x@DFNX`@z@dAjCXt@h@xA\\`AtAvDb@~@bA|Ch@`BjBpG^tAj@|B\\vAn@tCn@pCPz@f@dCl@bD\\~Bt@tEJh@L~@TbBR|AThB`@rDXdDj@zGn@fIZdEPxBd@`GDl@x@nLVnDDr@v@vLTzDLbBD\\Fr@B`@TjCVdCJbAJz@@L^|CXrBb@|CZpBd@rCbApFp@hD~@rEt@vDT|@\\pA`@|ApBrHx@nC~@vCjAhDtArDdBjEhD~HbBlDhCxEpFhJj@~@lErHZh@Xd@pAzBd@v@jAnBp@fAV`@lAvBlAvBz@|AP`@\\l@z@`BpAjCtArCn@vAx@nBzA|D^hAl@dBx@fCZ|@FTl@pBz@pCfArDX`Af@bBt@hCrB~GjB`HhGzTvAdF`EpNlAdEp@pBrAzDZx@\\~@^bAfAjC|AnDzAbDpAlC~BpExChF~AhCvAvBj@x@xArBfAxAnBfCtEpF~AjBlC|Cb@f@~@dArNpPtFrGbExEh@n@`EvExIbKtLhNv@|@|@dA`FzFlHrI|DrEtUhXlAvAjAtAbHdIrEnFTVb@h@HJbClCjArAZ^l@t@nBxBtC`Dn@n@^\\lAjArDhDd@`@|ChCXRxAdAlCjBrDfCnBnAhBhAd@X`CzAvBrAZR\\RLHd@Zf@Zb@Xh@\\t@f@`Al@pBrAzAdA|B`BpA`Ax@j@nCtBv@j@t@h@h@^|@n@h@\\|@j@r@b@|Az@dAj@tBfAhCtAtDnBrCzAlDdBbG|C`IhErBfAtHbExCxAhJvEjDbBvGdDlExB`D~AjExBhErBTLrE|BlHpDvCxAnB`Az@^rBdAvCxA`FbCz@^|CzAjHlD~GhDlFpC^R~@f@dDfBhBhAlBnA~JzGtClB`BjAtChBtAbAfDvBbG|DjCbBpBxAJFt@f@l@^tBzA|DtChAz@jClBlCnBdAv@fDdCtB|A~BfBrA~@vAdAnBvAr@f@`@X~@n@fAt@r@d@bAp@n@`@h@\\dAp@|ClBf@XdCxAdAl@f@Vh@Z`Ah@vAv@dEvBtAp@~CzAzCrA~@b@r@Zl@V|@^~@^tAj@hA`@jBr@lDjA|C|@XHvGjBnFtAjJbC`AV~Bl@~Bp@r@PZJv@RpA\\vBj@vA^pCt@jA\\jEnAz@V~C`ArIjC`NdEvH|Bl@PzH`CjJrCx\\bKbU~GdYrIjBj@r@R`@LnHzBhF~At@VjA^fWxH|C~@\\Jn@RzBn@`AZzAd@nErAvIlCdIbCbGjB~CbAfCz@|Bv@rDpAxDpAzAh@fFhBnC|@lGvBvK~D~CfAbIrC`NtEtCbAnBp@VJXJd@Nj@PjE|AdCz@`EtAbGrBnDnAvFpB|DtAtC`ArAf@dFdBbDhAt@VdExApAd@pAb@p@TtG`CpC~@|CdAfC`AjBn@|@XlBj@pEnA~Bn@~F|AxElAdAXhBf@z@VbCt@rAb@lEzAjBl@jE~AdHjCjG|BpM~E|EhBn@TpE`B|Bv@f@PxAd@`@LdJzC|GzBrHbCtf@lPbGnBxBp@hA\\nA`@`F`BrNzEpGxBxFlBhDjApAf@zFlB~FrBlC|@|Ah@nFjBnFjBxC~@zIxC`EtAnExA`F`BlDlAXJhC|@fDhA`Cx@r@TxAf@bA\\pBp@vC|@~Ad@tA^`Cp@VHrFzAtBl@jGfBxKzC`Bd@JB|Bn@xCx@fFvA`IzBzErA`KtC~Af@v@VlDnAzAl@dAb@~Ar@~BfAvBhA`CrAlDzBhBpAzBbBjBzAjB|AlAfAfAbAnBnBb@f@rB|BzAjB~BvCrAjBvArBrB`DzAhC|ApCpAfC|BxEdDfHtBrE~DpIr@zAfA|Bv@bBbAzBlAfCdGlMfA`CjB|DjEbJnBfEnBbEnAjClAjC~AhDtAvCzA~CdArBfBfDj@dAbAfBjAnB|AhCtBjD|DrGdCbEjI`NtEvHnD~FxC`F|BrDpBdDrOdWtFbJhG~J~@zA`DlFrLxRhR`[vDhGtNzUpNpUlFxIdBtC\\j@dAdBtBjDdN~TbE|GvBjDhFtIpDbGp@fAp@hAd@v@jAnBfAlB|@dBVf@bB~CrBdEpBhEbAvB`BnDnBdEtHfP^x@lAjC~IpR|@lBbGnMRb@vA~CvDfItDbIjDlHnAlCn@tAx@dBxEdKdE|InBdEnDxHtGnNrBlEj@nAfCpFxBnEpBdE~BrE|@bBxBbEdB|CpA|BpCzE~BzDpBbDtBdDz@pAt@jAlBnChBpC|F`IpMfQ|EtG`CbDX`@TXX^bAvAt@bAdAvAjZfa@dOjSpw@|eAbIvKlA`BdDpEtIlLvFtHrH`KxNzRlBhClJhMd@n@hDtEzArBd@n@\\d@dAtA|F|HFHhAzArCxDrD`FhDtEf@p@tAjB|DlFnCrDtC|DX^zArBjBdCjA|AjA|A`@h@zBtC~ArB|AnBrAbBhBzBdCxC|DxE~CrDhDxDpFfGlFvFxD~DzF`GbDbDnEjEXXrMrMl@l@rApAtCrCfAzApA`BdAjAxAzAhEfE~B|Bl@p@TTn@r@`@f@b@n@`@p@l@hAN\\\\z@Xx@Tt@\\nAVpAJp@Jt@JnAFv@JvAHhAP|BNfBR~C@Px@bMHnAv@nMN|BPfCPfCFdA@LPpCDr@`AjOzBl^HrAx@vNT`FXzJPdKBtC?nJArCG`FEdCO|FErAW`HIbBKzAKvAInAo@|Ii@bGe@rEkAxKGr@w@pFk@jDa@|BYxAq@~CmAbFyAvFWd@w@zDYhA}@zC{CvJ_BrEM\\q@jBa@hA_AbCsA`DsCtGyAjDo@zAOZk@pAsDpImApCu@bBSj@s@dByAhDUf@cA`CaFnLcFtL_BrDyArD[z@w@tBoAtDs@zBMd@c@xAs@fCi@pBs@vCq@zC}@pEgA`GyAbIa@xBgAfG[`BkAtGaAtFoA~GMn@wBdLqBvKaCnMgA|FyBhLkBdKk@zCi@vCm@bDgCzMq@rD[hBCJGXkB~JqAbHMp@Gb@[`BgBfJUpAg@jCQ|@Mp@c@zBk@nCs@zDYzAQ~@UnAa@jCUpASfA{@vE]tBG`@Kv@AJYxBOnAYpCa@`Fq@|Iu@`JEl@SlCUxCuAlQ}@lKm@dHi@|F_@`EgAlMW|CaAzKSbBMjAQxBSfCQdB]`CUnAYtAu@hDUjAMp@Kr@Ip@Ix@GfACz@?z@?l@@p@DnADr@Fh@Jh@Nh@TfAJb@HZFRFRHVFPLZJTJTJTJRR\\LRRZNRTZVZPPVV\\Xl@b@h@\\n@\\bA`@d@LXHb@H`@FTBRBT@`@@h@?b@AZAj@Ch@C~@ElAGb@CTAb@Ah@Ah@Ax@?^?zA@bBDbCJnBLhBNlANbDd@xAVpAVrAZpCp@vCr@rCt@lCl@dF|A~Aj@rCfAnB`AnAt@r@d@HH`@Zj@b@fA`A~@|@p@t@`@d@RVz@hA~@rAn@dAHPx@zAf@fAr@~Ap@bBHTt@|Bb@vAJ`@ZxAJj@RdA^|B^vB\\vBRlAN~@Jn@VlBZlBZjB`@hCTrA`@hBj@pBZx@t@nBZv@r@zAb@z@j@`AlAtBf@`A@Bl@jAt@vAtBrDJP|IlP~@bBn@hAt@lAdA|A|@lAh@p@b@f@jBpBpChCx@t@fCzBvDbDzAzAtAvAv@|@z@fAnA`B~@rA~AjCnBnDtB|DnDxGrCnFxCvFfC`FzCjGrAvCP`@pBpE|ApD|AlD|@hBR`@rAfChAfBr@jApArBpArBhBrClEfHbDvF|ErIjIrOLTh@`AtAhCd@z@hAnB^t@R`@j@lAVf@z@hBh@pALZx@pBr@pBhAfDr@|B@B^rAv@xCb@hBp@dDl@fD`@~Br@|E@JXtBTdBJt@N~@b@zBRz@l@vBl@lBDLr@jBZt@l@nAP\\bAdBhAbB`D`Er@v@Z\\XZb@h@\\b@x@hAp@`AhAfBR\\n@bAb@x@lBxDXl@d@jAb@hAbCpGtArDfEfLhEhLbEzKVr@j@|AXr@\\z@Tj@Xl@Xn@`@x@x@xAh@z@p@dAf@t@v@dAjAvAhApAhCfCZXfC|B|BtBbHpGlBnBtA`Bv@fAl@|@dAdB`AhBz@jBl@zAd@pAh@~AXbAd@jBh@fCX~A`@pCZnCZlCn@jF^dCZxAXhAj@|Al@fBj@rA`@v@Zj@d@z@`A~Al@v@p@t@|AvA~@r@~A`AhBx@`Bn@|B|@p@XtB~@`BbAp@b@|@p@nAbAv@t@x@z@l@t@j@v@x@lAp@fAn@bAj@hAh@nAf@pAd@tA`@rAj@tBn@dChAlE~AhGpAvEXbAXdAh@pBl@|Bp@bCl@hB|@fCf@nAf@jAr@|A^x@^p@f@z@dAzAf@n@n@x@h@b@jAv@p@d@r@b@t@^r@Xn@Rv@T`AZbA\\z@Xt@VVFXHb@Rp@Z^TbAn@b@\\f@`@l@n@d@n@\\f@T`@Rd@r@tAh@jA~@vBXl@nAfClAdCv@pBHPJV^r@pAlCx@hBj@pAb@hAj@|AFRLf@Pj@Tx@Pv@Pz@VnAJj@V|A`@hCVfBTpBJl@l@bDVpAH`@fAtE|@xDhBdI`AbEdAjEl@rBz@hChDvJdEvKnCxGxAvD`H`QjFzMhCxGpA`Dp@bBp@~ApAtCjGxMrClGl@zAp@pB|@`DLf@^jBXfBRxAV|B\\zCXfCL|@Lx@F\\FXb@|Bd@rBTx@Pp@Xz@Vv@Pd@FPJX`@fAPb@BFLXXn@z@hBt@zAFLJPP\\h@z@p@~@|@lAx@dAz@bANPr@v@nAnA|@z@~@z@hA|@l@d@v@l@dAt@|B|AfBjAbDxBbMnIvA~@~AfA`@Xn@b@vA~@PLZRNJZTh@^l@`@v@h@bFhDnFpDr@d@p@b@r@b@r@b@v@d@`Ah@~DvBVNnAt@vA~@b@\\rAlAn@p@Z\\fAvAX^b@p@|@`BpAhClArCrDvIz@tBTd@lA|CrAdDr@jBL^Tr@ZfAdAvCp@fBTx@Ld@nB~E`BzEJZd@vAf@zAXx@fCjH^fAv@tBx@dCT|@^bBhApGXvAp@jC\\xAJ`@Nj@`@rAh@~AZz@n@|A|@rBVl@p@`BrA|C\\z@vD`JjAjCTh@tAdDp@`BVl@X|@Tx@\\l@Tl@f@lAbA`CnAvCjBhEfBxDfBjDVj@x@tA`A`B|ApCHNd@v@hB`DFJR\\\\p@b@~@j@tAj@`Bj@vBXvA\\|AlAjGr@nD|@nEbBlIb@pBTv@n@jBJZf@fAVf@`A|An@~@j@r@LLTTlAfAvAlAXd@HJJJRP`@Z|@n@d@Zd@XdAl@`Ad@~@`@bAb@n@Tl@RzBp@LDfB`@xCl@|AX~@Rd@NZNTNVRXVb@l@Xf@NZNd@Jd@Hf@Dh@DnAAr@Gz@ATIjAMnBIzAYdDQzBANANQpCKfBCv@?`ADdBFz@Fl@Ff@RxARpAPv@NbAPfAN`ALdAFl@BVDbA@d@?vAAh@GjAQbCMlBa@lEc@vHUvCSdDu@jLIvAK`BWlAYhAO|@ADABABABCDCDCBCBIFIDGBE@MBI@I?g@Ec@GMCSGKEECEEEECECECIAGAM@M@G@EBGDGFEDCFCDAFAD?D?d@AR?t@F`@Ft@Lf@FF@\\FH@XDRBlANv@JdBTbBRnANvBV~@LZDRBt@JfAL`@BL@H?L@XB`@DVBlANRB`@FN@J?NANCHCHGHIDIBGBIBK@GBWBa@@U@]BcA@[@S@KFo@Di@Dg@?M?GAIAECGCEEEGEGCQEMCICa@EIIEICGCMAOBa@");
            //     })
            //     .catch(error => {
            //       console.error('Error fetching toll data:', error.message);
            //       setApiData(null);
            //     });
        } catch (error) {
            console.log(error.message);
        }

    };

    return (
        <div className="toll-container">
            <div className="inputs-container">
                <div>
                    <label>Source </label>
                    <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
                </div>
                <div >
                    <label>Destination </label>
                    <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
                </div>
                {/* <div>
                    <label>Vehicle Type </label>
                    <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} />
                </div> */}
                <div>
  <label>Vehicle Type </label>
  <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
    <option value="2AxlesAuto">2AxlesAuto</option>
    <option value="3AxlesAuto">3AxlesAuto</option>
    <option value="4AxlesAuto">4AxlesAuto</option>
    <option value="2AxlesDualTire">2AxlesDualTire</option>
    <option value="3AxlesDualTire">3AxlesDualTire</option>
    <option value="4AxlesDualTire">4AxlesDualTire</option>
    <option value="2AxlesTruck">2AxlesTruck</option>
    <option value="3AxlesTruck">3AxlesTruck</option>
  </select>
</div>


                <button className= "button" onClick={fetchDataFromApi}>Calculate Toll</button>
            </div>
           
            <div className="map-container">
                <Map_Container decodedPolyline={decodedPolyline} sourcePos={sourcePos} destinationPos={destinationPos} />
                <div className="output-container">
                <h1>Response from Toll guru API</h1>
                <h3>Everything about the route and toll</h3>
            {apiData && (
                <div>
                    <h3>fuelPrice:</h3>
                    <pre>{JSON.stringify(apiData.summary.fuelPrice.value, null, 2)}</pre>
                    <h3>Cheapest:</h3>
                    <pre>{JSON.stringify(apiData.routes[0].summary.diffs.cheapest, null, 2)}</pre>

                    <h3>Fastest:</h3>
                    <pre>{JSON.stringify(apiData.routes[1].summary.diffs.fastest, null, 2)}</pre>
                    <h3>Polyline:</h3>
                    <pre>{JSON.stringify(apiData.routes[0].polyline, null, 2)}</pre>

                    <h3>Polyline:</h3>
                    <pre>{JSON.stringify(apiData.routes[1].polyline, null, 2)}</pre>
                </div>
            )}</div>
                </div>
                
            {/* {decodedPolyline&&(
               
                <Map_Container />
                
            )} */}



        </div>


    );
};

export default TollComponent;


