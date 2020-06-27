let a = [
  {
    "score": 6.91,
    "display": "患儿入院前＿天无明显诱因出现发热，",
    "structure": [
      {
        "value": {"text": "患儿"},
        "tag": "P"
      },
      {
        "conceptID": 390110004,
        "value": {"text": "入院前3天"},
        "tag": "T",
        "type": "单选",
        "choices": [
          {"text": "入院前{数值}天", "vars": [{"type": "数值"}]},
          {"text": "入院前{数值}月余", "vars": [{"type": "数值"}]}
        ]
      },
      {
        "concept": 390110008,
        "value": {"text": "无明显诱因", "concept": "##待定##"},
        "tag": "S",
        "type": "单选",
        "choices": [
          {"text": "无明显诱因", "concept": "##待定##"},
          {"text": "受凉后", "conceptID": 390112246},
          {"text": "接触感冒", "concept": "##待定##"}
        ]
      },
      {
        "value": {"text": "出现"},
        "tag": "J"
      },
      {
        "value": {"text": "发热"},
        "tag": "S",
        "type": "单选",
        "choices": [
          {"text": "发热", "concept": 390182714},
          {"text": "咳嗽", "conceptID": 390218115}
        ]
      },
      {
        "value": {"text": "，"},
        "tag": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T无|J明显|D诱因|S出现|J发热|S，|X",
    "answer_id": 7
  },
  {
    "score": 6.2,
    "display": "患儿入院前＿天无明显诱因出现咳嗽，",
    "structure": [
      {
        "text": "患儿入院前{数值}天",
        "type": "T",
        "phraseID": 123
      },
      {
        "text": "无明显诱因",
        "type": "S",
        "phraseID": 124
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T无|J明显|D诱因|S出现|J咳嗽|S，|X",
    "answer_id": 11
  },
  {
    "score": 3.24,
    "display": "患儿于入院前＿天无明显诱因出现发热，",
    "structure": [
      {
        "text": "患儿于入院前{数值}天",
        "type": "T"
      },
      {
        "text": "无明显诱因",
        "type": "S"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "发热",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P于|Z入院前{数值|T}天|T无|J明显|D诱因|S出现|J发热|S，|X",
    "answer_id": 6
  },
  {
    "score": 2.28,
    "display": "患儿于入院前＿天无明显诱因出现咳嗽，",
    "structure": [
      {
        "text": "患儿于入院前{数值}天",
        "type": "T"
      },
      {
        "text": "无明显诱因",
        "type": "S"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P于|Z入院前{数值|T}天|T无|J明显|D诱因|S出现|J咳嗽|S，|X",
    "answer_id": 8
  },
  {
    "score": 2.25,
    "display": "患儿入院前＿天出现发热，",
    "structure": [
      {
        "text": "患儿入院前{数值}天",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "发热",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T出现|J发热|S，|X",
    "answer_id": 83
  },
  {
    "score": 1.43,
    "display": "患儿入院前＿天出现咳嗽，",
    "structure": [
      {
        "text": "患儿入院前{数值}天",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T出现|J咳嗽|S，|X",
    "answer_id": 52
  },
  {
    "score": 0.89,
    "display": "入院前＿天患儿无明显诱因出现咳嗽，",
    "structure": [
      {
        "text": "入院前{数值}天",
        "type": "T"
      },
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "无明显诱因",
        "type": "S"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "入院前{数值}天|T患儿|P无|J明显|D诱因|S出现|J咳嗽|S，|X",
    "answer_id": 30
  },
  {
    "score": 0.86,
    "display": "入院前＿天患儿无明显诱因出现发热，",
    "structure": [
      {
        "text": "入院前{数值}天",
        "type": "T"
      },
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "无明显诱因",
        "type": "S"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "发热",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "入院前{数值}天|T患儿|P无|J明显|D诱因|S出现|J发热|S，|X",
    "answer_id": 4
  },
  {
    "score": 0.78,
    "display": "患儿于入院前＿天出现发热，",
    "structure": [
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "于入院前{数值}天",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "发热",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P于|Z入院前{数值|T}天|T出现|J发热|S，|X",
    "answer_id": 854
  },
  {
    "score": 0.75,
    "display": "患儿于入院前＿天出现咳嗽，",
    "structure": [
      {
        "text": "患儿于入院前{数值}天",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P于|Z入院前{数值|T}天|T出现|J咳嗽|S，|X",
    "answer_id": 164
  },
  {
    "score": 0.71,
    "display": "患儿入院前＿天无明显诱因出现单声咳，",
    "structure": [
      {
        "text": "患儿入院前{数值}天",
        "type": "T"
      },
      {
        "text": "无明显诱因",
        "type": "S"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "单声咳",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T无|J明显|D诱因|S出现|J单声咳|S，|X",
    "answer_id": 1460
  },
  {
    "score": 0.46,
    "display": "患儿入院前＿天受凉后出现发热，",
    "structure": [
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "入院前{数值}天",
        "type": "T"
      },
      {
        "text": "受凉后",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "发热",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T受凉后|T出现|J发热|S，|X",
    "answer_id": 744
  },
  {
    "score": 0.36,
    "display": "患儿入院前＿月余无明显诱因出现咳嗽，",
    "structure": [
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "入院前{数值}月余",
        "type": "T"
      },
      {
        "text": "无明显诱因",
        "type": "S"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}月余|T无|J明显|D诱因|S出现|J咳嗽|S，|X",
    "answer_id": 125
  },
  {
    "score": 0.36,
    "display": "患儿入院前＿天出现单声咳，",
    "structure": [
      {
        "text": "患儿入院前{数值}天",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "单声咳",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前{数值|T}天|T出现|J单声咳|S，|X",
    "answer_id": 839
  },
  {
    "score": 0.29,
    "display": "患儿系学龄期儿童，",
    "structure": [
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "系学龄期儿童",
        "type": "X"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P系学|I龄期|I儿童|X，|X",
    "answer_id": 566
  },
  {
    "score": 0.29,
    "display": "患儿入院前＿天接触“感冒”患者后出现发热，",
    "structure": [
      {
        "text": "患儿入院前{数值}天",
        "type": "V"
      },
      {
        "text": "接触“感冒”患者后",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "发热",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P入院前|T{数|C值|V}天|V接触|S“|X感冒|N”|X患者|P后|T出现|J发热|S，|X",
    "answer_id": 928
  },
  {
    "score": 0.29,
    "display": "患儿起病急，",
    "structure": [
      {
        "text": "患儿",
        "type": "P"
      },
      {
        "text": "起病急",
        "type": "Z"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P起病急|Z，|X",
    "answer_id": 2405
  },
  {
    "score": 0.25,
    "display": "患儿于入院前＿天接触“感冒”患者后出现咳嗽，",
    "structure": [
      {
        "text": "患儿于入院前{数值}天",
        "type": "V"
      },
      {
        "text": "接触“感冒”患者",
        "type": "P"
      },
      {
        "text": "后",
        "type": "T"
      },
      {
        "text": "出现",
        "type": "J"
      },
      {
        "text": "咳嗽",
        "type": "S"
      },
      {
        "text": "，",
        "type": "X"
      }
    ],
    "structure2": "患儿|P于|Z入院前|T{数|C值|V}天|V接触|S“|X感冒|N”|X患者|P后|T出现|J咳嗽|S，|X",
    "answer_id": 33
  }
]
