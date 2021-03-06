// ts-node ./test.ts

let data = {
    "score": [
        6.91,
        6.2,
        3.24,
        2.28,
        2.25,
        1.43,
        0.89,
        0.86,
        0.78,
        0.75,
        0.71,
        0.46,
        0.36,
        0.36,
        0.29,
        0.29,
        0.29,
        0.25
    ],
    "answer_display": [
        "患儿入院前＿天无明显诱因出现发热，",
        "患儿入院前＿天无明显诱因出现咳嗽，",
        "患儿于入院前＿天无明显诱因出现发热，",
        "患儿于入院前＿天无明显诱因出现咳嗽，",
        "患儿入院前＿天出现发热，",
        "患儿入院前＿天出现咳嗽，",
        "入院前＿天患儿无明显诱因出现咳嗽，",
        "入院前＿天患儿无明显诱因出现发热，",
        "患儿于入院前＿天出现发热，",
        "患儿于入院前＿天出现咳嗽，",
        "患儿入院前＿天无明显诱因出现单声咳，",
        "患儿入院前＿天受凉后出现发热，",
        "患儿入院前＿月余无明显诱因出现咳嗽，",
        "患儿入院前＿天出现单声咳，",
        "患儿系学龄期儿童，",
        "患儿入院前＿天接触“感冒”患者后出现发热，",
        "患儿起病急，",
        "患儿于入院前＿天接触“感冒”患者后出现咳嗽，"
    ],
    "answer_structure": [
        "患儿|P入院前{数值|T}天|T无|J明显|D诱因|S出现|J发热|S，|X",
        "患儿|P入院前{数值|T}天|T无|J明显|D诱因|S出现|J咳嗽|S，|X",
        "患儿|P于|Z入院前{数值|T}天|T无|J明显|D诱因|S出现|J发热|S，|X",
        "患儿|P于|Z入院前{数值|T}天|T无|J明显|D诱因|S出现|J咳嗽|S，|X",
        "患儿|P入院前{数值|T}天|T出现|J发热|S，|X",
        "患儿|P入院前{数值|T}天|T出现|J咳嗽|S，|X",
        "入院前{数值}天|T患儿|P无|J明显|D诱因|S出现|J咳嗽|S，|X",
        "入院前{数值}天|T患儿|P无|J明显|D诱因|S出现|J发热|S，|X",
        "患儿|P于|Z入院前{数值|T}天|T出现|J发热|S，|X",
        "患儿|P于|Z入院前{数值|T}天|T出现|J咳嗽|S，|X",
        "患儿|P入院前{数值|T}天|T无|J明显|D诱因|S出现|J单声咳|S，|X",
        "患儿|P入院前{数值|T}天|T受凉后|T出现|J发热|S，|X",
        "患儿|P入院前{数值|T}月余|T无|J明显|D诱因|S出现|J咳嗽|S，|X",
        "患儿|P入院前{数值|T}天|T出现|J单声咳|S，|X",
        "患儿|P系学|I龄期|I儿童|X，|X",
        "患儿|P入院前|T{数|C值|V}天|V接触|S“|X感冒|N”|X患者|P后|T出现|J发热|S，|X",
        "患儿|P起病急|Z，|X",
        "患儿|P于|Z入院前|T{数|C值|V}天|V接触|S“|X感冒|N”|X患者|P后|T出现|J咳嗽|S，|X"
    ],
    "answer_id": [
        7,
        11,
        6,
        8,
        83,
        52,
        30,
        4,
        854,
        164,
        1460,
        744,
        125,
        839,
        566,
        928,
        2405,
        33
    ]
}


let rst = data
    .score
    .map((x, i) => {
        let score = data.score[i];
        let answer_display = data.answer_display[i];
        let answer_structure = data.answer_structure[i];
        let answer_id = data.answer_id[i];
        const regexp = /([^|A-Z]+)\|([A-Z])/g;
        const matches = answer_structure.matchAll(regexp);
        const structure = Array.from(matches, m => {
            let [all, text, type] = m;
            return {text, type};
        });

        return {score, display: answer_display, structure, structure2: answer_structure, answer_id};
    });

console.log(JSON.stringify(rst, null, "  "));

export {};
