// You have four categories of verbs -> ER, IR, RE, and Irregular

// Based on a certain tense, user requests a quiz, the database must send back at least 10 verbs for a given quiz 

// The verbs that are chosen are sent based on the spaced repition algorithm 

const ER_VERBS = [
  {
    fr: 'regarder', 
    en: 'to look, to see, to watch', 
    present: {
      singular: ['regarde', 'regardes', 'regarde'],
      plural: ['regardons', 'regardez', 'regardent']
    },
    imperfect: {
      singular: ['regardais', 'regardais', 'regardait'],
      plural: ['regardions', 'regardiez', 'regardaient']
    },
    future: {
      singular: ['regarderai', 'regarderas', 'regardera'],
      plural: ['regarderons', 'regarderez', 'regarderont']
    }, 
    conditional: {
      singular: ['regarderais', 'regarderais', 'regarderait'],
      plural: ['regarderions', 'regarderiez', 'regarderaient']
    },
    subjunctive: {
      singular: ['regarde', 'regardes', 'regarde'],
      plural: ['regardions', 'regardiez', 'regardent']
    } 
  },
  {
    fr: 'aimer', 
    en: 'to like, to love', 
    present: {
      singular: ['aime', 'aimes', 'aime'],
      plural: ['aimons', 'aimez', 'aiment']
    },
    imperfect: {
      singular: ['aimais', 'aimais', 'aimait'],
      plural: ['aimions', 'aimiez', 'aimaient']
    },
    future: {
      singular: ['aimerai', 'aimeras', 'aimera'],
      plural: ['aimerons', 'aimerez', 'aimeront']
    }, 
    conditional: {
      singular: ['aimerais', 'aimerais', 'aimerait'],
      plural: ['aimerions', 'aimeriez', 'aimeraient']
    },
    subjunctive: {
      singular: ['aime', 'aimes', 'aime'],
      plural: ['aimions', 'aimiez', 'aiment']
    } 
  },
  {
    fr: 'apporter', 
    en: 'to bring', 
    present: {
      singular: ['apporte', 'apportes', 'apporte'],
      plural: ['apportons', 'apportez', 'apportent']
    },
    imperfect: {
      singular: ['apportais', 'apportais', 'apportait'],
      plural: ['apportions', 'apportiez', 'apportent']
    },
    future: {
      singular: ['apporterai', 'apporteras', 'apportera'],
      plural: ['apporterons', 'apporterez', 'apporteront']
    }, 
    conditional: {
      singular: ['apporterais', 'apporterais', 'apporterait'],
      plural: ['apporterions', 'apporteriez', 'apporteraient']
    },
    subjunctive: {
      singular: ['apporte', 'apportes', 'apporte'],
      plural: ['apportions', 'apportiez', 'apportent']
    }
  },
  {
    fr: 'casser', 
    en: 'to break', 
    present: {
      singular: ['casse', 'casses', 'casse'],
      plural: ['cassons', 'cassez', 'cassent']
    },
    imperfect: {
      singular: ['cassais', 'cassais', 'cassait'],
      plural: ['cassions', 'cassiez', 'cassent']
    },
    future: {
      singular: ['casserai', 'casseras', 'cassera'],
      plural: ['casserons', 'casserez', 'casseront']
    }, 
    conditional: {
      singular: ['casserais', 'casserais', 'casserait'],
      plural: ['casserions', 'casseriez', 'casseraient']
    },
    subjunctive: {
      singular: ['casse', 'casses', 'casse'],
      plural: ['cassions', 'cassiez', 'cassent']
    }
  },
  {
    fr: 'chanter', 
    en: 'to sing', 
    present: {
      singular: ['chante', 'chantes', 'chante'],
      plural: ['chantons', 'chantez', 'chantent']
    },
    imperfect: {
      singular: ['chantais', 'chantais', 'chantait'],
      plural: ['chantions', 'chantiez', 'chantent']
    },
    future: {
      singular: ['chanterai', 'chanteras', 'chantera'],
      plural: ['chanterons', 'chanterez', 'chanteront']
    }, 
    conditional: {
      singular: ['chanterais', 'chanterais', 'chanterait'],
      plural: ['chanterions', 'chanteriez', 'chanteraient']
    },
    subjunctive: {
      singular: ['chante', 'chantes', 'chante'],
      plural: ['chantions', 'chantiez', 'chantent']
    }
  },
  {
    fr: 'demander', 
    en: 'to ask', 
    present: {
      singular: ['demande', 'demandes', 'demande'],
      plural: ['demandons', 'demandez', 'demandent']
    },
    imperfect: {
      singular: ['demandais', 'demandais', 'demandait'],
      plural: ['demandions', 'demandiez', 'demandent']
    },
    future: {
      singular: ['demanderai', 'demanderas', 'demandera'],
      plural: ['demanderons', 'demanderez', 'demanderont']
    }, 
    conditional: {
      singular: ['demanderais', 'demanderais', 'demanderait'],
      plural: ['demanderions', 'demanderiez', 'demanderaient']
    },
    subjunctive: {
      singular: ['demande', 'demandes', 'demande'],
      plural: ['demandions', 'demandiez', 'demandent']
    }
  },
  {
    fr: 'écouter', 
    en: 'to listen to', 
    present: {
      singular: ['écoute', 'écoutes', 'écoute'],
      plural: ['écoutons', 'écoutez', 'écoutent']
    },
    imperfect: {
      singular: ['écoutais', 'écoutais', 'écoutait'],
      plural: ['écoutions', 'écoutiez', 'écoutent']
    },
    future: {
      singular: ['écouterai', 'écouteras', 'écoutera'],
      plural: ['écouterons', 'écouterez', 'écouteront']
    }, 
    conditional: {
      singular: ['écouterais', 'écouterais', 'écouterait'],
      plural: ['écouterions', 'écouteriez', 'écouteraient']
    },
    subjunctive: {
      singular: ['écoute', 'écoutes', 'écoute'],
      plural: ['écoutions', 'écoutiez', 'écoutent']
    }
  },
  {
    fr: 'donner', 
    en: 'to give', 
    present: {
      singular: ['donne', 'donnes', 'donne'],
      plural: ['donnons', 'donnez', 'donnent']
    },
    imperfect: {
      singular: ['donnais', 'donnais', 'donnait'],
      plural: ['donnions', 'donniez', 'donnent']
    },
    future: {
      singular: ['donnerai', 'donneras', 'donnera'],
      plural: ['donnerons', 'donnerez', 'donneront']
    }, 
    conditional: {
      singular: ['donnerais', 'donnerais', 'donnerait'],
      plural: ['donnerions', 'donneriez', 'donneraient']
    },
    subjunctive: {
      singular: ['donne', 'donnes', 'donne'],
      plural: ['donnions', 'donniez', 'donnent']
    }
  },
  {
    fr: 'fermer', 
    en: 'to close', 
    present: {
      singular: ['ferme', 'fermes', 'ferme'],
      plural: ['fermons', 'fermez', 'ferment']
    },
    imperfect: {
      singular: ['fermais', 'fermais', 'fermait'],
      plural: ['fermions', 'fermiez', 'ferment']
    },
    future: {
      singular: ['fermerai', 'fermeras', 'fermera'],
      plural: ['fermerons', 'fermerez', 'fermeront']
    }, 
    conditional: {
      singular: ['fermerais', 'fermerais', 'fermerait'],
      plural: ['fermerions', 'fermeriez', 'fermeraient']
    },
    subjunctive: {
      singular: ['ferme', 'fermes', 'ferme'],
      plural: ['fermions', 'fermiez', 'ferment']
    }
  },
  {
    fr: 'exprimer', 
    en: 'to express', 
    present: {
      singular: ['exprime', 'exprimes', 'exprime'],
      plural: ['exprimons', 'exprimez', 'expriment']
    },
    imperfect: {
      singular: ['exprimais', 'exprimais', 'exprimait'],
      plural: ['exprimions', 'exprimiez', 'expriment']
    },
    future: {
      singular: ['exprimerai', 'exprimeras', 'exprimera'],
      plural: ['exprimerons', 'exprimerez', 'exprimeront']
    }, 
    conditional: {
      singular: ['exprimerais', 'exprimerais', 'exprimerait'],
      plural: ['exprimerions', 'exprimeriez', 'exprimeraient']
    },
    subjunctive: {
      singular: ['exprime', 'exprimes', 'exprime'],
      plural: ['exprimions', 'exprimiez', 'expriment']
    }
  },
  {
    fr: 'étudier', 
    en: 'to study', 
    present: {
      singular: ['étudie', 'étudies', 'étudie'],
      plural: ['étudions', 'étudiez', 'étudient']
    },
    imperfect: {
      singular: ['étudiais', 'étudiais', 'étudiait'],
      plural: ['étudiions', 'étudiiez', 'étudient']
    },
    future: {
      singular: ['étudierai', 'étudieras', 'étudiera'],
      plural: ['étudierons', 'étudierez', 'étudieront']
    }, 
    conditional: {
      singular: ['étudierais', 'étudierais', 'étudierait'],
      plural: ['étudierions', 'étudieriez', 'étudieraient']
    },
    subjunctive: {
      singular: ['étudie', 'étudies', 'étudie'],
      plural: ['étudiions', 'étudiiez', 'étudient']
    }
  },
  {
    fr: 'enlever', 
    en: 'to remove', 
    present: {
      singular: ['enlève', 'enlèves', 'enlève'],
      plural: ['enlevons', 'enlevez', 'enlèvent']
    },
    imperfect: {
      singular: ['enlevais', 'enlevais', 'enlevait'],
      plural: ['enlevions', 'enleviez', 'enlevent']
    },
    future: {
      singular: ['enlèverai', 'enlèveras', 'enlèvera'],
      plural: ['enleverons', 'enleverez', 'enlèveront']
    }, 
    conditional: {
      singular: ['enlèverais', 'enlèverais', 'enlèverait'],
      plural: ['enlèverions', 'enlèveriez', 'enlèveraient']
    },
    subjunctive: {
      singular: ['enlève', 'enlèves', 'enlève'],
      plural: ['enlevions', 'enleviez', 'enlèvent']
    }
  },
  {
    fr: 'habiter', 
    en: 'to live', 
    present: {
      singular: ['habite', 'habites', 'habite'],
      plural: ['habitons', 'habitez', 'habitent']
    },
    imperfect: {
      singular: ['habitais', 'habitais', 'habitait'],
      plural: ['habitions', 'habitiez', 'habitent']
    },
    future: {
      singular: ['habiterai', 'habiteras', 'habitera'],
      plural: ['habiterons', 'habiterez', 'habiteront']
    }, 
    conditional: {
      singular: ['habiterais', 'habiterais', 'habiterait'],
      plural: ['habiterions', 'habiteriez', 'habiteraient']
    },
    subjunctive: {
      singular: ['habite', 'habites', 'habite'],
      plural: ['habitions', 'habitiez', 'habitent']
    }
  },
  {
    fr: 'montrer', 
    en: 'to show', 
    present: {
      singular: ['montre', 'montres', 'montre'],
      plural: ['montrons', 'montrez', 'montrent']
    },
    imperfect: {
      singular: ['montrais', 'montrais', 'montrait'],
      plural: ['montrions', 'montriez', 'montrent']
    },
    future: {
      singular: ['montrerai', 'montreras', 'montrera'],
      plural: ['montrerons', 'montrerez', 'montreront']
    }, 
    conditional: {
      singular: ['montrerais', 'montrerais', 'montrerait'],
      plural: ['montrerions', 'montreriez', 'montreraient']
    },
    subjunctive: {
      singular: ['montre', 'montres', 'montre'],
      plural: ['montrions', 'montriez', 'montrent']
    }
  },
  {
    fr: 'parler', 
    en: 'to speak', 
    present: {
      singular: ['parle', 'parles', 'parle'],
      plural: ['parlons', 'parlez', 'parlent']
    },
    imperfect: {
      singular: ['parlais', 'parlais', 'parlait'],
      plural: ['parlions', 'parliez', 'parlent']
    },
    future: {
      singular: ['parlerai', 'parleras', 'parlera'],
      plural: ['parlerons', 'parlerez', 'parleront']
    }, 
    conditional: {
      singular: ['parlerais', 'parlerais', 'parlerait'],
      plural: ['parlerions', 'parleriez', 'parleraient']
    },
    subjunctive: {
      singular: ['parle', 'parles', 'parle'],
      plural: ['parlions', 'parliez', 'parlent']
    }
  },
  {
    fr: 'penser', 
    en: 'to think', 
    present: {
      singular: ['pense', 'penses', 'pense'],
      plural: ['pensons', 'pensez', 'pensent']
    },
    imperfect: {
      singular: ['pensais', 'pensais', 'pensait'],
      plural: ['pensions', 'pensiez', 'pensent']
    },
    future: {
      singular: ['penserai', 'penseras', 'pensera'],
      plural: ['penserons', 'penserez', 'penseront']
    }, 
    conditional: {
      singular: ['penserais', 'penserais', 'penserait'],
      plural: ['penserions', 'penseriez', 'penseraient']
    },
    subjunctive: {
      singular: ['pense', 'penses', 'pense'],
      plural: ['pensions', 'pensiez', 'pensent']
    }
  },
  {
    fr: 'porter', 
    en: 'to wear, to carry', 
    present: {
      singular: ['porte', 'portes', 'porte'],
      plural: ['portons', 'portez', 'portent']
    },
    imperfect: {
      singular: ['portais', 'portais', 'portait'],
      plural: ['portions', 'portiez', 'portent']
    },
    future: {
      singular: ['porterai', 'porteras', 'portera'],
      plural: ['porterons', 'porterez', 'porteront']
    }, 
    conditional: {
      singular: ['porterais', 'porterais', 'porterait'],
      plural: ['porterions', 'porteriez', 'porteraient']
    },
    subjunctive: {
      singular: ['porte', 'portes', 'porte'],
      plural: ['portions', 'portiez', 'portent']
    }
  },
  {
    fr: 'rencontrer', 
    en: 'to meet', 
    present: {
      singular: ['rencontre', 'rencontres', 'rencontre'],
      plural: ['rencontrons', 'rencontrez', 'rencontrent']
    },
    imperfect: {
      singular: ['rencontrais', 'rencontrais', 'rencontrait'],
      plural: ['rencontrions', 'rencontriez', 'rencontrent']
    },
    future: {
      singular: ['rencontrerai', 'rencontreras', 'rencontrera'],
      plural: ['rencontrerons', 'rencontrerez', 'rencontreront']
    }, 
    conditional: {
      singular: ['rencontrerais', 'rencontrerais', 'rencontrerait'],
      plural: ['rencontrerions', 'rencontreriez', 'rencontreraient']
    },
    subjunctive: {
      singular: ['rencontre', 'rencontres', 'rencontre'],
      plural: ['rencontrions', 'rencontriez', 'rencontrent']
    }
  },
  {
    fr: 'rester', 
    en: 'to stay', 
    present: {
      singular: ['reste', 'restes', 'reste'],
      plural: ['restons', 'restez', 'restent']
    },
    imperfect: {
      singular: ['restais', 'restais', 'restait'],
      plural: ['restions', 'restiez', 'restent']
    },
    future: {
      singular: ['resterai', 'resteras', 'restera'],
      plural: ['resterons', 'resterez', 'resteront']
    }, 
    conditional: {
      singular: ['resterais', 'resterais', 'resterait'],
      plural: ['resterions', 'resteriez', 'resteraient']
    },
    subjunctive: {
      singular: ['reste', 'restes', 'reste'],
      plural: ['restions', 'restiez', 'restent']
    }
  },
  {
    fr: 'tomber', 
    en: 'to fall', 
    present: {
      singular: ['tombe', 'tombes', 'tombe'],
      plural: ['tombons', 'tombez', 'tombent']
    },
    imperfect: {
      singular: ['tombais', 'tombais', 'tombait'],
      plural: ['tombions', 'tombiez', 'tombent']
    },
    future: {
      singular: ['tomberai', 'tomberas', 'tombera'],
      plural: ['tomberons', 'tomberez', 'tomberont']
    }, 
    conditional: {
      singular: ['tomberais', 'tomberais', 'tomberait'],
      plural: ['tomberions', 'tomberiez', 'tomberaient']
    },
    subjunctive: {
      singular: ['tombe', 'tombes', 'tombe'],
      plural: ['tombions', 'tombiez', 'tombent']
    }
  },
  {
    fr: 'travailler', 
    en: 'to work', 
    present: {
      singular: ['travaille', 'travailles', 'travaille'],
      plural: ['travaillons', 'travaillez', 'trouvent']
    },
    imperfect: {
      singular: ['travaillais', 'travaillais', 'travaillait'],
      plural: ['travaillions', 'travailliez', 'travaillent']
    },
    future: {
      singular: ['travaillerai', 'travailleras', 'travaillera'],
      plural: ['travaillerons', 'travaillerez', 'trouveront']
    }, 
    conditional: {
      singular: ['travaillerais', 'travaillerais', 'travaillerait'],
      plural: ['travaillerions', 'travailleriez', 'travailleraient']
    },
    subjunctive: {
      singular: ['travaille', 'travailles', 'travaille'],
      plural: ['travaillions', 'travailliez', 'trouvent']
    }
  },
  {
    fr: 'trouver', 
    en: 'to find', 
    present: {
      singular: ['trouve', 'trouves', 'trouve'],
      plural: ['trouvons', 'trouvez', 'trouvent']
    },
    imperfect: {
      singular: ['trouvais', 'trouvais', 'trouvait'],
      plural: ['trouvions', 'trouviez', 'trouvent']
    },
    future: {
      singular: ['trouverai', 'trouveras', 'trouvera'],
      plural: ['trouverons', 'trouverez', 'trouveront']
    }, 
    conditional: {
      singular: ['trouverais', 'trouverais', 'trouverait'],
      plural: ['trouverions', 'trouveriez', 'trouveraient']
    },
    subjunctive: {
      singular: ['trouve', 'trouves', 'trouve'],
      plural: ['trouvions', 'trouviez', 'trouvent']
    }
  },
  {
    fr: 'utiliser', 
    en: 'to use', 
    present: {
      singular: ['utilise', 'utilises', 'utilise'],
      plural: ['utilisons', 'utilisez', 'utilisent']
    },
    imperfect: {
      singular: ['utilisais', 'utilisais', 'utilisait'],
      plural: ['utilisions', 'utilisiez', 'utilisent']
    },
    future: {
      singular: ['utiliserai', 'utiliseras', 'utilisera'],
      plural: ['utiliserons', 'utiliserez', 'utiliseront']
    }, 
    conditional: {
      singular: ['utiliserais', 'utiliserais', 'utiliserait'],
      plural: ['utiliserions', 'utiliseriez', 'utiliseraient']
    },
    subjunctive: {
      singular: ['utilise', 'utilises', 'utilise'],
      plural: ['utilisions', 'utilisiez', 'utilisent']
    }
  },
  {
    fr: 'saluer', 
    en: 'to greet', 
    present: {
      singular: ['salue', 'salues', 'salue'],
      plural: ['saluons', 'saluez', 'saluent']
    },
    imperfect: {
      singular: ['saluais', 'saluais', 'saluait'],
      plural: ['saluions', 'saluiez', 'saluent']
    },
    future: {
      singular: ['saluerai', 'salueras', 'saluera'],
      plural: ['saluerons', 'saluerez', 'salueront']
    }, 
    conditional: {
      singular: ['saluerais', 'saluerais', 'saluerait'],
      plural: ['saluerions', 'salueriez', 'salueraient']
    },
    subjunctive: {
      singular: ['salue', 'salues', 'salue'],
      plural: ['saluions', 'saluiez', 'saluent']
    }
  },
  {
    fr: 'couper', 
    en: 'to cut', 
    present: {
      singular: ['coupe', 'coupes', 'coupe'],
      plural: ['coupons', 'coupez', 'coupent']
    },
    imperfect: {
      singular: ['coupais', 'coupais', 'coupait'],
      plural: ['coupions', 'coupiez', 'coupent']
    },
    future: {
      singular: ['couperai', 'couperas', 'coupera'],
      plural: ['couperons', 'couperez', 'couperont']
    }, 
    conditional: {
      singular: ['couperais', 'couperais', 'couperait'],
      plural: ['couperions', 'couperiez', 'couperaient']
    },
    subjunctive: {
      singular: ['coupe', 'coupes', 'coupe'],
      plural: ['coupions', 'coupiez', 'coupent']
    }
  }
];

console.log(ER_VERBS.length);