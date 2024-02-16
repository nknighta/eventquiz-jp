import { useRouter } from 'next/router';
import Layout from '../../../layout/main';
import { TypeAnimation } from 'react-type-animation';
import Scolloer from '../../../content/scolloer';
import { useState } from 'react';
import HMeta from '../../../content/hmeta';
import Link from 'next/link';

const Chat = () => {
    const [typingStatus, setTypingStatus] = useState(0);
    const router = useRouter();
    const { load } = router.query;
    const Content = () => {
        return (
            <>
                (はじめに) <br />
                あなた   : じゃあ彼の自殺の動機を調べていこう
                <br />
                <br />
                ソーンダイク警部   : こいつの自殺、ちょっとばかり分からないことが多いな。
                関係者にアリバイとかを聞いてみるか
            </>
        )
    }
    return (
        <Layout>
            <HMeta pageTitle="博士の死因・周辺のアリバイ" pageDescription="cid謎解き in CIDEXPO2024" />
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {load ?
                        (
                            <Content />
                        )
                          : (
                            typingStatus == 2 ? (
                                <Content />
                            )   : (
                                <div>
                                    <TypeAnimation
                                        style={{ whiteSpace  : 'pre-line', display  : 'block'}}
                                        sequence={[
                                            `(はじめに)
                                            あなた   : じゃあ彼の自殺の動機を調べていこう\n
                                            ソーンダイク警部   : こいつの自殺、ちょっとばかり分からないことが多いな。関係者にアリバイとかを聞いてみるか
						            `,
                                            () => {
                                                setTypingStatus(2);
                                            }
                                        ]}
                                        cursor={false}
                                        speed={70}
                                    />

                                </div>
                            )
                        )}
                </Scolloer>
            </div>

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
                    href={"https://f22ba092.github.io/MASTAR/2024_EXPO_profile/index.html"} style={{
                        textAlign  : "right",
                        textDecoration  : "none",
                        color  : "#000"
                    }}>
                        調べる {">>"}
                    </Link>
            </div>
            )   : ("")}

        </Layout >
    )
}

export default Chat;