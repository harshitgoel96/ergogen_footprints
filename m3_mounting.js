module.exports = {
    params: {
        designator: 'H',
        side: 'F',
        GND: {type: 'net', value: 'GND'},
    },
    body: p => `
    (module MountingHole:MountingHole_3.2mm_M3 (layer ${p.side}.Cu) (tedit 56D1B4CB)
      ${p.at /* parametric position */}
      (descr "Mounting Hole 3.2mm, no annular, M3")
      (tags "mounting hole 3.2mm no annular m3")
      (attr virtual)
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -4.2 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value MountingHole_3.2mm_M3 (at 0 4.2 ${p.rot}) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_circle (center 0 0) (end 3.2 0) (layer Cmts.User) (width 0.15))
      (fp_circle (center 0 0) (end 3.45 0) (layer ${p.side}.CrtYd) (width 0.05))
      (pad 1 np_thru_hole circle (at 0 0 ${p.rot}) (size 3.2 3.2) (drill 3.2) (layers *.Cu *.Mask) ${p.GND.str})

  )`
}