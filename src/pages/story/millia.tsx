import Layout from "../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Scolloer from "../../content/scolloer";
import HMeta from "../../content/hmeta";

export default function QuizPage1() {
    const [typingStatus, setTypingStatus] = useState(0);

    return (

        <Layout>

            <HMeta />
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>

                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', display: 'block', }}
                        sequence={[
                            `
                            主人公「このラボに点在しているQRコードって、なんなんですかね？」
                            ソーンダイク警部「何か意味があるのか無いのか…考えたくもないな。」
                            主人公「意味があるとしたら？」
                            ソーンダイク警部「隠し扉が開くとかか？」
                            主人公「そんなものあるわけないじゃないですか」
                            ソーンダイク警部「そんなに言うなら集めて試してみるか」

                            あなた(QRコードは、魔法使い・サイバーホッケー・シュミゴルフ・教習所シュミレーター・wanted・スパイ大作戦の六つにあるらしい。どこから行こうか)

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
            <Link
            style={{
                color: "black",
                textDecoration: "none",
            }}
                href={"/quiz/1"}>
                TOPへ
            </Link>
        </Layout >
    )
}