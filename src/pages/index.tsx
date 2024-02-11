import { TypeAnimation } from "react-type-animation";
import Layout from "../layout/main";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Chat = () => {
    const [typingStatus, setTypingStatus] = useState(0);
    const router = useRouter();
    const { load } = router.query;

    console.log();
    return (
        <Layout>
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}
                style={{
                    height: '70vh',
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p style={{fontSize:18}}>タップでスキップ</p>
                {load ?
                    (
                        <>
                            2030年2月、私は上司のソーンダイク警部とともに、事故の調査に赴いていた。
                            一緒にいるソーンダイク警部は科学を用いた捜査が得意な信頼できる方だ。<br />
                            今回の調査の主な概要はこうだ。自殺者はジョン・F・マッカーシー。<br />
                            世界初の汎用AI開発の第一人者であり、この世界で使われている汎用AI「ミリア(MiliA)」の開発者だ。<br /> そんな彼が彼の所有するラボで服薬自殺をしていたという。一見ただの自殺だとは思うが、違和感を覚えた私はソーンダイク警部に無理を言って、改めて現場の調査を行うことにした<br />
                        </>)
                    : (
                        typingStatus == 2 ? (
                            <>
                                2030年2月、私は上司のソーンダイク警部とともに、事故の調査に赴いていた。
                                一緒にいるソーンダイク警部は科学を用いた捜査が得意な信頼できる方だ。<br />
                                今回の調査の主な概要はこうだ。自殺者はジョン・F・マッカーシー。<br />
                                世界初の汎用AI開発の第一人者であり、この世界で使われている汎用AI「ミリア(MiliA)」の開発者だ。<br /> そんな彼が彼の所有するラボで服薬自殺をしていたという。一見ただの自殺だとは思うが、違和感を覚えた私はソーンダイク警部に無理を言って、改めて現場の調査を行うことにした<br />
                            </>
                        ) : (
                            <TypeAnimation
                                style={{ whiteSpace: 'pre-line', display: 'block' }}
                                sequence={[
                                    `2030年2月、私は上司のソーンダイク警部とともに、事故の調査に赴いていた。
						一緒にいるソーンダイク警部は科学を用いた捜査が得意な信頼できる方だ。\n
						今回の調査の主な概要はこうだ。自殺者はジョン・F・マッカーシー。\n
						世界初の汎用AI開発の第一人者であり、この世界で使われている汎用AI「ミリア(MiliA)」の開発者だ。\n そんな彼が彼の所有するラボで服薬自殺をしていたという。一見ただの自殺だとは思うが、違和感を覚えた私はソーンダイク警部に無理を言って、改めて現場の調査を行うことにした。
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
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end"
            }}>
                <Link
                    href="/quiz/1"
                    style={{
                        textDecoration: "none",
                        color: "black"
                    }}>
                    次へ {">>"}
                </Link>
            </div>
        </Layout >
    )
}


export default Chat;
