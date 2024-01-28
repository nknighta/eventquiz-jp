import Layout from "../../layout/main";
import { TypeAnimation } from 'react-type-animation';
const QuizPage = () => {
    return (
        <Layout>
            <div
                style={{
                    color: "#00ff00"
                }}>
                <div
                    style={{
                        height: 500
                    }}>
                    テスト中
                </div>
                <div>
                    <TypeAnimation
                        sequence={[
                            200,
                            '舞台はGメッセであり、博士の研究室 ブースは博士のラボ・出資した実験室の設定に 博士は自殺する少し前にブースに訪れている',
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                    />
                </div>
            </div>
            <button
                style={{
                    width: "100%",
                    height: 60,
                    color: "#00ff00",
                    background: "#00000000",
                    border: "none"
                }}
            >
                <TypeAnimation
                    sequence={[
                        5500,
                        '研究室に行く',
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                />

            </button>

            <button
                style={{
                    width: "100%",
                    height: 60,
                    color: "#00ff00",
                    background: "#00000000",
                    border: "none"
                }}
            >
                <TypeAnimation
                    sequence={[
                        6500,
                        'なにもしない',
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                />
            </button>
        </Layout>
    );
};
export default QuizPage;
