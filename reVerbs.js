const RE_VERBS = [
  {
    fr: 'attendre', 
    en: 'to wait', 
    present: {
      singular: ['attends', 'attends', 'attend'],
      plural: ['attendons', 'attendez', 'attendent']
    },
    imperfect: {
      singular: ['attendais', 'attendais', 'attendait'],
      plural: ['attendions', 'attendiez', 'attendaient']
    },
    future: {
      singular: ['attendrai', 'attendras', 'attendra'],
      plural: ['attendrons', 'attendrez', 'attendront']
    }, 
    conditional: {
      singular: ['attendrais', 'attendrais', 'attendrait'],
      plural: ['attendrions', 'attendriez', 'attendraient']
    },
    subjunctive: {
      singular: ['attende', 'attendes', 'attende'],
      plural: ['attendions', 'attendiez', 'attendent']
    }
  },
  {
    fr: 'défendre', 
    en: 'to defend', 
    present: {
      singular: ['défends', 'défends', 'défend'],
      plural: ['défendons', 'défendez', 'défendent']
    },
    imperfect: {
      singular: ['défendais', 'défendais', 'défendait'],
      plural: ['défendions', 'défendiez', 'défendaient']
    },
    future: {
      singular: ['défendrai', 'défendras', 'défendra'],
      plural: ['défendrons', 'défendrez', 'défendront']
    }, 
    conditional: {
      singular: ['défendrais', 'défendrais', 'défendrait'],
      plural: ['défendrions', 'défendriez', 'défendraient']
    },
    subjunctive: {
      singular: ['défende', 'défendes', 'défende'],
      plural: ['défendions', 'défendiez', 'défendent']
    }
  },
  {
    fr: 'dépendre', 
    en: 'to depend', 
    present: {
      singular: ['dépends', 'dépends', 'dépend'],
      plural: ['dépendons', 'dépendez', 'dépendent']
    },
    imperfect: {
      singular: ['dépendais', 'dépendais', 'dépendait'],
      plural: ['dépendions', 'dépendiez', 'dépendaient']
    },
    future: {
      singular: ['dépendrai', 'dépendras', 'dépendra'],
      plural: ['dépendrons', 'dépendrez', 'dépendront']
    }, 
    conditional: {
      singular: ['dépendrais', 'dépendrais', 'dépendrait'],
      plural: ['dépendrions', 'dépendriez', 'dépendraient']
    },
    subjunctive: {
      singular: ['dépende', 'dépendes', 'dépende'],
      plural: ['dépendions', 'dépendiez', 'dépendent']
    }
  },
  {
    fr: 'descendre', 
    en: 'to descend, to lower', 
    present: {
      singular: ['descends', 'descends', 'descend'],
      plural: ['descendons', 'descendez', 'descendent']
    },
    imperfect: {
      singular: ['descendais', 'descendais', 'descendait'],
      plural: ['descendions', 'descendiez', 'descendaient']
    },
    future: {
      singular: ['descendrai', 'descendras', 'descendra'],
      plural: ['descendrons', 'descendrez', 'descendront']
    }, 
    conditional: {
      singular: ['descendrais', 'descendrais', 'descendrait'],
      plural: ['descendrions', 'descendriez', 'descendraient']
    },
    subjunctive: {
      singular: ['descende', 'descendes', 'descende'],
      plural: ['descendions', 'descendiez', 'descendent']
    }
  },
  {
    fr: 'détendre', 
    en: 'to relax', 
    present: {
      singular: ['détends', 'détends', 'détend'],
      plural: ['détendons', 'détendez', 'détendent']
    },
    imperfect: {
      singular: ['détendais', 'détendais', 'détendait'],
      plural: ['détendions', 'détendiez', 'détendaient']
    },
    future: {
      singular: ['détendrai', 'détendras', 'détendra'],
      plural: ['détendrons', 'détendrez', 'détendront']
    }, 
    conditional: {
      singular: ['détendrais', 'détendrais', 'détendrait'],
      plural: ['détendrions', 'détendriez', 'détendraient']
    },
    subjunctive: {
      singular: ['détende', 'détendes', 'détende'],
      plural: ['détendions', 'détendiez', 'détendent']
    }
  },
  {
    fr: 'entendre', 
    en: 'to relax', 
    present: {
      singular: ['entends', 'entends', 'entend'],
      plural: ['entendons', 'entendez', 'entendent']
    },
    imperfect: {
      singular: ['entendais', 'entendais', 'entendait'],
      plural: ['entendions', 'entendiez', 'entendaient']
    },
    future: {
      singular: ['entendrai', 'entendras', 'entendra'],
      plural: ['entendrons', 'entendrez', 'entendront']
    }, 
    conditional: {
      singular: ['entendrais', 'entendrais', 'entendrait'],
      plural: ['entendrions', 'entendriez', 'entendraient']
    },
    subjunctive: {
      singular: ['entende', 'entendes', 'entende'],
      plural: ['entendions', 'entendiez', 'entendent']
    }
  },
  {
    fr: 'étendre', 
    en: 'to stretch out, to spread', 
    present: {
      singular: ['étends', 'étends', 'étend'],
      plural: ['étendons', 'étendez', 'étendent']
    },
    imperfect: {
      singular: ['étendais', 'étendais', 'étendait'],
      plural: ['étendions', 'étendiez', 'étendaient']
    },
    future: {
      singular: ['étendrai', 'étendras', 'étendra'],
      plural: ['étendrons', 'étendrez', 'étendront']
    }, 
    conditional: {
      singular: ['étendrais', 'étendrais', 'étendrait'],
      plural: ['étendrions', 'étendriez', 'étendraient']
    },
    subjunctive: {
      singular: ['étende', 'étendes', 'étende'],
      plural: ['étendions', 'étendiez', 'étendent']
    }
  },
  {
    fr: 'fendre', 
    en: 'to split', 
    present: {
      singular: ['fends', 'fends', 'fend'],
      plural: ['fendons', 'fendez', 'fendent']
    },
    imperfect: {
      singular: ['fendais', 'fendais', 'fendait'],
      plural: ['fendions', 'fendiez', 'fendaient']
    },
    future: {
      singular: ['fendrai', 'fendras', 'fendra'],
      plural: ['fendrons', 'fendrez', 'fendront']
    }, 
    conditional: {
      singular: ['fendrais', 'fendrais', 'fendrait'],
      plural: ['fendrions', 'fendriez', 'fendraient']
    },
    subjunctive: {
      singular: ['fende', 'fendes', 'fende'],
      plural: ['fendions', 'fendiez', 'fendent']
    }
  },
  {
    fr: 'fondre', 
    en: 'to melt', 
    present: {
      singular: ['fonds', 'fonds', 'fond'],
      plural: ['fondons', 'fondez', 'fondent']
    },
    imperfect: {
      singular: ['fondais', 'fondais', 'fondait'],
      plural: ['fondions', 'fondiez', 'fondaient']
    },
    future: {
      singular: ['fondrai', 'fondras', 'fondra'],
      plural: ['fondrons', 'fondrez', 'fondront']
    }, 
    conditional: {
      singular: ['fondrais', 'fondrais', 'fondrait'],
      plural: ['fondrions', 'fondriez', 'fondraient']
    },
    subjunctive: {
      singular: ['fonde', 'fondes', 'fonde'],
      plural: ['fondions', 'fondiez', 'fondent']
    }
  },
  {
    fr: 'mordre', 
    en: 'to bite', 
    present: {
      singular: ['mords', 'mords', 'mord'],
      plural: ['mordons', 'mordez', 'mordent']
    },
    imperfect: {
      singular: ['mordais', 'mordais', 'mordait'],
      plural: ['mordions', 'mordiez', 'mordaient']
    },
    future: {
      singular: ['mordrai', 'mordras', 'mordra'],
      plural: ['mordrons', 'mordrez', 'mordront']
    }, 
    conditional: {
      singular: ['mordrais', 'mordrais', 'mordrait'],
      plural: ['mordrions', 'mordriez', 'mordraient']
    },
    subjunctive: {
      singular: ['morde', 'mordes', 'morde'],
      plural: ['mordions', 'mordiez', 'mordent']
    }
  },
  {
    fr: 'pendre', 
    en: 'to hang', 
    present: {
      singular: ['pends', 'pends', 'pend'],
      plural: ['pendons', 'pendez', 'pendent']
    },
    imperfect: {
      singular: ['pendais', 'pendais', 'pendait'],
      plural: ['pendions', 'pendiez', 'pendaient']
    },
    future: {
      singular: ['pendrai', 'pendras', 'pendra'],
      plural: ['pendrons', 'pendrez', 'pendront']
    }, 
    conditional: {
      singular: ['pendrais', 'pendrais', 'pendrait'],
      plural: ['pendrions', 'pendriez', 'pendraient']
    },
    subjunctive: {
      singular: ['pende', 'pendes', 'pende'],
      plural: ['pendions', 'pendiez', 'pendent']
    }
  },
  {
    fr: 'perdre', 
    en: 'to lose', 
    present: {
      singular: ['perds', 'perds', 'perd'],
      plural: ['perdons', 'perdez', 'perdent']
    },
    imperfect: {
      singular: ['perdais', 'perdais', 'perdait'],
      plural: ['perdions', 'perdiez', 'perdaient']
    },
    future: {
      singular: ['perdrai', 'perdras', 'perdra'],
      plural: ['perdrons', 'perdrez', 'perdront']
    }, 
    conditional: {
      singular: ['perdrais', 'perdrais', 'perdrait'],
      plural: ['perdrions', 'perdriez', 'perdraient']
    },
    subjunctive: {
      singular: ['perde', 'perdes', 'perde'],
      plural: ['perdions', 'perdiez', 'perdent']
    }
  },
  {
    fr: 'prétendre', 
    en: 'to claim', 
    present: {
      singular: ['prétends', 'prétends', 'prétend'],
      plural: ['prétendons', 'prétendez', 'prétendent']
    },
    imperfect: {
      singular: ['prétendais', 'prétendais', 'prétendait'],
      plural: ['prétendions', 'prétendiez', 'prétendaient']
    },
    future: {
      singular: ['prétendrai', 'prétendras', 'prétendra'],
      plural: ['prétendrons', 'prétendrez', 'prétendront']
    }, 
    conditional: {
      singular: ['prétendrais', 'prétendrais', 'prétendrait'],
      plural: ['prétendrions', 'prétendriez', 'prétendraient']
    },
    subjunctive: {
      singular: ['prétende', 'prétendes', 'prétende'],
      plural: ['prétendions', 'prétendiez', 'prétendent']
    }
  },
  {
    fr: 'rendre', 
    en: 'to render, to give back', 
    present: {
      singular: ['rends', 'rends', 'rend'],
      plural: ['rendons', 'rendez', 'rendent']
    },
    imperfect: {
      singular: ['rendais', 'rendais', 'rendait'],
      plural: ['rendions', 'rendiez', 'rendaient']
    },
    future: {
      singular: ['rendrai', 'rendras', 'rendra'],
      plural: ['rendrons', 'rendrez', 'rendront']
    }, 
    conditional: {
      singular: ['rendrais', 'rendrais', 'rendrait'],
      plural: ['rendrions', 'rendriez', 'rendraient']
    },
    subjunctive: {
      singular: ['rende', 'rendes', 'rende'],
      plural: ['rendions', 'rendiez', 'rendent']
    }
  },
  {
    fr: 'répandre', 
    en: 'to spread, to scatter', 
    present: {
      singular: ['répands', 'répands', 'répand'],
      plural: ['répandons', 'répandez', 'répandent']
    },
    imperfect: {
      singular: ['répandais', 'répandais', 'répandait'],
      plural: ['répandions', 'répandiez', 'répandaient']
    },
    future: {
      singular: ['répandrai', 'répandras', 'répandra'],
      plural: ['répandrons', 'répandrez', 'répandront']
    }, 
    conditional: {
      singular: ['répandrais', 'répandrais', 'répandrait'],
      plural: ['répandrions', 'répandriez', 'répandraient']
    },
    subjunctive: {
      singular: ['répande', 'répandes', 'répande'],
      plural: ['répandions', 'répandiez', 'répandent']
    }
  },
  {
    fr: 'répondre', 
    en: 'to respond', 
    present: {
      singular: ['réponds', 'réponds', 'répond'],
      plural: ['répondons', 'répondez', 'répondent']
    },
    imperfect: {
      singular: ['répondais', 'répondais', 'répondait'],
      plural: ['répondions', 'répondiez', 'répondaient']
    },
    future: {
      singular: ['répondrai', 'répondras', 'répondra'],
      plural: ['répondrons', 'répondrez', 'répondront']
    }, 
    conditional: {
      singular: ['répondrais', 'répondrais', 'répondrait'],
      plural: ['répondrions', 'répondriez', 'répondraient']
    },
    subjunctive: {
      singular: ['réponde', 'répondes', 'réponde'],
      plural: ['répondions', 'répondiez', 'répondent']
    }
  },
  {
    fr: 'tendre', 
    en: 'to tighten', 
    present: {
      singular: ['tends', 'tends', 'tend'],
      plural: ['tendons', 'tendez', 'tendent']
    },
    imperfect: {
      singular: ['tendais', 'tendais', 'tendait'],
      plural: ['tendions', 'tendiez', 'tendaient']
    },
    future: {
      singular: ['tendrai', 'tendras', 'tendra'],
      plural: ['tendrons', 'tendrez', 'tendront']
    }, 
    conditional: {
      singular: ['tendrais', 'tendrais', 'tendrait'],
      plural: ['tendrions', 'tendriez', 'tendraient']
    },
    subjunctive: {
      singular: ['tende', 'tendes', 'tende'],
      plural: ['tendions', 'tendiez', 'tendent']
    }
  },
  {
    fr: 'vendre', 
    en: 'to sell', 
    present: {
      singular: ['vends', 'vends', 'vend'],
      plural: ['vendons', 'vendez', 'vendent']
    },
    imperfect: {
      singular: ['vendais', 'vendais', 'vendait'],
      plural: ['vendions', 'vendiez', 'vendaient']
    },
    future: {
      singular: ['vendrai', 'vendras', 'vendra'],
      plural: ['vendrons', 'vendrez', 'vendront']
    }, 
    conditional: {
      singular: ['vendrais', 'vendrais', 'vendrait'],
      plural: ['vendrions', 'vendriez', 'vendraient']
    },
    subjunctive: {
      singular: ['vende', 'vendes', 'vende'],
      plural: ['vendions', 'vendiez', 'vendent']
    }
  },
  {
    fr: 'tordre', 
    en: 'to twist', 
    present: {
      singular: ['tords', 'tords', 'tord'],
      plural: ['tordons', 'tordez', 'tordent']
    },
    imperfect: {
      singular: ['tordais', 'tordais', 'tordait'],
      plural: ['tordions', 'tordiez', 'tordaient']
    },
    future: {
      singular: ['tordrai', 'tordras', 'tordra'],
      plural: ['tordrons', 'tordrez', 'tordront']
    }, 
    conditional: {
      singular: ['tordrais', 'tordrais', 'tordrait'],
      plural: ['tordrions', 'tordriez', 'tordraient']
    },
    subjunctive: {
      singular: ['torde', 'tordes', 'torde'],
      plural: ['tordions', 'tordiez', 'tordent']
    }
  },
  {
    fr: 'pondre', 
    en: 'to lay an egg', 
    present: {
      singular: ['ponds', 'ponds', 'pond'],
      plural: ['pondons', 'pondez', 'pondent']
    },
    imperfect: {
      singular: ['pondais', 'pondais', 'pondait'],
      plural: ['pondions', 'pondiez', 'pondaient']
    },
    future: {
      singular: ['pondrai', 'pondras', 'pondra'],
      plural: ['pondrons', 'pondrez', 'pondront']
    }, 
    conditional: {
      singular: ['pondrais', 'pondrais', 'pondrait'],
      plural: ['pondrions', 'pondriez', 'pondraient']
    },
    subjunctive: {
      singular: ['ponde', 'pondes', 'ponde'],
      plural: ['pondions', 'pondiez', 'pondent']
    }
  },
];

console.log(RE_VERBS.length);