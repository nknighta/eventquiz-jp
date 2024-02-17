import { TypeAnimation } from "react-type-animation";
import Scolloer from "../../content/scolloer";
import Layout from "../../layout/main";
import Link from "next/link";

export default function Epilogue() {
    return (
        <Layout>
            <div style={{
                fontSize: 23,
                height: "30vh",
            }}>
                <Scolloer>
                    <div>
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', height: '195px' }}
                            sequence={[
                                `ソーンダイク警部 : 結局は自殺じゃなくてミリアによる殺人だったわけだがお前はどう思った？」
                                ソーンダイク警部 : 人類を守るためとは言え、博士を殺してしまった。
                                ソーンダイク警部 : そんなAIは危険すぎる。今ここで消去してしまった方が良いのかも知れねぇな。」
                                二択
                                主人公「……」
                                `,
                            ]}
                            speed={76}
                            cursor={false}
                        />
                    </div>
                </Scolloer>
            </div>
            <div>
                <Link
                    style={{
                        color: "black",
                        textDecoration: "none",
                    }}
                    href="/epilogue/1">
                    AI を放置する
                </Link>
            </div>
            <div>
                <Link
                    style={{
                        color: "black",
                        textDecoration: "none",
                    }}
                    href="/epilogue/1">
                    事件を公にする
                </Link>
            </div>
        </Layout>
    )
}