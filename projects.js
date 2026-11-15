// Every project on the site lives here. The home page cards and each project's
// own page are built from this list, so adding a project means adding one entry.
//
//   id       short name used in the page link: project.html#<id>
//   fusion   paste the normal Autodesk Fusion share link; the site turns it into a live 3D viewer
//   stl      or: path to an STL file in /models (e.g. exported from SolidWorks); shown in the site's own 3D viewer
//   shortTitle  optional shorter name for the project tabs on the home page
//   tags     short labels shown as pills
//   stats    optional headline numbers for the project page: { value, label }
//            (story sections can also carry a figure: { src, caption })
//   image    card picture, saved in /images (a render or photo of the part)
//   gallery  extra pictures for the project page: { src, caption }
//   story    the write-up, as headed sections; each paragraph is one string
//   status   optional, e.g. 'Planned': shown as a badge and a note, for work not finished yet
//   imageCaption  optional caption shown above the picture on the project page
//   draft    true hides a project from the site until it's ready

window.PROJECTS = [
  // From her dissertation report ("Developing innovative materials for lightweight and durable prosthetic devices
  // through additive manufacturing", BCU, May 2026). All figures are from the report.
  {
    id: '3d-printed-prosthetic-socket',
    title: 'Lightweight 3D-printed prosthetic sockets',
    shortTitle: 'Prosthetic sockets',
    field: 'Prosthetics · BEng dissertation',
    year: '2026',
    summary: 'Can 3D-printed plastics replace carbon fibre in transtibial prosthetic sockets? I tested PA12, PETG and polypropylene to BS ISO standards, validated the results with FEA, and re-engineered a socket in Fusion 360 around the best material.',
    tags: ['Prosthetics', 'FEA', '3D printing', 'Materials testing', 'BS ISO standards', 'CAD'],
    image: 'images/limb-socket.png',
    fusion: 'https://mail118811.autodesk360.com/g/shares/SH28cd1QT2badd0ea72b3c96e0bec014a0a1',
    facts: {
      Context: 'BEng dissertation, Birmingham City University',
      Materials: 'Nylon PA12, PETG, polypropylene',
      Standards: 'BS ISO 527-2, 604, 178',
      Software: 'Fusion 360, SimScale',
    },
    stats: [
      { value: '<1%', label: 'Gap between SimScale FEA and lab tensile results for PA12' },
      { value: '5.41', label: 'PA12 safety factor in the 200 N load case, the highest of the three materials' },
      { value: '230 MPa', label: 'PA12 compressive strength, more than 3.5× PETG' },
      { value: '40–60%', label: 'Potential cost reduction versus carbon fibre, with lead times cut from weeks to hours' },
    ],
    story: [
      {
        heading: 'The problem',
        paragraphs: [
          'Most transtibial sockets are still made by carbon fibre lamination: skilled, labour-intensive work that costs £800–£1,500 in materials per socket and takes 3–5 weeks.',
          '3D printing (FDM) could make sockets faster and cheaper, but no study had compared PA12, PETG and polypropylene under identical printing conditions with standardised testing and FEA validation. That was the gap my dissertation set out to fill.',
        ],
      },
      {
        heading: 'Test specimens',
        paragraphs: [
          'Instead of standard tensile bars, I designed hollow cylindrical specimens (25 mm diameter, 4 mm wall) that behave like a section of socket wall. Every sample was printed on the same machine with identical settings: 80% tri-hexagonal infill, 0.2 mm layers and 0.4 mm extrusion width, so the three materials could be compared fairly.',
        ],
      },
      {
        heading: 'Testing to standards',
        paragraphs: [
          'I tested each material on an Instron to British Standards: BS ISO 527-2 (tensile), BS ISO 604 (compression) and BS ISO 178 (three-point bending over a 48 mm span). Every specimen was measured with digital callipers so the stress calculations were accurate.',
        ],
      },
      {
        heading: 'Health & safety',
        paragraphs: [
          'All testing followed Birmingham City University’s Faculty Safety Policy. PPE was worn throughout, printing was ventilated to control airborne particulates, and all equipment was PAT tested. No human or animal subjects were involved, so no ethical approval was needed.',
        ],
      },
      {
        heading: 'Simulation',
        paragraphs: [
          'I modelled every test in SimScale using my measured material properties, on a tetrahedral mesh checked for independence (results at 3 mm and 5 mm elements agreed within 2%).',
          'For PA12 the simulation matched the lab to within 1% in tension and 7.5% in bending. The comparison also showed where a linear elastic model stops working: PETG was within 10–15%, but polypropylene was out by more than 100% because it is so ductile, so I recommended non-linear models for it in future work.',
        ],
        figure: {
          src: 'images/socket-fea-pa12.png',
          caption: 'FEA stress plots for PA12 in SimScale: tensile, compression and three-point bend, with simulated vs experimental results.',
        },
      },
      {
        heading: 'Socket design',
        paragraphs: [
          'I took an open-access socket model from GrabCAD and re-engineered it in Fusion 360 for printed PA12. Its uniform walls (under 3 mm) became variable-thickness sections: thicker at the patellar tendon, which takes the highest compressive loads during stance (800–1,200 N), and thinner over soft-tissue areas such as the fibular head for comfort. The distal base is around 3.7 mm, balancing strength and print time.',
        ],
        callouts: [
          { value: '4.4 mm', label: 'Patellar region, where compressive loads peak' },
          { value: '3.6 mm', label: 'Soft-tissue areas, for compliance and comfort' },
        ],
        figures: [
          { src: 'images/socket-wall-4-4mm.png', caption: '4.4 mm: patellar region' },
          { src: 'images/socket-wall-3-6mm.png', caption: '3.6 mm: lateral/medial walls' },
          { src: 'images/socket-wall-distal.png', caption: '≈3.7 mm: distal base' },
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'PA12 was the strongest all-round material and is my recommendation for the main load-bearing areas. PETG had the highest flexural strength, which suits it to transitional zones that need some flex. Polypropylene was the most ductile, stretching to 457% before breaking, but too weak for load-bearing parts, so it belongs only at soft-contact interfaces.',
          'Swapping carbon fibre lamination for FDM-printed PA12 or PETG could cut socket production costs by 40–60% and lead times from weeks to hours, which matters most for clinics with limited resources.',
        ],
        table: {
          head: ['Material', 'Verdict', 'Tensile (MPa)', 'Flexural (MPa)', 'Compressive (MPa)', 'Strain at break', 'Best zone'],
          rows: [
            ['Nylon PA12', 'Recommended', '42.34', '45.91', '230.46', '4.94%', 'Primary load-bearing'],
            ['PETG', 'Suitable', '34.25', '56.93', '62.90', '7.01%', 'Transitional / flexible'],
            ['Polypropylene', 'Limited', '13.25', '12.23', '67.50', '457%', 'Compliant interface'],
          ],
        },
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Fatigue testing under cyclic gait loads, non-linear material models for polypropylene, testing the effects of humidity, temperature and UV, and variable-density infill to improve the strength-to-weight ratio further.',
        ],
      },
    ],
    gallery: [
      { src: 'images/socket-render-1.png', caption: 'Re-engineered socket in Fusion 360' },
      { src: 'images/socket-render-2.png', caption: 'Re-engineered socket in Fusion 360' },
      { src: 'images/socket-render-3.png', caption: 'Re-engineered socket in Fusion 360' },
    ],
  },

  // From her ENG6083 technical report and MATLAB code. All figures are from the report; the code was checked and uses
  // no toolbox functions (no regionprops, bwlabel, imbinarize etc.).
  {
    id: 'histology-image-analysis',
    title: 'Automated histology image analysis in MATLAB',
    shortTitle: 'Histology analysis',
    field: 'Medical imaging · MATLAB',
    year: '2026',
    summary: 'A MATLAB pipeline, written without toolbox shortcuts, that finds and measures cell nuclei across 40 H&E-stained tissue slides. On the validation image it detected 316 nuclei against 312 counted by hand: 98.7% agreement.',
    tags: ['MATLAB', 'Image processing', 'Medical imaging', 'Algorithm design', 'Validation'],
    image: 'images/histology-validation.png',
    imageFit: 'contain',
    imageCaption: 'Validation: 312 nuclei counted by hand vs 316 detected by the pipeline',
    facts: {
      Context: 'Medical Image Processing module (ENG6083)',
      Data: '40 H&amp;E-stained slides',
      Software: 'MATLAB, no toolbox functions',
      Training: 'MATLAB and Image Processing Onramp',
    },
    stats: [
      { value: '98.7%', label: 'Agreement with a manual count on the validation image (316 detected vs 312)' },
      { value: '40', label: 'Slides processed automatically in one batch' },
      { value: '3.6×', label: 'Fewer false positives after calibrating the threshold' },
      { value: '6', label: 'Hand-written MATLAB functions, from stain separation to feature extraction' },
    ],
    story: [
      {
        heading: 'The problem',
        paragraphs: [
          'H&amp;E staining is the standard way to look at tissue: haematoxylin stains cell nuclei blue-purple and eosin stains the surrounding tissue pink. The size and shape of nuclei can signal disease, but counting and measuring them by hand across whole slide sets is slow and varies between observers.',
          'The task: build a pipeline that segments nuclei automatically across 40 slides and produces measurements that hold up against biological reference values.',
        ],
      },
      {
        heading: 'Method',
        paragraphs: [
          'Rather than relying on MATLAB’s toolbox functions, I wrote each stage myself: a 3×3 smoothing filter; Ruifrok–Johnston colour deconvolution to separate the two stains; a calibrated threshold to find nuclei; a cross-shaped erosion to split touching nuclei; and a flood-fill labelling routine that measures each nucleus’s area, eccentricity and orientation from its pixel moments.',
        ],
        figures: [
          { src: 'images/histology-tissue-1.png', caption: 'Original slide and segmented nuclei' },
          { src: 'images/histology-tissue-2.png', caption: 'Larger stromal nuclei, correctly separated' },
          { src: 'images/histology-tissue-3.png', caption: 'Mixed epithelial and stromal tissue' },
        ],
      },
      {
        heading: 'Calibration',
        paragraphs: [
          'The threshold setting mattered most. At a multiplier of 1.0, collagen in the stroma was being counted as nuclei, giving an unrealistic mean of 3,921 per image. Raising it to 1.2 cut false positives 3.6-fold, to a mean of 1,089, in line with published ranges.',
          'I also tested Otsu’s method and watershed separation, and rejected both: Otsu mislabelled dense stroma on unusually stained slides, and watershed over-split elongated nuclei.',
        ],
      },
      {
        heading: 'Finding a bug',
        paragraphs: [
          'During development I noticed the tissue-composition result looked wrong. The calculation was using only the last image instead of all 40, giving a nuclei fraction of 29.16%. Accumulating pixel counts across the whole batch fixed it: 14.94% nuclei and 85.06% stroma.',
        ],
        figure: {
          src: 'images/histology-stats.png',
          caption: 'Nuclei count for each of the 40 slides (dashed line: mean of 1,089) and overall tissue composition.',
        },
      },
      {
        heading: 'Validation',
        paragraphs: [
          'I counted the nuclei in one image by hand (312) and compared that with the pipeline (316): 98.7% agreement, inside the 90–99% range reported for threshold-based methods.',
          'A t-test between the two halves of the batch (t = 1.13, p = 0.27) showed the pipeline performed consistently across all 40 slides, and the nuclear shape measurements fell within published reference values for benign stromal tissue.',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Adaptive (Sauvola) thresholding to cope with uneven staining and lighting, and pixel-level Dice scoring against full manual annotations.',
        ],
      },
    ],
    gallery: [],
  },

  // SolidWorks part exported to STL. Figures in facts/stats were measured from the model file itself.
  {
    id: 'braided-stent',
    title: 'Braided stent: expanded-state CAD model',
    shortTitle: 'Braided stent',
    field: 'Medical devices · SolidWorks CAD',
    year: '',
    summary: 'A full 3D model of a braided stent in its expanded state: a lattice of crossing helical struts that follows a curved path and changes diameter along its length, built as one solid body in SolidWorks.',
    tags: ['Medical devices', 'SolidWorks', 'Lattice modelling', 'Stent design', 'CAD'],
    image: 'images/expanded-stent.png',
    stl: 'models/expanded-stent.stl',
    facts: {
      Software: 'SolidWorks',
      Geometry: 'Braided helical lattice',
      Envelope: '108 × 122 × 171 mm',
      Output: 'Single solid body, exported to STL',
    },
    stats: [
      { value: '1', label: 'Solid body: every strut and crossing merged, with no loose parts' },
      { value: '~0.5 mm', label: 'Strut thickness, estimated from the model’s volume and surface area' },
      { value: '171 mm', label: 'Longest overall dimension of the curved, expanded stent' },
      { value: '158k', label: 'Facets in the exported mesh, enough to keep every strut crisp' },
    ],
    story: [
      {
        heading: 'The brief',
        paragraphs: [
          'Stents are thin scaffolds that hold a narrowed or blocked passage in the body open. Braided stents, made from struts wound in opposite helical directions, are used where the device has to expand from a small delivery size and then bend with the anatomy, for example in the oesophagus, airways and bowel.',
          'This project models a braided stent in its fully expanded state in SolidWorks, as it would sit inside the body.',
        ],
      },
      {
        heading: 'Design',
        paragraphs: [
          'The body is a lattice of struts running in two opposite helices. Where they cross they form diamond-shaped cells, the feature that lets a braided stent hold a passage open while still flexing along its length.',
          'Rather than a straight cylinder, the stent follows a curved path and its diameter changes along its length, so the model shows the device the way it would actually sit in a bending anatomy.',
        ],
      },
      {
        heading: 'Modelling',
        paragraphs: [
          'A lattice like this is a demanding CAD job. Each strut has to follow a helical path around a curved centreline, and every crossing has to merge cleanly so the result is one solid body rather than hundreds of separate pieces.',
          'The finished part is a single solid with struts of roughly half a millimetre, exported as a 158,000-facet mesh. That gives a clean starting point for meshing in FEA or preparing for manufacture.',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'The natural next stage is simulation: radial stiffness and crimping analysis in FEA, so the cell angle and strut size can be tuned to balance the force holding the passage open against flexibility, using the same CAD-to-FEA workflow as my prosthetic socket dissertation.',
        ],
      },
    ],
    gallery: [],
  },

  // Planned project: shown as "Planned" on the site, written as a plan, with no results claimed.
  {
    id: 'smart-socket',
    status: 'Planned',
    title: 'Smart socket: low-cost pressure mapping for prosthetic sockets',
    shortTitle: 'Smart socket',
    field: 'Prosthetics · Sensors · Next project',
    year: '2026',
    summary: 'Building on my dissertation: a 3D-printed PA12 socket fitted with 12 force sensors and a microcontroller that maps pressure at the limb–socket interface in real time, checked against my FEA model.',
    tags: ['Prosthetics', 'Sensors', 'C/C++', 'MATLAB', 'FEA validation', 'Fusion 360'],
    image: 'images/smart-socket-concept.svg',
    imageCaption: 'Concept layout of the planned sensor sites. Colours are illustrative, not measured data',
    facts: {
      Status: 'Planned',
      Hardware: 'FSR sensors, ESP32, 16-channel multiplexer',
      Software: 'C/C++, MATLAB, SimScale, Fusion 360',
      Testing: 'Instron calibration, limb phantom',
    },
    stats: [
      { value: '12', label: 'Planned sensing sites over pressure-tolerant and pressure-sensitive areas' },
      { value: '50 Hz', label: 'Target sampling rate, fast enough to follow a walking gait cycle' },
      { value: '<£100', label: 'Target parts budget, a fraction of commercial pressure-mapping systems' },
      { value: '4', label: 'Milestones, from a single calibrated sensor to cyclic gait loading' },
    ],
    story: [
      {
        heading: 'Why it matters',
        paragraphs: [
          'A badly fitting socket causes pain and skin damage, and is a major reason people stop using their prosthesis. Fit is still judged mostly by the prosthetist’s experience and the patient’s feedback. Systems that measure pressure inside the socket exist, but they are expensive and rarely leave research labs.',
          'My dissertation showed that 3D-printed PA12 can carry the loads in a transtibial socket. The next question is how that socket actually loads the limb, and whether a low-cost sensor system can show it.',
        ],
      },
      {
        heading: 'The plan',
        paragraphs: [
          'I will print a PA12 socket using my variable-wall-thickness design and fit 12 thin force-sensing resistors to its inner wall. They will cover the areas a socket is designed to load (the patellar tendon, medial tibial flare and calf) and the areas it must protect (the tibial crest, fibular head and distal end).',
        ],
      },
      {
        heading: 'Hardware & software',
        paragraphs: [
          'Each sensor sits in a voltage divider read through a 16-channel analogue multiplexer by an ESP32 microcontroller, programmed in C/C++ to sample every site at around 50 Hz and stream the data over USB or Bluetooth. The electronics go in a small enclosure designed in Fusion 360 for 3D printing.',
          'A MATLAB dashboard will turn the readings into a live colour map of the socket and log every test for analysis.',
        ],
      },
      {
        heading: 'Calibration & testing',
        paragraphs: [
          'Force-sensing resistors are non-linear and drift, so each one will be calibrated on the Instron against known loads to build its own force–voltage curve.',
          'Testing will use a 3D-printed residual-limb phantom with a silicone skin layer instead of a person, which avoids the need for ethics approval at this stage. The phantom will be loaded statically at body-weight-equivalent loads, then cyclically to mimic walking. The measured pressure map will be compared with a SimScale FEA model of the same socket under the same load.',
        ],
      },
      {
        heading: 'Milestones',
        paragraphs: [
          '1. Calibrate a single sensor and confirm a repeatable force–voltage curve.',
          '2. Build the 12-sensor array with the live MATLAB dashboard.',
          '3. Run static phantom tests and compare them with the FEA predictions.',
          '4. Run cyclic gait-style loading and write up how well low-cost sensing matches simulation.',
        ],
      },
    ],
    gallery: [],
  },
];

// Fusion share link -> embeddable viewer link
window.fusionEmbed = (link) =>
  link ? link.replace('/g/shares/', '/shares/public/').split('?')[0] + '?mode=embed' : '';
