import Layout from "../../../layout/main"
import { useRouter } from "next/router"
export default function Sleep() {
    const router = useRouter();
    return (
        <Layout>
            博士の研究室である、魔法使いブースの近くに行ってみよう。
            博士の直接の死因について分かるはずだ
            <div>
                <button
                    style={{
                        padding: "10px 20px",
                        display: "flex",
                        margin: "auto",
                        marginTop: "20px",
                        fontSize: "20px",
                        backgroundColor: "#000000",
                        color: "#fff",
                        border: "none",
                    }}
                    onClick={() => router.push("/quiz/1/mist")}>
                    ブースについた
                </button>
            </div>
        </Layout>
    )
}