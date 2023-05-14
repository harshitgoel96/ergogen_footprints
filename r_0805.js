module.exports = {
    params: {
        designator: 'R',
        side: 'F',
        P1: {type: 'net', value: 'P1'},
        P2: {type: 'net', value: 'P2'},
        
    },
    body: p => `
    (module Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder (layer ${p.side}.Cu) (tedit 5F68FEEE)
      ${p.at /* parametric position */}
      (descr "Resistor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal with elongated pad for handsoldering. (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
      (tags "resistor handsolder")
      (attr smd)
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -1.65 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value R_0805 (at 0 1.65 ${p.rot}) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start -1 0.625) (end -1 -0.625) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -1 -0.625) (end 1 -0.625) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 1 -0.625) (end 1 0.625) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start 1 0.625) (end -1 0.625) (layer ${p.side}.Fab) (width 0.1))
      (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start -1.85 0.95) (end -1.85 -0.95) (layer ${p.side}.CrtYd) (width 0.05))
      (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (layer ${p.side}.CrtYd) (width 0.05))
      (fp_line (start 1.85 -0.95) (end 1.85 0.95) (layer ${p.side}.CrtYd) (width 0.05))
      (fp_line (start 1.85 0.95) (end -1.85 0.95) (layer ${p.side}.CrtYd) (width 0.05))
      (pad 2 smd roundrect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) (roundrect_rratio 0.208333) ${p.P2.str})
      (pad 1 smd roundrect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) (roundrect_rratio 0.208333) ${p.P1.str})
  )`
}