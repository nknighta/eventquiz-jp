export const quizlist = [
    {
        "id"  : "1",
        "text"  : "舞台はGメッセであり、博士の研究室 ブースは博士のラボ・出資した実験室の設定に 博士は自殺する少し前にブースに訪れている",
        "button"  : {
            "text"  : "次へ",
            "link"  : "/quiz?id=2&inputw=1",
        }
    },
    {
        "id"  : "2",
        "text"  : "ヒントは魔法使い認定試験ブース",
        "button"  : {
            "text"  : "ヒントの入力",
            "link"  : "/quiz?id=3"
        }
    },
    {
        "id"  : "3",
        "text"  : "キーワードを入力する",
        "button"  : {
            "text"  : false,
            "link"  : "/quiz?id=4"
        },
        "anser"  : {
            "input"  : true
        }
    },
];