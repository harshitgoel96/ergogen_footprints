module.exports = {
    params: {
        designator: 'FC',
        side: 'F',
        P1: {type: 'net', value: 'P1'},
        P2: {type: 'net', value: 'P1'},
        P3: {type: 'net', value: 'P1'},
        P4: {type: 'net', value: 'P1'},
        P5: {type: 'net', value: 'P1'},
        P6: {type: 'net', value: 'P1'},
        P7: {type: 'net', value: 'P1'},
        P8: {type: 'net', value: 'P1'},
        P9: {type: 'net', value: 'P1'},
        P10: {type: 'net', value: 'P1'},
        P11: {type: 'net', value: 'P1'},
        P12: {type: 'net', value: 'P1'},
    },
    body: p => `
    (module Connector_FFC-FPC:Hirose_FH12-12S-0.5SH_1x12-1MP_P0.50mm_Horizontal (layer ${p.side}.Cu) (tedit 5D24667B)
      ${p.at /* parametric position */}
      (descr "Hirose FH12, FFC/FPC connector, FH12-12S-0.5SH, 12 Pins per row (https://www.hirose.com/product/en/products/FH12/FH12-24S-0.5SH(55)/), generated with kicad-footprint-generator")
      (tags "connector Hirose FH12 horizontal")
      (attr smd)
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -3.7 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value Hirose_FH12-12S-0.5SH_1x12-1MP_P0.50mm_Horizontal (at 0 8.255 ${p.rot}) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start 0 -1.2) (end -4.55 -1.2) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -4.55 -1.2) (end -4.55 3.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -4.55 3.4) (end -3.95 3.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -3.95 3.4) (end -3.95 3.7) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -3.95 3.7) (end -4.45 3.7) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -4.45 3.7) (end -4.45 4.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -4.45 4.4) (end 0 4.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 0 -1.2) (end 4.55 -1.2) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 4.55 -1.2) (end 4.55 3.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 4.55 3.4) (end 3.95 3.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 3.95 3.4) (end 3.95 3.7) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 3.95 3.7) (end 4.45 3.7) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 4.45 3.7) (end 4.45 4.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 4.45 4.4) (end 0 4.4) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -3.16 -1.3) (end -4.65 -1.3) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -4.65 -1.3) (end -4.65 0.04) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start 3.16 -1.3) (end 4.65 -1.3) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start 4.65 -1.3) (end 4.65 0.04) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -4.65 2.76) (end -4.65 4.5) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -4.65 4.5) (end 4.65 4.5) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start 4.65 4.5) (end 4.65 2.76) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -3.16 -1.3) (end -3.16 -2.5) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -3.25 -1.2) (end -2.75 -0.492893) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -2.75 -0.492893) (end -2.25 -1.2) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -6.05 -3) (end -6.05 4.9) (layer ${p.side}.CrtYd) (width 0.05))
      (fp_line (start -6.05 4.9) (end 6.05 4.9) (layer ${p.side}.CrtYd) (width 0.05))
      (fp_line (start 6.05 4.9) (end 6.05 -3) (layer ${p.side}.CrtYd) (width 0.05))
      (fp_line (start 6.05 -3) (end -6.05 -3) (layer ${p.side}.CrtYd) (width 0.05))
      (pad 12 smd rect (at 2.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P12.str})
      (pad 11 smd rect (at 2.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P11.str})
      (pad 10 smd rect (at 1.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P10.str})
      (pad 9 smd rect (at 1.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P9.str})
      (pad 8 smd rect (at 0.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P8.str})
      (pad 7 smd rect (at 0.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P7.str})
      (pad 6 smd rect (at -0.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P6.str})
      (pad 5 smd rect (at -0.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P5.str})
      (pad 4 smd rect (at -1.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P4.str})
      (pad 3 smd rect (at -1.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P3.str})
      (pad 2 smd rect (at -2.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P2.str})
      (pad 1 smd rect (at -2.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P1.str})
      (pad MP smd rect (at -4.65 1.4 ${p.rot}) (size 1.8 2.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
      (pad MP smd rect (at 4.65 1.4 ${p.rot}) (size 1.8 2.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
  )`
}