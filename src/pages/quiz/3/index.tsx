import Layout from "../../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Scolloer from "../../../content/scolloer";
import HMeta from "../../../content/hmeta";

export default function QuizPage1() {
    const router = useRouter();
    const [typingStatus, setTypingStatus] = useState(0);
    const { load } = router.query;

    const Content = () => {
        return (
            <>
                ソーンダイク警部 :ジョン博士は、このペットボトルからコップへ水を注ぎ、<br/>
                睡眠薬を過剰に溶かして飲み過ぎ、その結果中毒症状により死亡した <br/>
                <br/>
                ソーンダイク警部 :──────アインハードさん、彼に睡眠薬を提供していたのはあなただと聞いているが……そもそも何故彼は睡眠薬を？ <br/>
                <br/>
                アインハード :はい。彼は極度のストレスによる不眠症を患っておりました。<br/>
                理由としては、ミリアが博士の理想通りに使われなかった為でしょう <br/>
                <br/>
                ソーンダイク警部:あぁ。それについては聞き及んではいる。<br/>
                確か、人のサポートを主目的として開発されたミリアだが、<br/>
                初の自己成長する汎用AIという便利性から、犯罪から軍事利用までされて、<br/>
                訴訟寸前にまでなってたな。誹謗中傷もかなりあったとか<br/>
                <br/>
                アインハード:はい。そのためジョン様は心の病を患い、<br/>
                市場には出回らない程の、強力な睡眠薬を服用なさっていました。<br/>
                本来睡眠薬は、悪用防止のため、水に溶かすと濃い青色になります。<br/>
                しかし今回博士に渡していたのは、特に強力な物のため、赤色に染まります<br/>
                <br/>
                主人公:つまり、このコップの赤色の跡は、<br/>
                その睡眠薬を水に溶かしたからという訳ですね。誤飲の可能性はなさそう<br/>
                <br/>
                ソーンダイク警部 :だろうな。だとしたらこの数列のメモは関係ないのか？<br/>
                ジョン博士のよくわからない研究のメモかもしれないが……<br/>
                <br/>
                主人公:ミリアにでも聞いてみますか？彼女なら分かるかも<br/>
                ミリア:はい。なんでしょう <br/>
                ソーンダイク警部:静かにしろ。ここは人間様のやる事だ<br/>
            </>
        )
    }

    return (
        <Layout>

            <HMeta/>
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}
                style={{
                    height: '77vh',
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {typingStatus == 2 ? (<Content />) : (
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', display: 'block', height: "100%" }}
                            sequence={[
                                `ソーンダイク警部:ジョン博士は、このペットボトルからコップへ水を注ぎ、
                                睡眠薬を過剰に溶かして飲み過ぎ、その結果中毒症状により死亡した

                                ソーンダイク警部:──────アインハードさん、彼に睡眠薬を提供していたのはあなただと聞いているが……そもそも何故彼は睡眠薬を？

                                アインハー: :はい。彼は極度のストレスによる不眠症を患っておりました。
                                理由としては、ミリアが博士の理想通りに使われなかった為でしょう

                                ソーンダイク警部:あぁ。それについては聞き及んではいる。
                                確か、人のサポートを主目的として開発されたミリアだが、
                                初の自己成長する汎用AIという便利性から、犯罪から軍事利用までされて、
                                訴訟寸前にまでなってたな。誹謗中傷もかなりあったとか

                                アインハード:はい。そのためジョン様は心の病を患い、
                                市場には出回らない程の、強力な睡眠薬を服用なさっていました。
                                本来睡眠薬は、悪用防止のため、水に溶かすと濃い青色になります。
                                しかし今回博士に渡していたのは、特に強力な物のため、赤色に染まります

                                主人公:つまり、このコップの赤色の跡は、
                                その睡眠薬を水に溶かしたからという訳ですね。誤飲の可能性はなさそう

                                ソーンダイク警部:だろうな。だとしたらこの数列のメモは関係ないのか？
                                ジョン博士のよくわからない研究のメモかもしれないが……

                                主人公:ミリアにでも聞いてみますか？彼女なら分かるかも
                                ミリア:はい。なんでしょう
                                ソーンダイク警部:静かにしろ。ここは人間様のやる事だ

                                `,
                                () => {
                                    setTypingStatus(2);
                                }
                            ]}
                            cursor={false}
                            speed={80}
                        />)}
                </Scolloer>
                {typingStatus == 2 ? (
                       <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                        }}>
                            <Link
                            href={"/quiz/1/"} style={{
                                textAlign: "right",
                                textDecoration: "none",
                                color: "#000"
                            }}>
                               {"<< "} 戻る
                            </Link>
                            <Link
                            href={"/quiz/3/"} style={{
                                textAlign: "right",
                                textDecoration: "none",
                                color: "#000"
                            }}>
                                次へ {">>"}
                            </Link>
                    </div>
                ) : ('')}
            </div>
        </Layout >
    )
}