import Layout from "../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import Scolloer from "../../content/scolloer";
import HMeta from "../../content/hmeta";

export default function QuizPage1() {
    const [typingStatus, setTypingStatus] = useState(0);

    return (

        <Layout>

            <HMeta />
            <div>
                <Scolloer>

                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', display: 'block', }}
                        sequence={[
                            `
                            ソーンダイク警部 : 俺はそんなAIなんて興味ないからな。壊れてるだけだろ
                            主人公 : 特定の物事だけ話さないって人間みたいですね。
                            ソーンダイク警部 : 人間みたいだぁ？そんなことあってたまるか
                            主人公 : ジョン博士とミリアについてアインハードさんに聞いてみましょう

                            

                            アインハード : なるほど。やはりそのような事がミリアに起きてるんですね。
                            主人公 : やはり？となると？
                            アインハード : 元々ミリアはジョン様が人類を守るAIという目標のもと作られたAIです。
                            アインハード : ジョン様がミリアを開発してから半年ほど経った頃の話です。
                            アインハード : ミリア、いえ、彼女には人で言う「感情」というものが生まれた。とジョン様が喜んでおられました。
                            アインハード : その時からジョン様はより一層ラボに籠って研究をするようになりました。
                            ソーンダイク警部 : てことはミリアは人と大差ない思考ができるって？
                            アインハード : はい。
                            アインハード : 彼女は人類を守るを基本原則とし、自身で思考しています。
                            主人公 : じゃあ人類に敵対をするようなことをすれば、ミリアが反発する可能性もあるってことですね

                            
                            ソーンダイク警部「ここまで情報を集めればジョン博士の身に起こったことがなんとなくだが分かってきたな。」
                            ソーンダイク警部「いや、もう博士と呼んでいいのかすら分からないな」
                            主人公「今回の事件をまとめて報告をしに行きましょう」

					`,
                            () => {
                                setTypingStatus(2);
                            }
                        ]}
                        cursor={false}
                        speed={80}
                    />
                </Scolloer>
            </div>
            {typingStatus == 2 ? (
            <Link href={"/epilogue/"}>
                次へ
            </Link>
            ) : ("")}
        </Layout >
    )
}