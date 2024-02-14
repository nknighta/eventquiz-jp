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
                <br />              
                ソーンダイク警部   :こいつの関係者に聞いてみるか <br/>
                <br/>
                関係者としてノア博士、アインハードの二人に改めて話を聞いてみた。<br/>
                <br/>
                ソーンダイク警部   :まずノア博士についてだが、彼は助手ってのもあって会う機会も多かった。自殺の少し前にジョン博士と会い、ラボの仲間に送るプレゼントについて相談していたらしい。 <br/>
                <br/>
                ソーンダイク警部   :次に彼の専属の執事であるアインハードだが、彼が言うにはジョン博士は最近研究やラボの方向性について悩んで引きこもることがよくあった。と言ってたな。 <br/>
                <br/>
                ソーンダイク警部   :ノア博士とアインハードの話で彼が自殺する理由がはっきりしなかったな。お前はこの自殺どう思う？ <br/>
                <br/>
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
                    height  : '77vh',
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {typingStatus == 2 ? (<Content />)   : (
                        <TypeAnimation
                            style={{ whiteSpace  : 'pre-line', display  : 'block', height  : "100%" }}
                            sequence={[
                                `
                                ソーンダイク警部   :こいつの関係者に聞いてみるか \n
                                関係者としてノア博士、アインハードの二人に改めて話を聞いてみた。\n
                                ソーンダイク警部   :まずノア博士についてだが、彼は助手ってのもあって会う機会も多かった。自殺の少し前にジョン博士と会い、ラボの仲間に送るプレゼントについて相談していたらしい。 \n
                                ソーンダイク警部   :次に彼の専属の執事であるアインハードだが、彼が言うにはジョン博士は最近研究やラボの方向性について悩んで引きこもることがよくあった。と言ってたな。 \n
                                ソーンダイク警部   :ノア博士とアインハードの話で彼が自殺する理由がはっきりしなかったな。お前はこの自殺どう思う？\n
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
                        display  : "flex",
                        justifyContent  : "space-between"
                        }}>
                            <Link
                            href={"/quiz/1/"} style={{
                                textAlign  : "right",
                                textDecoration  : "none",
                                color  : "#000"
                            }}>
                               {"<< "} 戻る
                            </Link>
                            <Link
                            href={"/quiz/3/"} style={{
                                textAlign  : "right",
                                textDecoration  : "none",
                                color  : "#000"
                            }}>
                                次へ {">>"}
                            </Link>
                    </div>
                )   : ('')}
            </div>
        </Layout >
    )
}