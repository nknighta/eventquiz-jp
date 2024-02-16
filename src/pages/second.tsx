import { TypeAnimation } from "react-type-animation";
import Layout from "../layout/main";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Scolloer from "../content/scolloer";
import HMeta from "../content/hmeta";

const Chat = () => {
    const [typingStatus, setTypingStatus] = useState(0);
    const router = useRouter();
    const { load } = router.query;

    const Content = () => {
        return (
            <>

                2030年2月、私は上司のソーンダイク警部とともに、事故の調査に赴いていた。<br />
                一緒にいるソーンダイク警部は科学を用いた捜査が得意な信頼できる方だ。<br /> <br />
                今回の調査の主な概要はこうだ。自殺者はジョン・F・マッカーシー。<br /> <br />
                世界初の汎用AI開発の第一人者であり、この世界で使われている汎用AI   :ミリア(MiliA) の開発者だ。<br />
                そんな彼が彼の所有するラボで服薬自殺をしていたという。一見ただの自殺だとは思うが、違和感を覚えた私はソーンダイク警部に無理を言って、改めて現場の調査を行うことにした<br />
            </>
        )
    }
    return (
        <Layout>
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <HMeta pageTitle="プロローグ" pageDescription="cid謎解き in CIDEXPO2024"/>
                <Scolloer>
                    {load ?
                        (
                            <Content />
                        )
                          : (
                            typingStatus == 2 ? (
                                <Content />
                            )   : (
                                <TypeAnimation
                                    style={{ whiteSpace  : 'pre-line', display  : 'block', height  : "100%" }}
                                    sequence={[
                                        `2030年2月、私は上司のソーンダイク警部とともに、事故の調査に赴いていた。
						一緒にいるソーンダイク警部は科学を用いた捜査が得意な信頼できる方だ。\n
						今回の調査の主な概要はこうだ。自殺者はジョン・F・マッカーシー。\n
						世界初の汎用AI開発の第一人者であり、この世界で使われている汎用AI   :ミリア(MiliA) の開発者だ。\n そんな彼が彼の所有するラボで服薬自殺をしていたという。一見ただの自殺だとは思うが、違和感を覚えた私はソーンダイク警部に無理を言って、改めて現場の調査を行うことにした。
						`,
                                        () => {
                                            setTypingStatus(2);
                                        }
                                    ]}
                                    cursor={false}
                                    speed={70}
                                />
                            )
                        )}

                </Scolloer>
            </div>

            <div style={{
                display  : "flex",
                justifyContent  : "end"
            }}>
                <Link
                    href="/quiz/1"
                    style={{
                        textDecoration  : "none",
                        color  : "black"
                    }}>
                    次へ {">>"}
                </Link>
            </div>
        </Layout >
    )
}


export default Chat;
