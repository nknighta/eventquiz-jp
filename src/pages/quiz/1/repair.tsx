import Layout from "../../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import Scolloer from "../../../content/scolloer";
import HMeta from "../../../content/hmeta";

export default function Computer() {
    const [typingStatus, setTypingStatus] = useState(0);

    const Content = () => {
        return (
            <>
                <br />
                ソーンダイク警部 : 確か、ジョン博士のラボに壊れたPCがあったよな。ノア博士、現場保全上何も触ってないと思うが、まだあるか？<br />
                <br />
                ノア博士 : 博士の個人PCの事ですか？まだありますね。……でもあれば電源系が完全に壊れていて、使い物にはなりませんが<br />
                <br />
                ソーンダイク警部 : そうだな。……お前機械が得意だっただろ？直せるか？」<br />
                <br />
                主人公 : とんだ無茶ぶりを……。まぁ、やってはみます<br />
                <br />
                <br />
                PCを修理に向かえ
            </>
        )
    }
    return (

        <Layout>
            <HMeta />
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
                                `
                                    ソーンダイク警部 : 確か、ジョン博士のラボに壊れたPCがあったよな。ノア博士、現場保全上何も触ってないと思うが、まだあるか？ \n
                                    ノア博士 : 博士の個人PCの事ですか？まだありますね。……でもあれば電源系が完全に壊れていて、使い物にはなりませんが」\n
                                    ソーンダイク警部 : そうだな。……お前機械が得意だっただろ？直せるか？」\n
                                    主人公 : とんだ無茶ぶりを……。まぁ、やってはみます」\n \n
                                    PCを修理に向かえ
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
                        padding: "10px 20px",
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        {/** 2回目以降は?load=trueでアニメーション停止 */}
                        <div>
                            <Link
                                href="/quiz/1/"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}>
                                {"<<"} 会話を終了する
                            </Link>
                        </div>
                    </div>
                ) : ('')}
            </div>
        </Layout >
    )
}