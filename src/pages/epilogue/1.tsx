import { TypeAnimation } from "react-type-animation"
import Scolloer from "../../content/scolloer";
import Layout from "../../layout/main";
export default function E1() {
    return (
        <Layout>
            <Scolloer>
                <div>
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', height: '195px' }}
                        sequence={[
                            `
                                主人公「今回の事件は博士の自殺だった。そうしましょう。」
                                ソーンダイク警部「いい話なのかは判断できないがお前の判断を信じよう。」
                                主人公「ありがとうございます！」
                                ソーンダイク警部「いつまでもこんな自殺現場に居たくねぇよ。帰るぞ！」
                                主人公「はい！」
                    
                                こうしてジョン博士の事件は幕を下ろした。何一つ変わらない生活を送りながら…

                                -- end --
                                `,
                        ]}
                        speed={76}
                        cursor={false}
                    />
                </div>
            </Scolloer>
        </Layout>
    )
}