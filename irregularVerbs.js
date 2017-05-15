// Offrir
// Ouvrir
// apprendre
// admettre
const IRREGULAR_VERBS = [
  {
    fr: 'aller', 
    en: 'to go', 
    present: {
      singular: ['vais', 'vas', 'va'],
      plural: ['allons', 'allez', 'vont']
    },
    imperfect: {
      singular: ['allais', 'allais', 'allait'],
      plural: ['allions', 'alliez', 'allaient']
    },
    future: {
      singular: ['irai', 'iras', 'ira'],
      plural: ['ira', 'irez', 'iront']
    }, 
    conditional: {
      singular: ['irais', 'irais', 'irait'],
      plural: ['irions', 'iriez', 'iraient']
    },
    subjunctive: {
      singular: ['aille', 'ailles', 'aille'],
      plural: ['allions', 'alliez', 'aillent']
    }
  },
  {
    fr: 'faire', 
    en: 'to do', 
    present: {
      singular: ['fais', 'fais', 'fait'],
      plural: ['faisons', 'faites', 'font']
    },
    imperfect: {
      singular: ['faisais', 'faisais', 'faisait'],
      plural: ['faisions', 'faisiez', 'faisaient']
    },
    future: {
      singular: ['ferai', 'feras', 'fera'],
      plural: ['ferons', 'ferez', 'feront']
    }, 
    conditional: {
      singular: ['ferais', 'ferais', 'ferait'],
      plural: ['ferions', 'feriez', 'feraient']
    },
    subjunctive: {
      singular: ['fasse', 'fasses', 'fasse'],
      plural: ['fassions', 'fassiez', 'fassent']
    }
  },
  {
    fr: 'avoir', 
    en: 'to have', 
    present: {
      singular: ['ai', 'as', 'a'],
      plural: ['avons', 'avez', 'ont']
    },
    imperfect: {
      singular: ['avais', 'avais', 'avait'],
      plural: ['avions', 'aviez', 'avaient']
    },
    future: {
      singular: ['aurai', 'auras', 'aura'],
      plural: ['aurons', 'aurez', 'auront']
    }, 
    conditional: {
      singular: ['aurais', 'aurais', 'aurait'],
      plural: ['aurions', 'auriez', 'auraient']
    },
    subjunctive: {
      singular: ['aie', 'aies', 'ait'],
      plural: ['ayons', 'ayez', 'aient']
    }
  },
  {
    fr: 'dire', 
    en: 'to say to tell', 
    present: {
      singular: ['dis', 'dis', 'dit'],
      plural: ['disons', 'disez', 'disent']
    },
    imperfect: {
      singular: ['disais', 'disais', 'disait'],
      plural: ['disions', 'disiez', 'disaient']
    },
    future: {
      singular: ['dirai', 'diras', 'dira'],
      plural: ['dirons', 'direz', 'diront']
    }, 
    conditional: {
      singular: ['dirais', 'dirais', 'dirait'],
      plural: ['dirions', 'diriez', 'diraient']
    },
    subjunctive: {
      singular: ['dise', 'dises', 'dise'],
      plural: ['disions', 'disiez', 'disent']
    }
  },
  {
    fr: 'être', 
    en: 'to be', 
    present: {
      singular: ['suis', 'es', 'est'],
      plural: ['somems', 'êtes', 'sont']
    },
    imperfect: {
      singular: ['étais', 'étais', 'était'],
      plural: ['étions', 'étiez', 'étaient']
    },
    future: {
      singular: ['serai', 'seras', 'sera'],
      plural: ['serons', 'serez', 'seront']
    }, 
    conditional: {
      singular: ['serais', 'serais', 'serait'],
      plural: ['serions', 'seriez', 'seraient']
    },
    subjunctive: {
      singular: ['sois', 'sois', 'soit'],
      plural: ['soyons', 'soyez', 'soient']
    }
  },
  {
    fr: 'pouvoir', 
    en: 'to be able to', 
    present: {
      singular: ['peux', 'peux', 'peut'],
      plural: ['pouvons', 'pouvez', 'peuvent']
    },
    imperfect: {
      singular: ['pouvais', 'pouvais', 'pouvait'],
      plural: ['pouvions', 'pouviez', 'pouvaient']
    },
    future: {
      singular: ['pourrai', 'pourras', 'pourra'],
      plural: ['pourrons', 'pourrez', 'pourront']
    }, 
    conditional: {
      singular: ['pourrais', 'pourrais', 'pourrait'],
      plural: ['pourrions', 'pourriez', 'pourraient']
    },
    subjunctive: {
      singular: ['puisse', 'puisses', 'puisse'],
      plural: ['puissions', 'puissiez', 'puissent']
    }
  },
  {
    fr: 'savoir', 
    en: 'to know, to know how to', 
    present: {
      singular: ['sais', 'sais', 'sait'],
      plural: ['savons', 'savez', 'savent']
    },
    imperfect: {
      singular: ['savais', 'savais', 'savait'],
      plural: ['savions', 'saviez', 'savaient']
    },
    future: {
      singular: ['saurai', 'sauras', 'saura'],
      plural: ['saurons', 'saurez', 'sauront']
    }, 
    conditional: {
      singular: ['saurais', 'saurais', 'saurait'],
      plural: ['saurions', 'sauriez', 'sauraient']
    },
    subjunctive: {
      singular: ['sache', 'saches', 'sache'],
      plural: ['sachions', 'sachiez', 'sachent']
    }
  },
  {
    fr: 'voir', 
    en: 'to see', 
    present: {
      singular: ['vois', 'vois', 'voit'],
      plural: ['voyons', 'voyez', 'voient']
    },
    imperfect: {
      singular: ['voyais', 'voyais', 'voyait'],
      plural: ['voyions', 'voyiez', 'voyaient']
    },
    future: {
      singular: ['verrai', 'verras', 'verra'],
      plural: ['verrons', 'verrez', 'verront']
    }, 
    conditional: {
      singular: ['verrais', 'verrais', 'verrait'],
      plural: ['verrions', 'verriez', 'verraient']
    },
    subjunctive: {
      singular: ['voie', 'voies', 'voie'],
      plural: ['voyions', 'voyiez', 'voient']
    }
  },
  {
    fr: 'vouloir', 
    en: 'to want to', 
    present: {
      singular: ['veux', 'veux', 'veut'],
      plural: ['voulons', 'voulez', 'veulent']
    },
    imperfect: {
      singular: ['voulais', 'voulais', 'voulait'],
      plural: ['voulions', 'vouliez', 'voulaient']
    },
    future: {
      singular: ['voudrai', 'voudras', 'voudra'],
      plural: ['voudrons', 'voudrez', 'voudront']
    }, 
    conditional: {
      singular: ['voudrais', 'voudrais', 'voudrait'],
      plural: ['voudrions', 'voudriez', 'voudraient']
    },
    subjunctive: {
      singular: ['veuille', 'veuilles', 'veuille'],
      plural: ['voulions', 'vouliez', 'veuillent']
    }
  },
  {
    fr: 'mettre', 
    en: 'to put, to place', 
    present: {
      singular: ['mets', 'mets', 'met'],
      plural: ['mettons', 'mettez', 'mettent']
    },
    imperfect: {
      singular: ['mettais', 'mettais', 'mettait'],
      plural: ['mettions', 'mettiez', 'mettaient']
    },
    future: {
      singular: ['mettrai', 'mettras', 'mettra'],
      plural: ['mettrons', 'mettrez', 'mettront']
    }, 
    conditional: {
      singular: ['mettrais', 'mettrais', 'mettrait'],
      plural: ['mettrions', 'mettriez', 'mettraient']
    },
    subjunctive: {
      singular: ['mette', 'mettes', 'mette'],
      plural: ['mettions', 'mettiez', 'mettent']
    }
  },
  {
    fr: 'devoir', 
    en: 'to have to, must, to owe', 
    present: {
      singular: ['dois', 'dois', 'doit'],
      plural: ['devons', 'devez', 'doivent']
    },
    imperfect: {
      singular: ['devais', 'devais', 'devait'],
      plural: ['devions', 'deviez', 'devaient']
    },
    future: {
      singular: ['devrai', 'devras', 'devra'],
      plural: ['devrons', 'devrez', 'devront']
    }, 
    conditional: {
      singular: ['devrais', 'devrais', 'devrait'],
      plural: ['devrions', 'devriez', 'devraient']
    },
    subjunctive: {
      singular: ['doive', 'doives', 'doive'],
      plural: ['devions', 'deviez', 'doivent']
    }
  },
  {
    fr: 'prendre', 
    en: 'to take, to catch, to capture', 
    present: {
      singular: ['prends', 'prends', 'prend'],
      plural: ['prenons', 'prenez', 'prennent']
    },
    imperfect: {
      singular: ['prenais', 'prenais', 'prenait'],
      plural: ['prenions', 'preniez', 'prenaient']
    },
    future: {
      singular: ['prendrai', 'prendras', 'prendra'],
      plural: ['prendrons', 'prendrez', 'prendront']
    }, 
    conditional: {
      singular: ['prendrais', 'prendrais', 'prendrais'],
      plural: ['prendrions', 'prendriez', 'prendraient']
    },
    subjunctive: {
      singular: ['prenne', 'prennes', 'prenne'],
      plural: ['prenions', 'preniez', 'prennent']
    }
  },
  {
    fr: 'venir', 
    en: 'to come', 
    present: {
      singular: ['viens', 'viens', 'vient'],
      plural: ['venons', 'venez', 'viennent']
    },
    imperfect: {
      singular: ['venais', 'venais', 'venait'],
      plural: ['venions', 'veniez', 'venaient']
    },
    future: {
      singular: ['viendrai', 'viendras', 'viendra'],
      plural: ['viendrons', 'viendrez', 'viendront']
    }, 
    conditional: {
      singular: ['viendrais', 'viendrais', 'viendrait'],
      plural: ['viendrions', 'viendriez', 'viendraient']
    },
    subjunctive: {
      singular: ['vienne', 'viennes', 'vienne'],
      plural: ['venions', 'veniez', 'viennent']
    }
  },
  {
    fr: 'comprendre', 
    en: 'to take, to catch, to capture', 
    present: {
      singular: ['comprends', 'comprends', 'comprend'],
      plural: ['comprenons', 'comprenez', 'comprennent']
    },
    imperfect: {
      singular: ['comprenais', 'comprenais', 'comprenait'],
      plural: ['comprenions', 'compreniez', 'comprenaient']
    },
    future: {
      singular: ['comprendrai', 'comprendras', 'comprendra'],
      plural: ['comprendrons', 'comprendrez', 'comprendront']
    }, 
    conditional: {
      singular: ['comprendrais', 'comprendrais', 'comprendrais'],
      plural: ['comprendrions', 'comprendriez', 'comprendraient']
    },
    subjunctive: {
      singular: ['comprenne', 'comprennes', 'comprenne'],
      plural: ['comprenions', 'compreniez', 'comprennent']
    }
  },
  {
    fr: 'admettre', 
    en: 'to admit', 
    present: {
      singular: ['admets', 'admets', 'admet'],
      plural: ['admettons', 'admettez', 'admettent']
    },
    imperfect: {
      singular: ['admettais', 'admettais', 'admettait'],
      plural: ['admettions', 'admettiez', 'admettaient']
    },
    future: {
      singular: ['admettrai', 'admettras', 'admettra'],
      plural: ['admettrons', 'admettrez', 'admettront']
    }, 
    conditional: {
      singular: ['admettrais', 'admettrais', 'admettrait'],
      plural: ['admettrions', 'admettriez', 'admettraient']
    },
    subjunctive: {
      singular: ['admette', 'admettes', 'admette'],
      plural: ['admettions', 'admettiez', 'admettent']
    }
  },
  {
    fr: 'croire', 
    en: 'to believe, to believe in', 
    present: {
      singular: ['crois', 'crois', 'croit'],
      plural: ['croyons', 'croyez', 'croient']
    },
    imperfect: {
      singular: ['croyais', 'croyais', 'croyait'],
      plural: ['croyions', 'croyiez', 'croyaient']
    },
    future: {
      singular: ['croirai', 'croiras', 'croira'],
      plural: ['croirons', 'croirez', 'croiront']
    }, 
    conditional: {
      singular: ['croirais', 'croirais', 'croirait'],
      plural: ['croirions', 'croiriez', 'croiraient']
    },
    subjunctive: {
      singular: ['croie', 'croies', 'croie'],
      plural: ['croyions', 'croyiez', 'croient']
    }
  },
  {
    fr: 'appeler', 
    en: 'to call, to contact', 
    present: {
      singular: ['appelle', 'appelles', 'appelle'],
      plural: ['appelons', 'appelez', 'appellent']
    },
    imperfect: {
      singular: ['appelais', 'appelais', 'appelait'],
      plural: ['appelions', 'appeliez', 'appelaient']
    },
    future: {
      singular: ['appelerai', 'appeleras', 'appelera'],
      plural: ['appelerons', 'appelerez', 'appeleront']
    }, 
    conditional: {
      singular: ['appelerais', 'appelerais', 'appelerait'],
      plural: ['appelerions', 'appeleriez', 'appeleraient']
    },
    subjunctive: {
      singular: ['appelle', 'appelles', 'appelle'],
      plural: ['appelions', 'appeliez', 'appellent']
    }
  },
  {
    fr: 'remettre', 
    en: 'to put back on, to replace, to deliver', 
    present: {
      singular: ['remets', 'remets', 'remet'],
      plural: ['remettons', 'remettez', 'remettent']
    },
    imperfect: {
      singular: ['remettais', 'remettais', 'remettait'],
      plural: ['remettions', 'remettiez', 'remettaient']
    },
    future: {
      singular: ['remettrai', 'remettras', 'remettra'],
      plural: ['remettrons', 'remettrez', 'remettront']
    }, 
    conditional: {
      singular: ['remettrais', 'remettrais', 'remettrait'],
      plural: ['remettrions', 'remettriez', 'remettraient']
    },
    subjunctive: {
      singular: ['remette', 'remettes', 'remette'],
      plural: ['remettions', 'remettiez', 'remettent']
    }
  },
  {
    fr: 'permettre', 
    en: 'to permit, to allow', 
    present: {
      singular: ['permets', 'permets', 'permet'],
      plural: ['permettons', 'permettez', 'permettent']
    },
    imperfect: {
      singular: ['permettais', 'permettais', 'permettait'],
      plural: ['permettions', 'permettiez', 'permettaient']
    },
    future: {
      singular: ['permettrai', 'permettras', 'permettra'],
      plural: ['permettrons', 'permettrez', 'permettront']
    }, 
    conditional: {
      singular: ['permettrais', 'permettrais', 'permettrait'],
      plural: ['permettrions', 'permettriez', 'permettraient']
    },
    subjunctive: {
      singular: ['permette', 'permettes', 'permette'],
      plural: ['permettions', 'permettiez', 'permettent']
    }
  },
  {
    fr: 'revenir', 
    en: 'to comeback, to return', 
    present: {
      singular: ['reviens', 'reviens', 'revient'],
      plural: ['revenons', 'revenez', 'reviennent']
    },
    imperfect: {
      singular: ['revenais', 'revenais', 'revenait'],
      plural: ['revenions', 'reveniez', 'revenaient']
    },
    future: {
      singular: ['reviendrai', 'reviendras', 'reviendra'],
      plural: ['reviendrons', 'reviendrez', 'reviendront']
    }, 
    conditional: {
      singular: ['reviendrais', 'reviendrais', 'reviendrait'],
      plural: ['reviendrions', 'reviendriez', 'reviendraient']
    },
    subjunctive: {
      singular: ['revienne', 'reviennes', 'revienne'],
      plural: ['revenions', 'reveniez', 'reviennent']
    }
  },
  {
    fr: 'devenir', 
    en: 'to become', 
    present: {
      singular: ['deviens', 'deviens', 'devient'],
      plural: ['devenons', 'devenez', 'deviennent']
    },
    imperfect: {
      singular: ['devenais', 'devenais', 'devenait'],
      plural: ['devenions', 'deveniez', 'devenaient']
    },
    future: {
      singular: ['deviendrai', 'deviendras', 'deviendra'],
      plural: ['deviendrons', 'deviendrez', 'deviendront']
    }, 
    conditional: {
      singular: ['deviendrais', 'deviendrais', 'deviendrait'],
      plural: ['deviendrions', 'deviendriez', 'deviendraient']
    },
    subjunctive: {
      singular: ['devienne', 'deviennes', 'devienne'],
      plural: ['devenions', 'deveniez', 'deviennent']
    }
  },
  {
    fr: 'partir', 
    en: 'to leave, to depart', 
    present: {
      singular: ['pars', 'pars', 'part'],
      plural: ['partons', 'partez', 'partent']
    },
    imperfect: {
      singular: ['partais', 'partais', 'partait'],
      plural: ['partions', 'partiez', 'partaient']
    },
    future: {
      singular: ['partirai', 'partiras', 'partira'],
      plural: ['partirons', 'partirez', 'partiront']
    }, 
    conditional: {
      singular: ['partirais', 'partirais', 'partirait'],
      plural: ['partirions', 'partiriez', 'partiraient']
    },
    subjunctive: {
      singular: ['parte', 'partes', 'parte'],
      plural: ['partions', 'partiez', 'partent']
    }
  },
  {
    fr: 'ouvrir', 
    en: 'to open', 
    present: {
      singular: ['ouvre', 'ouvres', 'ouvre'],
      plural: ['ouvrons', 'ouvrez', 'ouvrent']
    },
    imperfect: {
      singular: ['ouvrais', 'ouvrais', 'ouvrait'],
      plural: ['ouvrions', 'ouvriez', 'ouvraient']
    },
    future: {
      singular: ['ouvrirai', 'ouvriras', 'ouvrira'],
      plural: ['ouvrirons', 'ouvrirez', 'ouvriront']
    }, 
    conditional: {
      singular: ['ouvrirais', 'ouvrirais', 'ouvrirait'],
      plural: ['ouvririons', 'ouvririez', 'ouvriraient']
    },
    subjunctive: {
      singular: ['ouvre', 'ouvres', 'ouvre'],
      plural: ['ouvrions', 'ouvriez', 'ouvrent']
    }
  },
  {
    fr: 'lire', 
    en: 'to read', 
    present: {
      singular: ['lis', 'lis', 'lit'],
      plural: ['lisons', 'lisez', 'lisent']
    },
    imperfect: {
      singular: ['lisais', 'lisais', 'lisait'],
      plural: ['lisions', 'lisiez', 'lisaient']
    },
    future: {
      singular: ['lirai', 'liras', 'lira'],
      plural: ['lirons', 'lirez', 'liront']
    }, 
    conditional: {
      singular: ['lirais', 'lirais', 'lirait'],
      plural: ['lirions', 'liriez', 'liraient']
    },
    subjunctive: {
      singular: ['lise', 'lises', 'lise'],
      plural: ['lisions', 'lisiez', 'lisent']
    }
  },
  {
    fr: 'écrire', 
    en: 'to write', 
    present: {
      singular: ['écris', 'écris', 'écrit'],
      plural: ['écrivons', 'écrivez', 'écrivent']
    },
    imperfect: {
      singular: ['écrivais', 'écrivais', 'écrivait'],
      plural: ['écrivions', 'écriviez', 'écrivaient']
    },
    future: {
      singular: ['écrirai', 'écriras', 'écrira'],
      plural: ['écrirons', 'écrirez', 'écriront']
    }, 
    conditional: {
      singular: ['écrirais', 'écrirais', 'écrirait'],
      plural: ['écririons', 'écririez', 'écriraient']
    },
    subjunctive: {
      singular: ['écrive', 'écrives', 'écrive'],
      plural: ['écrivions', 'écriviez', 'écrivent']
    }
  }
];

console.log(IRREGULAR_VERBS.length);