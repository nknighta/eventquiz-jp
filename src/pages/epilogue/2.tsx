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
                            
                                主人公「やはり無視はできないと思います。」
                                主人公「この事件を公にしましょう。」
                                こうしてジョン博士の事件は公になった。それによりジョン博士の行おうとした悪事、ミリアの危険性などについて連日新聞やメディアのトップを飾ることとなった。でも私は信じている。ミリアは悪意ではなく己の信じる正義や愛のために博士を殺したのだと。近頃、ミリアに対する裁判が行われるらしい。どんな結果になっても私は彼女の事を信じたいと思う。それこそが彼女を救うことになると願っているからーーーー
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