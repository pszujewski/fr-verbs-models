const IR_VERBS = [
  {
    fr: 'accomplir', 
    en: 'to accomplish', 
    present: {
      singular: ['accomplis', 'accomplis', 'accomplit'],
      plural: ['accomplissons', 'accomplissez', 'accomplissent']
    },
    imperfect: {
      singular: ['accomplissais', 'accomplissais', 'accomplissait'],
      plural: ['accomplissions', 'accomplissiez', 'accomplissaient']
    },
    future: {
      singular: ['accomplirai', 'accompliras', 'accomplira'],
      plural: ['accomplirons', 'accomplirez', 'accompliront']
    }, 
    conditional: {
      singular: ['accomplirais', 'accomplirais', 'accomplirait'],
      plural: ['accomplirions', 'accompliriez', 'accompliraient']
    },
    subjunctive: {
      singular: ['accomplisse', 'accomplisses', 'accomplisse'],
      plural: ['accomplissions', 'accomplissiez', 'accomplissent']
    }
  },
  {
    fr: 'agir', 
    en: 'to act', 
    present: {
      singular: ['agis', 'agis', 'agit'],
      plural: ['agissons', 'agissez', 'agissent']
    },
    imperfect: {
      singular: ['agissais', 'agissais', 'agissait'],
      plural: ['agissions', 'agissiez', 'agissaient']
    },
    future: {
      singular: ['agirai', 'agiras', 'agira'],
      plural: ['agirons', 'agirez', 'agiront']
    }, 
    conditional: {
      singular: ['agirais', 'agirais', 'agirait'],
      plural: ['agirions', 'agiriez', 'agiraient']
    },
    subjunctive: {
      singular: ['agisse', 'agisses', 'agisse'],
      plural: ['agissions', 'agissiez', 'agissent']
    }
  },
  {
    fr: 'choisir', 
    en: 'to choose', 
    present: {
      singular: ['choisis', 'choisis', 'choisit'],
      plural: ['choisissons', 'choisissez', 'choisissent']
    },
    imperfect: {
      singular: ['choisissais', 'choisissais', 'choisissait'],
      plural: ['choisissions', 'choisissiez', 'choisissaient']
    },
    future: {
      singular: ['choisirai', 'choisiras', 'choisira'],
      plural: ['choisirons', 'choisirez', 'choisiront']
    }, 
    conditional: {
      singular: ['choisirais', 'choisirais', 'choisirait'],
      plural: ['choisirions', 'choisiriez', 'choisiraient']
    },
    subjunctive: {
      singular: ['choisisse', 'choisisses', 'choisisse'],
      plural: ['choisissions', 'choisissiez', 'choisissent']
    }
  },
  {
    fr: 'définir', 
    en: 'to define', 
    present: {
      singular: ['définis', 'définis', 'définit'],
      plural: ['définissons', 'définissez', 'définissent']
    },
    imperfect: {
      singular: ['définissais', 'définissais', 'définissait'],
      plural: ['définissions', 'définissiez', 'définissaient']
    },
    future: {
      singular: ['définirai', 'définiras', 'définira'],
      plural: ['définirons', 'définirez', 'définiront']
    }, 
    conditional: {
      singular: ['définirais', 'définirais', 'définirait'],
      plural: ['définirions', 'définiriez', 'définiraient']
    },
    subjunctive: {
      singular: ['définisse', 'définisses', 'définisse'],
      plural: ['définissions', 'définissiez', 'définissent']
    }
  },
  {
    fr: 'établir', 
    en: 'to establish', 
    present: {
      singular: ['établis', 'établis', 'établit'],
      plural: ['établissons', 'établissez', 'établissent']
    },
    imperfect: {
      singular: ['établissais', 'établissais', 'établissait'],
      plural: ['établissions', 'établissiez', 'établissaient']
    },
    future: {
      singular: ['établirai', 'établiras', 'établira'],
      plural: ['établirons', 'établirez', 'établiront']
    }, 
    conditional: {
      singular: ['établirais', 'établirais', 'établirait'],
      plural: ['établirions', 'établiriez', 'établiraient']
    },
    subjunctive: {
      singular: ['établisse', 'établisses', 'établisse'],
      plural: ['établissions', 'établissiez', 'établissent']
    }
  },
  {
    fr: 'finir', 
    en: 'to finish', 
    present: {
      singular: ['finis', 'finis', 'finit'],
      plural: ['finissons', 'finissez', 'finissent']
    },
    imperfect: {
      singular: ['finissais', 'finissais', 'finissait'],
      plural: ['finissions', 'finissiez', 'finissaient']
    },
    future: {
      singular: ['finirai', 'finiras', 'finira'],
      plural: ['finirons', 'finirez', 'finiront']
    }, 
    conditional: {
      singular: ['finirais', 'finirais', 'finirait'],
      plural: ['finirions', 'finiriez', 'finiraient']
    },
    subjunctive: {
      singular: ['finisse', 'finisses', 'finisse'],
      plural: ['finissions', 'finissiez', 'finissent']
    }
  },
  {
    fr: 'investir', 
    en: 'to invest', 
    present: {
      singular: ['investis', 'investis', 'investit'],
      plural: ['investissons', 'investissez', 'investissent']
    },
    imperfect: {
      singular: ['investissais', 'investissais', 'investissait'],
      plural: ['investissions', 'investissiez', 'investissaient']
    },
    future: {
      singular: ['investirai', 'investiras', 'investira'],
      plural: ['investirons', 'investirez', 'investiront']
    }, 
    conditional: {
      singular: ['investirais', 'investirais', 'investirait'],
      plural: ['investirions', 'investiriez', 'investiraient']
    },
    subjunctive: {
      singular: ['investisse', 'investisses', 'investisse'],
      plural: ['investissions', 'investissiez', 'investissent']
    }
  },
  {
    fr: 'punir', 
    en: 'to punish', 
    present: {
      singular: ['punis', 'punis', 'punit'],
      plural: ['punissons', 'punissez', 'punissent']
    },
    imperfect: {
      singular: ['punissais', 'punissais', 'punissait'],
      plural: ['punissions', 'punissiez', 'punissaient']
    },
    future: {
      singular: ['punirai', 'puniras', 'punira'],
      plural: ['punirons', 'punirez', 'puniront']
    }, 
    conditional: {
      singular: ['punirais', 'punirais', 'punirait'],
      plural: ['punirions', 'puniriez', 'puniraient']
    },
    subjunctive: {
      singular: ['punisse', 'punisses', 'punisse'],
      plural: ['punissions', 'punissiez', 'punissent']
    }
  },
  {
    fr: 'remplir', 
    en: 'to fill', 
    present: {
      singular: ['remplis', 'remplis', 'remplit'],
      plural: ['remplissons', 'remplissez', 'remplissent']
    },
    imperfect: {
      singular: ['remplissais', 'remplissais', 'remplissait'],
      plural: ['remplissions', 'remplissiez', 'remplissaient']
    },
    future: {
      singular: ['remplirai', 'rempliras', 'remplira'],
      plural: ['remplirons', 'remplirez', 'rempliront']
    }, 
    conditional: {
      singular: ['remplirais', 'remplirais', 'remplirait'],
      plural: ['remplirions', 'rempliriez', 'rempliraient']
    },
    subjunctive: {
      singular: ['remplisse', 'remplisses', 'remplisse'],
      plural: ['remplissions', 'remplissiez', 'remplissent']
    }
  },
  {
    fr: 'saisir', 
    en: 'to seize', 
    present: {
      singular: ['saisis', 'saisis', 'saisit'],
      plural: ['saisissons', 'saisissez', 'saisissent']
    },
    imperfect: {
      singular: ['saisissais', 'saisissais', 'saisissait'],
      plural: ['saisissions', 'saisissiez', 'saisissaient']
    },
    future: {
      singular: ['saisirai', 'saisiras', 'saisira'],
      plural: ['saisirons', 'saisirez', 'saisiront']
    }, 
    conditional: {
      singular: ['saisirais', 'saisirais', 'saisirait'],
      plural: ['saisirions', 'saisiriez', 'saisiraient']
    },
    subjunctive: {
      singular: ['saisisse', 'saisisses', 'saisisse'],
      plural: ['saisissions', 'saisissiez', 'saisissent']
    }
  },
  {
    fr: 'étourdir', 
    en: 'to stun, to shock', 
    present: {
      singular: ['étourdis', 'étourdis', 'étourdit'],
      plural: ['étourdissons', 'étourdissez', 'étourdissent']
    },
    imperfect: {
      singular: ['étourdissais', 'étourdissais', 'étourdissait'],
      plural: ['étourdissions', 'étourdissiez', 'étourdissaient']
    },
    future: {
      singular: ['étourdirai', 'étourdiras', 'étourdira'],
      plural: ['étourdirons', 'étourdirez', 'étourdiront']
    }, 
    conditional: {
      singular: ['étourdirais', 'étourdirais', 'étourdirait'],
      plural: ['étourdirions', 'étourdiriez', 'étourdiraient']
    },
    subjunctive: {
      singular: ['étourdisse', 'étourdisses', 'étourdisse'],
      plural: ['étourdissions', 'étourdissiez', 'étourdissent']
    }
  },
  {
    fr: 'réfléchir', 
    en: 'to reflect', 
    present: {
      singular: ['réfléchis', 'réfléchis', 'réfléchit'],
      plural: ['réfléchissons', 'réfléchissez', 'réfléchissent']
    },
    imperfect: {
      singular: ['réfléchissais', 'réfléchissais', 'réfléchissait'],
      plural: ['réfléchissions', 'réfléchissiez', 'réfléchissaient']
    },
    future: {
      singular: ['réfléchirai', 'réfléchiras', 'réfléchira'],
      plural: ['réfléchirons', 'réfléchirez', 'réfléchiront']
    }, 
    conditional: {
      singular: ['réfléchirais', 'réfléchirais', 'réfléchirait'],
      plural: ['réfléchirions', 'réfléchiriez', 'réfléchiraient']
    },
    subjunctive: {
      singular: ['réfléchisse', 'réfléchisses', 'réfléchisse'],
      plural: ['réfléchissions', 'réfléchissiez', 'réfléchissent']
    }
  },
  {
    fr: 'réussir', 
    en: 'to succeed', 
    present: {
      singular: ['réussis', 'réussis', 'réussit'],
      plural: ['réussissons', 'réussissez', 'réussissent']
    },
    imperfect: {
      singular: ['réussissais', 'réussissais', 'réussissait'],
      plural: ['réussissions', 'réussissiez', 'réussissaient']
    },
    future: {
      singular: ['réussirai', 'réussiras', 'réussira'],
      plural: ['réussirons', 'réussirez', 'réussiront']
    }, 
    conditional: {
      singular: ['réussirais', 'réussirais', 'réussirait'],
      plural: ['réussirions', 'réussiriez', 'réussiraient']
    },
    subjunctive: {
      singular: ['réussisse', 'réussisses', 'réussisse'],
      plural: ['réussissions', 'réussissiez', 'réussissent']
    }
  },
  {
    fr: 'maigrir', 
    en: 'to become thin', 
    present: {
      singular: ['maigris', 'maigris', 'maigrit'],
      plural: ['maigrissons', 'maigrissez', 'maigrissent']
    },
    imperfect: {
      singular: ['maigrissais', 'maigrissais', 'maigrissait'],
      plural: ['maigrissions', 'maigrissiez', 'maigrissaient']
    },
    future: {
      singular: ['maigrirai', 'maigriras', 'maigrira'],
      plural: ['maigrirons', 'maigrirez', 'maigriront']
    }, 
    conditional: {
      singular: ['maigrirais', 'maigrirais', 'maigrirait'],
      plural: ['maigririons', 'maigririez', 'maigriraient']
    },
    subjunctive: {
      singular: ['maigrisse', 'maigrisses', 'maigrisse'],
      plural: ['maigrissions', 'maigrissiez', 'maigrissent']
    }
  },
   {
    fr: 'franchir', 
    en: 'to clear an obstacle, to cross a threshold', 
    present: {
      singular: ['franchis', 'franchis', 'franchit'],
      plural: ['franchissons', 'franchissez', 'franchissent']
    },
    imperfect: {
      singular: ['franchissais', 'franchissais', 'franchissait'],
      plural: ['franchissions', 'franchissiez', 'franchissaient']
    },
    future: {
      singular: ['franchirai', 'franchiras', 'franchira'],
      plural: ['franchirons', 'franchirez', 'franchiront']
    }, 
    conditional: {
      singular: ['franchirais', 'franchirais', 'franchirait'],
      plural: ['franchirions', 'franchiriez', 'franchiraient']
    },
    subjunctive: {
      singular: ['franchisse', 'franchisses', 'franchisse'],
      plural: ['franchissions', 'franchissiez', 'franchissent']
    }
  },
  {
    fr: 'grossir', 
    en: 'to gain weight', 
    present: {
      singular: ['grossis', 'grossis', 'grossit'],
      plural: ['grossissons', 'grossissez', 'grossissent']
    },
    imperfect: {
      singular: ['grossissais', 'grossissais', 'grossissait'],
      plural: ['grossissions', 'grossissiez', 'grossissaient']
    },
    future: {
      singular: ['grossirai', 'grossiras', 'grossira'],
      plural: ['grossirons', 'grossirez', 'grossiront']
    }, 
    conditional: {
      singular: ['grossirais', 'grossirais', 'grossirait'],
      plural: ['grossirions', 'grossiriez', 'grossiraient']
    },
    subjunctive: {
      singular: ['grossisse', 'grossisses', 'grossisse'],
      plural: ['grossissions', 'grossissiez', 'grossissent']
    }
  },
  {
    fr: 'guérir', 
    en: 'to cure, to heal', 
    present: {
      singular: ['guéris', 'guéris', 'guérit'],
      plural: ['guérissons', 'guérissez', 'guérissent']
    },
    imperfect: {
      singular: ['guérissais', 'guérissais', 'guérissait'],
      plural: ['guérissions', 'guérissiez', 'guérissaient']
    },
    future: {
      singular: ['guérirai', 'guériras', 'guérira'],
      plural: ['guérirons', 'guérirez', 'guériront']
    }, 
    conditional: {
      singular: ['guérirais', 'guérirais', 'guérirait'],
      plural: ['guéririons', 'guéririez', 'guériraient']
    },
    subjunctive: {
      singular: ['guérisse', 'guérisses', 'guérisse'],
      plural: ['guérissions', 'guérissiez', 'guérissent']
    }
  },
  {
    fr: 'avertir', 
    en: 'to warn', 
    present: {
      singular: ['avertis', 'avertis', 'avertit'],
      plural: ['avertissons', 'avertissez', 'avertissent']
    },
    imperfect: {
      singular: ['avertissais', 'avertissais', 'avertissait'],
      plural: ['avertissions', 'avertissiez', 'avertissaient']
    },
    future: {
      singular: ['avertirai', 'avertiras', 'avertira'],
      plural: ['avertirons', 'avertirez', 'avertiront']
    }, 
    conditional: {
      singular: ['avertirais', 'avertirais', 'avertirait'],
      plural: ['avertirions', 'avertiriez', 'avertiraient']
    },
    subjunctive: {
      singular: ['avertisse', 'avertisses', 'avertisse'],
      plural: ['avertissions', 'avertissiez', 'avertissent']
    }
  },
  {
    fr: 'convertir', 
    en: 'to convert', 
    present: {
      singular: ['convertis', 'convertis', 'convertit'],
      plural: ['convertissons', 'convertissez', 'convertissent']
    },
    imperfect: {
      singular: ['convertissais', 'convertissais', 'convertissait'],
      plural: ['convertissions', 'convertissiez', 'convertissaient']
    },
    future: {
      singular: ['convertirai', 'convertiras', 'convertira'],
      plural: ['convertirons', 'convertirez', 'convertiront']
    }, 
    conditional: {
      singular: ['convertirais', 'convertirais', 'convertirait'],
      plural: ['convertirions', 'convertiriez', 'convertiraient']
    },
    subjunctive: {
      singular: ['convertisse', 'convertisses', 'convertisse'],
      plural: ['convertissions', 'convertissiez', 'convertissent']
    }
  },
  {
    fr: 'blanchir', 
    en: 'to whiten, to lighten', 
    present: {
      singular: ['blanchis', 'blanchis', 'blanchit'],
      plural: ['blanchissons', 'blanchissez', 'blanchissent']
    },
    imperfect: {
      singular: ['blanchissais', 'blanchissais', 'blanchissait'],
      plural: ['blanchissions', 'blanchissiez', 'blanchissaient']
    },
    future: {
      singular: ['blanchirai', 'blanchiras', 'blanchira'],
      plural: ['blanchirons', 'blanchirez', 'blanchiront']
    }, 
    conditional: {
      singular: ['blanchirais', 'blanchirais', 'blanchirait'],
      plural: ['blanchirions', 'blanchiriez', 'blanchiraient']
    },
    subjunctive: {
      singular: ['blanchisse', 'blanchisses', 'blanchisse'],
      plural: ['blanchissions', 'blanchissiez', 'blanchissent']
    }
  },
  {
    fr: 'bénir', 
    en: 'to bless', 
    present: {
      singular: ['bénis', 'bénis', 'bénit'],
      plural: ['bénissons', 'bénissez', 'bénissent']
    },
    imperfect: {
      singular: ['bénissais', 'bénissais', 'bénissait'],
      plural: ['bénissions', 'bénissiez', 'bénissaient']
    },
    future: {
      singular: ['bénirai', 'béniras', 'bénira'],
      plural: ['bénirons', 'bénirez', 'béniront']
    }, 
    conditional: {
      singular: ['bénirais', 'bénirais', 'bénirait'],
      plural: ['bénirions', 'béniriez', 'béniraient']
    },
    subjunctive: {
      singular: ['bénisse', 'bénisses', 'bénisse'],
      plural: ['bénissions', 'bénissiez', 'bénissent']
    }
  },
  {
    fr: 'rougir', 
    en: 'to blush, to turn red', 
    present: {
      singular: ['rougis', 'rougis', 'rougit'],
      plural: ['rougissons', 'rougissez', 'rougissent']
    },
    imperfect: {
      singular: ['rougissais', 'rougissais', 'rougissait'],
      plural: ['rougissions', 'rougissiez', 'rougissaient']
    },
    future: {
      singular: ['rougirai', 'rougiras', 'rougira'],
      plural: ['rougirons', 'rougirez', 'rougiront']
    }, 
    conditional: {
      singular: ['rougirais', 'rougirais', 'rougirait'],
      plural: ['rougirions', 'rougiriez', 'rougiraient']
    },
    subjunctive: {
      singular: ['rougisse', 'rougisses', 'rougisse'],
      plural: ['rougissions', 'rougissiez', 'rougissent']
    }
  },
  {
    fr: 'nourrir', 
    en: 'to nourish, to feed', 
    present: {
      singular: ['nourris', 'nourris', 'nourrit'],
      plural: ['nourrissons', 'nourrissez', 'nourrissent']
    },
    imperfect: {
      singular: ['nourrissais', 'nourrissais', 'nourrissait'],
      plural: ['nourrissions', 'nourrissiez', 'nourrissaient']
    },
    future: {
      singular: ['nourrirai', 'nourriras', 'nourrira'],
      plural: ['nourrirons', 'nourrirez', 'nourriront']
    }, 
    conditional: {
      singular: ['nourrirais', 'nourrirais', 'nourrirait'],
      plural: ['nourririons', 'nourririez', 'nourriraient']
    },
    subjunctive: {
      singular: ['nourrisse', 'nourrisses', 'nourrisse'],
      plural: ['nourrissions', 'nourrissiez', 'nourrissent']
    }
  },
  {
    fr: 'obéir', 
    en: 'to obey', 
    present: {
      singular: ['obéis', 'obéis', 'obéit'],
      plural: ['obéissons', 'obéissez', 'obéissent']
    },
    imperfect: {
      singular: ['obéissais', 'obéissais', 'obéissait'],
      plural: ['obéissions', 'obéissiez', 'obéissaient']
    },
    future: {
      singular: ['obéirai', 'obéiras', 'obéira'],
      plural: ['obéirons', 'obéirez', 'obéiront']
    }, 
    conditional: {
      singular: ['obéirais', 'obéirais', 'obéirait'],
      plural: ['obéirions', 'obéiriez', 'obéiraient']
    },
    subjunctive: {
      singular: ['obéisse', 'obéisses', 'obéisse'],
      plural: ['obéissions', 'obéissiez', 'obéissent']
    }
  },
  {
    fr: 'agrandir', 
    en: 'to enlarge, to increase', 
    present: {
      singular: ['agrandis', 'agrandis', 'agrandit'],
      plural: ['agrandissons', 'agrandissez', 'agrandissent']
    },
    imperfect: {
      singular: ['agrandissais', 'agrandissais', 'agrandissait'],
      plural: ['agrandissions', 'agrandissiez', 'agrandissaient']
    },
    future: {
      singular: ['agrandirai', 'agrandiras', 'agrandira'],
      plural: ['agrandirons', 'agrandirez', 'agrandiront']
    }, 
    conditional: {
      singular: ['agrandirais', 'agrandirais', 'agrandirait'],
      plural: ['agrandirions', 'agrandiriez', 'agrandiraient']
    },
    subjunctive: {
      singular: ['agrandisse', 'agrandisses', 'agrandisse'],
      plural: ['agrandissions', 'agrandissiez', 'agrandissent']
    }
  },
];

console.log(IR_VERBS.length);